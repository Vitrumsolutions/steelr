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
- **Navigation:** Collection · Areas · About · Process · Blog · Contact
- **Phone:** 0800 861 1450
- **CTA:** "Request a Consultation"
- **Total static pages:** ~250 (home, collection, about, process, contact, blog, privacy, terms, 54 collection items, 10 blog posts, 172 area pages)

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

## Tech Stack
- **Framework:** Next.js 14 App Router with TypeScript
- **Styling:** Tailwind CSS with custom colour tokens in tailwind.config.ts
- **Fonts:** Cormorant Garamond (display), Montserrat (body), Tenor Sans (captions) — Google Fonts
- **Hosting:** Vercel (auto-deploy from GitHub on push to main)
- **Forms:** Netlify Forms with static detection file at `public/form.html`
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

## SEO
- Schema: HomeAndConstructionBusiness, FAQPage, HowTo, BreadcrumbList on all pages
- Canonical URLs on all pages
- H1 on every page (sr-only where visual design conflicts)
- Collection page has intro paragraph for Google crawlability (client component)
- **172 location pages** for local SEO — unique descriptions referencing local architecture and neighbourhoods
- Hub pages list all child areas in schema.org `areaServed`
- Area pages cross-link to 3–5 nearby areas + parent hub
- Sitemap at `/sitemap.xml` with 245 URLs, submitted to Google Search Console (30 Mar 2026)

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
