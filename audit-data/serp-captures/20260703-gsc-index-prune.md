# GSC check, 3 July 2026: index prune found, clicks up

**Method:** live GSC UI via user's logged-in Chrome (steelr.co.uk domain property). Screenshots taken in session. Report last update: 30/06/2026.

## Page indexing: major regression

| Metric | 25 Jun 2026 (prior session) | 3 Jul 2026 (report dated 30 Jun) |
|---|---|---|
| Indexed | 271 | **122** |
| Not indexed | 25 | **211** |
| Crawled, currently not indexed | 13 | **163** |
| Discovered, currently not indexed | n/a | 36 |
| Page with redirect (benign) | 12 | 12 |

The trend chart shows the not-indexed count jumping from roughly 20 to roughly 211 starting mid June 2026, while indexed fell from roughly 290 to 122. This is a genuine de-indexing wave, not report lag.

## Who got pruned (sample of ~30 from the 163)

Dominated by **leaf area pages**: cheltenham, cheshire (a HUB), gerrards-cross, esher, battersea, blackheath, muswell-hill, rickmansworth, twickenham, haddenham, leeds, alresford, ilkley, hitchin, hale-barns, dorking, harpenden, orpington, lewes, windsor, arundel.
Plus **blog posts**: steel-entrance-door-thermal-performance-u-values, secured-by-design-homes-guide-2026, spring-home-improvement-front-door-upgrade, luxury-front-doors-uk-buyer-guide, sr4-lps-1175-commercial-grade-residential, are-steel-doors-worth-it-uk, secured-by-design-doors.
Plus **collection doors**: sage-panelled-arched-wreath, black-panelled-sidelights-palms, black-contemporary-dual-sidelights.

Many show last-crawl dates in April or May 2026: Google stopped recrawling them and dropped them. Pattern matches a young-site quality reassessment pruning thin or low-demand programmatic pages, the risk the 13 May 2026 Buckinghamshire forensics flagged (all hubs then at 7-8% unique content; leaf areas thinner still).

## Performance, 28 days (4 Jun to 1 Jul 2026)

| Metric | 90d baseline (16 Mar to 7 Jun) | 28d now |
|---|---|---|
| Clicks | 52 | **55** |
| Impressions | 12.3k | 8.17k |
| CTR | 0.4% | 0.7% |
| Avg position | 34.6 | **31.8** |

Clicks in the last 4 weeks exceed the prior 90 days in total. The prune has not cost traffic; the dropped pages were zero-click pages. Top zero-click queries remain: secure front doors 305 impr / 0 clicks, composite vs steel doors 141 / 0, new build front door 91 / 0, secured by design doors 91 / 0.

## Read

1. Traffic-wise nothing has been lost yet. Positions and CTR improved.
2. The risk is strategic: the 161-area-page programmatic moat is being unwound by Google's quality systems. The Phase 2 hub enrichment (25-30% unique content) protected some hubs, but leaf areas were never enriched and are now falling out, and at least one hub (cheshire) fell with them.
3. Blog posts falling out (7 sampled) is the more surprising cohort and worth a deeper look: several are older posts without FAQ sections.

## Candidate responses (NOT actioned, owner decision needed)

- Enrich highest-value leaf areas only (priority postcode towns) rather than all 161; accept pruning of the tail.
- Cross-check the 163 against the internal-linking graph; orphan-ish leaf pages de-index first.
- Do nothing on the tail; keep investing in the surfaces that are winning (AI citation, topic pages, blog cadence).

No fixes shipped from this finding in this session. Data captured for the recommendation gate.
