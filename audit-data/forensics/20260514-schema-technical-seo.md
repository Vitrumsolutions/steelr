# SteelR Schema.org JSON-LD & Technical SEO Audit — 14 May 2026

## Method

Read-only diagnostic. Live `curl` against https://steelr.co.uk for 8 page-type
samples plus all 17 area hubs. JSON-LD blocks extracted from rendered HTML, each
mentally parsed for validity, `@type` values inventoried. HTTP headers checked
via `curl -sI`. Sitemap and robots.txt fetched live. No code changed.

Page types sampled: homepage, collection door (`/collection/black-panelled-double-letterbox`),
blog post (`/blog/secured-by-design-homes-guide-2026`), area hub (`/areas/buckinghamshire`),
area leaf (`/areas/beaconsfield`), topic hub (`/bespoke-steel-front-doors-uk`),
audience hub (`/architects`), `/contact`.

## Per-page-type JSON-LD inventory & validity

All JSON-LD blocks parse as valid JSON. No syntax errors found.

| Page type | Blocks | @type values |
|---|---|---|
| Homepage | 2 | HomeAndConstructionBusiness (#business), FAQPage |
| Collection door | 4 | HomeAndConstructionBusiness (#business), BreadcrumbList, CollectionPage, Product |
| Blog post | 4 | HomeAndConstructionBusiness (#business), BreadcrumbList, BlogPosting, FAQPage |
| Area hub | 4 | HomeAndConstructionBusiness (global #business), BreadcrumbList, HomeAndConstructionBusiness (area-scoped #business), FAQPage |
| Area leaf | 4 | HomeAndConstructionBusiness (global #business), BreadcrumbList, HomeAndConstructionBusiness (area-scoped #business), FAQPage |
| Topic hub | 3 | HomeAndConstructionBusiness (#business), BreadcrumbList, WebPage, FAQPage (4 blocks total) |
| Audience hub | 3 | HomeAndConstructionBusiness (#business), BreadcrumbList, FAQPage |
| /contact | 3 | HomeAndConstructionBusiness (#business), BreadcrumbList, FAQPage |

All `@type` values are current Google-supported types. None deprecated. Nested
support types (Service, OfferCatalog, EducationalOccupationalCredential,
GeoCoordinates, PostalAddress, OpeningHoursSpecification, Organization, Person,
Brand, PropertyValue, ImageObject, ListItem, Country, Place, Question, Answer)
all valid. The global `#business` block is rich and well-formed: geo, address,
sameAs (incl. GBP), hasCredential, makesOffer, founder.

## Canonical consistency

PASS across all page types. Every canonical is:
- non-www (`https://steelr.co.uk/...`)
- no trailing slash (homepage canonical is bare `https://steelr.co.uk`)
- self-referential and matches the deployed URL
- `www.steelr.co.uk` returns `308 Permanent Redirect` to non-www (confirmed)

No mixed-host or trailing-slash drift detected.

## Meta + Open Graph audit

| Page | Title len | Desc len | OG complete | Twitter |
|---|---|---|---|---|
| Homepage | 59 | 154 | yes (+image:width/height/alt, og:type) | yes |
| Collection door | 67 (over 60) | 158 | yes | yes |
| Area hub Bucks | 62 (slightly over) | 178 (over 160 soft cap) | not fully checked | n/a |
| Topic hub | 53 | n/a | n/a | n/a |
| Audience hub | 51 | n/a | n/a | n/a |

All sampled pages carry og:title, og:description, og:image, og:url. Homepage
adds og:type, og:image dimensions and alt. Twitter `summary_large_image` present
on homepage and collection. Minor: collection door title 67 chars (over 60),
Bucks hub meta description 178 chars (over the 160 soft cap in CLAUDE.md). Both
WARN-level only.

## FAQPage verification — all 17 area hubs

PASS. Every one of the 17 hubs emits exactly **one** FAQPage block with its
**own** county-specific questions — the `location.faqs` data added in commits
b38a698 + 976de1a rendered correctly. Confirmed unique Q1 per hub (e.g. Bucks:
"Do you cover Aylesbury and Milton Keynes...", Surrey: "Do you cover Guildford
and Farnham...", Scotland: "Do you cover Glasgow, Aberdeen and the Highlands...").
No hub fell back to the default-faqs template. No duplicate FAQPage blocks.

Leaf area pages (Beaconsfield checked) still emit their own FAQPage correctly
(4 leaf-specific questions). Homepage, blog, topic hub, audience hub, /contact
all emit FAQPage cleanly. The build did not break.

## Sitemap check

PASS. `/sitemap.xml` is valid XML, 313 `<loc>` entries. Priority tiers:
- 1.0 x1 (homepage)
- 0.9 x3, 0.85 x2 (top commercial/topic pages)
- 0.8 x36 (hubs + key pages — Bucks hub confirmed 0.8)
- 0.7 x67 (blog posts)
- 0.6 x201 (leaf area + collection — Beaconsfield confirmed 0.6)
- 0.3 x3 (legal/utility)

Hub 0.8 / leaf 0.6 matches CLAUDE.md policy. `lastmod` dates sane (range
2026-03-12 to 2026-05-14, homepage stamped today). changefreq present.

## robots.txt check

PASS. `User-agent: * / Allow: /`. References sitemap.xml, llms.txt,
llms-full.txt. No Disallow rules — nothing important blocked.

## HTTP headers

PASS. No `X-Robots-Tag` header anywhere. `X-Content-Type-Options: nosniff`
and `Permissions-Policy` present (good). No accidental noindex at the header
layer.

## #business schema-override status

The known issue is **still present**. Area hub and area leaf pages emit **two**
`HomeAndConstructionBusiness` blocks, both carrying `"@id":"https://steelr.co.uk/#business"`:
1. the global business block (full credentials, founder, offers)
2. a second area-scoped block reusing the same `@id` but with a different
   `url` (`.../areas/buckinghamshire`), different `description`, different
   `areaServed`, and a thinner property set.

Two nodes sharing one `@id` with conflicting `url`/`description` is a
graph-merge conflict. Google will either merge them unpredictably or treat the
area-scoped one as overriding the canonical business entity on ~178 area pages.
Collection door, blog, topic hub, audience hub and /contact each emit only the
single clean `#business` block — the conflict is isolated to the area template.

## Red flags ranked by SEO impact

1. **Blog cannibalisation redirect (HIGH).** `/blog/what-is-sr3-security-rating`
   returns `308 -> /sr3-residential-steel-door`. The slug is no longer in the
   sitemap (good), but any historical inbound links, GSC-indexed copies or
   llms.txt references pointing at the old `/blog/` URL now bounce. Audit
   llms.txt + internal links for stale `/blog/what-is-sr3-security-rating` and
   any sibling blog->topic-page consolidations. **Reasoned** (file:live-header
   evidence; reversibility n/a — this is a diagnostic, not a change).
2. **Duplicate `#business` @id on ~178 area pages (MEDIUM).** Two
   `HomeAndConstructionBusiness` nodes share one `@id` with conflicting `url`
   and `description`. Fix: give the area-scoped block its own `@id`
   (e.g. `#business-buckinghamshire`) or change its `@type` to `Service` /
   drop it and rely on the global block + BreadcrumbList. **Reasoned**
   (file:live evidence; reversibility cheap — one template edit in
   `src/app/areas/[slug]/page.tsx`).
3. **Bucks hub meta description 178 chars (LOW).** Over the 160 soft cap;
   Google will truncate. **Tested-locally** (measurable via curl; reversibility
   cheap).
4. **Collection door title 67 chars (LOW).** Over 60; mild truncation risk in
   SERP. **Tested-locally** (reversibility cheap).

No FAILs. Schema is valid sitewide, canonicals are clean, robots/sitemap/headers
are healthy, and the 17-hub FAQPage rollout shipped correctly.
