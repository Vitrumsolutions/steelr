# SERP-side forensic — "steel doors Buckinghamshire" — 13 May 2026

## 1. Method

- Google UK direct scrape blocked by consent-redirect (`consent.google.com`) from the sandbox. Confirmed by two `WebFetch` attempts that bounced to the GDPR consent gate. Cannot capture the live Google top 10 from this environment without an authenticated browser session.
- Bing direct scrape returned a Wikipedia-led page that does not reflect a real query for "steel doors Buckinghamshire" — almost certainly a sandbox-only anti-bot response, not the live SERP UK users see. Treated as unusable.
- **Substitute used: DuckDuckGo HTML SERP** (`html.duckduckgo.com`, `kl=uk-en`). DuckDuckGo serves Bing's organic index for non-ad results, so this is a defensible proxy for what Bing is showing UK users for this query right now.
- WebSearch (Anthropic's built-in) corroborated the result set and added a few additional ranking domains.
- Per-page detail captured by WebFetch against each suspected displacer.
- HTTP status of `https://steelr.co.uk/areas/buckinghamshire` confirmed 200 via curl, so the page is reachable; the regression is a ranking change, not a delisting.

## 2. Google UK top 10 — not captured directly

Could not scrape live Google SERP from sandbox (consent redirect). The 22 Apr → 10 May Serper data in `visibility-audit-20260513.md` is the last reliable Google measurement and it confirms `/areas/buckinghamshire` fell from #1 to outside top 30. A manual capture via the user's logged-in browser (Claude_in_Chrome) is required to enumerate the current Google top 10. Marking as **deferred — needs manual capture**.

## 3. Bing UK top 10 (via DuckDuckGo proxy)

| # | URL | Title |
|---:|---|---|
| 1 | `doorsofsteel.co.uk/steel-and-glass-doors-buckinghamshire/` | Doors of Steel Buckinghamshire |
| 2 | `samsondoors.co.uk/location/Steel-Security-Doors-Aylesbury-Buckinghamshire` | Steel Security Doors Aylesbury and Buckinghamshire |
| 3 | `we-do-doors.co.uk/58/we-do-doors-buckinghamshire` | Door Supplier & Installer in Buckinghamshire — We Do Doors |
| 4 | `steelr.co.uk/areas/beaconsfield` | Steel Doors Beaconsfield, Buckinghamshire — SteelR |
| 5 | `buckinghamshirejoinery.co.uk/` | Bucks Joinery (traditional joinery, not steel) |
| 6 | `charltonkingsinteriors.co.uk/projects/steel/buckinghamshire/` | Charlton Kings Interiors — Bucks |
| 7 | `steel-security-doors.uk/near-me/buckinghamshire/` | Steel Security Doors in Buckinghamshire |
| 8 | `luxbespokedoors.com/exterior-doors-buckinghamshire/` | LUX Bespoke Doors — Buckinghamshire |
| 9 | `cjdoors.co.uk/buckinghamshire/` | CJ Doors — internal door fitters |
| 10 | `shopfrontdesign.co.uk/doors/steel-security/buckinghamshire/` | Shopfront Design — heavy duty steel security |

**SteelR ranks #4 on the Bing-index side, but with `/areas/beaconsfield` (a leaf area page), not `/areas/buckinghamshire` (the county hub).** The hub is absent from the first 20 results. A site-specific query (`"steelr.co.uk/areas/buckinghamshire"`) returned "no results found" on DuckDuckGo, meaning Bing has either lost the hub URL from its index or has flagged it as duplicative of the leaf pages and suppressed it.

## 4. Top 3 displacers — audit

### #1 doorsofsteel.co.uk — "Doors of Steel Buckinghamshire"

- URL: `https://www.doorsofsteel.co.uk/steel-and-glass-doors-buckinghamshire/`
- H1: "Doors of Steel Buckinghamshire"
- Body: ~1,200–1,500 words
- Town mentions: 22 distinct locations listed alphabetically, including Aylesbury, Amersham, Beaconsfield, High Wycombe, Marlow, Milton Keynes
- Postcodes: none
- Schema: none visible in HTML extract
- Reviews / aggregateRating: none visible
- Trust badges: none (no Trustpilot, Checkatrade, Which?, FMB)
- Phone / address: London 0203 number, EC1V City Road address (so not actually Bucks-based)
- **Edge they hold over SteelR**: a single page that explicitly lists 22 named Bucks towns. SteelR's hub names only ~10 and omits the two biggest (Aylesbury, Milton Keynes). On a literal name-match basis for a county-level query, that page is denser.

### #2 samsondoors.co.uk — Aylesbury location page

- URL: `/location/Steel-Security-Doors-Aylesbury-Buckinghamshire`
- H1: "Buy Steel Security Doors in Aylesbury"
- Body: ~2,500–3,000 words (significantly longer than SteelR hub at 1,800)
- Town mentions: Aylesbury 8+, Buckinghamshire 3+
- Schema: LocalBusiness implied, Product schema with prices (which they DO show — they sell off-the-shelf steel security doors at fixed prices; SteelR cannot match this without violating house style)
- Reviews: single inline testimonial only, no Trustpilot
- Trust badges: "Since 1993" / "Over 20 years" credential, CE compliance
- **Edge they hold over SteelR**: established-since 1993 (32 years), explicit product schema with displayed prices, a per-town location-page strategy that goes deep on each town (Aylesbury, Chesham, High Wycombe, Marlow, Beaconsfield, Princes Risborough, Milton Keynes each have their own page). Their entire `/location/` directory looks programmatic but goes wider than SteelR's hub-+-leaf split.

### #3 we-do-doors.co.uk

- URL: `/58/we-do-doors-buckinghamshire`
- Returned HTTP 403 to the sandbox WebFetch — cannot extract content directly. Title indicates a county-level supplier-and-installer page. The fact that they sit at #3 on a county-level query with a single category page suggests either a strong local-authority backlink profile or a long-established domain. Not enumerable from this environment.

### Other notable competitor (#8) — luxbespokedoors.com

Worth flagging because they are the closest topical match to SteelR (premium bespoke, multi-tier security, FAQ-rich):
- 2,200–2,400 words (vs SteelR hub 1,800)
- LocalBusiness + FAQPage + Product schema all present (SteelR hub has BreadcrumbList + LocalBusiness but no FAQPage on the hub itself)
- 16 town references across 8 distinct Bucks towns (vs SteelR hub's ~13 across ~10 towns, with Aylesbury and Milton Keynes at zero)
- Q-Mark certification, 10-year warranty, marine-grade stainless components — different positioning but visibly credentialed
- Bournemouth-based but ranking on a Bucks query, which means their on-page Bucks signal density is sufficient on its own

## 5. Where SteelR sits now

- **`/areas/buckinghamshire` (the hub):** absent from the Bing/DuckDuckGo first 20. Site-specific search returns "no results found." Either de-indexed or suppressed as a near-duplicate of leaf pages. HTTP 200 confirmed.
- **`/areas/beaconsfield`:** Bing/DDG #4 on "steel doors Buckinghamshire", Bing/DDG #2 on "steel doors Beaconsfield".
- **`/areas/burnham`, `/areas/haddenham`, `/areas/chalfont-st-peter`:** also surfacing on a steelr.co.uk site-scoped query for "steel doors Buckinghamshire" — leaf pages are intact.
- **Google:** position not directly captured this run. Last Serper-measured data (10 May) had Bucks "not in top 30". No fresh Google data available; needs manual logged-in capture.

## 6. Maps state

Google Maps direct fetch blocked by consent redirect. From `visibility-audit-20260513.md`: the only Maps surfacing in the entire 10 May audit was Esher #6. The brand query "SteelR" itself returns no Maps listing. Documented root cause is 0 reviews on the GMB profile, which the user manages directly. Maps result for "steel doors Buckinghamshire" specifically was not measured in any captured run and should be assumed absent until proven otherwise.

## 7. Pattern across displacers

1. **County-level page strategy beats hub-+-leaf split for county queries.** Doors of Steel and We Do Doors each have a single dense county page; SteelR splits the signal across a thin hub and 11 leaf pages, with the hub itself missing the two biggest Bucks population centres (Aylesbury 60k, Milton Keynes 230k).
2. **Word count gap.** SteelR hub 1,800. Samson Aylesbury 2,500–3,000. LUX Bucks 2,200–2,400. Doors of Steel 1,200–1,500 (lower than SteelR but more name-dense).
3. **Programmatic per-town pages with strong on-page town density.** Samson has dedicated pages for 7 Bucks towns; LUX has a county page that names 8 distinct towns including Aylesbury and Milton Keynes (the two SteelR's hub omits).
4. **Domain age + commercial trust signals.** Samson "since 1993", LUX has Q-Mark, We Do Doors HTTP 403 to sandbox suggests aggressive anti-scrape (often correlated with established commercial sites). SteelR is ~6 weeks live.
5. **None of the top 10 use Trustpilot, Checkatrade, Which?, or FMB** in the visible page content — so the displacement is not a review-count gap on the page itself. The signal is content density + domain age + programmatic depth.

## 8. What SteelR would need to match or beat them

Ordered by leverage, all **Reasoned** tier per the recommendation gate (no captured before/after, none have shipped before, all rely on logic from the data above):

1. **Add Aylesbury and Milton Keynes to the Bucks hub.** Current hub mentions zero of either despite both being in-county. This is the single clearest on-page gap and is cheap to reverse.
2. **Expand the hub from 1,800 → 2,400+ words** to match the median of the top 3 displacers, with explicit named-town paragraphs (not just a child-area grid).
3. **Add FAQPage schema to the hub.** Existing leaf pages don't carry it either; the hub is the right place to start because it's the level that ranks for the county query.
4. **Diagnose why Bing has dropped the hub from the index** (site-specific query returns nothing). Possible causes: hub is being treated as a near-duplicate of leaf pages, canonical URL conflict, or post-migration crawl drift. A direct Bing URL Inspection check is the cheapest next step.
5. **Build internal links from every leaf area page back to the Bucks hub** with the anchor "steel doors Buckinghamshire". If the leaves are stealing the signal, give the hub the cluster authority back.

Items 1–3 are cheap to reverse. Item 4 is diagnostic only. Item 5 is medium-reversibility but should be reviewed before shipping in case it cannibalises the leaf-page rankings that are currently working.

## Caveats

- Google top 10 not captured. The whole report leans on Bing-index data via DuckDuckGo. Google may show a different displacer set. A logged-in browser capture against Google UK is needed before any of the recommendations above are acted on.
- The "Doors of Steel" page is the #1 Bing displacer with no schema, no reviews, no trust badges, and 1,200–1,500 words. If Bing alone is showing this result, Google's algorithm may be weighting different signals; the recommendation set above prioritises on-page content density which is the lowest-risk fix regardless of which engine is the binding constraint.
