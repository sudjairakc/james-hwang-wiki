# Canon Conflicts & Resolution Questions

Every internal contradiction found in the 6-domain sweep (2026-07-08), ranked by
impact. Each item lists the **conflicting sources** and **resolution options** — pick
one per item and I'll apply it across every file (both `en`/`th`).

Legend: 🔴 factual contradiction (needs a decision) · 🟡 naming/stylization drift ·
🟢 code/data-hygiene bug (fixable without a canon decision).

---

## 🔴 A. Factual contradictions — need your ruling

### A1. Grammy win count: **1 or 2?**
- `reception.ts:64` → "1 Grammy Win (Best Progressive R&B)"
- `awards.ts:85`, `home.ts` (×5), `discography-index.ts:201` → **2 wins** (Best Progressive R&B Album + Best R&B Performance)
- **Options:** (a) **2 wins** (fix reception.ts — majority) · (b) 1 win (fix all others).

### A2. SM Station singles — which songs?
- `collaborations.ts:117-136` → Station 2 (2018) "RIGHT ABOUT LOVE (feat. Taeyong)" · Station 3 (2019) "EVERLASTING (with Ten)"
- `discography/en/02-station-singles.md`, `discography-index.ts:221` → Station 2 "YOU AIN'T GOTTA" · Station 3 "CRUSH feat. Jungkook"
- Note: "RIGHT ABOUT LOVE" is actually a SOFTEST TOUCH track; "EVERLASTING" is a LIKE I DO (2016) track — the collaborations.ts pairing contradicts the rest of the site.
- **Options:** (a) **YOU AIN'T GOTTA / CRUSH** (fix collaborations.ts — majority) · (b) RIGHT ABOUT LOVE / EVERLASTING · (c) other.

### A3. Heritage line — the "150%" bug
- `biography.ts:24` → "Half-Thai (paternal) · Half-Chinese (maternal) · Half-Korean (maternal)" (3 halves; Chinese on maternal side)
- `biography.ts:38`, `personal-life.ts:70,94` → father Thai-Chinese, mother Korean
- **Options:** (a) **"Thai-Chinese (paternal) · Korean (maternal)"** (correct, matches everything) · (b) other phrasing you prefer.

### A4. Per-track streams exceed album totals
- SOFTEST TOUCH album 320M+, but title(95)+NO RESERVATION(48)+CRUSH(260) = 403M+ alone.
- PULSE album 540M+, but title(155)+SAY(210)+3 key(234) = 599M+.
- **Options:** (a) **raise album totals** (SOFTEST≈450M+, PULSE≈650M+) · (b) lower per-track figures · (c) relabel per-track as "peak/other-platform" so they're not additive.

### A5. Shang-Chi F3 antagonist name: **Lao Chuan or Xu Xuan?**
- `deadly-hands.md` (10×) → "Lao Chuan" · `trilogy-analysis.md` (4×, incl. header) → "Xu Xuan"
- **Options:** (a) Lao Chuan · (b) Xu Xuan · (c) other. *(You pick; I unify.)*

### A6. RESONANCE saga descriptors
- "**4-film saga**" (`resonance-landing.ts:20`) but only **3** feature films exist.
- "**2026–2030**" span but Film III releases **Dec 2031**.
- **Options:** (a) **"3-film saga + series · 2026–2031"** (fix to match entries) · (b) other.

### A7. RESONANCE series — live-action or animation?
- Same file `series-captain-eo-resonance.md`: live-action crew (DP Greig Fraser, "The Volume" LED wall, Best Actor categories) **vs** "flagship prestige **animation**", "Outstanding Animated Series" Emmy, James's "vocal role".
- **Options:** (a) **live-action** (delete animation lines) · (b) animation (rewrite crew/awards) · (c) hybrid (state explicitly).

### A8. RESONANCE "Antagonist" field
- `resonance-landing.ts:45` → Antagonist = "The Silent Orchestra" (actually the Film II **subtitle**, not a villain).
- **Options:** (a) **"Supreme Leader / Malos / High Cantor"** · (b) keep "The Silent Orchestra" as a faction name (then clarify it's an in-world entity, not just a film title).

### A9. Shang-Chi character ethnicity label
- `shangchi-landing.ts:41` → "Korean-American protagonist"; story lineage is Chinese (Wenwu, Ta Lo).
- **Options:** (a) **"Asian-American"** (neutral, matches story) · (b) "Chinese-American" (matches lineage) · (c) keep Korean-American (needs story justification).

### A10. Endorsement total: **$16–22M or $14–20M/yr?**
- `ecosystem.ts:40` subtitle "$16–22M" vs `ecosystem.ts:70` KPI "$14–20M". Sum of 5 deals = $11.5–21M.
- **Options:** (a) **$16–22M everywhere** (fix KPI) · (b) $14–20M everywhere · (c) recompute from deal values.

### A11. Post-DECADE vs Post-2026 company scale (DECADE = 2027, inside "post-2026")
- Revenue: `touring_ecosystem.md:172` "$35–60M" vs `company.md:65` "$95–160M".
- Employees: `touring_ecosystem.md:174` "45–90" vs `company.md:205` "90–130".
- **Options:** (a) **use company.md figures** ($95–160M / 90–130) as canonical, fix touring_ecosystem · (b) reconcile to a single agreed set.

### A12. Touring retained-capital math
- Profit pool $145M, but James $61M + JH retained $128M = $189M (> pool). Stated split (55–65% JH) caps JH at ~$94M, not $128M.
- **Options:** (a) **recompute** ($145M pool → JH ~$90M, James ~$55M) · (b) raise the profit pool so $61M+$128M fits (~$190M+) · (c) treat "$128M retained capital" as multi-year cumulative incl. endorsements (relabel).

### A13. GONUNMA public use
- `company.ts:97` "no longer used as a public artist name" **vs** "GONUNMA × Nike / × Saint Laurent" sold as public products.
- **Options:** (a) **"retired as a performing/artist name but retained as a producer credit and product/brand line"** (reconcile) · (b) other.

---

## 🟡 B. Naming / stylization drift — pick the canonical form

| # | Item | Variants found | Suggested canonical |
|---|---|---|---|
| B1 | Album | "ARE U STILL" (biography) vs "Are You Still" (timeline ×11) | **ARE U STILL** |
| B2 | Song | "HOW DOES IT FEEL" vs "HOW DOES IT FEEL?" | ? (pick one) |
| B3 | Song | "NO RESERVATION" vs "NO RESERVATIONS" | ? |
| B4 | Song | "BREATHE" vs "BREATHE!" | ? |
| B5 | Song | "YOU AIN'T GOTTA" vs "YOU AINT GOTTA" | **YOU AIN'T GOTTA** |
| B6 | Film | "RESONANCE II: Silent Orchestra" vs "…: The Silent Orchestra" | **The Silent Orchestra** |
| B7 | Series | "Limited Series" vs "Season 1" | ? (closed vs continuing) |
| B8 | Series title | "CAPTAIN EO: RESONANCE" vs "RESONANCE: Captain EO" | **Captain EO: RESONANCE** |
| B9 | Shang-Chi F3 | timeline "Shang-Chi 3" vs "…Legion Accursed" vs landing "Deadly Hands" | ? (one real title) |
| B10 | DECADE 4 new songs all named "NEW" | needs "NEW I–IV" or distinct titles | ? |

*B1/B5/B6/B8 have an obvious majority — I'll apply unless you object. B2–B4, B7, B9, B10 need your pick.*

---

## 🟡 C. Continuity / framing issues (softer)

- **C1 Solo-debut date:** LIKE I DO (2016) vs SOFTEST TOUCH (2022) both called "solo debut". Recommend fixing language: 2016 = "first release under GONUNMA", 2022 = "official solo relaunch".
- **C2 Public name 2023–25 gap:** what name did PULSE (2023) and ARE U STILL (2024) release under, if the GONUNMA→James switch was Feb 2025? Needs one stated transition date.
- **C3 Grammy date labels:** nomination 2024 vs win Feb 2025 vs entries loosely "2024" — tighten to eligibility-year vs ceremony-year.
- **C4 Ashley Liao thread:** Karina (2023) + Hanni (2024–25) overlap the "long-time signs" 2022→2026 Ashley Liao framing. Continuity pass if she's meant as an unbroken thread.
- **C5 Aug 2024 NCT "return":** personal-life calls it "first return"; timeline calls it "attendee only" (official return Dec 2024). Align wording.
- **C6 In-story clocks post-date releases:** each Shang-Chi film's "present day" runs 1.5–3 yrs ahead of its real release date. Acceptable (MCU sliding timeline) but worth a note.
- **C7 SM as "Strategic Partner"** after an adversarial settlement — soft characterization mismatch.
- **C8 "Shang-Chi 3" title** never updated to "Deadly Hands"/"Legion Accursed" in timeline. (Also: biography says "Legion Accursed", landing says "Deadly Hands" — pick one F3 title, see B9.)

---

## 🟢 D. Code / data-hygiene bugs (I can fix now, no ruling needed)

- **D1** `fandom.ts:57` (+ `:199` th) `chant` array has a double comma `},,` → sparse `undefined` element; `.map()` will crash/skip. **Fix: remove stray comma.**
- **D2** `controversies.ts` category `'social'` isn't in the `Category` type (uses `as Category` cast). **Fix: add 'social' to the union.**
- **D3** `fandom` taxonomy color differs: controversies `#9b7fc8` vs rivalries `#5a7c6a`. **Fix: unify.**
- **D4** `company.ts:55-62` revenue-share `pct` sums to **106%**, not 100. **Fix: rescale.**
- **D5** `rivalries.ts` fan-wars carry `severity` but the file has no `sevColors` map (controversies does). **Fix: add or drop.**
- **D6** `awards.md:168` still labels "SOUR | HONEY" an *album* + category "Song" vs `awards.ts:132` "Best R&B/Soul Song". **Fix: sync (album = CAN'T LEAVE ALONE).**
- **D7** `production-credits.ts:32` L.I.N.A. project `released: Dec 3, 2023` but its 5 tracks are dated Feb 2024–Jul 2025. **Fix: change project date to earliest track or relabel as "launch → rollout".**
- **D8** `series-captain-eo-resonance.md:301` leftover draft "Showrunner: Dave Filoni or Tony Gilroy" vs confirmed "Tony Gilroy". **Fix: delete the draft line.**
- **D9** `series-captain-eo-resonance.md:326` orphan title "Shang-Chi: Legion Accursed". **Fix: reconcile with B9.**
- **D10** Age headers in `timeline/en.md` use `year−1998` ignoring the June 22 birthday → ~half of pre-June events are +1 year off. **Fix: compute age from full birthdate** (bigger edit — optional).

---

## ✅ E. SM-dispute / 2024-return sweep — RESOLVED (2026-08-12)

Sweep scope: every claim about the SM conflict, the 2023 departure, and the NCT 127
return. All 16 items below were ruled on and applied across `en`/`th`.

Baseline correction the sweep established: **the return is December 2024, not 2025.**
2025 is the year he toured with the group and then went on hiatus (announced Jun 2025,
running to Jul 2026). Nothing in the repo ever dated the return to 2025 — the
misreading came from E14.

| # | Conflict | Ruling applied |
|---|---|---|
| E1 | `legal.ts` intro said legal action started "late 2022"; everything else said Feb 2023 | Dispute *began* late 2022, injunction *filed* Feb 2023 — intro rewritten to separate the two |
| E2 | "full IP ownership" vs master carve-outs in discography/company | Settlement confirmed **songwriting/compositions** as his; SM keeps SM-era masters. Fixed `legal.ts` intro, `home.ts` legal card, `biography.ts` |
| E3 | SM master window 2016–2023 vs 2016–2019 | Canonical window = **2016–2023** (contract span). `07-decade.md` now scopes its statement to "the three originals … inside the SM-era catalog (2016–2023)" |
| E4 | `cultural-impact.ts` scholar quote "without ever leaving the group" vs official departure | Reworded to "without severing his tie to the group" |
| E5 | `collaborations.ts` EN said SM Station singles folded into SOFTEST TOUCH (2022), TH said DECADE (2026) | **EN correct** (matches `02-station-singles.md`); TH fixed. DECADE carries re-recorded solo versions — a separate fact |
| E6 | Mediation-1 failure: late Mar vs `knowledge-base.md` "Mar 14" | **Late March**; knowledge-base corrected |
| E7 | SM countersuit missing from timeline + biography; final mediation missing from `legal.ts` | Countersuit added to both; final-mediation entry added to `legal.ts` timeline (both langs) |
| E8 | GONUNMA: SM claimed-then-withdrew (`legal.ts`) vs "SM had no legal claim" (`biography.ts`) | `biography.ts` rewritten to say SM claimed it and **withdrew the claim in the settlement** |
| E9 | "absence of a blacklist" (timeline) vs "music shows blocked it" (rivalries) | Both true at different levels — `rivalries.ts` now says no formal blacklist, but selective broadcast |
| E10 | `home.ts` never mentioned the return; `legal.ts` had no Dec 2024 entry | Return added to `home.ts` bio + a 2024 milestone; `legal.ts` gained a Dec 2024 timeline entry and its NCT-status field now reads "Departed 2023 · returned Dec 2024" |
| E11 | `company.ts` motive said "Grammy-winning" but Grammy was Feb 2025, after the Dec 2024 deal | Changed to **Grammy-nominated** (noms landed late 2024) |
| E12 | `tours-pulse.ts` "six weeks out of a public contract dispute" (Apr 27 → Jul 28 is ~13 wks) | Changed to **three months** |
| E13 | DECADE track count 29 (timeline) vs 30 (`07-decade.md`) | **30** (25 songs + 5 ARCHIVE interludes — verified against the track list); timeline corrected. Note `tours-decade.ts` "29 songs" is the *tour setlist*, unrelated — left alone |
| E14 | `biography.ts` era 07 titled "…and the Return" but bounded 2025–2026, with the Dec 2024 return buried after the 2025 paragraphs | Era re-bounded **2024–2026** and the return paragraph moved to the front of the section |
| E15 | `ecosystem.ts` said "SM Contract Constraints" / "Restricted while active in NCT 127" although the return deal has no exclusive contract | Relabelled as group-deal **category conflicts** during NCT 127 activity cycles; "legacy" dropped since the relationship is active |
| E16 | `J.H Company` vs `JH Company` | Unified on **JH Company** repo-wide (~20 occurrences, mostly discography label credits) |

Secondary fix folded into E2/E3: `company.ts` listed "Music Catalog (2022–present)" as
100% JH-owned including SOFTEST TOUCH, but `03-softest-touch.md` puts that album's
masters with SM. Renamed to **2023–present**, SOFTEST TOUCH moved into the SM-era
catalog entry.

**C5 and C7 resolved in a follow-up pass (2026-08-13):**
- **C5** — `personal-life.ts` now separates the two moments: August 2024 he attended
  the 8th anniversary fan meeting *as an attendee, not a performer*; the actual return
  as an external artist is December 2024. Matches `timeline` wording.
- **C7** — `company.ts` heading changed from "Strategic Partners" to
  "Partners & Counterparties", and SM's entry now states outright that it is not a
  partner in the ordinary sense — the relationship runs through the adversarial 2023
  settlement and the residual friction after it.

---

## How to answer

Reply with the item IDs + your choice, e.g. *"A1=a, A5=Xu Xuan, A7=live-action, B2=with ?, B10=NEW I–IV"*. For 🟢 items just say "fix all D" and I'll apply them. I'll also surface the highest-impact ones as an interactive multiple-choice prompt.
