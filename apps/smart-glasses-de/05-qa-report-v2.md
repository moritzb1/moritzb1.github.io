# QA Report – Round 2 (verification)

*Prepared by: QA Agent | Date: 2026-11-20 | Checked: fixed `04-prototype/index.html` against `05-qa-report.md` (round 1), `01-research.md`, `02-strategy.md` and `03-copywriting.md`*

Method: I read the full source again. I ran automated checks with Python `html.parser`: tag balance, duplicate ids, anchor targets and a placeholder search. I calculated WCAG contrast ratios for every small-text colour pair. I checked each comparison-table cell against research Section 2 and strategy Sections 1 and 3. The prototype was not changed.

---

## Status of Round-1 Findings

| # | Round-1 finding | Grade then | Status now | Evidence |
|---|---|---|---|---|
| 1 | Benefit card 2: "Other display glasses keep you waiting for prescription lenses" | 🔴 | ✅ **Fixed** | Line 365 now reads *"Your prescription lenses are fitted in-store by your own optician. Vistrel is planned with optician-fitted lenses from launch."* The comparative claim is gone. `03-copywriting.md` (line 33) was corrected the same way, so the error will not come back. |
| 2 | Prescription row implies Vistrel lenses are free | 🟡 | ✅ **Fixed** | Line 430: *"From launch, fitted by your optician; lens price set by the optician"*. This matches the hero price note and strategy Section 1. |
| 3 | "German first" and "EU data hosting" rows suggest that competitors lack these features | 🟡 | ✅ **Fixed** | The competitor cells now say "Not verified" (lines 443–450), and the table note explains this as "competitive audit is still pending". This matches the strategy's [Gap] note. |
| 4 | Meta Ray-Ban Display camera shown as "–" | 🟡 | ❌ **Not fixed, now made worse** | The cell is still "–" (line 437). The table note now says the dash includes *"the Meta Ray-Ban Display camera row"*, which tells readers we do not know whether Meta's glasses have a camera. This finding is upgraded to 🔴 below (finding R2-1). |
| 5 | Data heading promises "for how long" but gives no retention information | 🟡 | ✅ **Fixed** | Line 487: *"Planned: voice input is not stored after processing."* This matches the strategy risk table ("no audio stored"). |
| 6 | Anchor targets hidden under the sticky header | 🟡 | ✅ **Fixed** | `[id] { scroll-margin-top: 88px; }` (line 29), and 132 px at ≤900 px (line 206), where the header wraps to two rows of about 107 px. Both values clear the header. |
| 7 | Mobile header navigation disappears | 🟡 | ✅ **Fixed** | At ≤900 px the links move to a second header row that scrolls sideways (`order: 3; overflow-x: auto`, lines 204–205). |
| 8 | Low-contrast small text and table markup | 🟡 | ✅ **Fixed** | `.src`, `.stats-src` and `.table-note` now use `#6b7383`. That gives 4.77:1 on white (AA pass) and 4.38:1 on paper. Only `.src` sits on paper, inside white cards, so it is effectively 4.77:1. Row labels are now `<th scope="row">`, and the empty header cell has a visually hidden "Feature" label. |

**Result: 7 of 8 round-1 findings are fixed. #4 is still open and has become a must-fix.**

---

## 🔴 Must Fix

### R2-1. Comparison table: the "–" in Meta's camera cell undermines the page's main claim and contradicts the strategy
- **Where:** `#why` table, row "Camera", Meta Ray-Ban Display column (line 437), together with the table note (line 455): *"'–' means not covered in our sources, not 'no' (this includes the Meta Ray-Ban Display camera row)."*
- **What the source documents say:**
  - **Research, Section 2:** Ray-Ban Meta (Gen 2) / Oakley Meta is listed as type *"Camera + audio AI glasses, no display"*. Research Section 1 and Section 4 describe the German ban debate about **Meta glasses** as "disguised recording devices" (§8 TDDDG), where the Bundesnetzagentur accepts the **recording LED** as sufficient. Research Section 4 says: *"A camera device risks being classed as a 'disguised recording device'."* The research therefore clearly backs that Meta's glasses have a camera.
  - **Research, Meta Ray-Ban Display row:** this row lists only "Monocular display + EMG wristband". It does not mention the camera either way. This gap in the research is why the developer chose "–".
  - **Strategy, Section 1:** *"Unlike Meta's camera glasses, it records no one."* **Strategy, Section 3:** the counter-position against **Meta Ray-Ban Display** is *"… no camera, no Meta trust deficit"*. This only works as a difference if the Display model has a camera. The strategy treats it as a camera product.
  - **Copy, pitch point 4:** "Differentiation vs. Meta: … Vistrel … no camera." This also assumes Meta's product has a camera.
- **Problem:** The whole page argues "camera-free vs. Meta": the H1 "Smart glasses that record no one", the `#why` section and the Bitkom statistics. Yet in the one table cell where this difference should show, Meta gets "–", and the note now stresses that this does **not** mean "no". A reader could easily conclude that Meta's display glasses may also be camera-free, or that the team does not know its main competitor's product. That is inconsistent with the strategy and the research, and it is misleading in the direction that **hurts our own proof point**. The note makes it worse because it singles this cell out as unknown.
- **Fix (pick one, A preferred):**
  - **A.** Ask the Research Agent to add a cited source for the Meta Ray-Ban Display camera to `01-research.md` Section 2. The research currently confirms the camera explicitly only for the Gen 2 / Oakley models. Then set the cell to **"Yes (with recording LED)"** and remove the parenthesis from the table note. *QA note: the Display model is widely reported to have a built-in camera, but under this project's rules that must come from the research file, not from QA.*
  - **B.** Use only what the research already supports: add a **Ray-Ban Meta (Gen 2)** column, or replace the Meta Display column with it. Cells: €419 (no display), camera **"Yes"**, prescription "Optics from €469". This shows the camera contrast with a cited source right away, but the table then no longer compares display products only.
  - In either case, do **not** keep "–" plus a note that draws attention to it.

---

## 🟡 Should Fix

### R2-2. Orange eyebrow labels on light backgrounds fail contrast (new finding)
- **Where:** `.eyebrow { color: var(--accent); font-size: 12.5px; }` (lines 42–50). This affects "Core benefits" (on paper `#f7f5f0`) and "Why camera-free" (on white).
- **Problem:** `#e7a54a` gives **1.95:1** on paper and **2.13:1** on white for 12.5 px text. WCAG AA requires 4.5:1. The "Try it on" eyebrow on navy is fine.
- **Fix:** On light sections, use a darker accent for the eyebrow, e.g. `.section:not(.cta) .eyebrow { color: #9a5f12; }`, or the navy colour.

### R2-3. Benefit 2: tense mismatch between fact and plan
- **Where:** Line 365 (and `03-copywriting.md` line 33). The heading says *"from day one"*, and the first sentence states as fact *"Your prescription lenses are fitted in-store…"*. The next sentence says it is *"planned"*.
- **Problem:** This is not wrong, but the two sentences repeat each other and switch between present fact and plan. Every other planned item on the page is labelled consistently.
- **Fix:** Merge into one sentence, e.g. *"Vistrel is planned with prescription lenses fitted in-store by your own optician from launch."* Change it in the copy file as well.

### R2-4. Mobile: the two-row sticky header takes a lot of screen height
- **Where:** `@media (max-width: 900px)`. The header is now about 107 px tall and stays sticky.
- **Problem:** On a 375 × 667 phone that is about 16 % of the viewport, permanently. It does not block use, but it costs space for the content.
- **Fix:** Optional. Make the header non-sticky below 480 px, or hide the "Find an optician" header button there. The hero already has the full-width primary CTA.

---

## 🟢 Passed

- **HTML structure:** Tag balance is clean, with no unclosed or misnested elements and **no duplicate ids** (14 ids, checked automatically). The doctype, `lang`, charset, viewport, title and meta description are present. The page uses semantic `header / main / section / article / footer / nav`, each section has `aria-labelledby`, the product SVG has `role="img"` and a `<title>`, and the table now has proper header cells.
- **Anchors:** All 14 `href="#…"` links resolve (`#top`, `#benefits`, `#why`, `#optician`, `#data`). There are no `href="#"` links and no dead links. `#cta` exists but nothing links to it, which is harmless.
- **Placeholders:** There is no lorem ipsum, TODO, TBD or bracket placeholder text. The only `[id]` matches are the CSS selector. The demo notes for the locator and data page are honest and clearly labelled.
- **Copy fidelity:** The slogan, H1, subheadline, price note, all four benefit cards, both CTAs and the micro-copy match the updated `03-copywriting.md` word for word.
- **Comparison table, cells other than the Meta camera cell:**
  - Prices: €599 target, €899 Meta Display, €699 Even G2 (research Section 2, strategy Section 3). Correct.
  - Prescription: Meta "Only 'later'", Even "+€169", Vistrel optician-priced. Correct.
  - Even Realities camera "None". Correct: research describes it as "Display glasses, **no camera**".
  - "German first" and "EU data hosting" competitor cells say "Not verified". This is consistent with the strategy [Gap].
- **Numbers:** 76 %, 82 % and 62 % (Bitkom 2026) and all prices match research, strategy and copy. No invented figures were found.
- **Positioning and claims:** Nothing appears that the strategy rules out: no face recognition, no market-share claims, no privacy seal. Planned values are labelled throughout: the price note, the "Vistrel (planned)" column, "Concept render", the "Planned:" data item and the footer disclaimer.
- **Data section:** It now covers what, where and how long, at least for voice input, and is consistent with the strategy risk table.
- **Usability and responsive layout:** The anchor offset is correct at both breakpoints. The mobile nav can be reached. Grids collapse at 900 px, and buttons are full width at 480 px. The table scrolls inside its wrapper (`min-width: 640px`, `overflow-x: auto`), so the page does not scroll sideways.
- **Accessibility of trust texts:** The source, statistics-source and table notes now reach AA on white.

---

## Summary: Ready to Deliver?

**Not yet: one blocking issue remains.** The developer fixed 7 of the 8 round-1 findings cleanly, including the round-1 🔴 (the generalising prescription claim, also corrected in the copy file). The page is technically clean: valid structure, all anchors work, no placeholders, and an improved mobile layout and accessibility.

**1 🔴 is left: R2-1, the Meta camera cell in the comparison table.** The research documents a camera for Meta's glasses (Ray-Ban Meta Gen 2 / Oakley Meta, the recording-LED ban debate). The strategy positions Vistrel explicitly against "Meta's camera glasses" and names "no camera" as the difference from Meta Ray-Ban Display. The table still shows "–", and its note now stresses that this does not mean "no". This weakens the page's central proof point. Fix it with option A (research adds a source for the Display camera, then the cell says "Yes") or option B (show the Ray-Ban Meta Gen 2 with camera "Yes").

The **3 🟡 items** (eyebrow contrast, the benefit 2 wording, mobile header height) are small and can be done in the same pass or in the next iteration. After R2-1 is fixed, the prototype is ready to show.
