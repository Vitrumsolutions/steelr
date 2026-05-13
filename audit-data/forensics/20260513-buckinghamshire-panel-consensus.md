# Panel consensus — /areas/buckinghamshire regression

Date: 2026-05-13
Chair: Claude (Anthropic), reconciling 8 forensic agents.
Sources: Reports 1-8 in this folder (git-history, live-page, content-uniqueness, schema, link-graph, gsc-indexing, serp-side, area-regression-sweep).

## 1. Consensus root cause

**Competitive SERP displacement on a structurally thin hub.** Bucks fell from #1 between 23 Apr and 1 May, before any local commit could plausibly explain it. The hub itself was always content-light (7-8 percent unique prose, no `localFeatures`, omits Aylesbury and Milton Keynes). Stronger pages overtook it. Subsequent template edits compounded the problem but did not start it.

## 2. What it is NOT

- **Not deindexation.** Schema (Report 4) and live page (Report 2) confirm HTTP 200, self-canonical, no `noindex`, sitemap present with fresh `lastmod`. GSC (Report 6) confirms a re-ranking event, not coverage loss.
- **Not a schema defect.** Both `HomeAndConstructionBusiness` blocks share the same `@id` (`#business`); Google merges them. Report 4 confirms PASS, overriding Report 2's "potential defect" flag.
- **Not the 3 May H1 rewrite (commit 918b914b).** Reports 2, 3, 6, and 8 all confirm the regression was already complete by 2 May — before the H1 commit landed. Report 1's "smoking gun" finding is chronologically impossible as the trigger.
- **Not a template-wide event.** Report 8 shows six of eight tracked area keywords gained or held; Esher (#1) and Kensington (#5) broke through in the same window.
- **Not the H1 itself being shipped.** Report 2 confirms the live H1 is the cert-acronym version (post 3 May), but Report 8 shows Bucks was already gone by 2 May. The H1 is live now but it cannot be the trigger.
- **Not the outbound-link block (commit a2dee50, 5 May).** Same chronological exclusion (Report 8).
- **Not the hub `description` being rewritten.** Report 3 confirms the 67-word Bucks paragraph is byte-identical to its 22 Apr state.

## 3. Reconciliation of the 5 contradictions

**A. H1 rewrite shipped or not.** All three agents are correct on their own slice. Report 1 (git history) correctly identified that `918b914b` rewrote the H1 in source. Report 2 (live page) correctly identified that the new cert-acronym H1 IS what curl returns today. Report 3 (content uniqueness) correctly identified that the `description` paragraph is byte-identical to 22 Apr. Resolution: the H1 changed, the description did not. Both can be true.

**B. 3 May vs already-gone-by-2 May.** Report 8 is definitive. The 2 May audit captured Bucks already off top-30. Report 1's H1 rewrite (3 May) cannot be the trigger because it postdates the event. Report 1's other candidates (28 Apr title rewrite `875df5ea`, 29 Apr `ebdb8604`) sit inside the 22 Apr to 2 May drop window and remain plausible contributors but not the primary cause.

**C. Duplicate HomeAndConstructionBusiness blocks.** Report 4 is correct. The shared `@id = https://steelr.co.uk/#business` instructs Google to merge the per-page block into the site-level entity. Report 2's flag is a false positive — it correctly counted two `@type` blocks but missed the `@id` reconciliation. Schema audit gate: PASS.

**D. Google indexing vs Bing suppression.** Both true and independent. Report 6 confirms Google still has `/areas/buckinghamshire` indexed (200, canonical, sitemap fresh, no `noindex`). Report 7 confirms Bing has dropped the hub from its index for site-specific queries while keeping the leaf pages (`/areas/beaconsfield` at Bing #4). Two engines, two indices, two states. Bing's behaviour is consistent with the duplicate-cluster suppression hypothesis from Report 3 (hub looks like a near-duplicate of its leaves to a similarity classifier).

**E. Which fix is primary.** Report 1's H1 revert is **not** a fix for the trigger (the trigger preceded that commit). Report 7's "add Aylesbury and Milton Keynes" addresses a concrete on-page gap the displacers exploit (Reports 7 and 3 both surface this). Report 3's "add `localFeatures` plus 200-300 unique words" is the structural lift Bucks needs to escape the thin-hub trap that allowed the displacement in the first place. Report 5's "revert audience-hub links" is mild and only addresses post-regression dilution. **Primary: content depth uplift (Report 3 + Report 7 combined). Secondary: H1 revert (Report 1). Tertiary: link-graph rebalance (Report 5).**

## 4. Ranked fix list

### Primary — Hub content depth uplift (Reasoned, cheap to reverse)

- **Change:** add `localFeatures` array (Chiltern AONB, HP9 / SL9 / HP6 / HP7 / SL7 / HP8 postcode pockets, conservation areas, named towns including Aylesbury and Milton Keynes) plus expand `description` from 67 words to 250+ words with explicit named-town paragraphs.
- **Evidence:** Reports 3 (7.1 percent unique prose), 7 (displacers name 22 towns vs SteelR's 10; Aylesbury and Milton Keynes are absent), 8 (template-wide template effect ruled out, so Bucks-specific content must move).
- **Predicted effect:** lifts unique-prose ratio from 7 percent to ~25 percent; addresses the structural reason Bing dropped the hub from its index and the structural reason competitors overtake on county-level intent.
- **Reversibility:** single git revert of the location-data commit. Cheap.

### Secondary — H1 and title revert (Reasoned, cheap to reverse)

- **Change:** revert `/areas/[slug]/page.tsx` generateMetadata title pattern and sr-only H1 to the 28 Apr form: `Steel Doors {Region} | Bespoke Steel Front Doors, SR3 Rated | SteelR` and H1 `Bespoke Steel Entrance Doors Across {Region}`.
- **Evidence:** Report 1 (16-word cert-acronym H1 dilutes location intent), Report 2 (current live H1 matches the diluted form across all 161 area pages).
- **Predicted effect:** clarifies primary topic vector for the head term across the entire area template. Will not by itself recover Bucks (the regression preceded this), but is a low-cost compounding lift.
- **Reversibility:** single revert of commits `5ac969e8` and `918b914b` on the metadata generator. Cheap.

### Tertiary — Audience-hub link removal (Reasoned, medium reversibility)

- **Change:** remove the 4 audience-hub links (`/architects`, `/developers`, `/housing-associations`, `/property-managers`) from the area-template `<Footer>`-region block. Keep the 4 security topic-hub links.
- **Evidence:** Report 5 (audience hubs do not link back; outbound dilution +8 per area page; audience hubs are off-thesis for an area page).
- **Predicted effect:** mild. Returns ~25 percent of redistributed outbound PageRank to area pages.
- **Reversibility:** single revert of the link block, but `/architects` etc. now expect inbound traffic from areas. Medium.

## 5. Cross-template implications

Yes, but bounded. Reports 3 and 4 confirm Surrey, Hertfordshire, Kent share the same 7-8 percent unique-prose ratio, the same empty `localFeatures`, and the same default-FAQ block. The structural fix (`localFeatures` + 250-word `description` + named-town paragraphs) should be applied to all 17 hubs, not just Bucks. Report 8 shows the other hubs have not regressed yet (Surrey was already invisible; the rest are not in the tracked keyword set), but the same vulnerability is present. Scope: 17 hub entries across `src/data/locations/*.ts`. Estimate: 30-45 min per hub for hand-written local-feature content.

The H1 / title revert is genuinely sitewide and lifts all 161 area pages.

The audience-hub link removal is also sitewide. Should be reviewed against `/architects` etc.'s own ranking dependency on those area-page inbounds before shipping.

## 6. Tick-list specification

**Primary fix — Bucks hub content uplift**
- Change: edit `src/data/locations/buckinghamshire.ts` hub entry. Add `localFeatures: string[]` (4-6 bullets, HP/SL postcodes, Chiltern AONB, named towns). Expand `description` to 250+ words including Aylesbury and Milton Keynes as named populated centres.
- Test that the change shipped: `curl -s https://steelr.co.uk/areas/buckinghamshire | grep -c "Aylesbury"` returns 1 or more; visible word count (live HTML) increases from 1,162 to 1,400+; live HTML contains "Local Property Types" heading from the conditional `localFeatures.length > 0` block.
- Rank-recovery metric: 14-day post-deploy Serper run on "steel doors Buckinghamshire". Expected position: back inside top 20, ideally top 10. Full recovery to #1 not predicted (competitor authority gap remains).
- Reversibility test: `git revert <sha>` of the single data-file commit; build remains green; sibling hubs unaffected (only `buckinghamshire.ts` changed).

**Secondary fix — H1 and title revert**
- Change: in `src/app/areas/[slug]/page.tsx` generateMetadata, revert title template to `Steel Doors ${region} | Bespoke Steel Front Doors, SR3 Rated | SteelR` (28 Apr form). Revert sr-only H1 to `Bespoke Steel Entrance Doors Across ${region}`.
- Test: `curl -s https://steelr.co.uk/areas/surrey | grep -o "<title>[^<]*</title>"` returns the SR3-Rated title; `curl -s https://steelr.co.uk/areas/buckinghamshire | grep -c "Bespoke Steel Entrance Doors Across Buckinghamshire"` returns 1.
- Rank-recovery metric: 14-day Serper run on the same 7 area keywords from Report 8 (`steel doors Buckinghamshire`, Surrey, Kensington, Chelsea, Cobham, Esher). Expected: head-term clarity improves across the template; no expected regression on the gainers (Kensington, Esher).
- Reversibility test: `git revert` of the generateMetadata commit; all 161 area pages return to current state; no downstream component breakage (the change is metadata only).

**Tertiary fix — Audience-hub link removal**
- Change: in `src/app/areas/[slug]/page.tsx`, remove the 4-card audience-hub block (architects, developers, housing-associations, property-managers). Keep the security-topic 4-card block.
- Test: `curl -s https://steelr.co.uk/areas/buckinghamshire | grep -c "/architects"` returns 0; outbound internal link count drops from 32 to 28.
- Rank-recovery metric: not expected to move Bucks directly. Monitor `/architects` and `/developers` impressions in GSC for 14 days post-revert; if they hold, the link removal was safe.
- Reversibility test: `git revert` of the link-removal commit; verify `/architects` etc. still receive area-page inbound; no orphan pages.

---

Word count: ~1,950. Read-only synthesis. No new claims introduced beyond what the 8 agents surfaced.
