# Competitor Benchmark — SteelR — 2026-04-27

## Scope correction up front

The brief supplied keywords for **structural steel / RSJ / Manchester fabricator** territory. SteelR is not in that market. SteelR is a premium **bespoke residential steel front-door** brand (PAS 24 / SR3 / SR4 / LPS 1175 / Secured by Design / FD30), per `steelr/CLAUDE.md` and `steelr/public/llms.txt`. I re-pivoted competitor selection to that actual category. The geo focus also widens — SteelR is national UK with London / Home Counties / Buckinghamshire / Surrey / Kent emphasis (per blog topics + area pages), not Manchester / North West.

**Tooling caveat:** Firecrawl ran out of credits, WebFetch + raw HTTP (curl, Invoke-WebRequest) were sandbox-blocked. All competitor signals in this benchmark come from Google WebSearch results (titles, snippets, indexed page metadata, Trustpilot listings) plus rich-result inference. I could not directly fetch competitor HTML to confirm schema markup or `/llms.txt` content. I have flagged inferred signals as such.

## Competitors selected

1. **lathamssteeldoors.co.uk** — Latham's Steel Security Doors (Oldbury, West Midlands). Most directly comparable: bespoke + stock steel security doors, PAS 24 / LPS 1175 / SR3 / SR4 ratings, Secured by Design, residential + commercial. Largest UK player by review volume and content depth.
2. **strongdor.com** — Strongdor (Carnforth, Lancashire). UK-made bespoke steel doors, broad SR-rating coverage, 44,500 sq ft facility, ~438 Trustpilot reviews. Comparable trade-dominant positioning that SteelR's premium-residential angle differentiates from.
3. **fortpremiumdoors.co.uk** — Fort Premium (UK). The closest visual + positioning match to SteelR — bespoke premium residential steel front doors, "Made in Britain", design-led catalogue (numbered designs e.g. 0017, 0188, 0285). Aspirational competitor for SteelR's category narrative.
4. **samsondoors.co.uk** — Samson Doors (Buckinghamshire). Broader product range (security grilles, shutters, garage, industrial) but credible on PAS 24 / SR ratings and well-indexed for Bucks and Home-Counties location pages — directly competes for SteelR's geo terms.

Two omissions I weighed and dropped:
- **steeldoorcompany.co.uk** — strong Trustpilot (~97 reviews, 4.7) but their primary product is internal Crittall-style steel doors / room dividers, not external front doors. Adjacent category.
- **robust-uk.com** — TUFF-DOR is enterprise / commercial security, not residential premium. Different buyer.

## Posture comparison

| Dimension | SteelR | Latham's | Strongdor | Fort Premium | Samson |
|---|---|---|---|---|---|
| Positioning | Premium residential, design-led, bespoke | Mass-market security + bespoke; trade-heavy | UK-made bespoke; trade + spec | Premium residential, design-led | Multi-product (doors + grilles + shutters + industrial) |
| Geo targeting | National UK; ~166 area pages | Mostly national / industry-spec | National + spec | National | Bucks / Home Counties location pages prominent |
| Live since | ~3 Apr 2026 (~24 days) | Long-established (>20 yrs online) | Long-established | Long-established | >20 yrs |
| Sitemap depth (indicative) | ~297 URLs | Hundreds (deep blog + help-centre + product + location) | Modest (Knowledge Bank + projects) | Catalogue-heavy product URLs (numbered designs); thin blog | Hundreds (location pages + product pages + blog) |
| Blog post count (indicative) | 40 (themed: SR ratings, PAS 24, RAL colours, period properties, security ratings, area-specific) | 40+ (mix of news + buying guides + regulations); active 2024–2026 | None visible — uses "Knowledge Bank" PDFs/guides instead | None visible — catalogue-only model | Active blog at /blog/; cadence unknown |
| Help / FAQ system | `/ai-answers` FAQ hub + per-area + per-blog FAQPage schema | Dedicated `/help-centre/` + `/faqs/` | `/knowledge-bank` + `/knowledge-library` PDF / spec downloads | Not visible | Inline in product pages |
| Schema types (inferred) | LocalBusiness/HomeAndConstructionBusiness, FAQPage, BreadcrumbList, OfferCatalog, AggregateRating, GeoCoordinates | LocalBusiness + Article (rich snippets visible in results) — FAQPage probable on /faqs/ | LocalBusiness probable; Article probable on knowledge-bank | Image-led product pages — likely thin schema | LocalBusiness + Product/LocalBusiness (location-page pattern) |
| llms.txt | YES — `/llms.txt` 26.3 KB + `/llms-full.txt` 226.5 KB (verified locally) | Not detectable via search; no public reference | Not detectable; no public reference | Not detectable; no public reference | Not detectable; no public reference |
| Trustpilot reviews | n/a (review push to GBP, not Trustpilot) | 183 | 438 (5★) | None found in search | 49 |
| GBP / Maps | 0/11 in audit (22 Apr) — biggest known gap | Yes (Oldbury HQ surfaces in business search) | Yes (Carnforth HQ + Made-in-Britain credentials) | Limited evidence in search | Yes (multiple Bucks location pages rank) |
| AI engines | Cited #1 ChatGPT, Google AI Mode "best fit" Perplexity (per 22 Apr audit) | Not surfaced in our search-mediated sample for SteelR's category prompts | Same | Same | Same |
| AI citation rate | DEFERRED — Perplexity API unfunded | DEFERRED | DEFERRED | DEFERRED | DEFERRED |

## What SteelR does better

- **llms.txt + llms-full.txt** — 26.3 KB summary + 226.5 KB deep file. None of the 4 competitors show evidence of llms files. This is the single most defensible advantage and explains the documented ChatGPT / Google AI Mode citation wins (per `audit-data/visibility-audit-20260422.md`).
- **Schema breadth** — `OfferCatalog` for Contemporary / Traditional / Double doors, `FAQPage` baked into the area-page route, `HomeAndConstructionBusiness` with `GeoCoordinates`, `OpeningHoursSpecification`, `Person` founder, `AggregateRating`. Latham's looks structured but narrower in indexed signals. Strongdor and Fort Premium lean on PDFs / image catalogues rather than structured-data depth.
- **Location coverage** — ~166 hand-content area pages with town-specific copy. Competitors lean on national positioning (Latham's, Strongdor) or smaller location sets (Samson — Bucks-cluster only). This is SteelR's strongest organic-funnel asset for the residential buyer.
- **Topical authority on SR3 / SR4 / PAS 24 / LPS 1175 explainer content** — 40 blog posts with deliberate cluster coverage (SR1→SR3 ladder, SR4 / LPS 1175 commercial-grade-residential explainer, PAS 24 explainer, fire-rated FD30 / FD60, RAL colour guide, period-property guides). Latham's covers regulations and gauges but with less category-specific cluster discipline. The other three are thin on SEO-grade explainer content.
- **AI engine optimisation as deliberate strategy** — `/ai-answers` page, structured Direct-Answers Q&A, and llms files. Competitors do not visibly optimise for this surface — SteelR is alone in the category, so the lead compounds while it lasts.
- **Premium residential brand-voice fit** — "Engineered for permanence. Designed for distinction." + Montserrat / cream / gold visual system. Closest match is Fort Premium; everyone else reads as trade-spec or industrial.

## What competitors do better

- **Latham's — review volume + Trustpilot footprint.** 183 Trustpilot reviews, blog active since 2015 with Building Regulations / gauge / sizing guides that pull in spec-buyer searches. SteelR's Trustpilot footprint is effectively zero and Google reviews 0 (audit 22 Apr).
- **Strongdor — Trustpilot moat (438 reviews, 5★) + Made in Britain badge + spec-buyer "Knowledge Bank".** Spec-PDF library is what architects download, not blog posts. SteelR has architect-targeted blog posts but no PDF library.
- **Fort Premium — visual catalogue depth.** Numbered design catalogue (0013, 0017, 0188, 0190, 0205, 0214, 0285, 0300, 0529 visible) gives them a deeper inspirational long-tail than SteelR's 60-door collection. Each design URL is its own image-rich landing page; SteelR's `/collection` is more curated but narrower.
- **Samson — multi-product cross-sell + dense Bucks / Home-Counties location pages.** Their "Steel Security Doors High Wycombe and Buckinghamshire" pattern ranks; SteelR's area pages cover the towns but the product cross-sell is single-category.
- **All four — established domain age and backlink history.** SteelR is 24 days live; competitors are 5–25+ years online. Even strong on-page work won't outrank Latham's on commercial keywords until SteelR's domain seasons. This is a runtime problem, not a fixable one.

## Top 3 opportunities

1. **Spec-PDF / architect resource library** — `[Severity: Medium] [Effort: Medium] [Source: Strongdor]` Strongdor's `/knowledge-bank` is a moat for architect / commercial-spec buyers. Build SteelR equivalents: downloadable PAS 24 spec sheet, SR3 vs SR4 comparison PDF, FD30 fire-rating cert sheet, RAL colour guide, NBS-style technical drawing pack. Each PDF gets its own indexable landing page with `Article` schema and FAQ. This converts trade / architect search intent that blog posts don't catch and is gated content for lead capture. SteelR's "specifying-steel-doors-architects-guide-2026" blog post is the seed — turn it into a downloadable spec pack.

2. **Numbered design catalogue depth** — `[Severity: Low–Medium] [Effort: Medium] [Source: Fort Premium]` Fort Premium's numbered-design URL pattern (`/0285-brown-single-fort-security-door...`) lets each variant rank for long-tail visual searches ("black steel front door with side panels", "modern steel door 4 horizontal panels"). SteelR's `/collection` is curated to ~60 doors; consider adding 30–50 design-variation child URLs (different finishes / panel layouts / handles on the same base door) with image-rich pages. Low risk to brand premium-ness if executed cleanly with parent-child structure (canonical to base door, variant pages target inspiration searches). Pair with `/colours` to cross-link.

3. **Trustpilot footprint as parallel review channel** — `[Severity: High] [Effort: Low–Medium] [Source: Latham's, Strongdor]` GBP reviews at 0 is a known blocker (audit 22 Apr) and the user manages that channel directly — do not re-suggest. But Trustpilot is a separate, unblocked channel: Latham's has 183 reviews, Strongdor 438. Trustpilot reviews surface in Google rich-results and feed AI-engine sentiment signals. Adding a Trustpilot widget to `/thank-you` (post-install email link) builds a second review moat without competing with the GBP push the user already runs. Mirrors how the existing on-site `/thank-you` GA4 pattern works — same plumbing, different destination.

## What I could not verify

- Direct schema markup on competitor sites (no HTML fetch). Schema types listed are inferred from indexed-result patterns, not source-of-truth.
- Exact `/llms.txt` presence on competitors. None surfaced via Google search, but absence of indexing is not absence of file. Re-test with curl when sandbox permits.
- Domain Authority / Domain Rating numbers (no Ahrefs / Moz / SEMrush access in this run).
- Competitor blog post counts beyond what Google indexed in the first 10 results per `site:` query — true counts are likely higher.

## Deferred

- **AI citation benchmark** — Perplexity API returns 401 in this environment per the brief. Fund the API and re-run the visibility-audit pattern (`steelr/audit-data/visibility-audit.py`) with each competitor's brand name as the query, comparing citation share across ChatGPT / Claude / Perplexity / Google AI Mode. Predicted finding based on the 22 Apr SteelR audit: SteelR holds AI-engine lead unless competitors ship llms.txt — most likely to break first if Latham's adds one given their existing content depth.
- **Direct schema confirmation** — re-run with WebFetch / curl re-enabled; would change the "(inferred)" rows to verified signals.

## Sources

- [Security Doors Made in Britain | Fort Premium](https://fortpremiumdoors.co.uk/) — competitor 3 home + catalogue pattern
- [Latham's Steel Security Doors](https://www.lathamssteeldoors.co.uk/) — competitor 1 home + blog + help-centre
- [Bespoke Steel Doors | Strongdor](https://www.strongdor.com/) — competitor 2 home
- [Strongdor Knowledge Bank](https://www.strongdor.com/knowledge-bank) — spec-buyer resource model
- [Samson Doors](https://www.samsondoors.co.uk/) — competitor 4 home + location-page pattern
- [Latham's Trustpilot — 183 reviews](https://uk.trustpilot.com/review/lathamssteeldoors.co.uk) — review-volume signal
- [Strongdor Trustpilot — 438 reviews, 5★](https://uk.trustpilot.com/review/www.strongdor.com) — review-volume signal
- [Samson Doors Trustpilot — 49 reviews](https://uk.trustpilot.com/review/samsondoors.co.uk) — review-volume signal
- [Latham's Residential Security Door Buying Guide 2025](https://www.lathamssteeldoors.co.uk/blog/residential-security-door-buying-guide/) — competitor blog cadence evidence
- [SteelR llms.txt baseline](https://steelr.co.uk/llms.txt) — local-file size 26.3 KB; full file 226.5 KB
- [SteelR 22 Apr 2026 visibility audit](C:\Users\SOT\Documents\Projects\steelr\audit-data\visibility-audit-20260422.md) — internal baseline used for SteelR-side data
