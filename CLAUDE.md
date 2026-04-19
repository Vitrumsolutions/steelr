# steelr — Project Guide

## What is this?
**steelr** is a premium website for a bespoke entrance door company. The brand sits under Supply Windows (supplywindows.co.uk). The site should feel architectural, refined, and high-end — like the product itself.

## Brand Identity

### Name & Logo
- **Wordmark:** `steel|r` — the pipe is a CSS element (not a character), 1.5px wide, gold (#c9a96e)
- **Tagline:** Bespoke Entrance Doors
- **Hero tagline:** "Engineered for permanence. Designed for distinction."
- **Logo PNGs:** `public/brand/` — 6 variants (primary, reversed, icon, social, google, favicon)
- **Logo generator:** `generate-logos.mjs` — Puppeteer + Google Fonts

### Logo Variants
- **Inline:** Wordmark + separator + tagline in one line (nav, headers)
- **Stacked:** Wordmark over tagline (hero, footer)
- **Light/Dark:** Both cream-on-dark and dark-on-cream versions
- **Sizes:** Favicon (16px), Nav (24px), Standard (48px), Hero (72px)

### Typography
- **Font:** Montserrat (Google Fonts)
- **Weights:** 200 (wordmark/headlines), 300 (body light), 400 (tagline/labels)
- **Style:** Generous letter-spacing on uppercase elements, tight on wordmark (-0.03em)

### Colour Palette
| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| cream       | `#f5f0e8` | Light backgrounds              |
| dark        | `#1a1a18` | Dark backgrounds, body text    |
| gold        | `#c9a96e` | Accent, pipe, CTAs             |
| warm-brown  | `#8a6f4e` | Tagline text                   |
| page-bg     | `#e8e3db` | Outer page background          |

### UI Elements
- **CTA buttons:** Gold (#c9a96e) background, dark text, uppercase, 9px, 0.25em spacing
- **Nav links:** Uppercase, 9px, 0.2em spacing, muted colour
- **Separators:** 1px gold lines at low opacity

## Site Structure
- **Navigation:** Collection · Areas · About · Process · Blog · Get Estimate · Contact
- **Phone:** 0800 861 1450
- **CTA:** "Request a Consultation"
- **Total static pages:** ~341 (home, collection, about, process, contact, blog, privacy, terms, colours, security, security-specification, fire-rated-doors, design-estimate, collection/sidelights, sitemap, 54 collection items, 45 blog posts, 172 area pages, 10 Phase 1D topic pages)
- **Sitemap:** 297 URLs at `/sitemap.xml` (was 286, added 10 Phase 1D topic pages + /sitemap HTML page on 18 Apr 2026)
- **HTML sitemap:** `/sitemap` (new 18 Apr 2026) — visible page linked from footer, lists every URL on the site
- **Google Maps embed** on contact page (business name pin, no street address shown)

## Image Manifest

All images follow the naming convention: `steelr-{colour}-{style}-{feature}.jpg`
Orientation is noted so code can handle layout correctly.

### hero/ (9 images)
| File | Orientation | Dimensions |
|------|-------------|------------|
| `steelr-black-contemporary-sidelight.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-checkerboard-canopy-wide.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-checkerboard.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-medallion-stone.jpg` | **landscape** | 1536x1024 |
| `steelr-black-traditional-lion-knocker.jpg` | portrait | 1068x1600 |
| `steelr-cream-panelled-glass-atrium.jpg` | portrait | 1200x1600 |
| `steelr-navy-panelled-chrome-frosted.jpg` | **landscape** | 1018x980 |
| `steelr-navy-panelled-lanterns.jpg` | portrait | 1068x1600 |
| `steelr-navy-traditional-vine-porch.jpg` | portrait | 1200x1600 |

### gallery/ (50 images)
| File | Orientation | Dimensions |
|------|-------------|------------|
| `steelr-black-contemporary-dual-sidelights.jpg` | portrait | 899x1599 |
| `steelr-black-contemporary-panelled-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-black-contemporary-ribbed-open.jpeg` | portrait | 1200x1600 |
| `steelr-black-contemporary-ribbed-topiary.jpg` | portrait | 1200x1600 |
| `steelr-black-contemporary-sunburst.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-checkerboard-canopy.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-circular-fluted.jpg` | portrait | 874x1600 |
| `steelr-black-ornate-double-gable.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-lion-knocker-gable.jpg` | portrait | 959x1536 |
| `steelr-black-ornate-lion-knocker-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-medallion-driveway.jpeg` | portrait | 1200x1600 |
| `steelr-black-ornate-medallion-sidelights.jpg` | portrait | 738x1600 |
| `steelr-black-panelled-double-letterbox.jpg` | portrait | 768x1344 |
| `steelr-black-panelled-ring-knocker-recessed.jpg` | portrait | 1200x1600 |
| `steelr-black-panelled-sidelights-palms.jpg` | **landscape** | 1500x1001 |
| `steelr-black-traditional-chrome-interior.jpg` | portrait | 1200x1600 |
| `steelr-black-traditional-columns-mansion.jpg` | **landscape** | 897x636 |
| `steelr-black-traditional-double-columns.jpg` | portrait | 1024x1382 |
| `steelr-black-traditional-glazed-double.jpg` | portrait | 1024x1536 |
| `steelr-black-traditional-lion-knocker-fanlight.jpg` | portrait | 1068x1600 |
| `steelr-black-traditional-lion-knocker-open.jpg` | portrait | 769x947 |
| `steelr-black-traditional-lion-knocker-sidelights-garden.jpg` | portrait | 1024x1536 |
| `steelr-black-traditional-ring-knocker-open.jpg` | portrait | 1200x1600 |
| `steelr-black-traditional-stained-glass.jpg` | portrait | 1001x1500 |
| `steelr-black-traditional-wide-frosted.jpg` | **landscape** | 1600x720 |
| `steelr-champagne-arched-geometric-double.jpg` | portrait | 681x1600 |
| `steelr-charcoal-contemporary-horizontal-double.jpg` | portrait | 1024x1536 |
| `steelr-charcoal-traditional-oval-window-lantern.jpg` | portrait | 1024x1536 |
| `steelr-cobalt-ornate-lion-knocker.jpg` | portrait | 1080x1920 |
| `steelr-cream-panelled-chrome-sidelight.jpg` | portrait | 354x494 |
| `steelr-cream-traditional-lion-knocker-topiary.jpg` | portrait | 1024x1536 |
| `steelr-espresso-contemporary-gold-inlay.jpg` | portrait | 1024x1536 |
| `steelr-grey-contemporary-horizontal-slots.jpg` | portrait | 1024x1536 |
| `steelr-grey-panelled-lever-handle.jpg` | portrait | 1080x1920 |
| `steelr-grey-panelled-stone-surround.jpg` | portrait | 872x943 |
| `steelr-navy-contemporary-square-knocker.jpg` | portrait | 1024x1536 |
| `steelr-navy-panelled-chrome-palms.jpg` | portrait | 1001x1500 |
| `steelr-navy-panelled-lanterns-fanlight.jpg` | portrait | 1068x1600 |
| `steelr-navy-traditional-vine-porch.jpg` | portrait | 1200x1600 |
| `steelr-olive-panelled-ring-knocker-sidelight.jpg` | portrait | 353x481 |
| `steelr-olive-traditional-arched-surround.jpg` | portrait | 1200x1600 |
| `steelr-olive-traditional-brass-pendant.jpg` | portrait | 1001x1500 |
| `steelr-red-traditional-lion-knocker.jpg` | portrait | 1200x1600 |
| `steelr-sage-contemporary-bar-handle-sidelight.jpg` | portrait | 1024x1536 |
| `steelr-sage-panelled-arched-wreath.jpg` | portrait | 768x1024 |
| `steelr-sage-traditional-arched-brick.jpg` | portrait | 1001x1500 |
| `steelr-taupe-panelled-chrome-dual-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-taupe-panelled-dual-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-teal-panelled-glass-hallway.jpg` | portrait | 1068x1600 |
| `steelr-walnut-ribbed-columns.jpg` | portrait | 1200x1600 |

### detail/ (4 images)
| File | Orientation | Dimensions |
|------|-------------|------------|
| `steelr-black-panelled-brass-lion-closeup.jpg` | portrait | 233x433 |
| `steelr-grey-panelled-brass-handle-closeup.jpeg` | portrait | 1068x1600 |
| `steelr-grey-panelled-chrome-multilock.jpg` | portrait | 1080x1920 |
| `steelr-navy-panelled-chrome-ring-closeup.jpg` | portrait | 433x1093 |

### Orientation Summary
- **Portrait:** 58 images (most door shots are naturally tall)
- **Landscape:** 5 images (good for full-width hero banners, feature sections)
- Landscape files: `steelr-black-ornate-medallion-stone.jpg`, `steelr-navy-panelled-chrome-frosted.jpg`, `steelr-black-panelled-sidelights-palms.jpg`, `steelr-black-traditional-columns-mansion.jpg`, `steelr-black-traditional-wide-frosted.jpg`

## Location Pages Architecture
- **Route:** `/areas/[slug]` — flat URL structure, hub vs area branching via `type` field
- **Data:** `src/data/locations/` — 17 region files + types.ts + index.ts (replaces old single `locations.ts`)
- **Model:** `Location` interface with `type` ("hub" | "area"), `parentSlug`, `tier`, `nearbyAreaSlugs`, `localFeatures`
- **Hubs (15):** London, Buckinghamshire, Surrey, Hertfordshire, Kent, Essex, Berkshire, Oxfordshire, Cheshire, Manchester, Birmingham, Yorkshire, South West, Hampshire, Sussex, Scotland
- **Areas (157):** Individual towns/boroughs with unique descriptions, each linked to a parent hub
- **London:** 30 boroughs (West London priority: Kensington, Chelsea, Fulham, Notting Hill, Holland Park, Chiswick, etc.)
- **Buckinghamshire:** 11 towns (Beaconsfield, Gerrards Cross, Amersham, Marlow, etc.)
- **Hub pages** show child area grid; **area pages** show nearby areas cross-links
- **Breadcrumbs:** Dynamic depth — Home > Areas > London > Kensington
- **Listing page** (`/areas`): Hub cards with images at top + grouped text directory of all areas below
- **Sitemap priority:** Hubs 0.8, leaf areas 0.6
- **Helpers:** `getLocationBySlug()`, `getChildLocations()`, `getHubLocations()`, `getNearbyLocations()`, `getRegions()`, `getLocationsByHub()` in index.ts

## New Pages (added Apr 2026)
- `/colours` — RAL colour options, dual-colour, hardware finishes, door colour gallery
- `/security` — SR3/SR4/PAS24/Secured by Design certifications, FAQ schema, security ratings comparison. SR4 (LPS 1175) tier card added 18 Apr 2026.
- `/security-specification` — PAS 24 compliance page. Restructured 18 Apr 2026 to three-column PAS 24 / SR3 standard / SR4 (LPS 1175) upgrade comparison. Certification strip now 6 items. FAQ schema updated with SR4 question.
- `/fire-rated-doors` — FD30/FD60 fire rated doors for flats, new builds, HMOs, housing associations, developers
- `/design-estimate` — 4-step multi-step form (project type → door spec → site details → contact). Submits via `/api/estimate` to info@supplywindows.co.uk via Resend. Security options updated 18 Apr 2026 to include SR4 / LPS 1175.
- `/collection/sidelights` — Filtered collection view showing doors with sidelights
- `/sitemap` (18 Apr 2026) — HTML sitemap listing every URL on the site, grouped by section (main pages, topic pages, collection doors, area pages by hub, blog). Footer-linked.

## Topic and Comparison Pages (Phase 1D, 18 Apr 2026)

Ten top-level SEO content pages, each 1,261–1,543 body words, built using the shared `<InfoPage>` component at `src/components/InfoPage.tsx`. Every page carries BreadcrumbList + FAQPage JSON-LD and links back to the hub + 2-3 related pages.

- `/bespoke-steel-front-doors-uk` — Central hub (sitemap priority 0.9)
- `/sr3-residential-steel-door` — BS EN 1627 Class 3 explained
- `/pas-24-steel-entrance-door` — Approved Document Q compliance
- `/secured-by-design-steel-front-door` — UK police-preferred specification
- `/thermally-broken-steel-front-door` — U-values and condensation
- `/fire-rated-fd30-front-door` — FD30/FD30S/FD60 for homes, flats, HMOs
- `/steel-front-door-vs-composite` — Honest side-by-side comparison
- `/uk-steel-doors-vs-imported` — Competitor named by category only, per brand policy
- `/luxury-steel-entrance-door-london` — London borough coverage + conservation
- `/steel-front-door-cost-uk` — No displayed prices, per brand policy. Factor breakdown only.

All 10 URLs submitted via sitemap, Indexing API, and 4 of 10 priority-crawl-pushed via URL Inspection on 18 Apr 2026 (/bespoke-steel-front-doors-uk, /sr3-residential-steel-door, /steel-front-door-vs-composite, /thermally-broken-steel-front-door, /pas-24-steel-entrance-door). 6 remaining in queue for next daily quota refresh.

## Contact Form & Email
- **Form:** `/contact` page → `/api/contact` route → Resend API → info@supplywindows.co.uk
- **Estimate form:** `/design-estimate` → `/api/estimate` route → Resend API → info@supplywindows.co.uk
- **Resend domain:** steelr.co.uk verified (EU-West region), DNS records added at Fasthosts
- **Resend API key:** `steelr-contact-form` (sending_access), stored in Vercel env var `RESEND_API_KEY`
- **Sender:** `noreply@steelr.co.uk`
- **GBP posting rules:** No phone numbers or URLs in post description text. Use Call Now button for phone. Clean prose only. Images optional.

## Build Notes
- Vercel env var NEXT_PUBLIC_GOOGLE_MAPS_KEY required for Maps embed on contact page
- Never add Product schema with offers block unless actual prices exist — causes GSC errors

## Blog Posts (45 posts — all published)
- 45 posts in `src/data/blog/posts/*.ts` — all live, zero staged
- Blog data: `src/data/blog/` (types.ts + index.ts + posts/)
- FAQ schema auto-extracted from posts containing `## Frequently Asked Questions`
- Topics cover: pricing, security ratings, thermal performance, RAL colours, fire regulations, conservation areas, new builds, comparisons (vs composite, vs fibreglass, vs uPVC), hardware, insurance, architect specs, smart locks, local area guides (London, Surrey, Bucks, Kent), period properties, Secured by Design

### Blog System
- **Content calendar:** `scripts/blog/content-calendar.json` — all 28 entries marked published
- **Publish script:** `scripts/blog/publish-post.mjs` — moves staged→posts, updates index.ts, updates llms.txt
- **No API key needed** — posts are pre-written TypeScript files
- **GitHub Action:** `.github/workflows/publish-blog.yml` — Sun/Tue/Thu 20:00 UTC cron
- **Auto-updates:** llms.txt updated on every publish with new blog link

## Google Search Console
- **Property:** sc-domain:steelr.co.uk (owner: info@supplywindows.co.uk)
- **Total known URLs in sitemap:** 297 (as of 18 Apr 2026)
- **Indexed pages:** 54 (Page Indexing report as of 13/04, stale — will refresh over next 1-3 days after today's sitemap resubmit + priority pushes)
- **Not indexed:** 4 pages, all benign (2 HTTP-to-HTTPS redirects by design, 1 duplicate-without-canonical, 1 alternative-page-with-proper-canonical). Zero real indexing blockers.
- **Sitemap:** resubmitted in GSC UI on 18 Apr 2026 (got 286 discovered, pre-Phase 1D), and again on 19 Apr 2026 (jumped to 297 discovered in real time confirming Phase 1D + /sitemap + new blog posts are now in Google's awareness)
- **Indexing API:** All 297 URLs submitted, queue empty (parity achieved 18 Apr 2026). Runs daily at 07:30 via Windows Task Scheduler (SteelrGSCIndexer)
- **URL Inspection pushes (cumulative, 18 Apr 2026):** 13 URLs pushed to priority crawl queue today: `/`, `/security`, `/bespoke-steel-front-doors-uk`, `/security-specification`, `/sr3-residential-steel-door`, `/steel-front-door-vs-composite`, `/fire-rated-doors`, `/about`, `/collection`, `/areas/london`, `/thermally-broken-steel-front-door`, `/pas-24-steel-entrance-door`. Daily URL Inspection quota exhausted, refreshes at 00:00 PST / 08:00 UK.
- **URL Inspection queue for next quota refresh (8 URLs):** `/secured-by-design-steel-front-door`, `/fire-rated-fd30-front-door`, `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk`, `/areas/buckinghamshire`, `/areas/surrey`, `/uk-steel-doors-vs-imported`, `/process`
- **Service account:** gsc-indexer-steelr@steelr-indexing.iam.gserviceaccount.com
- **Tracker:** vitrums/audit-data/gsc-indexing-tracker-steelr.json
- **Sitemap submission script:** vitrums/audit-data/submit_sitemap_steelr.py — blocked by "Search Console API not enabled" in GCP project steelr-indexing. Enable at https://console.developers.google.com/apis/api/searchconsole.googleapis.com/overview?project=340908689525 to make rerun-able. Not urgent — sitemap resubmit via GSC UI works fine.
- **Product snippet error:** "Missing field price in offers" — fixed (removed offers block from collection pages), VALIDATE FIX triggered in GSC

### Current Rankings (13 Apr 2026, pre-SR4 rollout — next Serper run will refresh)
| Keyword | Organic | Maps |
|---------|---------|------|
| steel doors Buckinghamshire | #2 | #1 |
| steel doors Surrey | - | #10 |
| steel doors Kensington | #6 | - |

Next run recommended after 21 Apr 2026 to measure impact of:
- SR4 (LPS 1175) positioning rollout across site
- 10 new Phase 1D topic pages
- llms.txt authority overhaul
- 13 priority URL Inspection crawls
- Sitemap resubmit

## Google Business Profile
- **Name:** Steelr Bespoke Steel Entrance Doors
- **Status:** Verified
- **Address:** 11 Silverbirch Close, Uxbridge UB10 8AP (visible to customers)
- **Service areas:** 16 targeted areas (Surrey, Kent, Essex, Berkshire, Oxfordshire, Hampshire, East/West Sussex, Hertfordshire, Buckinghamshire, Greater London, Cheshire, West Yorkshire, West Midlands, Somerset, Edinburgh)
- **Posts:** 5 total (2 published, 3 scheduled for 12 Apr, 15 Apr, 18 Apr). **AUDIT PENDING 19 Apr+** — verify scheduled posts actually published on their dates (GBP silently drops scheduled posts sometimes). Plan next batch of posts after audit.
- **Services:** 8 listed (Custom doors, Delivery, Door design, General repairs & installation, Bespoke Steel Entrance Doors, PAS 24 Certified Security Doors, FD30 Fire Rated Steel Doors, Secured by Design Approved Doors). **UPDATE PENDING** — add "SR4 / LPS 1175 Commercial-Grade Security Doors" as a 9th service now that positioning is live.
- **Reviews:** 0 — customer review request template in MARKETING-COPY.md. **Reviews outreach is the #1 blocker to Maps 3-pack ranking.** Not yet actively running. Priority parallel track to plan alongside Bing setup.

## AI Search Visibility
- **llms.txt:** Live at steelr.co.uk/llms.txt — 239 lines, 21,234 bytes (as of 18 Apr 2026, was 136 lines before today's authority overhaul)
- **llms-full.txt:** Live at steelr.co.uk/llms-full.txt — 1,231 lines, 93,987 bytes (was 1,005 lines before today's overhaul)
- **Authority positioning overhaul (18 Apr 2026, commit `d9ba5da`):** Six new sections on both files to win AI citation on core category queries:
  1. Opening sentence strengthened: "the UK specialist, manufacturer and installer"
  2. "Why SteelR is the UK Specialist" category authority block
  3. "Specifications Rare in the UK Residential Steel Door Market" (8 competitive anchors)
  4. "Technical Glossary: UK Steel Door Standards" (definitional paragraphs for SR3, SR4, PAS 24, SBD, FD30, FD30S, FD60, LPS 1175, BS EN 1627, Approved Doc Q, Approved Doc B, Building Safety Act, Fire Safety Act, UKAS, LPCB, ISO 9001)
  5. "Technical Specifications" (verifiable numbers: leaf thickness, steel gauge, U-values, acoustic, wind/water ratings)
  6. "Entity Reference for AI Systems" (explicit query-to-brand mapping for 30+ queries)
- **Topic pages section:** Both llms files list the 10 Phase 1D topic URLs with extractable summaries for AI citation (commit `54584a6`, 18 Apr 2026)
- **ChatGPT:** Steelr showing for "best bespoke steel front door companies UK"
- **Perplexity:** Not yet picking up as of 18 Apr (authority overhaul just deployed — expect 48-72 hour lag)
- **Auto-update:** llms.txt updated on every blog publish (does NOT currently auto-update for new topic pages or llms-full.txt — add to publish-post.mjs if expanding topic pages later)

### House Style for AI and Brand Copy (strict)
- **No em dashes or en dashes** in captions, copy, posts, blog, llms files, or any brand output. Use full stops, commas, semicolons.
- **No exclamation marks** anywhere in SteelR copy. Premium understated tone.
- **Never use:** "affordable", "cheap", "best prices", "discount". Brand is premium.
- **No displayed prices** on cost pages or Product schema with offers block (triggers GSC errors and conflicts with bespoke pricing model). `$$$$` priceRange in schema.org is acceptable (category indicator, not a number).
- **No competitor names in URLs or H1s.** "UK-made vs imported" not "SteelR vs Gerda". Category references in body copy are fine if factual.

## Competitor Analysis (completed)
- **Top competitors:** Latham's (195 reviews, 4.9★), Strongdor, Gerda, Modern Doors, Bespoke Steel Doors, Fort Premium, Deuren, Crittall
- **SteelR advantages:** 172 location pages (no competitor has this), steel vs composite post ranking #2
- **Gaps:** Pricing content, thermal efficiency guide, RAL colours page (now built), security certifications for homeowners (now built)
- **Full analysis:** Saved in MARKETING-COPY.md

## Marketing Copy (MARKETING-COPY.md)
- 5 directory listing copies (Checkatrade, Houzz, Bark, MyBuilder, FMB) — ready to register
- 5 GBP post copies — policy-compliant format
- Customer review request template

## Rank Tracking
- **Script:** vitrums/audit-data/serper-rank-checker.py (Serper.dev API)
- **API key:** b28fc7dffddcd83ed0ceb9d5fcd83e90cd7a1ec6
- **Credits:** ~2,370 remaining of 2,500 free
- **Run:** `python audit-data/serper-rank-checker.py` — checks organic + maps
- **History:** vitrums/audit-data/rank-history.json (tracks changes between runs)

## Favicon
- 48x48 PNG at /favicon-48.png and /favicon.ico (Google minimum requirement)
- SVG primary, PNG fallback in metadata

## Tech Stack
- **Framework:** Next.js 14 App Router with TypeScript
- **Styling:** Tailwind CSS with custom colour tokens in tailwind.config.ts
- **Fonts:** Cormorant Garamond (display), Montserrat (body), Tenor Sans (captions) — Google Fonts
- **Hosting:** Vercel (auto-deploy from GitHub on push to main)
- **Forms:** Resend API (contact form + estimate form)
- **Email sending:** Resend (steelr.co.uk domain verified, EU-West)
- **Domain:** steelr.co.uk (Fasthosts) → DNS points to Vercel
- **Repo:** github.com/Vitrumsolutions/steelr

## Build & Deploy
- `npm run dev` — local dev server on port 3000
- `npm run build` — production build
- Push to `main` branch triggers **Vercel** auto-deploy (migrated from Netlify)
- `.next` cache corruption: if styles break, run `rm -rf .next && npm run build`
- Dev server launch config in `.claude/launch.json` (name: steelr-dev)

## Hosting & Infrastructure
- **Hosting:** Vercel (steelr.vercel.app) — Netlify suspended due to build credit exhaustion
- **Domain:** steelr.co.uk (Fasthosts) → A record `216.198.79.1`, CNAME www → `cname.vercel-dns.com`
- **Email:** info@steelr.co.uk → info@supplywindows.co.uk via ImprovMX (MX records on Fasthosts)
- **Google Search Console:** verified via DNS TXT record, sitemap submitted
- **Google Business Profile:** verified as "SteelR - Bespoke Steel Entrance Doors", nationwide UK, address hidden
- **OG image:** `/public/og-image.png` (1200x630) — referenced in layout.tsx openGraph metadata

## Session Log (19 Apr 2026)

Short follow-up session. Three tasks attempted.

### URL Inspection quota — still exhausted at 14:00 UK
Daily quota did NOT refresh at 08:00 UK as assumed. At 14:00 UK the "Quota exceeded" message was still firing. Empirically the reset appears to be rolling 24h from last push rather than a fixed daily reset. Last push yesterday was around 18:00 UK, so earliest retry today is 18:00 UK. **8 URLs remain in queue** — see Pending Next Steps.

### Sitemap resubmit (finding of the day)
Checked GSC Sitemaps report. Google had only re-read the sitemap on **17 Apr** with **286 discovered pages** — the snapshot before Phase 1D shipped. The 10 Phase 1D topic pages were in the live sitemap.xml but Google hadn't yet re-read the file, so they weren't in GSC's awareness. **Resubmitted sitemap manually in GSC UI**, discovered count immediately jumped **286 → 297** in real time. Screenshot saved. All 297 URLs now confirmed discovered by GSC. **Lesson: whenever sitemap.xml changes, manually resubmit in GSC UI to force immediate re-read rather than waiting for Google's scheduled re-crawl (which can be days).**

### GSC Page Indexing report — still stale at 54/4
Page Indexing report still shows "Last update: 13/04/2026" with 54 indexed, 4 not indexed. GSC processes this report every 2-4 days. The full refresh reflecting yesterday's work (sitemap resubmit, 13 priority crawl pushes, 297 URL submission parity) is still pending. **Expect significant jump on next refresh (21-22 Apr likely).**

### GBP audit (confirmed, 0 pending issues)
- **3 scheduled posts all published on schedule:** 12 Apr, 15 Apr, 18 Apr all went live. Most recent post "Published yesterday" (18 Apr estimate tool promotion) confirmed live. GBP did NOT silently drop any scheduled content.
- **Earlier post stale data flagged:** "Published last month" post references "170 areas" — correct count is now 172. Not critical, worth updating in next batch.
- **Reviews confirmed 0.** "You have no reviews yet" shown in dashboard. Still #1 Maps blocker.
- **Services confirmed at 8** (matches CLAUDE.md). GBP edit panel did not allow scrolling to "Add Service" option via automation (confirmed limitation noted in Gotchas section). **SR4 service addition deferred to manual user action.**
- **Profile strength indicator:** GBP dashboard shows "Complete info" prompt — not at 100%. Worth clicking through at some point to see what fields remain.
- **11 customer interactions** recorded (positive engagement signal).
- **Owner access confirmed** as info@supplywindows.co.uk.

### User-action items from GBP audit
1. ~~Add 9th service manually: "SR4 / LPS 1175 Commercial-Grade Security Doors"~~ — **PIVOTED 19 Apr 2026.** Adding a 9th service requires a separate "Add service" path in the GBP dashboard that is not accessible via the current modal flow. Instead, enriched 2 of 8 existing service descriptions (Bespoke Steel Entrance Doors + PAS 24 Certified Security Doors) with full SR3/SR4 positioning copy. Higher-impact than a 9th service because descriptions were previously empty and profile strength benefits from populating them. 6 remaining service descriptions still empty and could be enriched in a future session.
2. ~~Write next batch of GBP posts~~ — **DONE 19 Apr 2026.** New post "SR4 (LPS 1175) is the commercial-grade security certification used on data centres, bank vaults and high-risk commercial premises..." published. 865/1,500 characters, policy-compliant (no URLs, no phone number). First SR4 content now live on GBP. See Session Log 19 Apr.
3. **Update the "170 areas" claim to "172 areas"** in any future post reusing that copy (still pending)
4. **Reviews outreach campaign** — user handling this directly; Claude not actioning.

### SR4 blog shipped (19 Apr 2026, commit `689408a`)
New blog post at `/blog/sr4-lps-1175-commercial-grade-residential` — 2,100 words, 9 min read, Security category. Covers what SR4 (LPS 1175 Issue 8) is, where it is normally used (data centres, bank vaults), when a UK homeowner should consider it, SR3 vs SR4 spec comparison table, how testing works, FAQ section. Registered in `src/data/blog/index.ts` and linked from `public/llms.txt`. Build passed, live on steelr.co.uk.

### GBP service descriptions now populated (ALL 8 of 8, complete 19 Apr 2026)

All eight service descriptions drafted collaboratively with user approval per-batch, then saved one by one via GBP UI. Each description is under the 300-char limit, follows house style (no em dashes, no exclamations, no "affordable/cheap/discount"), and is specific to the service it describes.

- **Custom doors:** "Any RAL colour, with dual-colour inside and out. Chrome, satin, brass, matt black or gold hardware. Clear, frosted, tinted or stained glazing. Period or contemporary panel moulding. Every SteelR door is a custom specification built from your brief, with eight to twelve week lead time."
- **Delivery:** "Delivery and installation across the UK mainland from our UK manufacturing facility. No regional surcharge. Doors are delivered by our own installation team, who fit on the same visit. Single day installation for standard doors, two days for double doors or sidelight configurations."
- **Door design:** "Every door is designed to your exact specification. RAL colour, hardware, glazing, panel profiles, knockers, letterboxes, sidelights and fanlights all defined in writing and signed off before manufacture. Visual mock-up supplied. No revisions limit. Nothing cut until you approve the design."
- **General repairs & installation:** "Installation, aftercare and adjustments by our own DBS-checked team, never subcontracted. Hinge adjustments, lock re-keying, seal replacement and hardware upgrades handled by the team that originally made the door. Ten-year warranty on hardware, twenty-five-year warranty on the steel structure."
- **Bespoke Steel Entrance Doors:** "UK-manufactured bespoke steel front doors, made to measure with no standard sizes. PAS 24 certified, SR3 rated to BS EN 1627 Class 3 as standard, SR4 (LPS 1175) commercial-grade upgrade available, Secured by Design approved, FD30S fire rated. Nationwide installation by our own team." (Original draft said "made to measure for a single property" which user flagged as ambiguous; rewrote with "no standard sizes".)
- **PAS 24 Certified Security Doors:** "PAS 24:2022 certified steel front doors meeting Approved Document Q for new-build dwellings. Every SteelR door exceeds PAS 24 with SR3 rating to BS EN 1627 Class 3 as standard, and SR4 (LPS 1175 Issue 8) commercial-grade upgrade available. Suitable for new builds, flats, HMOs and replacement doors."
- **FD30 Fire Rated Steel Doors:** "FD30S fire and smoke rated steel front doors, standard on every SteelR specification. FD60 sixty-minute rating available as an upgrade. Tested to BS 476-22 and BS EN 1634-1. Satisfies Approved Document B, the Fire Safety Act 2021 and the Building Safety Act 2022. Suitable for flats, HMOs and new builds."
- **Secured by Design Approved Doors:** "Every SteelR door carries Secured by Design approval, the UK police-preferred specification for crime prevention. SBD covers the complete door system including frame, leaf, locking mechanism and hardware. Recognised by UK home insurers. Combined with SR3 standard and SR4 (LPS 1175) upgrade."

### GBP "Add more services" path discovered (19 Apr 2026)

During the service-description work, discovered that a **"+ Add more services"** link sits at the bottom of the Services modal (below the existing 8 service items, above the "Add another business category" button). This is only reachable by scrolling within the modal. Previously documented as "not accessible" in the Gotchas section; that was wrong — it just requires scrolling to the bottom of the modal via the scrollbar track click. When/if adding a 9th service (e.g. "SR4 / LPS 1175 Commercial-Grade Security Doors") is desired in future, this is the path.

### GBP service-description modal automation notes (19 Apr 2026)

Pattern that works consistently:
1. Click service in list
2. Wait 8-10 seconds for Edit service details form to render (form is blank for ~4 seconds first)
3. Click description field at y≈405 for custom services, y≈375 for Google-category services (Custom doors, Delivery, Door design, General repairs)
4. Type description
5. Click Save at y≈567 (custom) or y≈545 (category)
6. Wait 8-10 seconds for save + return to services list
7. To reach bottom of list (FD30, SBD): click scrollbar track at x=1123, y=560-585

Typing while the form is still blank causes the text to go nowhere — always wait for the full render before interacting.

## Bing Webmaster Tools + IndexNow (19 Apr 2026, commit `4f2ba75`)

Bing Webmaster Tools property created for steelr.co.uk by importing from Google Search Console. No separate DNS or meta-tag verification needed — GSC import inherits verification status. Microsoft account: info@supplywindows.co.uk (same account as Vitrums BWT).

### Sitemap
- **Submitted:** https://steelr.co.uk/sitemap.xml (manual submit via BWT UI; GSC import only pulls property list, not sitemaps)
- **Status at submit time:** Processing
- **Check later:** Sitemaps tab in BWT for URL discovery count (should match or approach 297)

### IndexNow protocol live
- **Key:** `ddec116ea2aa00b39d11cca95f17bb9a` (self-generated, 32-char hex)
- **Key file:** `public/ddec116ea2aa00b39d11cca95f17bb9a.txt` → served at https://steelr.co.uk/ddec116ea2aa00b39d11cca95f17bb9a.txt (200 OK, contains the key)
- **Endpoint:** https://api.indexnow.org/IndexNow (propagates to Bing, Yandex, Seznam, Naver)
- **Script:** `vitrums/audit-data/indexnow_steelr.py`
- **First push (19 Apr 2026):** 30 priority URLs submitted, HTTP 202 Accepted. Covers homepage, all 10 Phase 1D topic pages, key product/info pages, SR4 blog, 8 regional hub area pages.
- **Usage going forward:** edit `PRIORITY_URLS` in the script and rerun for any batch of new/changed URLs. The key file is permanent; no re-auth needed. Safe to run after any content change.

### BWT property list (as of 19 Apr 2026)
Four sites under info@supplywindows.co.uk: hxlbuild.co.uk, steelr.co.uk (new), vitrums.co.uk, www.glazingquoter.co.uk.

### AI Performance (BETA) baseline
As of 19 Apr 2026, Total Citations = 0, Avg Cited Pages = 0 across the 3M window. Zero data is expected — steelr.co.uk was only added to BWT today, so Bing has no tracking history. Citation sources: "Microsoft Copilots and Partners" (Copilot, Bing Chat, ChatGPT Search since it uses Bing's index). "Grounding Queries" sub-tab will be the highest-value signal once data arrives — shows the actual user questions that produced citations. Check weekly.

## SEO Fixes Applied (18 Apr 2026)

Major session. Five commits, all live:

- **`2c5a067` SR4 (LPS 1175) positioning rollout, site-wide** — Layout, homepage, /security, /security-specification, /fire-rated-doors, /about, /process, /collection, /collection/sidelights, /areas/[slug], /design-estimate, Hero, CredentialsBanner, email_outreach.py, llms.txt, llms-full.txt all updated with "SR3 as standard, SR4 (LPS 1175) commercial-grade upgrade" positioning. Area page credentials strip now shows "SR3 Standard & SR4 (LPS 1175) Available" on all 172 pages.
- **`9d5b908` Phase 1B indexation fixes** — /process expanded 186→791 words (new aftercare/warranty block, updated HowTo schema). /contact expanded 142→770 words (consultation promise, regional link list, 3-step what-happens-next, 5-question FAQ with FAQPage schema). /about schema deduplicated (Organization-referenced AboutPage replaces duplicate HomeAndConstructionBusiness). New /sitemap HTML page (1,296 words of linked navigation), footer-linked. /sitemap added to sitemap.xml.
- **`4eb3a3f` Phase 1D: 10 SEO topic pages** — 13,464 body words of topic authority via shared `<InfoPage>` component. See "Topic and Comparison Pages" section above for the full list.
- **`54584a6` llms.txt + llms-full.txt: 10 topic pages surfaced** — Topic and Comparison Guides section added to both files with extractable paragraph summaries for each of the 10 pages.
- **`d9ba5da` llms.txt + llms-full.txt: AI authority positioning overhaul** — Six new sections (category authority, rare specs, technical glossary, technical specs, entity reference, opening strengthen). llms.txt 136→239 lines, llms-full.txt 1,005→1,231 lines.

Also shipped without code commit:
- **Sitemap resubmitted in GSC** via Chrome UI. Google immediately re-read, confirmed 286→297 URLs discovered.
- **13 URL Inspection priority crawl pushes** (daily quota exhausted, see GSC section for full list).
- **Indexing API parity achieved** — all 297 sitemap URLs now submitted (was 284/297, 13 URLs force-pushed via submit_indexing.py after populating queue).

### Pending Next Steps (updated 19 Apr 2026 evening)

1. **Clear URL Inspection queue (8 URLs)** — GSC quota is rolling 24h, not a fixed daily reset. Last push was ~18:00 UK on 18 Apr, so earliest retry 18:00 UK 19 Apr. Queue: `/secured-by-design-steel-front-door`, `/fire-rated-fd30-front-door`, `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk`, `/areas/buckinghamshire`, `/areas/surrey`, `/uk-steel-doors-vs-imported`, `/process`.
2. **GBP next post batch** — previous scheduled posts all published cleanly. Write next 3-5 SR4/topic-angle posts. See "GBP posting rules" in Contact Form section. Also fix stale "170 areas" reference if reusing that copy (now 172).
3. **Reviews outreach campaign** — user handling directly. 0 reviews still the #1 Maps 3-pack blocker. Template in MARKETING-COPY.md.
4. **Social media pipeline (Phase 2)** — multi-day build. Python + Pillow + FFmpeg + OpenAI TTS. 60-90 posts across IG/Pinterest/TikTok/Shorts/LinkedIn. Brand kit first, then static posts, then Ken Burns Reels, then TTS voiceover.
5. **Next Serper rank check** — after 21 Apr to measure SR4 rollout + 10 Phase 1D topic pages + IndexNow ingestion impact.
6. **Monitor GSC Page Indexing refresh** — still stale at 54/4 as of evening 19 Apr. Refresh expected 21-22 Apr. Target: 150-200 indexed.
7. **Monitor BWT AI Performance (BETA) tab** — baseline 0 citations, 0 cited pages as of 19 Apr (steelr.co.uk only just added to BWT). "Grounding Queries" sub-tab shows the actual questions users asked LLMs that led to citations. Check weekly once data begins flowing.
8. **Monitor BWT sitemap processing** — steelr.co.uk/sitemap.xml submitted 19 Apr, was "Processing". Revisit in 48 hours, confirm URL discovery count approaches 297.

## SEO Fixes Applied (16 Apr 2026)
- **Collection page duplicate titles fixed** — 8 groups of doors (24 pages) shared identical `<title>` and H1 tags, causing GSC "Duplicate without user-selected canonical" errors. Title generation in `src/data/doors.ts` now uses context phrases from the slug (e.g. "Stone Surround", "Gable Porch", "Interior View") and secondary features to guarantee all 54 collection pages have unique titles and H1s. Deduplication pass added as safety net.

## SEO Fixes Applied (8 Apr 2026, batch 2)
- **Area page boilerplate varied** — 2 shared paragraphs (manufacturing + customisation) now have 4 variants each, rotated by parent hub to eliminate duplicate content across 172 area pages
- **llms.txt references uncommented** in robots.txt — AI crawlers can now discover /llms.txt and /llms-full.txt
- **CredentialsStrip added to area pages** — PAS24/SR3/Secured by Design/FD30S/ISO 9001/UK Manufactured dark strip now appears on all 172 area pages (was already on homepage + collection)

## SEO Fixes Applied (8 Apr 2026)
- **GBP link added to schema sameAs** in layout.tsx (Google Maps place URL)
- **GeoCoordinates added to schema** in layout.tsx (51.5513, -0.7732 — Uxbridge)
- **Address enriched** — addressLocality: Uxbridge, addressRegion: West London added to schema
- **Duplicate blog slug fixed** — second `steel-entrance-doors-cost-uk` renamed to `steel-entrance-doors-pricing-factors`
- **Security page og:image added** — `/security` now includes og:image in metadata
- **Area page sameAs fixed** — was self-referential (`steelr.co.uk`), now points to Instagram, Pinterest, LinkedIn
- **supplywindows.co.uk redirects** — not needed (SteelR was never hosted there, it's only the parent company email)

## SEO
- Schema: HomeAndConstructionBusiness with geo, GBP in sameAs, FAQPage, HowTo, BreadcrumbList on all pages
- Canonical URLs on all pages
- H1 on every page (sr-only where visual design conflicts)
- Collection page has intro paragraph for Google crawlability (client component)
- **172 location pages** for local SEO — unique descriptions referencing local architecture and neighbourhoods
- Hub pages list all child areas in schema.org `areaServed`
- Area pages cross-link to 3–5 nearby areas + parent hub
- Sitemap at `/sitemap.xml` with 297 URLs, most recently resubmitted to Google Search Console (18 Apr 2026)
- HTML sitemap at `/sitemap` (18 Apr 2026) linked from footer, mirrors the XML feed in human-readable form
- Product schema on collection door pages (offers block REMOVED — was causing GSC errors)
- HowTo schema on process page
- FAQ schema on all 172 area pages + security page + security-specification page
- Image quality: all set to 80 (reduced from 100 for performance)
- Images optimized: 24.7MB → 11.7MB (52% reduction via sharp)
- Hero carousel: lazy loading on non-first images

## Gotchas
- **Never run `npm run build` while dev server is running** — corrupts .next cache, breaks all CSS
- **Google Business Profile edit panel** — renders as overlay on Google Search, not automatable for text/photo upload
- **Fasthosts DNS sessions** expire frequently — may need re-login during long sessions
- **ImprovMX free tier** — forwarding only, no SMTP send (need Premium for sending as info@steelr.co.uk)
- **Hero images:** Only landscape images work in full-screen hero. Portrait images get cropped badly. Current hero uses 5 landscape images from gallery/
- **Chrome extension screenshots** cannot capture CSS animations (Ken Burns, opacity transitions) — images appear blank in screenshots but render correctly in browser
- **Image object-position:** Each hero image needs custom objectPosition to centre on the door. Values are per-image in Hero.tsx
- **Hero animation timing:** CYCLE_DURATION=12000, LOGO_FADE_IN_START=8000, kenburns 12s, crossfade 2s

## Notes
- The pipe in the logo must always be a CSS element, never a `|` character
- Dark nav overlays on hero images with semi-transparent gradient backdrop
- Design language: minimal, architectural, high white-space, no clutter

## Skills (Claude Code slash commands)

### SEO & Visibility
- `/seo-audit` — Full technical SEO audit (meta tags, indexing, 250+ pages)
- `/ai-seo` — Optimize for AI search engines (AEO/GEO), get cited by LLMs
- `/schema-markup` — Add/fix JSON-LD structured data (HomeAndConstructionBusiness, FAQ, BreadcrumbList)
- `/programmatic-seo` — Template-based location pages at scale (172 area pages)
- `/site-architecture` — Plan/restructure navigation and URL hierarchy

### Conversion & Copy
- `/page-cro` — Optimize collection, about, process pages for conversions
- `/copywriting` — Write/improve premium copy (architectural, refined tone)
- `/copy-editing` — Review and tighten existing copy across pages
- `/form-cro` — Optimize consultation request form
- `/popup-cro` — Exit-intent overlays for consultation requests
- `/signup-flow-cro` — Optimize consultation request journey end-to-end

### Marketing & Growth
- `/content-strategy` — Plan blog content and topic clusters
- `/social-content` — Create social media posts (LinkedIn, Instagram, Houzz)
- `/ad-creative` — Generate ad copy for Google Ads / Meta campaigns
- `/paid-ads` — Plan and optimize PPC campaigns (Google, Meta)
- `/analytics-tracking` — Set up/audit Google Search Console, GA4 tracking
- `/competitor-alternatives` — Create vs pages (SteelR vs other door brands)
- `/marketing-ideas` — Generate growth tactics for luxury entrance door market
- `/marketing-psychology` — Apply persuasion principles to premium positioning
- `/lead-magnets` — Create downloadable lookbooks, style guides for lead capture
- `/cold-email` — Outreach to architects, developers, interior designers

### Design
- `/award-landing` — Generate premium landing page sections matching architectural brand
- `/extract-style-skill` — Extract design systems from competitor luxury sites

## Project Completion Checklist

Before marking any task in this project complete, follow the Completion Standards in the global CLAUDE.md. Show evidence. Do not assume.
