# Buckinghamshire ranking-regression — FINAL TICK LIST

**Date:** 2026-05-13
**Scope:** `/areas/buckinghamshire` (and structurally — all 17 SteelR area hubs)
**Process followed:** Forensic swarm (8 parallel agents) → Panel cross-examination (deep-reviewer + code-reviewer) → Tick-list synthesis (this document)

## Root cause — final consensus

The Bucks hub fell from Google #1 to outside top 30 between 22 Apr and 5 May 2026 because of **competitive SERP displacement on a structurally thin hub**. The hub itself was always thin — 7.1% unique content out of 945 words — and held #1 only because the SERP was underserved. Once competitors with richer county-level pages (Doors of Steel 22 towns, Samson 2,500–3,000 words, LUX Bespoke) moved up, the hub had no defensive moat. Bing went further and de-indexed it as a near-duplicate of the leaf pages.

**The "definite mess up" is structural, not a bad commit.** All 17 hubs share the same 7-8% unique-content density. None render `localFeatures`. None carry custom FAQs. The 281-word default FAQ block is cloned identically across every hub with only `${location.name}` substituted. Bucks omits Aylesbury and Milton Keynes — the two biggest Bucks population centres.

## What is NOT the cause (ruled out by named agents)

| Hypothesis | Status | Ruled out by |
|---|---|---|
| 3 May H1 rewrite | NOT proximate cause (live, but post-dates fall) | Agents 6 + 8 (timing) |
| 2 May title/meta rewrite | NOT proximate cause (post-dates fall) | Agent 8 |
| Duplicate `HomeAndConstructionBusiness` schema | NOT a defect — documented merge pattern with shared `@id` | Agent 4 + code-reviewer |
| Schema corruption | None found | Agent 4 |
| Canonical / robots / noindex | All correct | Agents 4 + 5 + 6 |
| Sitemap omission | Bucks present at priority 0.8, lastmod 11 May | Agents 4 + 6 |
| Google deindexation | Google still indexes | Agent 6 |
| Template-wide regression | Kensington/Esher/Chelsea GAINED on same template | Agent 8 |
| Doubled-content regex regression | Bucks not in the 12 affected pages | Agent 1 |
| Brand-guard / build failure | Both PASS across implicated commits | Code-reviewer |

## The fix sequence — three phases with verification gates

### PHASE 1 — Revert area-page H1 to clean location-intent wording

**What changes**

File: `src/app/areas/[slug]/page.tsx` (lines 401-404 per code-reviewer)

**Current H1 (live, shipped 3 May):**
> `Steel Doors {location.name}: Bespoke Steel Front Doors, BS EN 1627 RC4 Standard with LPS 1175 SR3 / SR4 Available`

**Revert to (28 Apr / 22 Apr form):**
> `Bespoke Steel Entrance Doors Across {location.name}`

**Why:** the 16-word cert-acronym H1 dilutes the location-intent topic vector. The leaner H1 keyword-matches "Steel Doors Buckinghamshire" cleaner. Same revert helps all 161 area pages, not just Bucks.

**Tick list — Phase 1**

- [ ] Edit `src/app/areas/[slug]/page.tsx` lines 401-404 to revert H1 wording
- [ ] Run `node scripts/brand-guard.mjs` → expect PASS, 0 blocking violations
- [ ] Run `npm run build` → expect 38/38 static routes (or whatever current count is — Phase 1D + ladder + audience hubs + new pages)
- [ ] `curl -s https://steelr.co.uk/areas/buckinghamshire | grep -o 'Bespoke Steel Entrance Doors Across[^<]*' ` returns the new H1
- [ ] `curl -s https://steelr.co.uk/areas/surrey | grep -o 'Bespoke Steel Entrance Doors Across[^<]*'` returns the new H1 (template-wide check)
- [ ] Git commit with descriptive message, push to main, Vercel auto-deploy
- [ ] IndexNow ping on Bucks + Surrey + Kent + Herts (4 hub URLs) via `node scripts/bing/indexnow-submit.mjs <urls>`
- [ ] Google Indexing API push on the same 4 hubs via `python vitrums/audit-data/submit_indexing.py 4 --site=steelr`

**Reversibility test (Phase 1):** single `git revert <sha>` reverts the entire change cleanly. No downstream files touched. No schema or canonical impact.

**Metric to confirm rank recovery (Phase 1):** 14-day re-test on Serper / Claude_in_Chrome → Google UK organic position for "steel doors Buckinghamshire". Expected: enters top 30 from off-30 baseline. If no movement after 21 days, Phase 1 alone was insufficient — proceed to Phase 2.

---

### PHASE 2 — Add `localFeatures` + 200-300w unique prose + per-hub FAQs to all 17 hubs

**What changes**

File: `src/data/locations/buckinghamshire.ts` (and the 16 other hub files)

For Bucks specifically, the hub data entry needs:

1. **Add `localFeatures` array** (already supported in `types.ts` per code-reviewer; template at `page.tsx:458` renders it conditionally — no template change needed). Populate with 8-12 specific Bucks signals:
   - Buckinghamshire postcodes (HP, MK, SL, HP6-HP27)
   - Specific named landmarks (Cliveden, Stowe, Waddesdon Manor)
   - Property types (Chiltern flint cottages, Aylesbury Vale estates, Beaconsfield New Town moderns)
   - Conservation context (Chilterns AONB, Aylesbury Garden Town)

2. **Add Aylesbury + Milton Keynes** to the visible town list (currently omitted — these are the two biggest Bucks population centres)

3. **Expand `description` from current ~67 unique words to 250+ words** of Bucks-specific prose. Cover: county geography (Chilterns / Vale of Aylesbury / Aylesbury Garden Town), prestige postcodes (HP9 Beaconsfield, SL9 Gerrards Cross), security context (proximity to London commuter belt, country house portfolio), architectural mix (Tudor revival around Stowe, Victorian/Edwardian Beaconsfield New Town, contemporary Milton Keynes).

4. **Add custom `faqs` array** (3-4 Bucks-specific Q&A) replacing the cloned default FAQs:
   - "Do you fit steel front doors across the Chilterns AONB conservation areas?"
   - "Can a SteelR door pass Aylesbury Vale or Buckinghamshire Council planning?"
   - "Service area: do you cover Milton Keynes new build estates as well as the Chilterns?"
   - "Lead time from survey to install in HP9 / SL9 postcodes?"

5. **Replicate the pattern across all 17 hubs** with hub-specific content. This is the structural fix.

**Tick list — Phase 2**

- [ ] Edit `src/data/locations/buckinghamshire.ts`: add `localFeatures` (8+ items), expand `description` to 250+ words, add custom `faqs` (3-4 items), include Aylesbury + Milton Keynes in any visible town listing
- [ ] Repeat for the 16 other hub files in `src/data/locations/*.ts`
- [ ] Run `node scripts/brand-guard.mjs` → expect PASS, 0 blocking violations (especially watch for £-numbers and "affordable / cheap / discount" banned words)
- [ ] Run `npm run build` → expect 313+ static routes, all hub pages prerender
- [ ] `curl -s https://steelr.co.uk/areas/buckinghamshire | wc -w` returns >2400 (compared to current ~1800)
- [ ] `curl -s https://steelr.co.uk/areas/buckinghamshire | grep -c "Aylesbury"` returns >= 2
- [ ] `curl -s https://steelr.co.uk/areas/buckinghamshire | grep -c "Milton Keynes"` returns >= 1
- [ ] `curl -s https://steelr.co.uk/areas/buckinghamshire | grep -o 'class="faq[^"]*"' | wc -l` returns >= 3 (custom FAQs render)
- [ ] Schema parse: extract every JSON-LD block from `https://steelr.co.uk/areas/buckinghamshire` and confirm each parses, types are Google-supported, FAQPage emits the new questions
- [ ] Dispatch `seo-schema-validator` agent on all 17 hub URLs as a batch
- [ ] Dispatch `cannibalisation-auditor` to confirm the expanded hubs do not now compete with leaf area pages
- [ ] Dispatch `area-slug-validator` on each updated hub
- [ ] Git commit + push, Vercel auto-deploy
- [ ] IndexNow ping on all 17 hub URLs
- [ ] GSC Indexing API push on all 17 hub URLs (requires manual requeue in tracker)
- [ ] Run Bing URL Inspection on `/areas/buckinghamshire` to diagnose the de-indexation directly

**Reversibility test (Phase 2):** single `git revert <sha>` reverts the data-only changes. Template and types untouched. Sitemap auto-regenerates cleanly back to previous state. No commit-cascade risk.

**Metric to confirm rank recovery (Phase 2):**
- Bucks Google position: 21-day re-test, expected top-15 (not necessarily top-3 immediately — competitor pages have 6+ months of authority lead)
- Bing index re-inclusion: 21-day re-test, expected back in top-30 (currently absent from first 20)
- All 17 hubs: minimum 22% unique-content ratio (calculated as Agent 7 did)

---

### PHASE 3 — Conditional, defer 21 days from Phase 2 ship

**Decision rule:** if Bucks has not moved into Google top-30 by **2026-06-10** following Phase 1 + 2, then:

**Phase 3 action:** Revert the 4 audience-hub link cards from the area template footer.

**Why deferred:** Agent 3 found this caused outbound dilution but the magnitude is modest on its own. Phase 1 + 2 are the high-confidence moves. Phase 3 trades audience-hub crawl flow for area-hub authority concentration — worth doing only if Phase 1 + 2 fail to recover Bucks.

**The 2 May title rewrite (`5ac969e8`) is explicitly NOT reverted** per code-reviewer: it shipped as a bundle and revert surgery exceeds benefit.

---

## Cross-template scope and prevention

**This same fix profile applies to all 17 area hubs.** Surrey, Kent, Herts, Berkshire, etc., are all sitting at 7-8% unique-content density. They held position in April because the SERP was underserved. They could fall the same way if competitors keep improving.

**Prevention guardrails to add (separate engineering task):**

1. **Add a unique-content gate** to the `area-slug-validator` agent: refuse to commit any hub data entry with fewer than 200 unique words or fewer than 8 `localFeatures` items.
2. **Add a "hub-vs-leaf duplicate" check** to `cannibalisation-auditor`: if a hub's description shingle-overlaps with any of its child area pages above 40%, flag it.
3. **Document in CLAUDE.md** the rule: hubs must carry county-level signals (largest 3-5 towns by population, geographic context, conservation/planning context) that leaf pages do not duplicate.
4. **Track unique-content ratio per hub** in a new `audit-data/hub-uniqueness-scoreboard.md`. Update on every hub edit.

## Confidence rating per phase

| Phase | Tier | Reversibility | Confidence in metric movement |
|---|---|---|---|
| Phase 1 (H1 revert) | Reasoned | Cheap | Modest — partial recovery expected on all area pages, not Bucks-specific cure |
| Phase 2 (content + localFeatures + FAQs) | Reasoned | Cheap | High — addresses root cause directly, replicated across all 17 hubs |
| Phase 3 (link revert) | Reasoned | Medium | Low — modest effect on its own, last-resort |

## Tick-list summary for execution

- [ ] **Phase 1** — H1 revert (single template edit, build, brand-guard, deploy, IndexNow, GSC API)
- [ ] **Phase 2** — 17 hub data files with localFeatures + 250+w unique prose + per-hub FAQs (data-only edits across 17 files, schema validation, cannibalisation check, area-slug check, deploy, IndexNow, GSC API)
- [ ] **Wait 21 days** for measurement window
- [ ] **Phase 3 (conditional)** — audience-hub link revert if Bucks hasn't recovered
- [ ] **Prevention** — guardrails on area-slug-validator and cannibalisation-auditor, CLAUDE.md hub rules, hub-uniqueness scoreboard

## Sources

- `audit-data/forensics/20260513-buckinghamshire-panel-consensus.md` (deep-reviewer panel chair)
- `audit-data/forensics/20260513-buckinghamshire-code-review.md` (code-reviewer panel)
- `audit-data/forensics/20260513-buckinghamshire-git-history.md` (Agent 1)
- `audit-data/forensics/20260513-buckinghamshire-live-page.md` (Agent 2)
- `audit-data/forensics/20260513-buckinghamshire-content-uniqueness.md` (Agent 3)
- `audit-data/forensics/20260513-buckinghamshire-schema.md` (Agent 4)
- `audit-data/forensics/20260513-buckinghamshire-link-graph.md` (Agent 5)
- `audit-data/forensics/20260513-buckinghamshire-gsc-indexing.md` (Agent 6)
- `audit-data/forensics/20260513-buckinghamshire-serp-side.md` (Agent 7)
- `audit-data/forensics/20260513-area-regression-sweep.md` (Agent 8)
