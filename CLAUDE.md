# steelr — Project Guide

## Session Handoff — 22 Apr 2026 evening

Baseline visibility audit just ran (commit `cf477e2`). Full report at
`audit-data/visibility-audit-20260422.md`. Re-run: `python audit-data/visibility-audit.py`.

### Audit headline (22 Apr 2026)

| Channel | Result |
|---|---|
| Google organic | 5/26 (19%) — brand #1, SR3 #8, Bucks #1, Cobham #9 |
| Google Maps | **0/11** — not ranking even for brand "SteelR" |
| Bing | **0/15** — post-migration indexing lag (IndexNow wired 19 Apr, recovery expected mid-late May) |
| Perplexity | ✅ "best-fit option" for SR3 Secured by Design query |
| ChatGPT | ✅ listed FIRST for UK bespoke steel door manufacturers |
| Google AI Mode | ✅ #1 featured manufacturer, `steelr.co.uk +4` primary citation |

**AI engines are SteelR's strongest channel** — `/llms.txt` + `/llms-full.txt` + topic hubs are paying off.
**Biggest gap: Maps, blocked by 0 GMB reviews.** User manages reviews — don't re-suggest process.

### Work in flight (parallel sessions as of 22 Apr evening)

These are being handled by other Claude sessions — **do not duplicate**:

1. **Blog queue refill** — staged/ folder empty, content-calendar.json 28/28 published. Next cron fires Thu 23 Apr 20:00 UTC. Another session refilling with new posts targeting audit gaps (SR3 vs SR4, steel vs composite, PAS 24 explainer, cost guide, London townhouses, steel doors with glass panels).
2. **Area page title optimisation** — proposed pattern: `Steel Doors [Town] | Bespoke Steel Front Doors, SR3 Rated | SteelR`. Fixes word-order break in current title template at `src/app/areas/[slug]/page.tsx` generateMetadata + sr-only h1. Low-leverage polish (~0-3 positions), another session shipping.

### Next session — open options (not yet picked up)

Choose the highest-leverage option based on current state:

- **A. `/thank-you` leave-a-review CTA** — Vitrums has it, SteelR doesn't. One-click GBP review path for new customers at peak-willingness moment. Not a review-push suggestion — just the on-site plumbing (user still does asking). Small edit, mirrors Vitrums `/thank-you` pattern.
- **B. GSC Indexing API setup** — Vitrums runs 180/day automated via Windows Task Scheduler (`VitrumsGSCIndexer`). Verify if SteelR has equivalent. If not, ~30 min setup — could be why Google organic sits at 5/26 (indexing lag).
- **C. CrUX / Lighthouse perf baseline** — site 19 days live, too young for CrUX. Run Lighthouse mobile to get lab baseline. If at Vitrums' pre-fix level (Perf 27, LCP 8s), apply the documented Vitrums playbook (Nav server-component split, defer overlays, lazyOnload GA, hero paint cleanup).
- **D. Internal linking audit** — Do all 42 blog posts link to product/area pages? Do hub/product pages cross-link to best-fit blogs? Vitrums-style bidirectional linking lifts topical authority.
- **E. Schema/llms.txt protection audit** — AI engines are the strongest channel, protect it. Diff SteelR's setup against Vitrums (knowsAbout array, Direct Answers Q&As, sameAs, FAQ coverage).

### DO NOT RE-SUGGEST (user-managed)

- Google review push / review request process (user handles ongoing)
- UK directory registrations (MyBuilder, Houzz, Which?, FMB, Trustpilot, Checkatrade, Yell, Bark, etc.)
- GBP weekly posting cadence

### Current SteelR state snapshot

- Live: https://steelr.co.uk since ~3 Apr 2026
- 40 blog posts live, 161 area pages, 60 doors in /collection (CLAUDE.md and STATE.md previously stated stale counts; reconciled 25 Apr against actual data)
- QuickEnquiry component on all dynamic templates (areas, collection, blog) + 10 InfoPage topic hubs + 5 non-InfoPage hubs — 288+ pages wired with source-tagged lead capture → `/api/contact` → `info@supplywindows.co.uk`
- `/thank-you` page live with GA4 conversion tracking (GA4 installed 23 Apr — `NEXT_PUBLIC_GA_ID` env var on Vercel, `GoogleAnalytics` component loads lazyOnload)
- Next cron fire: Thu 23 Apr 20:00 UTC (awaiting Session 1 blog refill)

---

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
- **Total static pages:** ~336 (home, collection, about, process, contact, blog, privacy, terms, colours, security, security-specification, fire-rated-doors, design-estimate, collection/sidelights, sitemap, 60 collection items (54 have rich hand-written page content; the rest use auto-generated descriptions), 40 blog posts, 161 area pages, 16 area hubs, 10 Phase 1D topic pages)
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

### gallery/ (56 images)
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
| `steelr-black-traditional-doctor-knocker-canopy.jpg` | portrait | 900x2000 |
| `steelr-black-traditional-doctor-knocker-railings.jpg` | portrait | 938x2000 |
| `steelr-navy-traditional-brass-fanlight.jpg` | portrait | 1500x2000 |
| `steelr-black-panelled-double-fingerprint.jpg` | portrait | 900x2000 |
| `steelr-black-traditional-timber-canopy.jpg` | portrait | 900x2000 |
| `steelr-black-panelled-grille-sidelights.jpg` | portrait | 934x2000 |

### detail/ (7 images)
| File | Orientation | Dimensions |
|------|-------------|------------|
| `steelr-black-panelled-brass-lion-closeup.jpg` | portrait | 233x433 |
| `steelr-grey-panelled-brass-handle-closeup.jpeg` | portrait | 1068x1600 |
| `steelr-grey-panelled-chrome-multilock.jpg` | portrait | 1080x1920 |
| `steelr-navy-panelled-chrome-ring-closeup.jpg` | portrait | 433x1093 |
| `steelr-black-detail-ekey-access-panel.jpg` | portrait | 1001x1500 |
| `steelr-black-detail-ekey-fingerprint.jpg` | portrait | 1001x1500 |
| `steelr-black-detail-hinge-locking-pin.jpg` | portrait | 1001x1500 |

### Orientation Summary
- **Portrait:** 67 images (most door shots are naturally tall)
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
- **Inline QuickEnquiry form** (added 22 Apr 2026, commit `e73f058`): 3-field name/phone/postcode form rendered on 288 pages — every area/collection/blog + 15 topic hub pages. Posts to `/api/contact` same as the full form but with `source=<slug>` tag for lead attribution. Auto-applies to all future blog posts via the `/blog/[slug]` template + all future topic pages via `InfoPage` component props.
- **Thank-you page:** `/thank-you` (added 22 Apr 2026) — post-submit confirmation with ThankYouTracking client component. Fires GA4 `generate_lead` event.
- **Analytics (installed 23 Apr 2026):** GA4 property ID stored in Vercel env var `NEXT_PUBLIC_GA_ID` (not hardcoded in source). `GoogleAnalytics` component at `src/components/GoogleAnalytics.tsx` renders `<Script strategy="lazyOnload">` gtag only when the env var is set — deploy-safe without it. Vercel Analytics + Speed Insights also live via `@vercel/analytics` + `@vercel/speed-insights` in `layout.tsx`. Conversion event: `generate_lead` fires on `/thank-you` via `ThankYouTracking.tsx`.
- **Resend domain:** steelr.co.uk verified (EU-West region), DNS records added at Fasthosts
- **Resend API key:** `steelr-contact-form` (sending_access), stored in Vercel env var `RESEND_API_KEY`
- **Sender:** `noreply@steelr.co.uk`
- **`/api/contact` required fields:** name + phone ONLY (relaxed 22 Apr 2026 — was name+phone+email+propertyType+doorStyle). Other fields are optional. Lead email subject includes `[<source>]` tag for triage. Full ContactForm still sends all original fields; QuickEnquiry sends compact 3-field + hidden defaults `propertyType="Not specified"`, `doorStyle="To be discussed"`.
- **GBP posting rules:** No phone numbers or URLs in post description text. Use Call Now button for phone. Clean prose only. Images optional.

## Build Notes
- Vercel env var NEXT_PUBLIC_GOOGLE_MAPS_KEY required for Maps embed on contact page
- Never add Product schema with offers block unless actual prices exist — causes GSC errors

## Brand-policy guard (added 25 Apr 2026)

Pre-commit hook prevents accidental SteelR-attributed prices and brand-banned words from landing in production.

**Setup (one-time per clone):**
```bash
npm run install-git-hooks
```

**Manual scans:**
```bash
npm run brand-guard           # scan ALL protected files
npm run brand-guard:staged    # scan only git-staged files
npm run brand-guard:test      # self-test the guard logic
```

**What it catches:**
- SteelR-attributed price patterns ("our doors typically start from £X", "Entry-Level Bespoke: £X-£Y", "starts from approximately £X", etc.)
- Generic `£\d` in HIGH_RISK_FILES (e.g. `src/app/areas/[slug]/page.tsx`)
- Banned words ("affordable", "cheap", "best prices", "discount") **only when describing SteelR or its products**

**What it deliberately allows:**
- Hardware component prices (£200-£600 for handles etc., industry references)
- Competitor-material price ranges in vs-* blogs (educational benchmarking)
- Banned words used pejoratively about competitors ("cheap smart locks lack certification")
- Banned words in proper nouns ("Cheap Street, Newbury")
- Banned words in negation ("no discount tactics")
- "Discount" used as verb meaning "dismiss" or "give insurance reduction"
- Property value examples ("£1 million home", "£750,000 property valued at...")

**Bypass (PRICE only — never for BANNED-WORD):**
```bash
git commit -m "your message [allow-price]"
```

**Files:**
- `scripts/brand-guard.mjs` — guard logic
- `scripts/brand-guard.test.mjs` — self-test (covers violating + clean fixtures)
- `scripts/install-git-hooks.sh` — one-time installer
- `.claude/commands/preflight.md` — manual `/preflight` slash command for full pre-ship review (brand-guard + 4 subagents + build)

**Why:** the 23 Apr session shipped "from around £5,000" claims on 161 area pages without any of the global routing subagents firing. Cost ~10 minutes to clean up after the fact. This guard makes that regression impossible.

## llms.txt Panel Gate (added 27 Apr 2026)

`public/llms.txt` and `public/llms-full.txt` are SteelR's strongest AI-citation surface. Changes to them are the highest-risk class of edit on the project: even factually-correct fixes can disrupt AI engine cache and cost ranking positions. The user's stated rule is **"do not change llms without asking me."**

The pre-commit hook architecturally enforces this rule. Any commit touching `public/llms.txt` or `public/llms-full.txt` is **blocked** unless `.checks/llms-panel.json` contains a SHA matching the staged content. The marker is written only by the user-driven `/panel-llms-approve` slash command, which runs only after `/panel-llms` has produced findings and the user has explicitly approved them in chat.

### How the gate works (for the user)

1. Claude (or anyone) edits `public/llms.txt` or `public/llms-full.txt` and runs `git add`.
2. Claude tries to `git commit`. The pre-commit hook fires `node scripts/checks/llms-panel-check.mjs --enforce`.
3. If no marker exists, the commit is rejected with a BLOCKED message naming the staged files and instructing how to proceed.
4. Claude runs `/panel-llms`. Four agents (visibility-audit-runner, cannibalisation-auditor, research-scout, deep-reviewer) investigate in parallel and produce a single findings report.
5. The user reviews the findings. If they approve, they type "approve" in chat and Claude runs `/panel-llms-approve`.
6. `/panel-llms-approve` writes `.checks/llms-panel.json` with the staged file SHAs at approval time.
7. Pre-commit hook now allows the commit because the staged SHAs match the marker.
8. If anyone (Claude or otherwise) edits the staged file after approval, the SHA changes and the gate fires again. There is no way to bypass without re-running the panel and approval flow against the new content.

### Files

- `scripts/checks/llms-panel-check.mjs` — the gate logic (--enforce, --staged-shas, --write-marker modes)
- `.git/hooks/pre-commit` — chains brand-guard → llms-panel-check
- `scripts/install-git-hooks.sh` — installer (worktree-safe via `git rev-parse --git-common-dir`)
- `.claude/commands/panel-llms.md` — dispatches the 4-agent panel
- `.claude/commands/panel-llms-approve.md` — writes the marker after explicit user approval
- `.checks/` — gitignored marker directory; the marker file is never committed

### Why SHA-based and not time-based

A time-based marker ("panel ran within last hour") would happily allow a freshly-edited file to ship if a panel had run earlier on a different version. SHA matching forces a fresh panel for every fresh content change. The marker cannot grow stale into approval; the file content has to literally match what was approved.

### Why the marker file is gitignored

Committing the marker would let old approval carry forward forever after the file content changed (because the marker would persist while the file SHA changed, and on the new branch the gate would still find the old marker matching nothing). Treating the marker as runtime state forces every fresh worktree, every fresh branch, and every fresh edit to re-prove it has been reviewed.

### When the gate does NOT block

- Commits that don't touch `public/llms.txt` or `public/llms-full.txt`.
- The cron-driven blog publisher (`.github/workflows/publish-blog.yml`). The cron uses `git commit --no-verify` because:
  - The commit author is `github-actions[bot]`, not a human.
  - The content is mechanically derived from `src/data/blog/posts/` by `publish-post.mjs` (Blog Excerpts auto-rebuild + Key Pages URL append). It is not human-authored prose.
  - The rebuild logic is auditable in the script and the cron is in a trusted GitHub Actions environment.
  This is the only --no-verify path. Humans cannot bypass the gate per the global safety rules in `~/.claude/CLAUDE.md` (Claude is forbidden from using --no-verify; the user can manually but should not for llms files).

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
- **Total known URLs in sitemap:** 298 (as of 20 Apr 2026 — includes 10 topic pages + HTML sitemap)
- **Indexed pages:** 67 (Page Indexing report as of 17/04 — jumped from 54 between 13 Apr and 17 Apr, +13 pages in 4 days, confirming sitemap resubmit + URL Inspection pushes from 18-19 Apr are working their way through Google's processing)
- **Not indexed:** 6 pages total, 4 benign + 2 real. Benign: 2 Page with redirect, 1 Duplicate without user-selected canonical, 1 Alternative page with proper canonical tag. Real: 2 Crawled - currently not indexed.
- **Sitemap coverage:** 67 / 298 indexed = 22.5% (healthy for a 2-month-old site). Remaining ~231 mostly in "Discovered - not indexed" queue awaiting crawl.
- **Sitemap:** resubmitted in GSC UI on 18 Apr 2026 (got 286 discovered, pre-Phase 1D), and again on 19 Apr 2026 (jumped to 297 discovered in real time confirming Phase 1D + /sitemap + new blog posts are now in Google's awareness)
- **Indexing API:** All 297 URLs submitted, queue empty (parity achieved 18 Apr 2026). Runs daily at 07:30 via Windows Task Scheduler (SteelrGSCIndexer)
- **URL Inspection (UI, 10/day quota):** cumulative 18-20 Apr 2026 = 22 URLs. 20 Apr retry blocked by rolling-24h quota.
- **Indexing API pushes (20 Apr 2026, via `submit_indexing.py --site=steelr`):** **All 10 FAQ-updated blog posts resubmitted manually on 20 Apr** to trigger fast recrawl of the new FAQPage schema from commit `2a3e1d6`: `/blog/what-is-sr3-security-rating`, `/blog/secured-by-design-doors`, `/blog/steel-vs-composite-doors`, `/blog/steel-entrance-doors-cost-uk`, `/blog/conservation-area-door-requirements-uk`, `/blog/steel-vs-aluminium-front-doors`, `/blog/steel-vs-timber-entrance-doors`, `/blog/how-to-improve-home-security-uk`, `/blog/best-front-door-home-security`, `/blog/steel-entrance-doors-pricing-factors`. Also added the previously-missing SR4 blog URL (`/blog/sr4-lps-1175-commercial-grade-residential`) to tracker — 297 → 298 submitted, now full parity with sitemap.
- **Indexing API daily autorun:** Windows Task Scheduler `SteelrGSCIndexer` runs at 07:30 UK every day via `submit_indexing.py`. Configured quota 180/day (under Google's 200/day per-project cap). Queue is empty most days (all 298 URLs already submitted) — it becomes active when we re-queue URLs for recrawl or add new content.
- **How to push more via Indexing API without hitting URL Inspection's 10-cap:** re-queue URLs in `vitrums/audit-data/gsc-indexing-tracker-steelr.json` (move from `submitted` → `queue`) then run `python vitrums/audit-data/submit_indexing.py N --site=steelr`. Effective for triggering recrawls after content changes.
- **Secondary queue (if extra capacity):** `/colours`, `/blog` (hub), `/sitemap` (HTML), `/areas/hertfordshire`, `/areas/kent`, `/areas/essex`, `/areas/hampshire`, `/areas/sussex`.
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
- **SteelR advantages:** 161 location pages (no competitor has this), steel vs composite post ranking #2
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
- **Domain:** steelr.co.uk (Fasthosts) → A `@` `216.198.79.1`, CNAME `www` `ae52195cfb899090.vercel-dns-017.com` (per-project CNAME, modernised from generic `cname.vercel-dns.com` on 29 Apr 2026 per Vercel's "DNS Change Recommended" guidance — both old and new continue to resolve, the new path enables better edge routing). www → non-www redirect at the Vercel edge is **308 Permanent** (flipped from 307 Temporary on 29 Apr 2026 in Vercel Domains panel for cleaner link equity flow). DNS verification: `nslookup steelr.co.uk` should return `216.198.79.1`; `nslookup www.steelr.co.uk` should chain through `ae52195cfb899090.vercel-dns-017.com`.
- **Email:** info@steelr.co.uk → info@supplywindows.co.uk via Google Workspace User Alias Domain (Mani's primary mailbox auto-owns info@steelr.co.uk natively; MX `smtp.google.com` priority 1 at apex). Resend bounce MX `feedback-smtp.eu-west-1.amazonses.com` priority 10 on `send.steelr.co.uk` (separate). ImprovMX retired 28 Apr 2026.
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
- **Earlier post stale data flagged:** "Published last month" post references "170 areas" — correct count is now 161. Not critical, worth updating in next batch.
- **Reviews confirmed 0.** "You have no reviews yet" shown in dashboard. Still #1 Maps blocker.
- **Services confirmed at 8** (matches CLAUDE.md). GBP edit panel did not allow scrolling to "Add Service" option via automation (confirmed limitation noted in Gotchas section). **SR4 service addition deferred to manual user action.**
- **Profile strength indicator:** GBP dashboard shows "Complete info" prompt — not at 100%. Worth clicking through at some point to see what fields remain.
- **11 customer interactions** recorded (positive engagement signal).
- **Owner access confirmed** as info@supplywindows.co.uk.

### User-action items from GBP audit
1. ~~Add 9th service manually: "SR4 / LPS 1175 Commercial-Grade Security Doors"~~ — **PIVOTED 19 Apr 2026.** Adding a 9th service requires a separate "Add service" path in the GBP dashboard that is not accessible via the current modal flow. Instead, enriched 2 of 8 existing service descriptions (Bespoke Steel Entrance Doors + PAS 24 Certified Security Doors) with full SR3/SR4 positioning copy. Higher-impact than a 9th service because descriptions were previously empty and profile strength benefits from populating them. 6 remaining service descriptions still empty and could be enriched in a future session.
2. ~~Write next batch of GBP posts~~ — **DONE 19 Apr 2026.** New post "SR4 (LPS 1175) is the commercial-grade security certification used on data centres, bank vaults and high-risk commercial premises..." published. 865/1,500 characters, policy-compliant (no URLs, no phone number). First SR4 content now live on GBP. See Session Log 19 Apr.
3. **Update the "170 areas" claim to "161 areas"** in any future post reusing that copy (still pending)
4. **Reviews outreach campaign** — user handling this directly; Claude not actioning.

### SR4 blog shipped (19 Apr 2026, commit `689408a`)
New blog post at `/blog/sr4-lps-1175-commercial-grade-residential` — 2,100 words, 9 min read, Security category. Covers what SR4 (LPS 1175 Issue 8) is, where it is normally used (data centres, bank vaults), when a UK homeowner should consider it, SR3 vs SR4 spec comparison table, how testing works, FAQ section. Registered in `src/data/blog/index.ts` and linked from `public/llms.txt`. Build passed, live on steelr.co.uk.

### GBP service descriptions now populated (ALL 8 of 8, complete 19 Apr 2026)

All eight service descriptions drafted collaboratively with user approval per-batch, then saved one by one via GBP UI. Each description is under the 300-char limit, follows house style (no em dashes, no exclamations, no "affordable/cheap/discount"), and is specific to the service it describes.

- **Custom doors:** "Any RAL colour, with dual-colour inside and out. Chrome, satin, brass, matt black or gold hardware. Clear, frosted, tinted or stained glazing. Period or contemporary panel moulding. Every SteelR door is a custom specification built from your brief, with eight to twelve week lead time."
- **Delivery:** "Delivery and installation across the UK mainland from our UK manufacturing facility. No regional surcharge. Doors are delivered by our own installation team, who fit on the same visit. Single day installation for standard doors, two days for double doors or sidelight configurations."
- **Door design:** "Every door is designed to your exact specification. RAL colour, hardware, glazing, panel profiles, knockers, letterboxes, sidelights and fanlights all defined in writing and signed off before manufacture. Visual mock-up supplied. No revisions limit. Nothing cut until you approve the design."
- **General repairs & installation:** "Installation, aftercare and adjustments by our own DBS-checked team, never subcontracted. Hinge adjustments, lock re-keying, seal replacement and hardware upgrades handled by the team that originally made the door. Standard manufacturer warranty: 10 years on the door construction, 5 years on the decorative finish, 3 years on hardware. Extended packages on request."
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

## llms-full.txt AI-Citation System (19 Apr 2026, commits `708c3af`..`607b193`)

End-to-end automation for a "## Blog Excerpts" section in `public/llms-full.txt` optimised for AI citation on ChatGPT Search, Perplexity, Bing Copilot, Google AI Overviews, Gemini.

### Why this matters
Steelr appeared in ChatGPT Search citation for "best bespoke steel front door companies UK" within days of initial launch — the llms files are a direct driver of that, so investment here compounds.

### Scripts (all in `scripts/blog/`)
- **`llms-excerpt.mjs`** — shared extractor module. Parses a blog post `.ts` file and builds a full excerpt block (title, URL, meta, description, Key Facts, FAQs, first H2 paragraph, Related links). Also exports `buildCategoryClusteredSection` that returns the entire "## Blog Excerpts" section grouped by category.
- **`backfill-llms-full.mjs`** — one-shot rebuild. Reads every post, overwrites the whole Blog Excerpts section. Run after any extractor change. Safe to re-run; it always strips and rewrites the section.
- **`publish-post.mjs`** — called by the blog publish cron. On each publish, moves staged→posts, updates `index.ts` + `content-calendar.json` + `llms.txt`, and rebuilds the entire Blog Excerpts section so category clusters and Related-post graphs stay accurate.
- **`validate-faqs.mjs`** — runs on every `npm run build` via `prebuild` hook. Fails the build if any post has a FAQ-like heading but the extractor returns zero Q&A pairs (prevents future silent schema drops). Also flags posts with no FAQ section at all (content-work backlog).

### Excerpt format per post
```
#### Title
URL + Category + Published + readTime
Description
**Key facts:** — 3-5 quotable sentences (stats, standards, certifications)
**FAQs:** — up to 5 Q&A pairs, placed above prose for higher citation weighting
First paragraph after first H2 (context)
**Related:** — up to 3 links to other same-category posts
```

### File structure
```
## Blog Excerpts
  Intro paragraph
  ### Security (N posts)
    #### Post 1
    ...
    #### Post N
  ### Comparison (N posts)
    ...
  ### Pricing (N posts)
    ...
```
Category clusters improve AI chunking — any sampled portion of the file lands on topically-coherent content.

### Current state (live, verified)
- Posts covered: 46 / 46
- Category clusters: 6 (Security, Comparison, Design, Location Guides, Pricing, Buying Guide)
- Q&A pairs: 145
- Key Facts blocks: 45 (1 post had no extractable stats)
- Related blocks: 46 (every post has 2-3 related links)
- FAQ schema emitting on canonical pages: 29 / 46 (17 posts lack FAQ section — content backlog)

### FAQ format support
The extractor (both in `llms-excerpt.mjs` and the runtime `src/app/blog/[slug]/page.tsx`) accepts three formats inside the `## Frequently Asked Questions` section:
1. `### Question?` + blank line + answer paragraph (most posts)
2. `**Question?**` + newline + answer paragraph (bold on own line)
3. `**Question?** Answer on same line` (inline)

The validator catches any post where the extractor would return zero Q&As so schema can't silently break.

### llms.txt parity
Separate file. Auto-updated on publish via `publish-post.mjs` (appends a `- [Title](URL)` line to the Key Pages section). One-off backfill done 19 Apr to hit full parity (46/46 for steelr).

### Content-work backlog (17 steelr posts without FAQ section)
`best-areas-london-period-property-renovations`, `best-front-door-home-security`, `best-front-doors-period-properties`, `choosing-entrance-door-colour`, `conservation-area-door-requirements-uk`, `front-door-design-trends-2026`, `front-door-ideas-design-trends`, `how-to-improve-home-security-uk`, `secured-by-design-doors`, `steel-doors-country-homes-guide`, `steel-entrance-doors-architects-specifiers`, `steel-entrance-doors-cost-uk`, `steel-entrance-doors-pricing-factors`, `steel-vs-aluminium-front-doors`, `steel-vs-composite-doors`, `steel-vs-timber-entrance-doors`, `what-is-sr3-security-rating`. ~10 are strong FAQ candidates (security, comparison, cost, regulatory). ~6-7 are weaker (design/trend pieces). Write selectively, not all at once.

### Key commits (19 Apr 2026)
- `708c3af` — initial auto-excerpt system, 46 posts covered
- `c45344d` — FAQ cap raised 3→5, FAQs placed above prose
- `7ac4395` — SR4 post FAQ format fix + extractor tolerance (H3 or bold)
- `8e207e8` — FAQ validator + prebuild hook
- `607b193` — topic clustering + Key Facts + Related links (current canonical)

## Bing Webmaster Tools + IndexNow (19 Apr 2026, commit `4f2ba75`)

Bing Webmaster Tools property created for steelr.co.uk by importing from Google Search Console. No separate DNS or meta-tag verification needed — GSC import inherits verification status. Microsoft account: info@supplywindows.co.uk (same account as Vitrums BWT).

### Sitemap
- **Submitted:** https://steelr.co.uk/sitemap.xml (manual submit via BWT UI; GSC import only pulls property list, not sitemaps)
- **Status at submit time:** Processing
- **Check later:** Sitemaps tab in BWT for URL discovery count (should match or approach 297)

### IndexNow protocol live
- **Key:** `ddec116ea2aa00b39d11cca95f17bb9a` (self-generated, 32-char hex)
- **Key file:** `public/ddec116ea2aa00b39d11cca95f17bb9a.txt` → served at https://steelr.co.uk/ddec116ea2aa00b39d11cca95f17bb9a.txt (200 OK, contains the key)
- **Endpoint:** https://api.indexnow.org/indexnow (propagates to Bing, Yandex, Seznam, Naver)

**Submission scripts (two exist — prefer the Node one):**
- **`scripts/bing/indexnow-submit.mjs`** (added 19 Apr PM, preferred) — Node-based, mirrors the pattern used on Vitrums. Three modes:
  ```bash
  node scripts/bing/indexnow-submit.mjs              # full sitemap (currently 298 URLs)
  node scripts/bing/indexnow-submit.mjs --priority   # 21 hub/brand/product URLs
  node scripts/bing/indexnow-submit.mjs url1 url2    # specific URLs
  ```
  Verifies key file is accessible before submitting, batches at 500/request.
- `vitrums/audit-data/indexnow_steelr.py` (earlier Python variant — kept for reference, covers a slightly different priority list)

### Submissions history
- **19 Apr AM:** 30 priority URLs (Python script) — HTTP 202
- **19 Apr PM:** 21 priority + **298 sitemap URLs** (Node script, full sitemap batch) — both HTTP 200 ✓

### BWT property list (as of 19 Apr 2026)
Four sites under info@supplywindows.co.uk: hxlbuild.co.uk, steelr.co.uk (new), vitrums.co.uk, www.glazingquoter.co.uk.

### AI Performance (BETA) baseline
As of 19 Apr 2026, Total Citations = 0, Avg Cited Pages = 0 across the 3M window. Zero data is expected — steelr.co.uk was only added to BWT today, so Bing has no tracking history. Citation sources: "Microsoft Copilots and Partners" (Copilot, Bing Chat, ChatGPT Search since it uses Bing's index). "Grounding Queries" sub-tab will be the highest-value signal once data arrives — shows the actual user questions that produced citations. Check weekly.

## SEO Fixes Applied (18 Apr 2026)

Major session. Five commits, all live:

- **`2c5a067` SR4 (LPS 1175) positioning rollout, site-wide** — Layout, homepage, /security, /security-specification, /fire-rated-doors, /about, /process, /collection, /collection/sidelights, /areas/[slug], /design-estimate, Hero, CredentialsBanner, email_outreach.py, llms.txt, llms-full.txt all updated with "SR3 as standard, SR4 (LPS 1175) commercial-grade upgrade" positioning. Area page credentials strip now shows "SR3 Standard & SR4 (LPS 1175) Available" on all 161 pages.
- **`9d5b908` Phase 1B indexation fixes** — /process expanded 186→791 words (new aftercare/warranty block, updated HowTo schema). /contact expanded 142→770 words (consultation promise, regional link list, 3-step what-happens-next, 5-question FAQ with FAQPage schema). /about schema deduplicated (Organization-referenced AboutPage replaces duplicate HomeAndConstructionBusiness). New /sitemap HTML page (1,296 words of linked navigation), footer-linked. /sitemap added to sitemap.xml.
- **`4eb3a3f` Phase 1D: 10 SEO topic pages** — 13,464 body words of topic authority via shared `<InfoPage>` component. See "Topic and Comparison Pages" section above for the full list.
- **`54584a6` llms.txt + llms-full.txt: 10 topic pages surfaced** — Topic and Comparison Guides section added to both files with extractable paragraph summaries for each of the 10 pages.
- **`d9ba5da` llms.txt + llms-full.txt: AI authority positioning overhaul** — Six new sections (category authority, rare specs, technical glossary, technical specs, entity reference, opening strengthen). llms.txt 136→239 lines, llms-full.txt 1,005→1,231 lines.

Also shipped without code commit:
- **Sitemap resubmitted in GSC** via Chrome UI. Google immediately re-read, confirmed 286→297 URLs discovered.
- **13 URL Inspection priority crawl pushes** (daily quota exhausted, see GSC section for full list).
- **Indexing API parity achieved** — all 297 sitemap URLs now submitted (was 284/297, 13 URLs force-pushed via submit_indexing.py after populating queue).

### Pending Next Steps (updated 19 Apr 2026 evening)

1. ~~**Clear URL Inspection queue (8 URLs)**~~ — **DONE 19 Apr 2026 evening.** All 8 URLs pushed to priority crawl queue: `/secured-by-design-steel-front-door`, `/fire-rated-fd30-front-door`, `/uk-steel-doors-vs-imported`, `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk`, `/areas/buckinghamshire`, `/areas/surrey`, `/process`. Useful finding: 5 of the 8 came back as **already indexed** ("URL is on Google") — uk-steel-doors-vs-imported, luxury-steel-entrance-door-london, /areas/buckinghamshire, /areas/surrey, /process. This means Google has crawled and indexed significantly more than the stale 54/297 Page Indexing report suggests. The request queues a recrawl on all 8. Also pushed 2 more before quota hit: `/blog/sr4-lps-1175-commercial-grade-residential` (not indexed, accepted), `/design-estimate` (already indexed, recrawl queued). **Cumulative URL Inspection pushes Apr 18-19: 22 URLs.** Daily quota (~10/day) exhausted again after 10 pushes in this session.

1a. **URL Inspection queue for next quota refresh (8 URLs)** — next window roughly 19:30 UK 20 Apr: `/colours`, `/blog`, `/sitemap` (HTML), `/areas/hertfordshire`, `/areas/kent`, `/areas/essex`, `/areas/hampshire`, `/areas/sussex`.
2. **GBP next post batch** — previous scheduled posts all published cleanly. Write next 3-5 SR4/topic-angle posts. See "GBP posting rules" in Contact Form section. Also fix stale "170 areas" reference if reusing that copy (now 161).
3. **Reviews outreach campaign** — user handling directly. 0 reviews still the #1 Maps 3-pack blocker. Template in MARKETING-COPY.md.
4. **Social media pipeline (Phase 2)** — multi-day build. Python + Pillow + FFmpeg + OpenAI TTS. 60-90 posts across IG/Pinterest/TikTok/Shorts/LinkedIn. Brand kit first, then static posts, then Ken Burns Reels, then TTS voiceover.
5. **Next Serper rank check** — after 21 Apr to measure SR4 rollout + 10 Phase 1D topic pages + IndexNow ingestion impact.
6. **Monitor GSC Page Indexing refresh** — still stale at 54/4 as of evening 19 Apr. Refresh expected 21-22 Apr. Target: 150-200 indexed.
7. **Monitor BWT AI Performance (BETA) tab** — baseline 0 citations, 0 cited pages as of 19 Apr (steelr.co.uk only just added to BWT). "Grounding Queries" sub-tab shows the actual questions users asked LLMs that led to citations. Check weekly once data begins flowing.
8. **Monitor BWT sitemap processing** — steelr.co.uk/sitemap.xml submitted 19 Apr, was "Processing". Revisit in 48 hours, confirm URL discovery count approaches 297.

## SEO Fixes Applied (16 Apr 2026)
- **Collection page duplicate titles fixed** — 8 groups of doors (24 pages) shared identical `<title>` and H1 tags, causing GSC "Duplicate without user-selected canonical" errors. Title generation in `src/data/doors.ts` now uses context phrases from the slug (e.g. "Stone Surround", "Gable Porch", "Interior View") and secondary features to guarantee all 54 collection pages have unique titles and H1s. Deduplication pass added as safety net.

## SEO Fixes Applied (8 Apr 2026, batch 2)
- **Area page boilerplate varied** — 2 shared paragraphs (manufacturing + customisation) now have 4 variants each, rotated by parent hub to eliminate duplicate content across 161 area pages
- **llms.txt references uncommented** in robots.txt — AI crawlers can now discover /llms.txt and /llms-full.txt
- **CredentialsStrip added to area pages** — PAS24/SR3/Secured by Design/FD30S/ISO 9001/UK Manufactured dark strip now appears on all 161 area pages (was already on homepage + collection)

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
- **161 location pages** for local SEO — unique descriptions referencing local architecture and neighbourhoods
- Hub pages list all child areas in schema.org `areaServed`
- Area pages cross-link to 3–5 nearby areas + parent hub
- Sitemap at `/sitemap.xml` with 297 URLs, most recently resubmitted to Google Search Console (18 Apr 2026)
- HTML sitemap at `/sitemap` (18 Apr 2026) linked from footer, mirrors the XML feed in human-readable form
- Product schema on collection door pages (offers block REMOVED — was causing GSC errors)
- HowTo schema on process page
- FAQ schema on all 161 area pages + security page + security-specification page
- Image quality: all set to 80 (reduced from 100 for performance)
- Images optimized: 24.7MB → 11.7MB (52% reduction via sharp)
- Hero carousel: lazy loading on non-first images

## Social Media Kit (Phase 2.1 built 21 Apr 2026)

Complete launch kit in `social/` folder — everything needed to go live on Instagram, TikTok, Pinterest, YouTube Shorts and LinkedIn. All assets generated from existing 67 portrait door images + 7 detail close-ups, no filming needed for first month of content.

### Folder structure
```
social/
  README.md                  — handles, bios, hashtag pools, posting cadence
  LAUNCH-CHECKLIST.md        — step-by-step account setup + week 1 posting schedule
  captions.md                — 20 ready-to-paste Reel captions (IG/TikTok/LinkedIn per reel)
  brand-kit/                 — profile avatars, banners, highlight covers, high-res logos
    highlight-covers/        — 6 IG Story highlight icons (Collection, Details, Process, Areas, Security, FAQ)
    logo-hires/              — 300 DPI print-ready logos (up to 4800x4800)
  reels/                     — 20 vertical MP4s (1080x1920, 10s, H.264, 4-7 MB each)
  pinterest/                 — 40 pins (1000x1500 PNG) + pins.csv manifest for bulk upload
  fonts/Montserrat-Thin.ttf  — variable font bundled (weights 100-900)
  scripts/                   — Python generators (idempotent, safe to re-run)
```

### Build commands
```bash
python social/scripts/build-brand-kit.py    # 15 brand-kit PNGs
python social/scripts/build-reels.py         # 20 Ken Burns Reels (~25 min on this machine)
python social/scripts/build-pinterest.py     # 40 Pinterest pins (~60 sec)
```

### Content design
- **Reels:** slow Ken Burns zoom (1.0x → 1.12x or vice versa) with subtle pan. Gold 'SR3 RATED · PAS 24 · UK MANUFACTURED'-style spec line top, cream caption bottom-left, steel|r watermark bottom-right. Dark gradients top + bottom for text legibility. 30 FPS, libx264, 6 Mbps. No audio (captions baked in, IG default-mute friendly).
- **Pinterest pins:** two styles — "panel" (top 70% image, cream text panel bottom 30%, Pinterest search-friendly) and "overlay" (full-bleed image, bottom gradient, cream text). Each pin carries title, gold subtitle, steelr.co.uk URL, watermark. Links direct to specific `/collection/[slug]` pages for pin-to-product traffic.
- **Brand kit:** Montserrat Thin wordmark with gold pipe separator rendered as Pillow rectangle (never the `|` character, per brand rules). Avatars 1080x1080, LinkedIn banner 1584x396, YouTube banner 2560x1440, Twitter banner 1500x500.

### House style baked into all scripts
- No em dashes, no exclamation marks (CLAUDE.md rule)
- No displayed prices
- No competitor names
- All CSVs and file names ASCII-safe (middle-dot `·` only appears in rendered image content, not filenames)

### Handles strategy
Priority order: `@steelrdoors` → `@steelr.doors` → `@steelr.uk` → `@steelrldn`. All 5 platforms under `info@supplywindows.co.uk` for single-login consistency.

### Adding content
1. Drop new source images into `public/images/gallery/`
2. Edit `REELS` or `PINS` arrays in the relevant script
3. Re-run script — all outputs regenerate idempotently
4. For new reel captions, append to `social/captions.md`

### Next phases (not yet built)
- Instagram carousels (7-slide blog-post repurposing)
- Process B-roll (needs filming — 30 seconds of lock-click / hinge / install footage would yield a year of 'detail' content)
- Before/after install Reels (needs customer permission + shots)
- Automated social performance tracker (alongside rank tracking at `vitrums/audit-data/`)

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
- `/programmatic-seo` — Template-based location pages at scale (161 area pages)
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

## Subagent Routing (project-local)

Three SteelR-specific subagents live at `.claude/agents/`. In addition to the global ten, dispatch these per the rules below.

| Agent | Fires when |
|---|---|
| `area-slug-validator` | Before any commit that adds a new entry to the area data file. Blocks commits adding thin-content slugs. |
| `cannibalisation-auditor` | Monthly, and after any new blog or area page goes live. Wraps `audit-data/blog-seo-audit.py`. |
| `visibility-audit-runner` | Quarterly, and after major content pushes. Wraps `audit-data/visibility-audit.py` across Google, Bing, Maps, and 4 AI engines. |

Global agents that fire often in this project:
- `seo-schema-validator` on any area-page or blog-page edit.
- `llms-txt-integrity-checker` after any blog publish or area add.
- `deploy-gate` before any push to main.
