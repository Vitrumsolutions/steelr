# Schema + Head Integrity — SteelR — 2026-04-27

Audit run by `seo-schema-validator` against `C:\Users\SOT\Documents\Projects\steelr` (Next.js 16 App Router).

## Validation summary

- **JSON-LD blocks scanned:** 33 distinct schema blocks across 24 page files (plus dynamic blocks rendered per route on `/areas/[slug]`, `/blog/[slug]`, `/collection/[slug]`)
- **Parse errors:** 0. Every block is built via `JSON.stringify(...)` over a JS object literal. Stringify output is guaranteed-valid JSON.
- **Non-Google-supported types:** 0. Types in use: `HomeAndConstructionBusiness` (subclass of `LocalBusiness`), `Organization`, `AboutPage`, `WebPage`, `WebSite`, `CollectionPage`, `BreadcrumbList`, `FAQPage`, `Article`, `Product`, `HowTo`. All Google-supported.
- **Canonical consistency:** PASS. 32 of 32 canonical declarations point to `https://steelr.co.uk` (apex, non-www, https). No mixed canonicals. Sitemap, robots.txt, schema URLs, and `metadataBase` all align.
- **Trailing slash policy:** PASS. Zero trailing slashes anywhere. Sitemap, canonicals, internal `<Link href>`, and schema `url`/`item` fields are all consistent.
- **Pages with valid OG tags:** 13 of 32 page files declare a full `openGraph` block with an explicit `images` array. The remaining 19 inherit `images` (and `siteName`, `twitter`) from the root `layout.tsx` per Next.js Metadata field-merge semantics, which is acceptable but not optimal.
- **Meta descriptions in range (120–160):** 6 of 32. **22 pages exceed 160 characters.** This is the dominant finding (see Important section). No page falls below 80 chars except `/terms` at 122 (in range).
- **hreflang issues:** 0. hreflang is not used anywhere. UK-only site, no multi-locale, so this is correct.
- **Robots conflicts:** 0. `robots.txt` allows everything. Only `/thank-you` carries `index: false` (intentional, conversion-confirmation page). `/ai-answers` carries explicit `index: true`. No `X-Robots-Tag` headers in `next.config.*`, `middleware.*`, or `vercel.json` (none of those files carry header overrides).

## Critical issues

None. There are no FAIL-class regressions in this codebase. Schema parses, canonicals are uniform, robots are clean, no hreflang misuse, no contradictory directives. SteelR's schema/head layer is solid as a baseline.

## Important issues

### 1. 22 of 32 meta descriptions exceed 160 characters

Google truncates meta descriptions at roughly 155–160 characters on desktop and ~120 on mobile. Anything beyond that is replaced with an ellipsis. The descriptions below are all written, accurate, and SR4-aligned, but the closing clauses (typically the "FD30 fire rated" tail) will not show in SERPs. Worth tightening on the higher-priority pages especially.

Pages over 160 chars (file:line, length):

- `src/app/layout.tsx:35` — root description, **360 chars**
- `src/app/about/page.tsx:9` — **250 chars**
- `src/app/security/page.tsx:11` — **263 chars**
- `src/app/security-specification/page.tsx:8` — **266 chars**
- `src/app/process/page.tsx:11` — **245 chars**
- `src/app/contact/page.tsx:9` — **246 chars**
- `src/app/areas/page.tsx:14` — **177 chars**
- `src/app/lookbook/page.tsx:11` — **254 chars**
- `src/app/colours/page.tsx:10` — **180 chars**
- `src/app/fire-rated-doors/page.tsx:11` — **257 chars**
- `src/app/ai-answers/page.tsx:9` — **226 chars**
- `src/app/bespoke-steel-front-doors-uk/page.tsx:9` — **257 chars**
- `src/app/sr3-residential-steel-door/page.tsx:9` — **290 chars**
- `src/app/pas-24-steel-entrance-door/page.tsx:9` — **272 chars**
- `src/app/secured-by-design-steel-front-door/page.tsx:9` — **246 chars**
- `src/app/thermally-broken-steel-front-door/page.tsx:9` — **245 chars**
- `src/app/fire-rated-fd30-front-door/page.tsx:9` — **287 chars**
- `src/app/steel-front-door-vs-composite/page.tsx:9` — **279 chars**
- `src/app/uk-steel-doors-vs-imported/page.tsx:9` — **272 chars**
- `src/app/luxury-steel-entrance-door-london/page.tsx:9` — **277 chars**
- `src/app/steel-front-door-cost-uk/page.tsx:9` — **244 chars**
- `src/app/areas/[slug]/page.tsx:78` — dynamic, **~210–225 chars** depending on label

Pages in range (good): `/privacy` 159, `/terms` 122, `/blog` 188 (slightly over), `/sitemap` 145, `/thank-you` 153.

### 2. Product schema on collection door pages has no `offers` block

`src/app/collection/[slug]/page.tsx:78–112` emits `@type: Product` with `name`, `description`, `image`, `brand`, `manufacturer`, `category`, `material`, `countryOfOrigin`, `additionalProperty`, `url` — but no `offers`. Google's Rich Results validator treats Product without `offers` as a structured-data warning ("Missing field offers"). It does not block indexing, but it does prevent rich product snippets and clutters the GSC enhancements report.

CLAUDE.md (lines 270 and SEO Fixes 8 Apr) explicitly removed the `offers` block to stop a "Missing field price in offers" GSC error caused by no real prices. So the team is aware. The cleaner fix is to drop `@type: "Product"` entirely on these pages and use `@type: "CreativeWork"` or `@type: "ImageObject"` (as a portfolio item, not a sellable SKU), since SteelR's pricing model is bespoke and there is no listable price. Worth raising with the user before changing.

### 3. Lookbook page has no JSON-LD at all

`src/app/lookbook/page.tsx` — page declares Metadata (title, description, canonical, OG, Twitter) but emits zero `<script type="application/ld+json">` blocks. Every other content page on the site has at least a BreadcrumbList. Adding `BreadcrumbList` (Home → Lookbook) and an `ImageGallery` or `CollectionPage` schema would bring it to parity with peers.

### 4. Root description in `layout.tsx` is 360 characters

`src/app/layout.tsx:35`. This is the global default that Next.js falls back to on any page that doesn't override (currently nothing falls back — every page sets its own — but it still ships in `<head>` for the homepage `/` which has no per-page metadata). Trim to ≤160. The first 160 chars currently are:

> "Bespoke steel front doors for your home, designed and installed nationwide. PAS 24 certified, SR3 rated as standard with SR4 (LPS 1175) commercial-grade…"

That cut-off is fine on its own. Suggest making it the official text.

## Polish

### 5. Topic and product pages don't declare explicit `openGraph.images`

19 pages set `openGraph` but no `images` array, so they inherit from root layout (`/og-image.png`). This works, but every topic page visually deserves a unique social card. Already done correctly on `/security`, `/colours`, `/fire-rated-doors`, `/areas`, `/areas/[slug]`, `/blog/[slug]`, `/collection/[slug]`, `/ai-answers`, `/lookbook`. The 10 Phase 1D topic pages plus `/about`, `/process`, `/contact`, `/security-specification`, `/blog`, `/sitemap`, `/thank-you`, `/design-estimate`, `/privacy`, `/terms`, `/collection`, `/collection/sidelights` all rely on inherited image. Low priority.

### 6. Twitter card not set on every OG-equipped page

`/security-specification`, `/bespoke-steel-front-doors-uk`, `/sr3-residential-steel-door`, `/pas-24-steel-entrance-door`, `/secured-by-design-steel-front-door`, `/thermally-broken-steel-front-door`, `/fire-rated-fd30-front-door`, `/steel-front-door-vs-composite`, `/uk-steel-doors-vs-imported`, `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk` set `openGraph` but no `twitter:` block. Twitter falls back to OG. Acceptable, but explicit `twitter: { card: "summary_large_image", ... }` is cleaner.

### 7. Image URLs in `Article` schema use absolute path correctly

`src/app/blog/[slug]/page.tsx:203` — `image: \`https://steelr.co.uk${post.image}\`` — correct (Article schema requires absolute). One thing to watch: the `post.image` field is checked relative to the website root (`/images/gallery/...`) and is concatenated cleanly. No bug, just noting the pattern is brittle if someone ever sets `post.image` to a remote URL — would produce `https://steelr.co.ukhttps://...`. Add a guard (`post.image.startsWith('http') ? post.image : \`https://steelr.co.uk${post.image}\``) when convenient.

### 8. `LocalBusiness` `sameAs` URLs not recently verified

`src/app/layout.tsx:121–126` lists 4 `sameAs` URLs:

- `https://www.instagram.com/steelrdoors`
- `https://www.pinterest.co.uk/steelrdoors`
- `https://www.linkedin.com/company/steelr`
- `https://www.google.com/maps/place/SteelR+Bespoke+Steel+Entrance+Doors`

The brief asks for one HEAD per URL. I have not made network calls in this audit (read-only spec). Recommend adding a one-off check (e.g. `curl -I` on each) before any major schema review — verifying these resolve to 200 keeps schema authority high. The Google Maps URL in particular is the kind of thing that breaks silently when a GBP profile is renamed.

### 9. FAQ on the homepage `<script>` block sits at end of JSX, not in `<head>`

`src/app/page.tsx:530` — the `FAQPage` JSON-LD is rendered inside the page body after the FAQ section, not via `<Head>`. Google parses JSON-LD anywhere on the page, so this is functionally fine, but the convention used by every other page on the site (and by Next.js metadata) is to keep schema near the top of the JSX or in a layout. Cosmetic.

### 10. Process page banner uses `<p>` instead of `<h1>`

`src/app/process/page.tsx:113–120` — "Process" header rendered as `<p>`, not `<h1>`. Schema Article/HowTo doesn't require `<h1>` per se, but it's an a11y/SEO best-practice gap. Out of scope for this audit (delegate to `accessibility-reviewer`); flagging because head/heading hygiene often correlates.

## Recommended fix order (highest leverage first)

1. **Trim the 22 over-length meta descriptions to ≤160 chars.** Highest-volume win, directly visible in SERP CTR. Start with the layout root (360→160), then the 10 Phase 1D topic pages (highest SEO-priority pages on the site). One commit, low risk.
2. **Decide on Product schema on `/collection/[slug]` pages.** Either keep current (warnings persist in GSC enhancements) or convert to `CreativeWork`/`ImageObject` to clear them. Either is fine; just pick one and move on.
3. **Add BreadcrumbList JSON-LD to `/lookbook`.** Two-line change, brings the page to schema parity with the rest of the site.

Everything else is polish and can wait.
