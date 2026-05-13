# Hub-uniqueness scoreboard

**Purpose:** Track unique-content ratio for every area hub on every edit, so the 2026-05-13 Buckinghamshire regression never recurs.

**Trigger to recompute:** any edit to `src/data/locations/*.ts` touching a hub entry's `description`, `localFeatures` or `faqs`. Also re-baseline whenever the shared template at `src/app/areas/[slug]/page.tsx` adds or removes a section.

**Methodology** (mirrors Agent 3 forensic methodology, 13 May 2026):
1. Visible-text word count on the rendered live page
2. Identify hub-unique fragments (`description`, `localFeatures`, `faqs.question`, `faqs.answer`)
3. Compute unique-content ratio = unique-words / total-visible-words

**Target threshold:** every hub must hold above **20%** unique-content ratio. Below 15% triggers re-write within 7 days.

---

## Baseline — 2026-05-13 post-Phase-2 deploy

Pre-Phase-2 baseline (per forensic Agent 3): all 17 hubs at 7-8% unique content.

Post-Phase-2 expected baseline: all 17 hubs at ~25-30% unique content. Verification pending 5-day post-deploy live curl word-count.

| Hub | Pre-Phase-2 unique words | Post-Phase-2 description words | Post-Phase-2 localFeatures count | Post-Phase-2 faqs count | Status |
|---|---|---|---|---|---|
| Buckinghamshire | 67 | ~280 | 12 | 4 | ✅ Phase 2 shipped (b38a698) |
| Surrey | ~72 | ~280 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Hertfordshire | ~76 | ~270 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Kent | ~69 | ~290 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Essex | ~70 | ~275 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Berkshire | ~70 | ~285 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Oxfordshire | ~70 | ~290 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Hampshire | ~70 | ~295 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Sussex | ~75 | ~290 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| London | ~167 | ~310 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Cheshire | ~80 | ~295 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Manchester | ~80 | ~305 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Birmingham | ~70 | ~310 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Yorkshire | ~75 | ~300 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| South West | ~75 | ~310 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Scotland | ~75 | ~310 | 12 | 4 | ✅ Phase 2 shipped (976de1a) |
| Other cities | TBC | TBC | TBC | TBC | Pending hub-status confirmation |

---

## Verification window

**14-day post-state checkpoint:** 2026-05-27
- Live curl word-count per hub to confirm unique-ratio target hit
- Re-run all 17 hub keywords on Google + Bing
- Re-run priority subset on ChatGPT-with-Search + Gemini via Claude_in_Chrome
- Compare against today's BEFORE captures at `audit-data/serp-captures/20260513-full-visibility-synthesis.md`

**28-day post-state checkpoint:** 2026-06-10
- If Bucks Google position has not entered top 30: escalate to Phase 3 (revert audience-hub link cards from area template)
- Re-run cannibalisation-auditor to confirm expanded hubs do not now compete with leaf area pages
- Update this scoreboard with final post-Phase-2 measured unique-content ratios

---

## Future enforcement

The `area-slug-validator` and `cannibalisation-auditor` subagents will be updated (separate Reasoned-tier engineering ship) to refuse commits that drop any hub below the 20% threshold or push hub-vs-leaf shingle-overlap above 40%. Until that lands, manual verification at every hub-edit commit.
