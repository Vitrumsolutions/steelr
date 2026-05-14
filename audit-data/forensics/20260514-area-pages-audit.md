# Area Pages Quality Audit - steelr.co.uk

Date: 2026-05-14. Read-only diagnostic. No code changes.

## Method

- Enumerated all 17 region files in `src/data/locations/*.ts` via a Node parser
  extracting `slug`, `type`, `description` word count, `localFeatures` count, `faqs` count.
- Reconciled record counts against live `https://steelr.co.uk/sitemap.xml`.
- Verified the 13-14 May hub fix (commits b38a698 + 976de1a) via `git show --stat`
  and a diff scan for any `+...type: "area"` lines (leaf tampering check).
- Curled 10 hub + 10 leaf URLs for HTTP status and rendered content.
- Sampled leaf quality across all regions (sorted full leaf list by word count).

## Record Counts and Sitemap Reconciliation

- Hubs: 16. Leaves: 161. Total location records: 177.
- Sitemap `/areas/*` URLs: 177. Total sitemap `<loc>`: 313.
- Reconciled. 16 + 161 = 177 = sitemap area URLs. No orphans, no missing pages.
- Note: CLAUDE.md and the brief both reference "16-17 hubs". Actual is 16.
  `other-cities.ts` contains NO hub (8 leaf cities only), so 16 is correct and complete.

## Hub-Fix Verification (all 16 hubs)

Rule: description >= 250 words, localFeatures >= 12, faqs == 4.

| Hub | Words | localFeatures | faqs | Result |
|---|---|---|---|---|
| scotland | 318 | 12 | 4 | PASS |
| london | 302 | 12 | 4 | PASS |
| south-west | 300 | 12 | 4 | PASS |
| yorkshire | 300 | 12 | 4 | PASS |
| sussex | 283 | 12 | 4 | PASS |
| kent | 280 | 12 | 4 | PASS |
| hampshire | 278 | 12 | 4 | PASS |
| birmingham | 275 | 12 | 4 | PASS |
| manchester | 269 | 12 | 4 | PASS |
| oxfordshire | 269 | 12 | 4 | PASS |
| cheshire | 258 | 12 | 4 | PASS |
| buckinghamshire | 254 | 12 | 4 | PASS |
| essex | 254 | 12 | 4 | PASS |
| berkshire | 252 | 12 | 4 | PASS |
| hertfordshire | 246 | 12 | 4 | MARGINAL FAIL (desc 4 words short) |
| surrey | 246 | 12 | 4 | MARGINAL FAIL (desc 4 words short) |

14 of 16 hubs fully compliant. `hertfordshire` and `surrey` carry 246-word
descriptions: 4 words below the 250 threshold. localFeatures and faqs are correct
on both. This is a trivial miss, not a structural failure - the forensic-target
content density was achieved, but the rule's literal floor is breached.

## other-cities.ts Check (critical)

`other-cities.ts` was NOT missed by the hub fix - because it has no hub to fix.
It holds 8 standalone leaf cities (liverpool, newcastle, nottingham, leicester,
cambridge, cardiff, norwich, northampton), all `type: "area"`, all `tier: 2`,
with no `parentSlug`. They render at `/areas/<city>` and behave as leaves.
File mtime is 4 May (untouched by the 13 May batch), which is correct: nothing
in it needed the hub treatment. No finding - this is sound.

## Leaf-Page Quality Assessment (sampled 40+, full list parsed)

All 161 leaves have a hand-written `description` and a `localFeatures` array
(4 items for England-and-Wales leaves, 5 for Scotland and other-cities leaves).
No leaf has a `faqs` array - leaves were never given FAQs by design.

Word-count distribution across all 161 leaves:
- 79-129 words: 24 leaves (ALL London boroughs) - THIN
- 130-170 words: ~70 leaves - below the 200-word ideal
- 171-212 words: ~67 leaves - acceptable, near or at target
- Highest: belgravia 209, aberdeen 212, glasgow 208, st-andrews 206.

The brief's "200+ word ideal" is met by only ~25 percent of leaves. The 24 London
boroughs are materially thin (mean ~95 words) and are the clear weak tier. They
were the original Phase 3 build and never re-enriched. Content quality where it
exists is genuinely local: muswell-hill names Alexandra Palace, Fortis Green, the
Broadway, Edwardian semis, tile paths - real specificity, not placeholder. The
problem is volume, not authenticity.

## Boilerplate Ratios (estimated)

- Leaf `description` text is bespoke per page - the SteelR spec sentence
  (PAS 24 / BS EN 1627 / SR3 / SR4 / FD30S) is the only repeated block, ~35-45
  words. On a 90-word London leaf that is ~45 percent shared text; on a 200-word
  leaf it is ~20 percent. Thin leaves are diluted by boilerplate proportionally.
- Page template `src/app/areas/[slug]/page.tsx` (1,427 lines) injects shared
  manufacturing / customisation / warranty / nearby-areas / credentials-strip
  blocks. This is fine for leaves IF the unique `description` + `localFeatures`
  carry enough weight. For the 24 thin London leaves it does not - they are the
  same risk profile the hubs had pre-fix.

## Weakest 10 Leaf Pages (by content quality)

All London boroughs, all 4-item localFeatures, no faqs:

1. muswell-hill - 79 words
2. chiswick - 81
3. barnes - 81
4. wimbledon - 82
5. ealing - 83
6. kensington - 84 (prestige slug, thin content - highest-priority fix)
7. dulwich - 84
8. blackheath - 84
9. hammersmith - 85
10. wandsworth - 85

kensington at 84 words is the standout concern: a flagship West London target
slug with less unique content than most market towns.

## Pages Broken by Today's Edits

None. `git diff b38a698~1..976de1a -- src/data/locations/` shows zero added
`type: "area"` lines. Each region file gained 42-44 lines = exactly one hub's
new `localFeatures` + `faqs` + expanded `description`. No leaf entry was touched.
All 20 curled URLs (10 hub, 10 leaf) returned HTTP 200 with content rendering;
spot-checked `/areas/muswell-hill` shows the correct spec sentence in the head.

## Recommendations (Recommendation Gate tagged)

1. **Top up hertfordshire + surrey hub descriptions to 250+ words.**
   Tested-locally. Re-run the parser to confirm. Reversibility: cheap.
   Metric: word count >= 250. 4-word edit each.

2. **Enrich the 24 thin London-borough leaves to 200+ words + 6-item
   localFeatures.** Reasoned. Same structural-thinness risk that took
   buckinghamshire off top-30; London boroughs are high-value slugs sitting at
   ~95 words. Metric: pre/post Serper rank for kensington, wimbledon, chiswick
   via `scripts/audit/capture-serp.mjs`. Reversibility: medium. Prioritise
   kensington, chelsea, fulham, hammersmith first.

3. **Consider adding 2-3 FAQs to tier-3 leaf pages in priority regions.**
   Reasoned. Closes the leaf/hub structural gap. Reversibility: cheap.
   Defer until #2 lands - needs IA decision on FAQ-schema volume.

Caps used: 1 Tested-locally, 2 Reasoned. Within session limits.
