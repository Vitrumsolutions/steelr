# Forensic: /areas/buckinghamshire schema and indexability

Date: 2026-05-13
Scope: JSON-LD, canonical, meta, robots, sitemap, X-Robots-Tag, www and trailing-slash hygiene.
Verdict: PASS. No schema or indexability defect found on the regressed page.

## 1. Method

1. Read source: `src/app/areas/[slug]/page.tsx`, `src/app/sitemap.ts`, `public/robots.txt`.
2. Curl live page headers and HTML for `https://steelr.co.uk/areas/buckinghamshire`.
3. Curl live page headers and HTML for `https://steelr.co.uk/areas/surrey` (control sibling, same template).
4. Curl sitemap `https://steelr.co.uk/sitemap.xml`.
5. Extract canonical, title, meta description, robots, OG, every `<script type="application/ld+json">` block. Parse each as JSON. Inspect `@type`, `@id`, URL fields.
6. Probe `https://www.steelr.co.uk/areas/buckinghamshire` and `https://steelr.co.uk/areas/buckinghamshire/` for canonicalisation behaviour.

## 2. Page metadata + canonical audit

Live `/areas/buckinghamshire`:

| Field | Value |
|---|---|
| HTTP status | 200 OK |
| X-Robots-Tag header | not present |
| Meta robots | not present (defaults to index, follow) |
| Canonical | `https://steelr.co.uk/areas/buckinghamshire` |
| Title | `Steel Doors Buckinghamshire | Bespoke Steel Front Doors | SteelR` (64 chars) |
| Meta description | 182 chars |
| OG title | `Steel Doors Buckinghamshire | SteelR` |
| OG description | 207 chars |
| OG url | `https://steelr.co.uk/areas/buckinghamshire` (matches canonical) |
| OG image | `https://steelr.co.uk/images/gallery/steelr-black-ornate-double-gable.jpg` |
| OG type | `website` |
| X-Vercel-Cache | HIT |
| Etag | stable |

Canonical hygiene: non-www, no trailing slash, no mixed protocol. Matches the deployed URL exactly.

Title is 64 chars, 4 over the 60-char soft ceiling but within the practical SERP truncation point for short brand names. Non-blocking.

Meta description is 182 chars, 22 over the 160-char soft ceiling. Google may truncate the trailing fragment. Non-blocking. Same boilerplate is used on Surrey (173 chars) which did not regress, so length is not a differentiator.

## 3. JSON-LD blocks parsed

Four blocks render on the live page. All parse cleanly.

| # | @type | Bytes | Parse | Notes |
|---|---|---|---|---|
| 1 | HomeAndConstructionBusiness | 8063 | OK | Site-wide block from `layout.tsx`. `@id = https://steelr.co.uk/#business`. url = `https://steelr.co.uk`. Carries address, geo, openingHours, knowsAbout, full sameAs. |
| 2 | BreadcrumbList | 352 | OK | 3 items. Home -> Areas -> Buckinghamshire. All `item` URLs absolute and non-www. |
| 3 | HomeAndConstructionBusiness | 1386 | OK | Per-area block from `page.tsx`. Same `@id` as block 1, so Google merges into the parent entity. url = `https://steelr.co.uk/areas/buckinghamshire`. `areaServed = Array(11)` with 11 child town Places (Beaconsfield, Gerrards Cross, Amersham, Marlow, etc.). `priceRange = $$$$`. description = 481 chars. |
| 4 | FAQPage | 2323 | OK | 4 Q&A pairs, each as Question + acceptedAnswer of type Answer. |

All four `@type` values are Google-supported. No deprecated types. No empty fields. No placeholder URLs.

The `@id` reference pattern (per-area block reuses the site `@id`) is the documented fix for the "LocalBusiness missing required fields" warning flagged on 29 Apr 2026. Google merges the per-area block with the layout-level block. Both blocks therefore inherit address, geo, telephone, openingHoursSpecification, aggregateRating from the parent entity. This is structurally correct.

## 4. Sitemap and robots check

`https://steelr.co.uk/sitemap.xml` contains 313 `<loc>` entries. `/areas/buckinghamshire` is present:

```
<loc>https://steelr.co.uk/areas/buckinghamshire</loc>
```

`/areas/surrey` is also present.

`sitemap.ts` line 22 sets `priority: 0.8` for `type === "hub"`, which Buckinghamshire is. Matches the CLAUDE.md spec.

`public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://steelr.co.uk/sitemap.xml
llms.txt: https://steelr.co.uk/llms.txt
llms-full.txt: https://steelr.co.uk/llms-full.txt
```

No Disallow rules. No path-specific blocks. `/areas/buckinghamshire` is fully crawlable.

## 5. Live HTML vs source diff

Source declares three `<script type="application/ld+json">` blocks in `page.tsx` (BreadcrumbList, HomeAndConstructionBusiness, FAQPage). Live HTML renders all three plus a fourth block from `layout.tsx` (site-wide HomeAndConstructionBusiness). Render parity is complete. No block declared in source is missing from the live HTML. No block in the live HTML is undeclared.

Canonicalisation probe:

- `https://www.steelr.co.uk/areas/buckinghamshire` returns 308 -> non-www canonical. Correct.
- `https://steelr.co.uk/areas/buckinghamshire/` returns 308 -> trailing-slash stripped. Correct.

No duplicate-URL leakage. Vercel edge enforces one canonical address per page.

## 6. Bucks vs Surrey diff

The two pages share the same template, the same metadata generator, and the same schema generator. The only differences are the data substitutions (name, region, child town names, FAQ wording, hero image, gallery images).

| Field | Buckinghamshire | Surrey | Material? |
|---|---|---|---|
| HTTP status | 200 | 200 | no |
| Canonical | non-www, no trailing slash | non-www, no trailing slash | no |
| Meta description length | 182 chars | 173 chars | no (both over 160 boilerplate) |
| Title length | 64 chars | 55 chars | no |
| Robots header | absent | absent | no |
| JSON-LD block count | 4 | 4 | no |
| JSON-LD parse | all OK | all OK | no |
| BreadcrumbList items | 3 | 3 | no |
| HomeAndConstructionBusiness `@id` | `https://steelr.co.uk/#business` | `https://steelr.co.uk/#business` | no |
| Per-area areaServed | Array(11) child towns | Array(12) child towns | no |
| FAQPage Q count | 4 | 4 | no |
| Sitemap presence | yes, priority 0.8 | yes, priority 0.8 | no |

There is no schema, canonical, meta, robots, sitemap or render-parity difference between the regressed page and the healthy sibling. The 0-position regression on Bucks (#1 -> dropped) is not caused by anything within the scope of this audit.

## 7. Red flags

None within scope. Specifically, none of the following are present:

- No JSON-LD parse error.
- No deprecated or unsupported `@type`.
- No empty required field on any block.
- No placeholder URL (`example.com`, dev or staging host).
- No `noindex` or `nofollow` meta or X-Robots-Tag.
- No canonical pointing away from the deployed URL.
- No www / non-www mixing.
- No trailing-slash inconsistency.
- No sitemap omission.
- No robots.txt disallow.
- No OG field missing.
- No render-time drift between source declarations and live HTML.

## Conclusion

The Bucks regression must be caused by something outside this audit scope. Likely candidates (out of scope here, flagging for the parent investigation):

1. Backlink loss or competitor link gain.
2. Content freshness signals (no recent edit to the area data file for Bucks specifically).
3. Cannibalisation from a newer page in the corpus targeting the same query (`/sr3-vs-sr4-residential-steel-doors-uk`, `/luxury-steel-entrance-door-london`, the `/steel-front-door-vs-composite` spec-table update).
4. SERP-level intent shift (Google now ranking a different page type for "steel doors Buckinghamshire").
5. Local Maps signal shift that bled into organic (0 GBP reviews).
6. CWV regression on this specific URL.

None of those are within JSON-LD, canonical, meta, robots, or sitemap scope. Schema integrity gate: PASS.
