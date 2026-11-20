# QA Report – Round 3 (final verification)

*Prepared by: QA Agent | Date: 2026-11-20 | Checked: `04-prototype/index.html` against `05-qa-report-v2.md` (round 2), `01-research.md`, `02-strategy.md` and `03-copywriting.md`*

Method: I read the full source again (529 lines). I ran automated checks with Python `html.parser`: tag balance, duplicate ids, anchor targets and a placeholder search. I recalculated WCAG contrast ratios for every small-text colour pair. I checked every comparison-table cell against research Section 2 and strategy Sections 1 and 3, and compared all page copy with `03-copywriting.md`. The mobile layout was checked from the CSS media queries; the browser pane cannot render local files, so I did no live render. The prototype was not changed.

---

## Status of Round-2 Findings

| # | Round-2 finding | Grade then | Status now | Evidence |
|---|---|---|---|---|
| R2-1 | Meta camera cell "–" undermines the main claim | 🔴 | ✅ **Fixed (option B)** | A new **Ray-Ban Meta (Gen 2)** column was added (line 418). Camera cell: *"Yes, with recording LED"* (line 441). This is backed by research Section 2 ("Camera + audio AI glasses") and Section 1 (the Bundesnetzagentur treats the recording LED as sufficient). The table note (line 462) now explains the Gen 2 column and the ban debate, and it no longer singles out the Meta Display cell. The camera contrast with Meta is now visible and sourced. A small follow-up remains: see 🟡 R3-1. |
| R2-2 | Orange eyebrow labels fail contrast | 🟡 | ✅ **Fixed** | `.eyebrow { color: #9a5f12; }` (line 48) gives **4.79:1** on paper and **5.22:1** on white (AA pass). `.cta .eyebrow` keeps the accent on navy at **8.22:1** (line 51). |
| R2-3 | Benefit 2 tense mismatch | 🟡 | ✅ **Fixed** | Line 366 is now one sentence: *"Vistrel is planned with prescription lenses fitted in-store by your own optician from launch."* `03-copywriting.md` line 33 was changed the same way. |
| R2-4 | Two-row sticky header takes a lot of mobile height | 🟡 (optional) | ⏸ **Open, accepted** | Unchanged: at ≤900 px the header is still sticky and about 105 px tall. It does not block anything, and round 2 marked it optional. It stays on the list below as low priority. |

**Result: all round-2 blockers are resolved. 3 of 4 findings are fixed; the open one was optional.**

---

## 🔴 Must Fix

**None.**

---

## 🟡 Should Fix

### R3-1. Meta Ray-Ban Display camera cell still says "Not in our research"
- **Where:** `#why` table, row "Camera", Meta Ray-Ban Display column (line 442).
- **Problem:** No longer blocking, because the Gen 2 column now carries the sourced camera contrast and the cell is honest. However, the strategy (Section 3: *"no camera, no Meta trust deficit"*) and copy pitch point 4 (*"… with prescription at launch and no camera"*) still use "no camera" as a difference from the **Display** model, and the research does not source a Display camera. The pitch deck therefore makes a claim the research does not cover yet.
- **Fix:** Ask the Research Agent to add a cited source for the Meta Ray-Ban Display camera to `01-research.md` Section 2, then set the cell to "Yes". Until then, keep the cell as it is, and do not use the "no camera" difference vs. the Display model in the pitch.

### R3-2. Gen 2 prescription cell can be misread as a lens price
- **Where:** Row "Prescription lenses in Germany", Ray-Ban Meta (Gen 2) column: *"Optics from €469"* (line 434).
- **Problem:** Research gives "Optics (prescription) from €469", which is the price of the prescription version. Next to Even Realities' *"+€169"* (a surcharge), a reader may think the lenses alone cost €469.
- **Fix:** *"Prescription version from €469"*.

### R3-3. Comparison table: wider on mobile, no scroll cue (minor)
- **Where:** `table { min-width: 780px; }` (line 158), raised from 640 px when the fifth column was added.
- **Problem:** The page itself does not scroll sideways (the wrapper has `overflow-x: auto`), but on a 375 px phone only about the first two columns are visible and nothing shows that more columns follow.
- **Fix:** Optional. Add a short "Swipe to compare" hint below 900 px, or make the row-label column sticky (`position: sticky; left: 0`).

### R2-4 (carried over). Sticky two-row header on phones
- Optional, unchanged from round 2: make the header non-sticky below 480 px, or hide the header button there.

---

## 🟢 Passed

- **HTML validity:** Tag balance is clean, with no unclosed or misnested elements and **no duplicate ids** (14 ids). Doctype, `lang`, charset, viewport, title and meta description are present. The page uses semantic landmarks, every section has `aria-labelledby`, the SVG has `role="img"` and `<title>`, and the table uses `scope="col"` / `scope="row"` headers with a visually hidden "Feature" label.
- **Anchors:** All `href="#…"` links (`#top`, `#benefits`, `#why`, `#optician`, `#data`) resolve. There are no `href="#"` links and no external dead links. `scroll-margin-top` (88 px desktop, 132 px at ≤900 px) clears the sticky header.
- **Placeholders:** No lorem ipsum, TODO, TBD, FIXME or template brackets. The only bracket matches are the CSS `[id]` selectors. The two "Demo note" lines are honest and clearly labelled.
- **Comparison table, every cell checked:**
  - *Frame + display:* €599 target (strategy §1), from €419 no display (research §2), €899 (research §1/§2), €699 (research §2). Correct.
  - *Prescription:* Vistrel optician-priced (strategy §1), Gen 2 €469 (research §2, wording see R3-2), Display only "later" (research §2), Even +€169 (research §2). Correct.
  - *Camera:* Vistrel none (strategy §1), Gen 2 yes with recording LED (research §1/§2/§4), Display "Not in our research" (honest, see R3-1), Even none (research §2: "no camera"). Correct.
  - *German first / EU hosting:* Vistrel values from strategy §3 pillar 3 and §3 Even row; competitors "Not verified", consistent with the strategy [Gap] and the pending competitive audit. Correct.
  - The table note explains all non-answers and labels Vistrel values as planned.
- **Numbers:** 76 %, 82 %, 62 % (Bitkom 2026) and all prices match research, strategy and copy. No invented figures.
- **Consistency with copy:** Slogan, H1, subheadline, price note, all four benefit cards, the primary and secondary CTA texts and the micro-copy match `03-copywriting.md` word for word. The hero's short secondary button "What we process" is a shortened version of the copy's secondary CTA and links to the same `#data` section; acceptable.
- **Claims and labelling:** No face recognition, market-share claims or privacy seal. Planned items are labelled throughout: price note, "Vistrel (planned)" column, "Concept render", "Planned:" data item, footer disclaimer (fictional brand, not for sale).
- **Contrast (WCAG AA):** Eyebrows 4.79–5.22:1, muted text 5.41–5.89:1, source notes 4.77:1 on white, disclaimer 6.36:1, header links 8.35:1, primary button 8.72:1. All small-text pairs pass.
- **Mobile layout:** Grids collapse to one column at 900 px. Hero buttons are full width at 480 px. The header navigation moves to a scrollable second row. The table scrolls inside its own wrapper, so the page has no horizontal scroll.

---

## Summary: Ready to Deliver?

**Yes, ready to deliver.** There are **no 🔴 findings left.** The round-2 blocker (R2-1) was fixed by adding a sourced Ray-Ban Meta (Gen 2) column, so the page's central "camera-free vs. Meta" claim is now visible and backed by the research. The eyebrow contrast and the benefit 2 wording were fixed as well, including in the copy file. The page is technically clean: valid structure, working anchors, no placeholders, AA contrast and a responsive layout.

The remaining **🟡 items are small polish** and do not block delivery: source the Meta Display camera or drop that difference from the pitch (R3-1), reword the Gen 2 prescription cell (R3-2), add a swipe hint for the table on phones (R3-3), and optionally shrink the sticky mobile header (R2-4).
