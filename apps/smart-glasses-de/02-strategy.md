# Strategy Document: Vistrel Smart Glasses (Germany)

*Prepared by: Strategy Agent | Date: 2026-11-20 | Input: 01-research.md (Research Agent)*

> **Brand note:** "Vistrel" is a fictional brand name created for this exercise. A trademark search (DPMA/EUIPO) has not been done and is required before real use.
>
> **Labelling convention:** **[Report]** marks facts taken from the research report. **[Planned]** marks our own design or business decisions. **[Gap]** marks places where the report does not give enough information.

---

## 1. Product Positioning

> **For glasses wearers and professionals in Germany who want notifications, translation and navigation without pulling out their phone, Vistrel is the camera-free display glasses brand fitted by your optician: legally uncontested, German-speaking, with EU-hosted data. Unlike Meta's camera glasses, it records no one.**

Why this positioning (all points from the report):
- Privacy is the main barrier in Germany. **[Report]** 76 % do not want to be recorded, 82 % want clear recording indicators, and 62 % would not let a wearer into their home (Bitkom 2026).
- Camera products carry legal risk. **[Report]** There is the §8 TDDDG ban debate, criminal complaints by HateAid against retailers (Apollo, MediaMarkt, Mister Spex), and the EDPB Statement 01/2026.
- With no camera, we are not part of any of these debates. That is our main proof point at the point of sale and for retailers.
- Displays are what customers want right now. **[Report]** Meta Ray-Ban Display launched in DE on 13 Oct 2026 at €899. Google/Samsung glasses are not confirmed for DE. This leaves a window in the €400–700 "everyday display glasses" segment.

**Product concept [Planned]:**

| Attribute | Decision | Rationale |
|---|---|---|
| Camera | **None** (hardware-level, no module at all) | Answers the privacy and legal barrier directly |
| Display | Monocular, discreet heads-up display | Use cases from segment 2: notifications, teleprompter, translation, navigation |
| Microphone | Yes, with a **visible "listening" indicator** and push-to-talk as default | The EDPB flags background-audio risks **[Report]**, so we treat audio the way others treat the camera |
| AI | German-language assistant; on-device processing where possible; any cloud processing hosted in the EU | Localization and the privacy-by-design opportunity **[Report]** |
| Prescription | Optician-fitted lenses from day one | Meta Display: prescription only "later" in DE **[Report]**; segment 2 needs prescription lenses |
| Target price | **€599** frame + display; prescription lenses priced by the optician | Below Even Realities G2 (€699) and Meta Display (€899), inside the €400–700 window **[Report]** |
| Target weight | Target close to a normal acetate frame. **[Gap]** The report has no competitor weight data, so a benchmark teardown is needed before we fix a number | Weight and looks are a purchase criterion for segment 2 **[Report]** |
| Compliance | CE under RED including EN 18031-1/-2/-3, GPSR, WEEE/battery, AI Act transparency | Mandatory for EU sale **[Report]**; details need legal verification |

---

## 2. Target Segment

The report lists five profiles. We pick **one primary and one secondary segment**.

### Primary: Segment 2 – Glasses wearers and professionals who need a discreet display (30–60)

Why this segment:
1. **Their needs match our product.** **[Report]** Their stated criteria are prescription lenses, weight and look, and *no camera* for social acceptance. A camera-free display product meets all of these.
2. **There is a channel that already reaches them.** Glasses wearers visit opticians anyway. **[Report]** Germany has a large optician infrastructure (Fielmann alone has about 615 German stores per one source, about 1,300 stores in total per another). Opticians "want a credible product with prescription integration."
3. **It avoids the market leader's strength.** Meta's strengths are brand, fashion and camera capture. Segment 2 explicitly does not want a camera, so Meta's main advantage counts for little here.
4. **Weak point of the main display rival.** **[Report]** Meta Ray-Ban Display offers prescription lenses in DE only "later".

**Risk:** **[Report]** Even Realities already holds this positioning (camera-free, optician partners, €699). Section 3 covers how we differ.

**[Gap]** Segment size: the report has no German segmentation data. The share of German adults who wear prescription glasses, and the share of them interested in display glasses, are unknown. Further research is recommended before setting sales targets, for example from optician industry association data or our own survey.

### Secondary: Segment 4 – Enterprise and industry (logistics, maintenance, field service, healthcare)

Why as a second step, not at launch:
- **Fit:** **[Report]** The criteria are GDPR/BetrVG compliance, robustness and device management. A camera-free device with EU hosting and German compliance documents fits "compliance" better than camera glasses.
- **Proof the segment exists:** **[Report]** Fiege logistics (Worms) uses data glasses with works council support.
- **Why later:** **[Report]** §87(1) No. 6 BetrVG co-determination lengthens sales cycles. Removing the camera does **not** remove co-determination, because any device that can monitor behaviour or performance falls under it. We also need robustness and device management, which the consumer product will not have at launch.
- **[Gap]** The report gives no enterprise prices, volumes or named competitors in B2B data glasses, so the B2B business case cannot be judged yet. Further research is recommended. We would start with 2–3 paid pilots, not a full B2B rollout.

### Segments we do not target (yet)
- **Segment 1 (creators, 16–39):** they want a camera. That conflicts with our core promise, and Meta dominates there.
- **Segment 3 (sports):** a niche, already served by Oakley Meta Vanguard and its Garmin integration; also camera-led.
- **Segment 5 (accessibility):** live captions fit our display well, but **[Gap]** the report has no German market data. We will run a captioning feature test with segment 2 users and research this segment separately.

---

## 3. Differentiation Strategy

### Comparison with the main competitors (from report Section 2)

| Competitor | Their position **[Report]** | Our counter-position **[Planned]** |
|---|---|---|
| **Ray-Ban Meta Gen 2 / Oakley Meta** (from €419) | Camera + audio, no display, fashion brand, category leader | Different category: we offer a display without a camera. We do not compete on fashion or capture. Message: "Sees nothing. Shows you everything you need." |
| **Meta Ray-Ban Display** (€899) | First mass-market display glasses, Telekom financing, prescription in DE only "later" | €300 cheaper, prescription available at launch, no camera, no Meta trust deficit |
| **Even Realities G2** (€699, prescription +€169) | Camera-free, looks like normal glasses, optician partners | **Closest rival.** We differ on (1) price: €599 target, €100 lower; (2) German first: German AI, German support, DSGVO documents; (3) EU data hosting as a promise in writing; (4) a B2B compliance package. **[Gap]** The report says nothing about Even Realities' German-language quality, data hosting or number of German optician partners. A competitive audit is needed to confirm points 2 and 3 are real differences |
| **Xreal One Pro / Aura** (€649 / €1,400) | Tethered wearable monitor | Different job: we are standalone everyday glasses, not a cable-tethered screen. No head-to-head positioning |
| **Brilliant Labs Halo** (USD 299) | Open-source, privacy-oriented, cheap | Repeated delays and no German retail **[Report]**. We win on availability, optician fitting and local support |
| **Google/Samsung Android XR** (no DE date) | Gemini; works with Android and iPhone | Not in DE yet. We must use this window before they arrive. **[Gap]** Their price and timing are unknown, so we will watch them as the main future threat |

### Four pillars of differentiation

1. **"Kamerafrei" as a verifiable product promise.**
   - No camera module in the hardware.
   - A clear "no camera" mark on the frame, so bystanders can see it. This answers the 62 % who would not let a wearer into their home.
   - Third-party confirmation, e.g. a data-protection seal or test report. **[Gap]** Which certification is credible in Germany is not covered by the report; we need to research this.
2. **Legally uncontested for retailers.**
   - Retailers face criminal complaints over camera glasses **[Report]**. We give them a product without that risk, plus a written legal assessment for their staff.
   - This is a sales argument aimed at retailers, not at consumers.
3. **German first.**
   - German-language AI, German support and DSGVO documentation.
   - For B2B: a ready-made works-agreement template **[Report: listed as an opportunity]**.
4. **Fitted by your optician.**
   - Prescription lenses available at launch, fitting and after-sales at the optician.
   - **[Planned]** We will offer lens supply through certified partner labs so the warranty stays clear, learning from Meta's certified-seller rule **[Report]**.

### What we will *not* claim
- No face recognition or person identification. **[Report]** This is high-risk territory under AI Act Art. 5.
- No claims about market share or unit sales until we have our own data.

---

## 4. Go-to-Market Plan

### Phase 0 – Preparation (months 0–6) **[Planned]**
- **Compliance first.** Complete RED including EN 18031, GPSR and WEEE/battery requirements; check AI Act transparency with legal counsel **[Report: details need legal verification]**.
- **Closing the research gaps:**
  - Size segment 2 (survey of about 1,000 glasses wearers).
  - Competitive audit of Even Realities in DE.
  - Benchmark competitor weights.
  - Find out which privacy seal is credible.
- **Optician pilot partners.** Sign 1 chain pilot and 15–25 independent opticians in 2–3 cities. Independents first: Fielmann calls smart glasses a niche and stocks them in only about 200 of about 1,300 stores **[Report]**, so a big chain will be slow to commit.
- **Training kit for opticians.** Fitting guide, demo unit, a one-page legal Q&A ("Why there is no ban risk"), and margin terms. **[Gap]** The report has no data on optician margin expectations; we must ask them in pilot talks.

### Phase 1 – Soft launch via opticians (months 6–12)
- **Channel:** pilot opticians only. Every sale includes an eye test and fitting, which keeps the "optician-fitted" promise.
- **Online content:**
  - German-language demo videos for the segment 2 use cases (navigation, teleprompter for presentations, translation, notifications).
  - Content shows the wearer's view on the display, never a filmed bystander.
- **PR angle:** the privacy debate is already running in German media (CORRECTIV, t3n, heise in the report). We position Vistrel as "the answer to the ban debate", with Bitkom's 82 % figure as context.
- **Website:** a locator for opticians carrying Vistrel, plus a data-protection page: what is processed, where, for how long.
- **KPIs [Planned]:**
  - Units per pilot store per month.
  - Share of sales with prescription lenses.
  - Return rate.
  - NPS.
  - Number of opticians asking to join.

### Phase 2 – National rollout (months 12–24)
- **Optician channel:** go from pilot to national coverage. Approach Apollo and Fielmann with the pilot sales data. **[Report]** They want credible, legally safe products.
- **Electronics and carrier retail:** MediaMarkt and Telekom already sell smart glasses with financing (€22.10/month at Telekom) **[Report]**. We add these channels for a non-prescription version, with Vistrel's own monthly financing offer **[Planned]**. Rule: prescription sales stay with opticians.
- **Trade fairs:**
  - **[Planned]** Optician trade shows (e.g. opti, Munich) to recruit opticians.
  - IFA (Berlin) for consumer visibility.
  - **[Gap]** The report does not cover trade fairs; dates and costs need checking.
- **Accessibility test:** live-caption feature with hearing-impaired users. Go/no-go for segment 5 after this test.

### Phase 3 – B2B pilots (from month 18)
- **Offer:** 2–3 paid pilots in logistics or field service, inspired by the Fiege example **[Report]**.
- **Package:**
  - Camera-free device.
  - Works-agreement template.
  - DSGVO documentation and data-processing agreement.
  - Device management. **[Planned]** This must be built, as it is not part of the consumer product.
- **Gate:** scale B2B only if the pilots show the works-council process can be done in an acceptable time. **[Gap]** The report gives no data on typical cycle length.

### Key risks and what we do about them

| Risk | Source | Response |
|---|---|---|
| Even Realities takes the same position first | **[Report]** | Price below €699, German-first, focus on optician coverage; audit their DE presence early |
| Google/Samsung launch in DE | **[Report]** not confirmed yet | Launch fast; build optician loyalty before they arrive |
| Opticians see smart glasses as a niche | **[Report]** Fielmann | Start with independents; give chains proof from pilot data |
| Microphone privacy concerns (EDPB) | **[Report]** | Push-to-talk by default, a visible listening indicator, no audio stored |
| Market size unclear | **[Report]** Germany: only third-party estimate (USD 68 m in 2024 → 299 m in 2029) | Keep the first production batch small; fund growth from pilot results |
