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
- **Total static pages:** ~260 (home, collection, about, process, contact, blog, privacy, terms, colours, security, security-specification, fire-rated-doors, design-estimate, collection/sidelights, 54 collection items, 19 blog posts, 172 area pages)
- **Sitemap:** 258 URLs at `/sitemap.xml`

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
- `/security` — SR3/PAS24/Secured by Design certifications, FAQ schema, security ratings comparison
- `/security-specification` — PAS 24 compliance page with 3-column standard comparison (PAS24/SR2/SR3), certification strip, regulatory compliance explainer (Doc Q, Part B, Fire Safety Act, Building Safety Act)
- `/fire-rated-doors` — FD30/FD60 fire rated doors for flats, new builds, HMOs, housing associations, developers
- `/design-estimate` — 4-step multi-step form (project type → door spec → site details → contact). Submits via `/api/estimate` to info@supplywindows.co.uk via Resend
- `/collection/sidelights` — Filtered collection view showing doors with sidelights

## Contact Form & Email
- **Form:** `/contact` page → `/api/contact` route → Resend API → info@supplywindows.co.uk
- **Estimate form:** `/design-estimate` → `/api/estimate` route → Resend API → info@supplywindows.co.uk
- **Resend domain:** steelr.co.uk verified (EU-West region), DNS records added at Fasthosts
- **Resend API key:** `steelr-contact-form` (sending_access), stored in Vercel env var `RESEND_API_KEY`
- **Sender:** `noreply@steelr.co.uk`
- **GBP posting rules:** No phone numbers or URLs in post description text. Use Call Now button for phone. Clean prose only. Images optional.

## Blog Posts (19 total)
- 6 original posts (steel vs composite, SR3 guide, door colours, etc.)
- 3 location-focused (London period properties, country homes, conservation areas)
- 4 high-intent keywords (cost guide, steel vs aluminium, home security, design trends 2026)
- Steel vs composite post expanded with head-to-head comparison table — currently ranking #2 on Google

## Google Search Console
- **Property:** sc-domain:steelr.co.uk (owner: info@supplywindows.co.uk)
- **Indexed pages:** 32 (as of 31 Mar 2026, growing)
- **Total known:** 252 pages
- **Impressions:** 444 across 78 queries
- **Top queries:** "steelr" (9 clicks), "composite vs steel doors" (36 impressions), "bespoke steel doors" (32 impressions)
- **Location queries appearing:** steel doors surrey, london, birmingham, buckinghamshire, esher, chelsea
- **Core Web Vitals:** Not enough data yet (site too new)
- **28 priority URLs** manually submitted for indexing

## Google Business Profile
- **Name:** Steelr Bespoke Steel Entrance Doors
- **Status:** Verified, 1 customer interaction
- **Posts:** 1 published, 1 scheduled (Apr 8), 10 more posts planned through April
- **Post formula:** Clean prose (no phone/URLs in text), Call Now button, schedule every 2-3 days
- **Reviews:** 0 — critical gap. Customer review request template in MARKETING-COPY.md

## Competitor Analysis (completed)
- **Top competitors:** Latham's (195 reviews, 4.9★), Strongdor, Gerda, Modern Doors, Bespoke Steel Doors, Fort Premium, Deuren, Crittall
- **SteelR advantages:** 172 location pages (no competitor has this), steel vs composite post ranking #2
- **Gaps:** Pricing content, thermal efficiency guide, RAL colours page (now built), security certifications for homeowners (now built)
- **Full analysis:** Saved in MARKETING-COPY.md

## Marketing Copy (MARKETING-COPY.md)
- 5 directory listing copies (Checkatrade, Houzz, Bark, MyBuilder, FMB) — ready to register
- 5 GBP post copies — policy-compliant format
- Customer review request template

## Remaining Tasks (for next session)
1. **Schedule 10 more GBP posts** (posts 3-12, Apr 10-30, every 2-3 days)
2. **Add credential references** (PAS24/SR3/Secured by Design) across homepage, collection, area pages as a shared component
3. **Register on directories** — Checkatrade, Houzz, Bark, MyBuilder, FMB (copy in MARKETING-COPY.md)
4. **Get customer reviews** — send review request template to recent customers

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
- Sitemap at `/sitemap.xml` with 258 URLs, resubmitted to Google Search Console (6 Apr 2026)
- Product schema on collection door pages (offers block, no price — bespoke)
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
