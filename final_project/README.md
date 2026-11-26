# PlacementRadar – final project (MMI5190E)

**Paste a YouTube link – PlacementRadar finds every brand in the video, estimates what the exposure is worth, checks whether the
advertising is labelled and rates how genuine the recommendation feels. A live camera names products on the device, and agentic
tools search YouTube for a brand or rank the creators that fit a product.**

| | |
|---|---|
| Project page (18 slides: why, for whom, what, how, how good, limits) | https://moritzb1.github.io/final_project/ |
| Slides as PDF | [PlacementRadar_slides.pdf](PlacementRadar_slides.pdf) |
| Live app – no login, no key | https://placementradar.itsmoribind.workers.dev |
| Source code, models, every test | https://github.com/moritzb1/placementradar |

## Why the app itself is not in this repository

This course page is hosted on GitHub Pages, which only serves static files. PlacementRadar needs a server part: a Cloudflare
Worker keeps the Gemini and YouTube keys secret, caches analyses, enforces daily limits and runs the brand agent. The app and its
code therefore live in their own repository (with its full commit history and automatic deployment to Cloudflare); this folder
holds the graphic overview of the project.

## Where to start reading the code

- `README.md` – a 3-minute tour with screenshots, architecture, formulas, hosting
- `MODELS.md` – every model: source, licence, size, role and measured performance
- `EVALUATION.md` – all test series, including what failed and what changed because of it
- `worker.js`, `agent.js`, `channel.js`, `creators.js`, `assess.js` – the server side
- `public/js/` – the app in the browser (on-device models in `detector.js`, `ocr.js`, `brandmodel.js`, `verify.js`)

Moritz Binder · M.Sc. Marketing Intelligence · Prof. Pin Luarn · Pforzheim University · winter term 2026/27
