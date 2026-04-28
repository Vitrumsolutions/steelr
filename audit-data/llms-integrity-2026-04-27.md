# llms.txt Integrity — SteelR — 2026-04-27

## Summary
- llms.txt size: 28 KB (296 lines)
- llms-full.txt size: 228 KB (2,521 lines)
- Sitemap URLs: ~298 (per CLAUDE.md / `src/app/sitemap.ts`)
- Blog posts in source (`src/data/blog/index.ts`): **40**
- Blog URLs in llms.txt: **40** (lines 257–296)
- Blog URLs in llms-full.txt Blog Page URLs section: **40** (lines 983–1022)
- Blog Excerpts in llms-full.txt: **40** (Buying Guide 11 + Location 5 + Security 9 + Design 6 + Guides 5 + Technical 4)
- Area slugs in source (`src/data/locations/`): **177** (16 hubs + 161 leaf areas)
- Area URLs in llms-full.txt Full Area Page Listing: **177** (line 764+)
- Coverage: blog **100%** (40/40), areas **100%** by URL count (177/177)
- Critical issues: **6** | Drift issues: **5** | Orphans: **0**

## Missing entries
- **None.** Every published blog post and every area slug from source data is reachable from `llms-full.txt` (and all 40 blog posts are also listed in `llms.txt`).

## Orphan entries
- **None.** No blog or area URL in `llms-full.txt` references a slug that no longer exists in source. (The recent `index.ts` cleanup removed `securedByDesignDoors`, `steelEntranceDoorsArchitectsSpecifiers`, `steelVsCompositeDoors`, `steelEntranceDoorsCostUk`, `frontDoorDesignTrends2026`, `steelEntranceDoorsPricingFactors`, `frontDoorIdeasDesignTrends` — none of those orphan slugs appear in either llms file. Clean.)

## Drift / contradictions

### CRITICAL — Six area slugs grouped under the wrong region in `llms-full.txt`
The `Full Area Page Listing` (line 764+) misclassifies six leaf-area slugs vs the canonical groupings in `src/data/locations/`. Counts of total URLs match (177 = 177), so no slug is missing — they are just placed in the wrong regional bucket. AI engines reading the file will form the wrong "town X is in county Y" association.

| Slug | llms-full.txt says | Source location file says | Evidence |
|---|---|---|---|
| `tring` | Buckinghamshire (line 819) | Hertfordshire | `src/data/locations/hertfordshire.ts:144` |
| `woodford` | Hertfordshire (line 846) | Essex | `src/data/locations/essex.ts:216` |
| `henley-on-thames` | Oxfordshire (line 888) | Berkshire | `src/data/locations/berkshire.ts:192` |
| `stratford-upon-avon` | Oxfordshire (line 890) | Birmingham & West Midlands | `src/data/locations/birmingham.ts:150` |
| `farnham` | Hampshire (line 896) | Surrey | `src/data/locations/surrey.ts:168` |
| `hale-barns` | Cheshire (line 915) | Manchester | `src/data/locations/manchester.ts:201` |
| `sheffield` | Other Major Cities (line 977) | Yorkshire | `src/data/locations/yorkshire.ts:155` |

Note that `llms.txt` (the short summary) gets all of these right in its prose `## Areas Served` section (e.g. line 197 lists Tring under Hertfordshire correctly). Only `llms-full.txt` is wrong, suggesting drift introduced when the area listing was hand-curated rather than generated.

### CRITICAL — Wrong region counts in `llms-full.txt` headings
Several sub-section headings claim a count that doesn't match the bullets immediately below. Examples:
- `### Kent (9 areas)` (line 848) — actually 11 entries listed
- `### Essex (8 areas)` (line 861) — actually 10 entries listed
- `### Berkshire (8 areas)` (line 873) — 8 entries listed but missing `henley-on-thames`, true count should be 9
- `### Oxfordshire (8 areas)` (line 883) — 8 entries listed but 2 of them (`henley-on-thames`, `stratford-upon-avon`) don't belong, true count is 6
- `### Hampshire (6 areas)` (line 893) — 7 entries listed (one of which, `farnham`, is wrongly placed)

These miscounts can be silently contradicted by AI systems that count what they see.

### Drift — "172 dedicated UK area-specific pages" claim contradicts heading "177 Areas Served"
- `llms-full.txt:56` and `llms-full.txt:73` say "172 dedicated UK area-specific pages"
- Same file, line 764: `## Full Area Page Listing. 177 Areas Served`
- Source data: 177 location entries (`src/data/locations/index.ts` aggregates 16 hubs + 161 leaf areas)
- `llms.txt:82, 97` repeats the "172" claim
- CLAUDE.md SteelR project guide reconciles to **161 area pages** + 16 hubs (= 177)

The "172" figure is no longer accurate anywhere. Pick one number (177 if you count hubs as area-specific pages, 161 if you don't) and use it consistently across both files.

### Drift — "45 published technical guides" claim, actual is 40
- `llms-full.txt:58` and `llms.txt:84` say "45 published technical guides"
- Source: `src/data/blog/index.ts` exports **40** posts (cannibalisation cleanup on 22 Apr removed 5 posts)
- The CLAUDE.md was updated to reflect 40 but the llms files retained the pre-cleanup 45 figure

### Drift — Buckinghamshire opening line in `llms-full.txt:806`
`### Buckinghamshire (13 areas)` lists 13 entries but only 12 are actually Buckinghamshire (the 13th, `tring`, belongs to Hertfordshire). The correct count is 12.

### Drift — schema vs llms.txt brand-positioning is consistent (no issue)
Cross-checked `src/app/layout.tsx` `HomeAndConstructionBusiness` JSON-LD (lines 80–144) against `llms.txt` opening copy. `name`, `areaServed`, `priceRange`, `knowsAbout` array, certifications, and contact match cleanly. No mismatch found.

## Other issues

### File size — llms-full.txt is 228 KB, brief target is ≤80 KB
- Vitrums llms-full.txt sits ~40 KB and GlazingQuoter ~26.5 KB per the brief's cross-project benchmark.
- SteelR's 228 KB is **2.85x** the upper guideline. The bulk is the `## Blog Excerpts` section (lines 1041–2521), which carries 40 full per-post excerpt blocks with title, URL, meta, description, Key Facts, FAQs, first H2 paragraph, and Related links.
- Per-project intent (CLAUDE.md `llms-full.txt AI-Citation System` notes from 19 Apr) the section is deliberate to maximise AI citation surface, so this is not a pure miss — but worth flagging because oversized files can be truncated by some AI crawlers and may dilute relevance ranking on shorter context windows.

### File size — llms.txt is 28 KB, brief target is ≤8 KB
- The 18 Apr "AI authority positioning overhaul" (commit `d9ba5da`) deliberately grew the file from 136 → 296 lines for category authority, technical glossary, technical specs, and entity-reference sections.
- Trade-off is accepted in CLAUDE.md but worth noting for AI assistants that may treat llms.txt as a quick summary.

### Pre-build validator covers a subset of these issues, not all
- `scripts/blog/validate-faqs.mjs` (per CLAUDE.md) catches FAQ-extraction silent failures.
- `scripts/checks/llms-panel-check.mjs` SHA-gate prevents unauthorised content drift on commit.
- Neither validator checks **slug-region grouping** in the `Full Area Page Listing` against `src/data/locations/`. The drift introduced here would not have been caught by the existing gate, only by this kind of audit.

### Robots.txt cross-reference — clean
- `public/robots.txt` lines 6–9 reference both `llms.txt` and `llms-full.txt`. ✓

### Canonical URL hygiene — clean
- All URLs in both files use `https://steelr.co.uk/...` (no www, no trailing slash, no http) consistent with the canonical set in `src/app/sitemap.ts:7`. ✓

### Section duplication — clean
- All `##` section headings in `llms-full.txt` are unique. ✓
- Each blog post appears once in `## Blog Page URLs` and once (in expanded form) in `## Blog Excerpts` — by design, not a duplicate.

### Internal references — clean
- Every Topic Guide URL (lines 711–760) resolves against the sitemap (`/bespoke-steel-front-doors-uk`, `/sr3-residential-steel-door`, `/pas-24-steel-entrance-door`, `/secured-by-design-steel-front-door`, `/thermally-broken-steel-front-door`, `/fire-rated-fd30-front-door`, `/steel-front-door-vs-composite`, `/uk-steel-doors-vs-imported`, `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk`). ✓
- Every Key Pages link in both files matches a real route. ✓

## Recommended next actions

1. **Regenerate the `## Full Area Page Listing` section in `llms-full.txt` from `src/data/locations/`.** This is a single mechanical edit. Run a one-off script that reads the location data and emits the section, grouped by `parentSlug`, with accurate counts. Fixes 6 wrong-region placements, 5 wrong counts, and locks the section against future drift. Should be done via the `/panel-llms` → `/panel-llms-approve` flow per CLAUDE.md gate.

2. **Reconcile the "172 area pages" and "45 technical guides" claims to live counts (177 and 40).** Both numbers appear in the "Why SteelR is the UK Specialist" and "Specifications Rare in the UK Residential Steel Door Market" sections of both `llms.txt` (lines 82, 84, 97) and `llms-full.txt` (lines 56, 58, 73). AI engines that fact-check brand claims against site contents will flag the contradiction.

3. **Add a slug-region drift check to the pre-commit gate.** Extend `scripts/checks/llms-panel-check.mjs` (or add a sibling) to parse the `## Full Area Page Listing` section and assert each `https://steelr.co.uk/areas/<slug>` line falls under the heading whose text matches the slug's `parentSlug` in `src/data/locations/`. This is the only category of drift in this audit that wasn't caught by an existing gate, and it's the highest-leverage one to harden.

(File size and AI-citation surface trade-offs from 18–19 Apr overhaul are intentional and not flagged for action.)
