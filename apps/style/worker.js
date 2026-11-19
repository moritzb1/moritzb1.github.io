// Neural Style Studio - inference worker (Unit 3.3 / Extra Credit #3-9)
// Runs ONNX Runtime Web off the main thread, so the page never freezes.
importScripts("../shared/ort/ort.webgpu.min.js");
ort.env.wasm.wasmPaths = new URL("../shared/ort/", self.location.href).href;
// multi-threaded WASM works because the local server sends COOP/COEP headers
ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 2) : 1;

const STYLES = ["candy", "mosaic", "rain-princess", "udnie", "pointilism"];
let sessions = {}, backend = "wasm";

async function init(useGpu) {
  sessions = {};
  backend = "wasm";
  const wantGpu = useGpu && "gpu" in navigator;
  for (const id of STYLES) {
    let s = null;
    if (wantGpu) {
      try { s = await ort.InferenceSession.create(`models/${id}.onnx`, { executionProviders: ["webgpu"] }); backend = "webgpu"; }
      catch (e) { s = null; }
    }
    if (!s) s = await ort.InferenceSession.create(`models/${id}.onnx`, { executionProviders: ["wasm"] });
    sessions[id] = s;
  }
  if (wantGpu && backend !== "webgpu") backend = "wasm (GPU not available)";
  return backend;
}

async function run(style, w, h, data) {
  const s = sessions[style];
  const out = await s.run({ [s.inputNames[0]]: new ort.Tensor("float32", data, [1, 3, h, w]) });
  return out[s.outputNames[0]].data;
}

self.onmessage = async (e) => {
  const m = e.data;
  try {
    if (m.type === "init") {
      const b = await init(m.useGpu);
      self.postMessage({ id: m.id, ok: true, backend: b, threads: ort.env.wasm.numThreads, isolated: self.crossOriginIsolated });
    } else if (m.type === "run") {
      const t0 = performance.now();
      const y = await run(m.style, m.w, m.h, m.data);
      const buf = new Float32Array(y);           // copy into a transferable buffer
      self.postMessage({ id: m.id, ok: true, data: buf, ms: performance.now() - t0 }, [buf.buffer]);
    }
  } catch (err) {
    self.postMessage({ id: m.id, ok: false, error: String(err && err.message || err) });
  }
};
