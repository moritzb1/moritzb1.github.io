# QA Report

*Prepared by: QA Agent | Date: 2026-11-20 | Checked: `04-prototype/index.html` against `02-strategy.md` and `03-copywriting.md`*

Method: full source read; automated tag-balance, duplicate-id and anchor check (Python `html.parser`); search for placeholder text; responsive behaviour judged from the CSS (media queries at 900 px and 480 px, grid and flex rules). The prototype was not changed.

---

## 🔴 Must Fix

### 1. Benefit card 2 makes a comparative claim that the page itself contradicts
- **Where:** `#benefits`, second `<article class="card">` (line 361): *"Other display glasses keep you waiting for prescription lenses."*
- **Problem:** The comparison table on the same page (line 428) shows Even Realities G2 with prescription lenses available (+€169). The strategy (Section 3) also lists prescription at Even Realities. Only Meta Ray-Ban Display has prescription "later" in Germany. The sentence suggests *all* other display glasses make you wait. That is misleading, and as comparative advertising it is a legal risk in Germany (UWG §6). The sentence comes from the approved copy, so the error starts upstream, but the page shows it publicly.
- **Fix:** Name the competitor instead of generalising, e.g. *"Some display glasses, such as Meta Ray-Ban Display, offer prescription lenses in Germany only 'later'."* Also correct the same sentence in `03-copywriting.md` so it does not come back.

---

## 🟡 Should Fix

### 2. Comparison table: the prescription row implies Vistrel lenses are included and Even Realities' are not
- **Where:** `#why` table, row "Prescription lenses in Germany" (lines 424–429).
- **Problem:** Vistrel shows "From launch, fitted by your optician" while Even Realities shows "+€169". Readers will think Vistrel lenses cost nothing extra. The hero price note and the strategy say the optician prices the lenses separately, so Vistrel lenses also cost extra.
- **Fix:** Vistrel cell: *"From launch, fitted by your optician; lens price set by the optician"*. Or split the row into "Available" and "Lens price".

### 3. Comparison table: "German first" and "EU data hosting" rows show differences that have not been verified
- **Where:** `#why` table, last two rows (lines 436–447).
- **Problem:** Strategy Section 3 marks these as **[Gap]**: the report says nothing about Even Realities' German language quality or data hosting, and "a competitive audit is needed to confirm points 2 and 3 are real differences". A table where only Vistrel has a value suggests the competitor lacks these features. The note under the table ("'–' means not covered in our sources, not 'no'") is honest, but it is small grey text and is easy to miss.
- **Fix:** Remove these two rows from the comparison table until the audit is done, and keep them as Vistrel features in the benefits. Alternatively, write "Not verified" in the competitor cells instead of "–".

### 4. Comparison table: Meta Ray-Ban Display camera shown as "–"
- **Where:** `#why` table, row "Camera" (line 433).
- **Problem:** The strategy's counter-position against Meta Ray-Ban Display is "no camera" (Section 3 table), so the strategy treats it as a camera product. "–" weakens the page's main proof point. This is not false, but it is inconsistent with the strategy.
- **Fix:** If the research report confirms the camera, write "Yes". Otherwise keep "–", but say so in the table note.

### 5. Data section heading promises "for how long", but the content gives no retention information
- **Where:** `#data` article (lines 476–485), heading *"What we process, where and for how long"*. The CTA button on line 466 says the same.
- **Problem:** The list covers *what* and *where* but not *how long*. The strategy contains a usable planned statement ("no audio stored", risk table in Section 4) that is missing.
- **Fix:** Add a list item such as *"Planned: voice input is not stored after processing."*, marked as planned. Or shorten the heading to "What we process and where".

### 6. Anchor targets hide under the sticky header
- **Where:** CSS `.site-header { position: sticky; }` (line 73). No `scroll-margin-top` is set.
- **Problem:** `#optician` and `#data` are cards without top padding. When the primary CTA ("Find a Vistrel optician near you") is clicked, the top ~68 px of the card, including its `<h3>`, sits under the header. The sections `#benefits` and `#why` are not affected because of their 104 px padding.
- **Fix:** Add `[id] { scroll-margin-top: 88px; }`.

### 7. Mobile: header navigation disappears without a replacement
- **Where:** `@media (max-width: 900px) { .nav ul { display: none; } }` (line 202).
- **Problem:** Below 900 px, "Benefits / Why camera-free / Your data" cannot be reached from the header. Only the footer nav remains. The CTA button stays, so this is acceptable for a one-page demo, but tablets in portrait mode also lose the menu.
- **Fix:** Add a simple menu toggle, or show the links as a horizontally scrollable row under the header on small screens.

### 8. Accessibility: low-contrast small text and table markup
- **Where:** `.src`, `.stats-src` and `.table-note` use `#8a93a2` at 13 px on white or paper (lines 144, 153, 162). The contrast is about 3:1, below the WCAG AA value of 4.5:1. The table uses an empty `<th scope="col"></th>` (line 411) and plain `<td>` for row labels (`td:first-child`).
- **Problem:** The source references and the "planned / not covered" disclaimer are among the most important trust texts on the page, and they are the hardest to read.
- **Fix:** Darken them to about `#6b7383`. Change the row labels to `<th scope="row">` and give the empty header cell a visually hidden label such as "Feature".

---

## 🟢 Passed

- **HTML structure:** Valid HTML5 skeleton (`<!DOCTYPE html>`, `lang`, charset, viewport, title, meta description). All tags are closed and correctly nested, with no duplicate ids (checked automatically). It uses semantic `header / main / section / article / footer / nav`, sections have `aria-labelledby`, and the product SVG has `role="img"` and a `<title>`.
- **Anchors:** All 14 `href="#…"` links resolve (`#top`, `#benefits`, `#why`, `#optician`, `#data`). There are no empty links, no `href="#"`, and no lorem ipsum, TODO or placeholder text.
- **Copy fidelity:** The slogan, hero headline, subheadline, price note, all four benefit cards, both CTAs and the CTA micro-copy match `03-copywriting.md` word for word. The hero secondary button is shortened to "What we process", which is acceptable because the full wording appears in the CTA section. The `#why` headline and stats come from pitch-deck point 1.
- **Positioning:** Camera-free, optician-fitted, German-speaking and EU-hosted are all present and consistent with strategy Section 1. Nothing is claimed that the strategy rules out: no face recognition, no market-share or unit claims, and no privacy seal (which the strategy lists as a [Gap]).
- **Planned labelling:** The price says "Planned target price: €599", the table column says "Vistrel (planned)" with "€599 target price", benefit 2 says "planned", the visual is tagged "Concept render", and the footer disclaimer says it is a fictional brand, not for sale, with specs and prices subject to change.
- **Numbers:** 76 % / 82 % / 62 % (Bitkom 2026), €899 Meta Display, €699 + €169 Even Realities and €599 Vistrel all match the strategy and copy. No invented figures were found.
- **Product visual:** It shows a monocular HUD in one lens, a "no camera" mark on the frame and a listening indicator that is off. This is consistent with the product concept table.
- **CTA clarity:** One primary action ("Find a Vistrel optician near you") appears in the header, hero and CTA block in a consistent accent colour. The secondary action leads to the data section. The locator and data page are honestly marked as "Demo note: not part of this prototype". This is acceptable for a demo. A mock postcode field would make the CTA feel less like a dead end.
- **Responsive layout:** Grids collapse to one column at 900 px (hero, benefits, stats, details, CTA). Hero buttons go full width at 480 px. Headings use `clamp()`. The table has `min-width: 640px` inside an `overflow-x: auto` wrapper, so it scrolls inside its box and does not break the page. No fixed widths would cause horizontal page scroll.
- **`lang="en"`** matches the English copy. For a real German launch, the page would need a German version.

---

## Summary: Ready to Deliver?

**Not yet, but close.** The prototype is technically clean: valid HTML, all anchors work, no placeholders, a sensible mobile layout, and it follows the copy and strategy closely with planned values clearly labelled.

There is **1 🔴 issue**: the generalising claim "Other display glasses keep you waiting for prescription lenses", which the page's own comparison table contradicts and which is risky comparative advertising. It is a one-sentence fix and should also be corrected in the copy file.

The **7 🟡 issues** focus on the comparison table (implied lens pricing, unverified German-first and EU-hosting rows, Meta camera cell) and on small usability and accessibility fixes (sticky-header anchor offset, the missing mobile menu, contrast). Fixing #1 to #3 is recommended before showing the page externally. #4 to #8 can follow in the next iteration.
