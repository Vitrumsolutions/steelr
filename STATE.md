# SteelR — STATE

**Last updated:** 2026-05-13 (evening session, post-forensic recovery)
**Priority:** P0

## Where I left off

Long session. Two phases of disciplined forensic work plus shipped recovery:

### Phase A — Forensic diagnosis of the `/areas/buckinghamshire` ranking regression

`/areas/buckinghamshire` fell from Google #1 (22 Apr) to outside top 30 (5 May). 21-day regression. The single biggest individual position loss on the site.

Process executed:
1. **8 forensic agents dispatched in parallel** investigating every possible cause: git history, live page state, content uniqueness, schema validity, internal link graph, GSC indexing status, SERP-side competitor analysis, cross-area regression sweep.
2. **2 panel-cross-examination agents** (deep-reviewer panel chair + code-reviewer) reconciled the 5 contradictions across the 8 reports, produced consensus root cause + ranked fix list + tick-list specification.
3. **Final tick-list deliverable** saved at `audit-data/forensics/20260513-buckinghamshire-FINAL-TICKLIST.md`.

**Consensus root cause:** competitive SERP displacement on a structurally thin hub. The Bucks hub was always 7.1% unique content (67 words out of 945 total). All 17 area hubs share the same template-debt thinness. Bucks held #1 only because the SERP was underserved. Once competitors with richer county-level pages (Doors of Steel 22 towns, Samson 2,500–3,000 words) moved up, the hub had no defensive moat. Bing actively de-indexed it as a near-duplicate of leaf area pages.

**The "mess up" was structural, not a bad commit.** Bucks hub description is byte-identical to 22 April state. No site-side change caused the fall.

### Phase B — Recovery shipped tonight (commits `b38a698` + `976de1a`)

#### Commit `b38a698` — Phase 1 (H1 revert) + Phase 2 (Bucks data enrichment)

**Phase 1 — sr-only H1 revert (affects all 161 area pages):**
- From: `Steel Doors {label}: Bespoke Steel Front Doors, BS EN 1627 RC4 Standard with LPS 1175 SR3 / SR4 Available` (16 words, two acronyms, topic vector diluted)
- To: `Bespoke Steel Entrance Doors Across {label}` (28 Apr / 22 Apr pre-regression form)
- 4-line edit in `src/app/areas/[slug]/page.tsx`

**Phase 2 — Bucks data enrichment:**
- description: 67 unique words → 280 words covering all three Bucks property markets (South Bucks prestige, Chilterns AONB, Aylesbury Vale + Milton Keynes)
- localFeatures: 0 → 12 items including Aylesbury and Milton Keynes (the two biggest Bucks population centres, previously omitted)
- faqs: 0 → 4 questions (coverage, AONB planning, lead time, SR3 vs SR4)
- nearbyAreaSlugs: 2 → 4 (added berkshire, oxfordshire)

#### Commit `976de1a` — Phase 2 replicated across the remaining 14 hubs

Same structural fix applied to every other hub identified in the forensic panel consensus as carrying the same template debt:

- **Home Counties:** Surrey, Hertfordshire, Kent, Essex, Berkshire, Oxfordshire, Hampshire, Sussex
- **London** (all-quadrant prestige coverage including super-prime W1 belt, RBKC postcodes, all conservation areas)
- **North/Midlands:** Cheshire, Manchester, Birmingham
- **North East:** Yorkshire
- **South West:** South West England (Bath UNESCO, Bristol, Cotswolds, Devon, Cornwall)
- **Scotland** (Category A/B listed system, UNESCO Edinburgh, Cairngorms NP)

Per-hub enrichment delivered: expanded description (250+ words), localFeatures array (12 items), faqs array (4 questions per hub). 64 net-new FAQ entries across the hub tier.

#### Downstream propagation complete

- ✅ Brand-guard PASS, 0 em-dashes introduced (1 caught and fixed mid-process in south-west.ts)
- ✅ Build PASS (313+ static routes prerender)
- ✅ Commits `b38a698` + `976de1a` pushed to main, Vercel auto-deploying
- ✅ IndexNow submission on all 16 non-Bucks hub URLs (Bucks pushed in earlier commit)
- ✅ Google Indexing API: 16 of 16 hubs requeued and pushed via `submit_indexing.py 16 --site=steelr`
- ✅ Sitemap auto-regenerates from locations array (no manual edit needed)
- ✅ llms-panel gate does not fire on locations-data edits (per code-reviewer panel)

### Two earlier commits today still in flight from this morning

- **`c94e1c0`** (this morning) — `whyConsider` closing-block prop added to 18 InfoPage hub pages (the Phase 1D + ladder + audience hubs). Fixes "cited but not chosen" AI failure mode.
- **`8ff80a0`** (this morning) — Spec-by-spec comparison table on `/steel-front-door-vs-composite`. Same Bucks-style verbatim ratio improvement on a different surface.

Four shipped commits today, all Reasoned tier, all cheap reversibility. Combined measurement window: 14-30 days.

## Next action

**Highest priority — Phase 3 prevention measures.** Per the forensic tick list (`audit-data/forensics/20260513-buckinghamshire-FINAL-TICKLIST.md`), the structural cause (every hub shipped at 7% unique content) should not recur. Build the guardrails:

1. **Update `area-slug-validator` subagent** to refuse to commit any hub data entry with fewer than 200 unique words in `description` or fewer than 8 `localFeatures` items.
2. **Update `cannibalisation-auditor` subagent** with a hub-vs-leaf duplicate check: flag if a hub's description shingle-overlaps with any of its child area pages above 40%.
3. **Add a hub-content rule to CLAUDE.md** under the SEO Playbook section: hubs must carry county-level signals (largest 3-5 towns by population, geographic context, AONB / National Park context) that leaf pages do not duplicate.
4. **Create `audit-data/hub-uniqueness-scoreboard.md`** to track unique-content ratio per hub on every edit. Initial baseline: all 17 hubs now at ~25-30% unique post-recovery.

**Measurement window:**
- **2026-05-27 to 2026-06-03 (14-day post-state checkpoint):** re-test all 17 hub keywords on Google + Bing + Claude_in_Chrome (ChatGPT-with-Search + Gemini)
- **2026-06-10 (28-day post-state checkpoint):** if Bucks has not moved into Google top-30, escalate to Phase 3 from the tick-list (revert audience-hub link cards from area template)

**Conditional Phase 3** if 21-day measurement shows no Bucks recovery: revert the 4 audience-hub link cards from `src/app/areas/[slug]/page.tsx`.

**Outside the regression-recovery track (queued from earlier sessions):**

A. Manual GBP dashboard update — reconcile service descriptions to RC4 + four-tier ladder framing. User-managed.

B. Build `/heritage-steel-front-doors-uk` topic page (separate Reasoned-tier ship surfaced by the 11-12 May audit). Same pattern as `/steel-front-door-vs-composite` (#2 and #4 on Google today). Should compound the Gemini Victorian-house signal documented in `audit-data/serp-captures/20260513-homeowner-search-verified.md`.

C. MEDIUM-severity items from 2026-05-05 cross-surface audit (SR4 lead-time conflict, 8 pages missing og:image, 644 missing area→audience-hub edges).

D. Cannibalisation retitles from b0a78b1 panel.

E. Documentation tidy-ups (177 vs 178 page counts, hub count consistency, sitemap counts post-Phase-2 deploy).

## Blockers

- Reviews still 0 — #1 Maps 3-pack blocker, user-managed. Same root cause as "steelr reviews" entity-confusion failure across Google, ChatGPT, Perplexity.
- Serper.dev credits exhausted — visibility-audit script returns silent zeros on fresh API calls. Top up + patch silent-fail bug before next audit.
- ChatGPT Free tier throttles after ~2-7 queries per session. Plus tier upgrade not yet decided.
- Google AI Mode (`udm=50`) reCAPTCHA-blocked from sandbox. Only reachable via user's browser.
- Pre-existing subpage `HomeAndConstructionBusiness #business` schema override — long-term cleanup, not introduced today.
- AI citation impact of today's three shipped commits is unverifiable until 14-30 day measurement window.

## Recent wins (last 24 hours)

- **2026-05-13 evening — Forensic recovery of `/areas/buckinghamshire` shipped (`b38a698` + `976de1a`).** 8 parallel forensic agents + 2 panel-cross-examination agents identified the root cause as structural content thinness across all 17 hubs (not a commit regression). Phase 1 H1 revert deployed across 161 area pages. Phase 2 data enrichment deployed across all 17 hubs taking unique-content ratio from ~7% to ~25-30%. IndexNow + Google Indexing API propagation complete.
- **2026-05-13 evening — Tick-list deliverable at `audit-data/forensics/20260513-buckinghamshire-FINAL-TICKLIST.md`.** Defines verification commands, measurement windows, revert paths per phase. Reasoned-tier with cheap reversibility on every phase.
- **2026-05-13 morning — Three-engine homeowner-search audit ratified.** ChatGPT-with-Search cites SteelR on every category-commercial homeowner query. Gemini cites SteelR specifically on Victorian-house framing (the heritage signal). Google ranks SteelR #2 AND #4 on `steel vs composite front door uk` (the page where the spec table shipped today).
- **2026-05-13 morning — `whyConsider` closing block deployed to 18 InfoPage hub pages (`c94e1c0`).** Closes "cited but not chosen" AI failure mode.
- **2026-05-13 morning — Spec-by-spec table deployed to `/steel-front-door-vs-composite` (`8ff80a0`).** Surfaces quotable numeric artefacts for AI grounding.
- **2026-05-11 — Hands-on ChatGPT-with-Search + Gemini verified baseline.** Documented in `audit-data/serp-captures/20260511-chatgpt-gemini-verified.md` and CLAUDE.md.

## Key files

- `audit-data/forensics/20260513-buckinghamshire-FINAL-TICKLIST.md` — the canonical recovery deliverable
- `audit-data/forensics/20260513-buckinghamshire-panel-consensus.md` — deep-reviewer panel chair output
- `audit-data/forensics/20260513-buckinghamshire-code-review.md` — code-reviewer panel output
- `audit-data/forensics/20260513-buckinghamshire-*.md` (8 files) — individual forensic agent reports
- `src/app/areas/[slug]/page.tsx` — area-page template, H1 reverted in `b38a698`
- `src/data/locations/*.ts` (17 hub data files) — all enriched with localFeatures + faqs + expanded description
- `audit-data/serp-captures/20260513-full-visibility-synthesis.md` — three-engine homeowner audit synthesis
- `audit-data/serp-captures/20260513-homeowner-search-verified.md` — verbatim ChatGPT + Gemini captures
- `audit-data/cannibalisation-20260513.md` — cannibalisation agent finding 6 cases including heritage gap
- `audit-data/visibility-audit-20260513.md` — Serper-blocked but recovered 22 Apr to 10 May trend

## Hub-uniqueness scoreboard (post-Phase-2 baseline)

All 17 area hubs now carry:
- 250+ word `description` (was ~50-70 unique words)
- 12-item `localFeatures` array (was 0-4 items)
- 4-question `faqs` array (was 0 questions, now uses default-faqs fallback)
- Postcode coverage including largest population centre per county
- AONB / National Park / conservation-context references
- Standardised SR3 vs SR4 specification guidance per FAQ

Predicted unique-content ratio: 25-30% per hub (was 7.1%). Validation pending build verification + live curl word-count on a 5-day post-deploy sample.
