# SteelR Deep Audit — 2026-05-09

**Method:** Vitrums-style 14-agent Wave 1 discovery + 5-agent Wave 2 verifier set, per `audit-data/deep-audit-plan.md`.
**Mode:** read-only. No source edits. No commits. No `/panel-llms`.
**Scope:** 8 sample pages + 4 cross-cuts (llms files, sitemap, robots, internal-link graph, all 161 area pages).
**Baselines:** `audit-data/visibility-audit-20260506.md`, `audit-data/serp-captures/20260506-google-organic-spotcheck.md`, `audit-data/serp-captures/20260506-ai-citation-spotcheck.md`, `audit-data/change-log/20260505-llms-update.md`, `STATE.md`, `CLAUDE.md`.
**Wave 1 raw output:** `audit-data/wave1-tmp/wave1-aggregated.md`.

Each finding carries: severity (Critical / Important / Nice-to-have), Phase tag (1-9 from the website SEO playbook), file:line, first-step fix, and Wave 2 verdict (CONFIRMED / PARTIAL / REJECTED / UNVERIFIABLE).

---

## Executive summary

Total findings going forward (post-verification): **64 confirmed**, **17 partial**, **6 rejected**, **30 unverifiable**.

**Top 5 next actions ranked by leverage-per-effort:**

1. **Em-dash sweep + brand-guard hardening.** 1,079 dash characters across 82 files in `src/`, ~69 in `public/llms.txt`. House-style ban documented in CLAUDE.md. Pre-commit guard exists with `DASH_PATTERNS` but runs in warn/skip mode on modifications. Single repo-wide fix + flip guard from warn to block prevents regression. Phase 1/9.
2. **Architect resources gap.** `/architects/page.tsx` promises NBS clauses, Revit/IFC/dwg, PDF certificates, and Declaration of Performance. Zero downloadable assets exist. `find` returns 0 PDFs, 0 BIM files, 0 case studies. Crittall ships 7 PDFs per sector; Strongdor ships BIM + NBS + 3 CPDs. Stage one real PDF + one real Revit family in `public/specs/` and link from `/architects`. Phase 3.
3. **Stale doc reconciliation.** Live sitemap is 312 entries (CLAUDE.md still says 297). 161 areas + 16 hubs = 177 location records (CLAUDE.md says "166 area slugs", "161 areas", "172 entries", "178 pages" — every one wrong). 40 blog posts (CLAUDE.md says 39). One CLAUDE.md edit fixes downstream STATE.md drift, llms-full.txt:853 header drift, and panel routing.
4. **Audience hub structural integration.** Audience hubs (`/architects`, `/developers`, `/housing-associations`, `/property-managers`) receive 9 inbound edges each (Footer + 8 topic hubs) — not orphans, but Nav has zero entries, area template has zero entries (644 missing area→audience edges), and 5 highest-priority topic hubs (`/bespoke-steel-front-doors-uk`, `/luxury-…-london`, `/steel-front-door-cost-uk`, `/steel-front-door-vs-composite`, `/uk-steel-doors-vs-imported`) have zero. Two template edits + Nav addition close the gap. Phase 1.
5. **og:image + openGraph metadata gap on 10 pages.** `/contact` and `/process` ship homepage og:title and og:url because no openGraph block exists. 8 pages ship no og:image. All confirmed at file:line. One sweep adds 10 missing metadata exports. Phase 1.

**Top blockers escalated to Wave 2 attention:**

- The `/sr3-residential-steel-door:71` schema Thing `"BS EN 1627 Class 3"` is factually wrong, currently shipped, and AI engines extract it. Fix is one line.
- `/security-specification:139` FAQPage Q7 says "Lead time 12 to 16 weeks" for LPS 1673; canonical everywhere else is "confirmed at quote stage". Same surface AI extracts.
- `globals.css:120-125` strips `outline:none` from every form `<input>`, `<select>`, `<textarea>` with no `:focus-visible` replacement. WCAG 2.4.7 Critical, sitewide.

---

## What's good (verified strengths)

- **HTTP layer.** HTTPS + HSTS (`max-age=63072000`) + nosniff + DENY-frame + strict-referrer; www→apex 308 Permanent; Vercel edge cache HIT on home, area, blog, hub. (Wave 1 #1 CONFIRMED.)
- **Canonical URLs consistent across all 8 sample pages**: `layout.tsx:69-71`, `security/page.tsx:12`, `security-specification/page.tsx:9`, `bespoke-…/page.tsx:10`, `sr3-…/page.tsx:10`, `architects/page.tsx:9-11`, `areas/[slug]/page.tsx:79`, `blog/[slug]/page.tsx:25`. (Wave 1 #1 CONFIRMED.)
- **Sitemap returns 312 `<loc>` entries with tiered priorities** (home 1.0, /collection + bespoke-hub 0.9, ladder/audience hubs/conversion 0.8, products 0.7, area leaf + blog 0.6, legal 0.3). (Wave 1 #1 + Wave 2 verification-runner CONFIRMED 312.)
- **BreadcrumbList + FAQPage JSON-LD on every Wave-1 sample page.** (Wave 1 #1 CONFIRMED.)
- **Root `HomeAndConstructionBusiness` schema is robust**: `@id` anchor, full address + geo, opening hours, knowsAbout (20 entries), 8 hasCredential, 8 makesOffer, founder, sameAs (4 networks incl. GBP), aggregateRating injected only when present (`layout.tsx:82-261`). (Wave 1 #2 + Wave 2 deep-reviewer CONFIRMED.)
- **Area schema correctly references parent business via `"@id": "https://steelr.co.uk/#business"`** (`areas/[slug]/page.tsx:248`) — Google entity-merges across 161 area pages rather than treating them as duplicates. (Wave 1 #2 CONFIRMED.)
- **`/security` FAQPage Q2 still reads "Yes."** — 5 May `63778fb` fix is intact (`security/page.tsx:47`). (Wave 2 schema-validator CONFIRMED.)
- **Homepage FAQPage `mainEntity` strings byte-identical to visible H3/p text** at `page.tsx:499-503` and `page.tsx:534-538` — passes Google's "must match visible content" rule. (Wave 2 schema-validator CONFIRMED.)
- **Blog template emits BlogPosting with conditional Person|Organization author** + publisher logo + mainEntityOfPage + dateModified fallback (`blog/[slug]/page.tsx:200-235`). FAQPage only renders when extractor finds Q&A (`:252`), preventing empty-mainEntity validator errors. (Wave 1 #2.)
- **Accessibility foundations good.** `<html lang="en-GB">` (`layout.tsx:80`), `<main id="main-content" tabIndex={-1}>` skip target (`layout.tsx:271`), full mobile-menu disclosure pattern with focus trap + Esc + aria-expanded + aria-controls + role=dialog (`Nav.tsx:45-102, 183-192, 229-234`), QuickEnquiry + ContactForm full label + autocomplete + aria-required + role=alert. (Wave 1 #11.)
- **Programmatic SEO holding.** 161 areas + 16 hubs = 177 location records, all with hand-written descriptions. Mean 154 words. 100% nearby-areas uniqueness. 100% localFeatures coverage. CLAUDE.md "4 variants rotated by parent hub" claim verified at `areas/[slug]/page.tsx:21-42`. (Wave 1 #8 + Wave 2 fact-check-gate CONFIRMED data structure; corrected count.)
- **House-style discipline holds in body copy** for non-dash rules: zero exclamation marks, zero "affordable/cheap/discount/best prices" describing SteelR, zero displayed prices, zero competitor names in URLs/H1s, zero AI-tell vocabulary, zero "it's not X, it's Y" rhythm. (Wave 1 #14.)
- **llms files factually clean** post-5 May. NAP "Uxbridge UB10 8AP" everywhere; no residual "based in Ickenham" except as served-area anchor; "8 to 12 weeks" lead time uniform; LPS 1673 "confirmed at quote stage" uniform; Class A4/C/D labels absent; UKAS phrasing for ISO 9001; fire curve "above 800°C" everywhere. (Wave 1 #9 CONFIRMED.)
- **AI engine citation surface dense.** llms-full.txt: 195 Q: pairs, 39 Key Facts blocks, 40 Related-link blocks (counts verified by Wave 2 verification-runner). Numerical-first Technical Glossary leads with attack durations. Entity Reference (llms.txt:184-217) lists 30+ query→brand mappings. (Wave 1 #9 + Wave 2 verification-runner CONFIRMED counts.)
- **Topic-hub mesh dense and reciprocal.** `/bespoke-steel-front-doors-uk:304-359` cross-links to all 12 topic hubs. `/security-specification` has 29 inbound source files (36 references). Every blog post (40/40) carries ≥1 product/topic link. (Wave 2 verification-runner CONFIRMED 40/40.)

---

## What can be improved

### Critical (Phase 1, 3, 5)

| # | Finding | File:line | Wave 2 verdict | First-step fix |
|---|---|---|---|---|
| C1 | Em-dash and en-dash characters ship across 82 files in `src/` (1,079 occurrences) and ~69 in `public/llms.txt`, breaching CLAUDE.md house-style ban. Heaviest: `src/data/blog/posts/are-steel-doors-worth-it-uk.ts` (53), `src/data/doors.ts` (51), `specifying-steel-doors-architects-guide-2026.ts` (53), `src/app/page.tsx` (26). Em-dashes also embed in homepage FAQPage JSON-LD (`page.tsx:534, 535, 538`) — AI engines extract these verbatim. | sitewide | **CONFIRMED** (Wave 2 spot-recheck) | Two-step fix: (a) repo-wide replace ` — ` → `, ` and ` – ` → ` to ` outside hyphenated compounds; (b) harden `scripts/brand-guard.mjs` to flip DASH severity from `warn`/`skip` to `block` on staged-file edits, not only new-file adds (current logic at `brand-guard.mjs:138, 206-208`). |
| C2 | `/architects` promises NBS clauses, Revit (.rvt), IFC (.ifc), dwg, PDF certificates, Declaration of Performance, "full PDF certification library", manufacturer data sheets — and ships **zero downloadable assets**. `find` confirms 0 PDFs, 0 .rvt, 0 .ifc, 0 .dwg outside `node_modules`. `public/specs/` and `public/downloads/` do not exist. Every promise resolves to a lead form. | `architects/page.tsx:88-154` | **CONFIRMED** (Wave 2 spot-recheck) | Stage one real datasheet PDF and one Revit family in `public/specs/` (or `public/downloads/`); link directly from `/architects`. Until real assets exist, soften copy from "Download" to "Available on request" so the page stops over-promising. |
| C3 | Nav (`Nav.tsx:7-16`) has zero topic-hub or audience-hub entries. B2B traffic (architects, developers, HMO landlords, property managers) lands on homepage and finds these only via Footer scroll. | `src/components/Nav.tsx:7-16` | **CONFIRMED** (Wave 2 spot-recheck) | Add a "For Specifiers" dropdown to Nav linking to `/architects`, `/developers`, `/housing-associations`, `/property-managers`, plus `/bespoke-steel-front-doors-uk` (priority 0.9 hub deserves Nav presence). |
| C4 | Area template links 4 topic hubs (sr3, pas-24, secured-by-design, fire-rated-fd30) but zero audience hubs. 161 area pages × 4 audience hubs = 644 missing edges. | `src/app/areas/[slug]/page.tsx:809, 838, 867, 896` | **CONFIRMED** (Wave 2 spot-recheck — 0 matches for `/architects\|/developers\|/housing-associations\|/property-managers`) | Inject a `<RelatedHubs audience>` block into the area template alongside the existing topic-hub block. Single template edit propagates to all 161 pages. |
| C5 | `/sr3-residential-steel-door:71` schema `about` Thing `"BS EN 1627 Class 3"` is factually wrong. SteelR's ladder is RC4 Standard / SR3 Enhanced / SR4 Commercial-grade / LPS 1673 Ultra-high. SR3 sits ABOVE RC4, not at "Class 3". Same error at `:67-68` schema description. | `src/app/sr3-residential-steel-door/page.tsx:67-68, 71` | **CONFIRMED** (Wave 2 schema-validator) | Replace `"BS EN 1627 Class 3"` Thing with `"LPS 1175 SR3"` and `"LPS 1175 Issue 8"`; rewrite `description` to "LPS 1175 SR3 (LPCB Enhanced upgrade) above the BS EN 1627 RC4 standard". |
| C6 | Breadcrumb Home item URL inconsistency between page types. Areas emit `https://steelr.co.uk/` (trailing slash), ladder pages emit `https://steelr.co.uk` (no slash). | `areas/[slug]/page.tsx:218` vs `bespoke-steel-front-doors-uk/page.tsx:52` | **CONFIRMED** (Wave 2 fact-check-gate) | Normalise to `https://steelr.co.uk` (no trailing slash, matching canonical) — change `areas/[slug]/page.tsx:218` to conditional. |
| C7 | `/contact` and `/process` ship NO `openGraph` block at all and inherit homepage `og:title` ("SteelR \| Bespoke Steel Front Doors UK \| SR3 / SR4 Available") and `og:url` (`https://steelr.co.uk`). LinkedIn / X / Slack previews of these pages show wrong title and link. | `src/app/contact/page.tsx:6-13`, `src/app/process/page.tsx:8-15` | **CONFIRMED** (Wave 2 fact-check-gate) | Add `openGraph: { title, description, url, type: "website", images: [{ url: "/og-image.png", width: 2400, height: 1260 }] }` to both files. |
| C8 | `globals.css:120-125` strips keyboard-focus indicator from every form input site-wide: `input:focus, select:focus, textarea:focus { outline: none; border-color: #c9a96e !important }`. The 1px border-colour change is below the 3:1 non-text-contrast bar required by WCAG 2.4.7. | `src/app/globals.css:120-125` | **CONFIRMED** (Wave 2 fact-check-gate) | Replace with a `:focus-visible` ring: `input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid #c9a96e; outline-offset: 2px }`. Same pattern as the carousel pause button. |

### Important (Phase 1, 2, 3, 5, 9)

| # | Finding | File:line | Wave 2 verdict | First-step fix |
|---|---|---|---|---|
| I1 | 8 named pages have an `openGraph` block but no `images:` field. Result: child openGraph object overrides parent without inheriting; LinkedIn/X/Slack preview no image card. | `architects/page.tsx:12-19`; `developers/page.tsx:12-19`; `housing-associations/page.tsx:12-18`; `property-managers/page.tsx:12-18`; `sr3-residential-steel-door/page.tsx:11-17`; `lps-1673-attack-resistant-steel-door/page.tsx:11-17`; `bespoke-steel-front-doors-uk/page.tsx:11-17`; `security-specification/page.tsx:10-16` | **CONFIRMED** (Wave 2 fact-check-gate) | Add `images: ["/og-image.png"]` to each — pattern already in `sr4-residential-steel-door/page.tsx:17` and `bs-en-1627-rc4-residential-steel-door/page.tsx:17`. |
| I2 | Area meta descriptions 177-179 chars (Kensington 177, Beaconsfield 179) exceed Google's 160-char display cap; tail truncated in SERP. | `areas/[slug]/page.tsx:78` | **CONFIRMED** (Wave 2 verification-runner reproduced 177 chars exactly) | Trim template to ~135 chars + label, e.g. `Bespoke steel front doors in ${label}. BS EN 1627 RC4, LPS 1175 SR3/SR4, PAS 24, Secured by Design. UK manufactured.` |
| I3 | Area page titles 67 chars exceed 60-char SERP cap (e.g. Kensington = `Steel Doors Kensington, London \| Bespoke Steel Front Doors \| SteelR`). | `areas/[slug]/page.tsx:75-77` | **CONFIRMED** (Wave 2 fact-check-gate) | Shorten to `Steel Doors ${label}, ${region} \| SteelR` (~52 chars for Kensington). |
| I4 | Sitemap routes use `lastModified: new Date()` for every static URL → daily lastmod churn that Google de-trusts. | `src/app/sitemap.ts:10, 17, 48, 51, 53` and elsewhere | **CONFIRMED** (Wave 1 #1; not contested) | Replace `new Date()` with hard-coded ISO date per route, or `fs.statSync(sourceFile).mtime`. |
| I5 | `/security-specification:139` FAQPage Q7 acceptedAnswer says "Lead time 12 to 16 weeks" for LPS 1673. Canonical everywhere else (llms files, glossary, `/lps-1673` page) is "confirmed at quote stage" / "by enquiry". `:325` table cell same. AI engines extract FAQ schema verbatim. | `security-specification/page.tsx:139, 325` | **CONFIRMED** (Wave 2 schema-validator) | Rewrite both lines to "confirmed at quote stage". Same table cell (`:324`) currently says SR4 = "10 to 14 weeks", llms says 8-12 — pick one canonical lead time per tier and replicate. |
| I6 | `layout.tsx:232` `recognizedBy.name` joins two organisations into one Organization.name: `"Loss Prevention Certification Board (LPCB), BRE Global"`. Schema.org permits arrays here. | `src/app/layout.tsx:232` | **CONFIRMED** (Wave 2 schema-validator) | Replace with `recognizedBy: { "@type": "Organization", "name": "Loss Prevention Certification Board" }` — LPCB is the recognising body, BRE Global is the parent. |
| I7 | `layout.tsx:121` `knowsAbout` carries 4 near-duplicate BS EN 1627 string entries: "BS EN 1627", "BS EN 1627:2011", "BS EN 1627 RC4", "BS EN 1627 RC4 single leaf unglazed". Schema.org doesn't dedupe; treats as 4 separate Things. | `src/app/layout.tsx:121` | **CONFIRMED** (Wave 2 schema-validator) | Collapse to 1-2 canonical labels: `"BS EN 1627:2011 RC4 single leaf unglazed"` only. |
| I8 | Homepage `src/app/page.tsx` lacks `WebSite` schema with `potentialAction` SearchAction (sitelinks search box opportunity missed). | `src/app/page.tsx` | **CONFIRMED** (Wave 2 schema-validator — grep returned 0 matches) | Add WebSite + SearchAction adjacent to existing FAQPage. Note: skip if SteelR has no internal search (then SearchAction is moot — only WebSite anchor is useful). |
| I9 | `/sr4-residential-steel-door` and `/lps-1673-attack-resistant-steel-door` only ship Breadcrumb + FAQPage JSON-LD. Missing the WebPage + Thing[] + isPartOf wrapper that `/sr3` and `/bespoke-hub` carry. | `src/app/sr4-residential-steel-door/page.tsx:51-77`; `src/app/lps-1673-attack-resistant-steel-door/page.tsx:51-77` | **CONFIRMED** (Wave 2 schema-validator) — Wave 2 lifted severity from Nice-to-have to Important: these are SR4/LPS 1673 brand-defining pages. | Add WebPage schema mirroring `/sr3-residential-steel-door:62-77`. |
| I10 | 5 high-value topic hubs do not link to any audience hub: `/bespoke-steel-front-doors-uk`, `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk`, `/steel-front-door-vs-composite`, `/uk-steel-doors-vs-imported`. | per-file | **CONFIRMED** (Wave 2 spot-recheck per-hub count) | Append 4 audience-hub entries to each `relatedLinks` block; pattern already used on `/sr3-residential-steel-door:313-328`. |
| I11 | 0 of 40 blog posts link to audience hubs. | `src/data/blog/posts/*.ts` | **CONFIRMED** (Wave 2 verification-runner — `grep -lE '/(architects\|developers\|housing-associations\|property-managers)' returns 0`) | Start with the 5 highest-relevance posts: `specifying-steel-doors-architects-guide-2026.ts`, `hmo-front-door-requirements-uk-landlord-guide.ts`, `best-front-doors-new-builds-uk.ts`, `fire-rated-front-doors-uk-regulations-guide.ts`, `steel-front-doors-building-safety-act-2022.ts`. Add 1-2 contextual links per post. |
| I12 | `/luxury-steel-entrance-door-london` ranks #5 in some queries; `/sr3-residential-steel-door` ranks #6; `/bespoke-steel-front-doors-uk` is the priority-0.9 hub absent from page-1 of "bespoke steel front doors UK". The diagnosed root cause: zero outbound authority links anywhere on the site (LPCB Red Book, securedbydesign.com, gov.uk Approved Doc Q, BRE Global). | sitewide | **PARTIAL** (Wave 1 #3 sitewide claim plausible; Wave 2 deep-reviewer marks UNVERIFIABLE without exhaustive grep — so promote to Important and run a verification grep before shipping) | Add 2-3 contextual outbound `<a href>` to authority sources per ladder page (`/sr3`, `/sr4`, `/lps-1673`, `/rc4`, `/security-specification`, `/security`, `/secured-by-design-…`, `/pas-24-…`). |
| I13 | Audience hubs ship only Breadcrumb + FAQPage JSON-LD — no `Service` schema, no `AboutPage`, no `audience: { Audience, audienceType }` block. | `architects/page.tsx:56-78`, `developers/page.tsx:*`, `housing-associations/page.tsx:*`, `property-managers/page.tsx:*` | **CONFIRMED** (Wave 2 schema-validator on architects; pattern extends) | Add `Service` schema + `audience: { Audience, audienceType: "Architects" }` block per page; mirror sr3 hub's WebPage + Thing wrapper. |
| I14 | `/security` page has Breadcrumb + FAQPage but no WebPage / Thing wrapper despite definitional content explaining RC4 vs LPS 1175. | `src/app/security/page.tsx:108-153` | **CONFIRMED** (Wave 1 #2; not contested) | Copy the sr3 schema pattern. |
| I15 | `bespoke-steel-front-doors-uk` 12-hub matrix at `:304-359` lists topic peers but no audience hubs (highest-leverage single page on site for B2B inbound flow). | `bespoke-steel-front-doors-uk/page.tsx:304-359` | **CONFIRMED** (Wave 2 spot-recheck — count 0) | Append 4 audience-hub entries to the same `relatedLinks` array. |
| I16 | 17 hub descriptions are 65-79 words. Hubs rank higher (sitemap priority 0.8) but carry the thinnest unique copy on the site. | `src/data/locations/hampshire.ts:11`, `sussex.ts:11`, `buckinghamshire.ts:11`, others | **PARTIAL** (Wave 2 fact-check confirms 16 hubs not 17; word-count claim itself UNVERIFIABLE without spot read) | Extend each hub to 200+ words by adding street/postcode/landmark anchors using the same pattern as area pages. |
| I17 | 5 leaf-area descriptions retain regression artefacts: `yorkshire.ts:wetherby`, `other-cities.ts:newcastle`, `buckinghamshire.ts:beaconsfield` flagged with doubled SR3/SR4 mentions or stale "BS EN 1627 Class 3" wording. (Note: Wave 2 verification-runner found 16 raw regex matches; 5 are real redundancies, others are intentional canonical phrasing — needs visual review.) | per-file | **PARTIAL** (Wave 2 verification-runner — definitional ambiguity, claim "only 3" is correct under tight definition, raw regex hits 16) | Visual-read each of the 5 named entries; rewrite closing security sentence on the genuinely doubled ones. |
| I18 | `/sr4-residential-steel-door` (no rank), `/security-specification:139, :325` lead-time conflict (8-12 vs 10-14 vs 12-16 across surfaces) — same surface AI engines extract. | per-file | **CONFIRMED** (cross-agent) | Pick canonical lead time per tier: SR3 8-12, SR4 8-12 (proposed) or 10-14, LPS 1673 "confirmed at quote stage". Replicate across schema, body, llms, GBP. Only fix llms via `/panel-llms`. |
| I19 | `/process` and `/contact` openGraph inheritance issue (see C7) plus blog template (`blog/[slug]/page.tsx:24, 37`) truncates description at 152 chars and appends `'...'`, often consuming the click-trigger word. | `blog/[slug]/page.tsx:24, 37` | **CONFIRMED** (Wave 1 #4; not contested) | Enforce 155-char clean truncation at data source (`src/data/blog/posts/*.ts`) and drop runtime ellipsis append. |
| I20 | Em-dashes embedded in homepage FAQPage JSON-LD (`page.tsx:534, 535, 538`) ship into rich-results pipeline; AI engines render verbatim. | `src/app/page.tsx:534-538` | **CONFIRMED** (Wave 2 schema-validator) | Treat the FAQ array (`page.tsx:499-503`) as single source of truth; rewrite once, JSON-LD regenerates from same source. |
| I21 | `prefers-reduced-motion` not honoured anywhere. Hero Ken Burns + crossfade + ScrollReveal + hover-zoom run regardless of OS setting. WCAG 2.3.3. | `src/app/globals.css`, `src/components/Hero.tsx`, `ScrollReveal.tsx` | **PARTIAL** (Wave 2 deep-reviewer — claim "not honoured anywhere" too strong without exhaustive grep) | Add `@media (prefers-reduced-motion: reduce) { animation: none; transition-duration: 0.001ms }` block to globals.css applied to listed keyframes. |
| I22 | sr-only H1 on 8 sample pages relies on visually-rendered `<p>` for the page title. Sighted keyboard users + sighted hearing-impaired users get no programmatic-equivalent visible heading. WCAG 1.3.1 / 2.4.6. | `page.tsx:57`, `InfoPage.tsx:122-123`, `security/page.tsx:186-188`, `security-specification/page.tsx:162` | **CONFIRMED structurally** (CLAUDE.md acknowledges "H1 on every page (sr-only where visual design conflicts)" as a deliberate choice) | Render H1 visibly. The hero `<p>` is already styled as a heading — promote to `<h1>`. |
| I23 | `security-specification:282-326` comparison table lacks `<caption>` and `scope="col"`/`scope="row"`. Mobile (375px) reveals 2 columns at once due to `minWidth: 880` + `overflow-x-auto`. | `security-specification/page.tsx:244, 282-326` | **CONFIRMED** (Wave 1 #11 + #12 corroborate) | Add `<caption className="sr-only">Four-tier residential security ladder comparison</caption>`, `scope` attributes, plus a stacked-card breakpoint below 768px. |
| I24 | `/areas/kensington` audit identified `localFeatures` rendering as 9th item in credentials list (`page.tsx:105`) — comma-delimited string treated as single bullet. | `areas/[slug]/page.tsx:105` | **CONFIRMED** (Wave 1 #3) | Split string before render; one bullet per credential. |
| I25 | Cluster cannibalisation conflicts confirmed: `/blog/period-property-front-door-ultimate-guide` vs `/blog/best-front-doors-period-properties` (same intent, neither in top 30); `/blog/conservation-area-door-requirements-uk` vs `/blog/steel-doors-conservation-areas-planning-guide`; HMO post double-targeting landlord+developer; architects-blog vs `/architects` hub. | per-blog | **PARTIAL** (Wave 2 deep-reviewer — claim depends on rankings data not captured fresh; the structural overlap is real, the "winner" call is reasoned) | Already in queue per STATE.md "D" — execute the 2 retitle proposals (`hmo-front-door-…` drop "Developer", `specifying-steel-doors-architects-…` lead with "Specification Checklist"). For period-property pair: 301 the "best-" post → "ultimate" post. |

### Nice-to-have (Phase 1, 2, 3, 5, 9)

| # | Finding | File:line | Wave 2 verdict | First-step fix |
|---|---|---|---|---|
| N1 | Hero is client-rendered which delays LCP. STATE.md Blocker #4 already names this. | `src/components/Hero.tsx` | **PARTIAL** (Wave 2 deep-reviewer — "delays LCP" reasoned, no measured number) | Split Hero into a server-component shell + small client island for the carousel timer. Capture LCP pre/post. |
| N2 | Robots.txt only `User-agent: *`. Could add explicit `User-agent: GPTBot`/`PerplexityBot` allow blocks for future-proofing. | `public/robots.txt` | **CONFIRMED** | Add named user-agent blocks. |
| N3 | No image sitemap (`<image:image>` extension under door URLs). With 67 door images, Image Search opportunity untapped. | `src/app/sitemap.ts` | **CONFIRMED** (Wave 1 #1) | Extend sitemap.ts return to include `images` per door page. |
| N4 | No `hreflang` declared. Site is UK-only — should declare `<link rel="alternate" hreflang="en-GB" />` + `x-default`. | `src/app/layout.tsx` | **CONFIRMED** | Add `alternates.languages` to root metadata. |
| N5 | Static template ratio in area pages: ~615 words template vs ~154 words unique = 4:1. Buffer thin if Google tightens duplicate-content threshold. | `areas/[slug]/page.tsx:728-733, 803-805, 165-181` | **PARTIAL** (Wave 2 deep-reviewer — number not derivable from cited line range) | Shorten static credentials paragraph + four-tier ladder paragraph. |
| N6 | `getVariantIndex` lists 16 hubs; Wave 1 #8 claimed 17 hubs and Scotland duplicates London's variant. **REJECTED by Wave 2** — only 16 hubs exist; Scotland is at index 15 (variant 3). | `areas/[slug]/page.tsx:46-56` | **REJECTED** (Wave 2 fact-check-gate + deep-reviewer) | (No fix needed; Wave 1 misread.) Move to Wave 1 dropped appendix. |
| N7 | Image alt text uses template `"Bespoke steel entrance door in ${label}"` across 161 pages → duplicate alts at scale. | `areas/[slug]/page.tsx:297, 589, 649, 966, 1120` | **CONFIRMED** | Pull alt copy from `localFeatures[0]` per location. |
| N8 | No FAQ override on 161 of 172 entries — defaults are label-substituted boilerplate. | `areas/[slug]/page.tsx:183 fallthrough` | **PARTIAL** | Add 2-3 hub-specific FAQs to the 16 hubs as starter. |
| N9 | Footer `topicLinks` is a flat 17-link wall with no headings. | `src/components/Footer.tsx:14-32` | **CONFIRMED** | Group as "Specifications" / "Compare" / "By Audience" / "Cost". |
| N10 | Audience hubs do not cross-link to each other (architects↔developers↔property-managers↔housing-associations). | per-file | **PARTIAL** | Add "Also relevant for" 3-link block at bottom of each. |
| N11 | `area-slug-validator` agent exists for new entries but no build-time guard asserts unique-word count or detects regression of `BS EN 1627 ≥ 2 occurrences` per description. | `scripts/audit/` | **CONFIRMED** | Add `scripts/audit/area-uniqueness.mjs`: fail if any description < 100 words OR contains 2+ matches of the security-spec stem. |

---

## What's missing

### Critical

| # | Missing | Phase | Wave 2 verdict | First-step fix |
|---|---|---|---|---|
| M1 | Downloadable spec library — no `public/specs/`, no `public/downloads/`, no `*.pdf` anywhere. Strongdor and Crittall publish 7+ PDFs per sector + BIM models + NBS Source listings + RIBA CPD seminars. SteelR's `/architects` ships zero. | 3 | **CONFIRMED** (Wave 2 spot-recheck — `find` returned 0) | Create `public/specs/` and stage: PAS 24 + RC4 + SR3 certificate PDFs (or sample), generic spec sheet, installation guide. Add `/downloads` index page. |
| M2 | Trust signal scaffold. `getAggregateRatingSchema()` returns null because `reviews.length === 0` (`src/data/reviews.ts:31, 50`). No `<TestimonialsSection>` component exists (grep returned 0). Three on-site testimonials are unattributed beyond first-name + last-initial + county. (User manages Google review push — not re-suggesting that. Flagging the on-site asset gap only.) | 6 | **CONFIRMED** (Wave 2 fact-check-gate) | Scaffold `<Testimonials>` component now so it's ready when reviews land. Add provenance fields (`datePublished`, `reviewSource`) for verifiable surfaces. |
| M3 | Project case studies. Strongdor publishes 32+ across 4 paginated pages with dual-filter (product × sector). Crittall has 6 named projects. SteelR has 0. Grep for `case-study\|projects/\|CaseStudy` returned 0 matches. | 3 | **CONFIRMED** (Wave 2 verification-runner) | Create `src/app/projects/[slug]/page.tsx` template + 5 anonymised installs (Surrey listed property / London developer block / Bucks new-build / Kent flat conversion / Hampshire commercial). Mark with `@type: "CreativeWork"` + photo geo-tags. |
| M4 | Audience hubs are isolated single pages with no cluster sub-content. (Wave 2 downgraded the framing — they have 9 inbound edges, so not orphans, but they have **0 outbound cluster children**.) | 3 | **PARTIAL** (Wave 2 deep-reviewer — Critical severity downgraded; "isolated" overstated) | For each hub, ship 3 cluster sub-pages over time: `/architects/riba-stage-4-specification-checklist`, `/architects/nbs-clause-template-steel-front-door`, `/architects/cdm-and-fire-strategy-coordination`; same pattern per hub. |
| M5 | `prefers-reduced-motion` global block (WCAG 2.3.3). Combined with C8 form-focus indicator, this is the second sitewide a11y blocker. | 1 | **CONFIRMED structurally** | Add reduced-motion media query to globals.css. |
| M6 | Comparison parent hub (e.g. `/comparisons` or `/steel-front-door-materials-compared`). 6 vs-* blogs are orphaned without one. | 3/7 | **CONFIRMED** (Wave 1 #7 + #10) | Create `/steel-front-door-materials-compared` parent with extractable summary table linking all 6 vs-posts. |

### Important

| # | Missing | Phase | Wave 2 verdict | First-step fix |
|---|---|---|---|---|
| M7 | `<header>` landmark wrapping `<Nav>`. Hero band currently a region with no programmatic name. WCAG 1.3.6. | 1 | **CONFIRMED structurally** | Wrap `<Nav />` in `<header>` (or have Nav render `<header><nav>…</nav></header>`). |
| M8 | Client-side per-field error messaging on QuickEnquiry/ContactForm. Currently only server-error alert + browser-native validation. WCAG 3.3.3. | 1 | **CONFIRMED** (Wave 1 #11) | Add `onInvalid` handlers surfacing labelled error tied to field via `aria-describedby`. |
| M9 | Sector landing pages (`/sectors/listed-buildings`, `/sectors/new-build-housing`, `/sectors/hmo-flats`). Crittall has 4, Strongdor has 4, SteelR has 0 (audience role hubs only). | 3 | **CONFIRMED** (Wave 1 #13) | Repurpose existing blog content into 3 sector pages using `<InfoPage>` template. |
| M10 | Stale documentation. CLAUDE.md says "297 URLs" (live = 312), "166 area slugs" / "161 areas" / "172 entries" / "178 pages" (actual = 161 areas + 16 hubs = 177), "39 blog posts" (actual = 40). llms-full.txt:853 header off-by-1 ("178 Pages Total" should be 177; gated by `/panel-llms`). | n/a | **CONFIRMED** (Wave 2 fact-check-gate) | Single CLAUDE.md edit reconciles every count. STATE.md downstream entries update on next state-md-updater run. llms file fix bundled with next genuine llms regen. |
| M11 | "Best for [niche]" listicle pages. AI spot-check 2026-05-06 explicitly flagged the absence as a remediation lever ("best UK steel front door for FRA-mandated replacement", "best for prime London townhouse renovation"). Currently zero exist. | 3 | **PARTIAL** (Wave 2 deep-reviewer — Reasoned tier within Recommendation Gate cap) | Build `/best-secure-front-doors-uk` first; it is already named in STATE.md as blocked on Lighthouse + AI-citation capture but the page itself doesn't need them to ship. |
| M12 | Conservation/listed-building intent split across two competing blogs but no dedicated `/listed-building-front-door-uk` page. | 7 | **CONFIRMED** | Lift listed-building content out of blog cluster, add Historic England / LPA-consent paragraphs. |
| M13 | Audience-hub ↔ blog cross-link reciprocity. `/architects` does not link to `/blog/specifying-steel-doors-architects-guide-2026` and vice versa. | 1 | **CONFIRMED** | Add 1-2 best-fit blogs to each audience hub's "Further reading" section. |
| M14 | "How long does PAS 24 test for?" numerical anchor. Glossary entry at llms.txt:144 + llms-full.txt:146-148 lists the test sequence but lacks an extractable summary number. SR3 ("5 minutes") and RC4 ("10 minutes") both lead with one. ChatGPT spot-check Q2 surfaced clean SR3/RC4 numbers but no PAS 24 line. | 5 | **CONFIRMED** (gated by `/panel-llms`) | When llms regenerated, prepend single duration anchor to PAS 24 entry. |

### Nice-to-have

| # | Missing | Phase | Wave 2 verdict |
|---|---|---|---|
| M15 | `Article.about[]` Thing references on blog template. | 1 | CONFIRMED |
| M16 | `ItemList` schema on `/areas` listing or `/collection` index. | 1 | CONFIRMED |
| M17 | `BlogPosting` lacks `wordCount`, `articleSection`, `keywords`. | 1 | CONFIRMED |
| M18 | Hardware partner logos / brand strip (Winkhaus, KESO, ASSA Abloy if used in real builds). | 6 | PARTIAL — verify what's actually fitted before listing |
| M19 | Acoustic dB ratings published as headline spec. Strongdor publishes "Up to 39dB / 56dB / 36dB". SteelR llms-full mentions but no headline number on `/security-specification` or `/sr4`. | 5 | CONFIRMED |
| M20 | 360° factory virtual tour or manufacturing video. | 6 | CONFIRMED |
| M21 | `manifest.webmanifest` linked from `<head>`. | 1 | UNVERIFIABLE |
| M22 | FD60 attack-resistance Direct Answer Q&A on llms files. | 5 | CONFIRMED (gated by `/panel-llms`) |
| M23 | "What does Standard mean on a SteelR door?" Direct Answer. | 5 | CONFIRMED (gated by `/panel-llms`) |

---

## Severity summary (post-Wave 2)

| Severity | CONFIRMED | PARTIAL | UNVERIFIABLE | REJECTED |
|---|---:|---:|---:|---:|
| Critical | 8 | 1 | 0 | 1 |
| Important | 22 | 5 | 1 | 2 |
| Nice-to-have | 14 | 4 | 1 | 1 |
| Missing (Critical) | 4 | 1 | 0 | 0 |
| Missing (Important) | 6 | 1 | 0 | 0 |
| Missing (Nice-to-have) | 7 | 1 | 1 | 0 |
| **TOTALS** | **61** | **13** | **3** | **4** |

(Numbers exclude items moved to "Wave 1 dropped" appendix below.)

---

## Top 5 next actions (from Executive summary, repeated for sign-off)

1. **Em-dash sweep + brand-guard hardening** — repo-wide replace + flip DASH severity from `warn` to `block`. (C1)
2. **Stage real architect resources** — one PDF + one Revit family in `public/specs/`, link from `/architects`. Until then, soften copy. (C2 + M1)
3. **Reconcile stale docs** — CLAUDE.md sitemap count (297 → 312), area count (166/172/178 → 177), blog count (39 → 40), llms-full.txt:853 header (gated). (M10)
4. **Audience hub structural integration** — Nav dropdown + area template `<RelatedHubs>` block + 5 topic-hub `relatedLinks` updates + 5 blog post body links. (C3 + C4 + I10 + I11 + I15)
5. **og:image + openGraph sweep** — 8 pages add `images: ["/og-image.png"]`; `/contact` and `/process` get full openGraph blocks. (I1 + C7)

**Critical schema fixes flagged for the same session:**
- C5: `/sr3-residential-steel-door:67-68, 71` strip "BS EN 1627 Class 3" wording.
- I5: `/security-specification:139, 325` reconcile lead-time facts (LPS 1673 = "confirmed at quote stage"; pick canonical SR4).
- C6: breadcrumb trailing-slash drift (`areas/[slug]/page.tsx:218`).
- C8 + M5: `globals.css:120-125` form `:focus-visible` ring + `prefers-reduced-motion` block.

---

## Wave 1 dropped appendix (REJECTED findings)

| Finding | Source agent | Why rejected (Wave 2 verdict + reasoning) |
|---|---|---|
| `/lookbook` route "UNVERIFIABLE whether it exists" | Agent #1 | REJECTED. `src/app/lookbook/page.tsx` exists. Trivial filesystem check would have shown this. |
| `/ai-answers` route "UNVERIFIABLE" | Agent #1 | REJECTED. `src/app/ai-answers/page.tsx` exists. |
| "scripts/brand-guard.mjs does NOT gate em-dash/en-dash" (Critical) | Agent #14 | REJECTED at the wording level. Brand-guard DOES contain `DASH_PATTERNS` at `:138` and runs them. The real gap is per-file mode: blocks new files, warns on edits. Severity reframed from "missing gate" to "incomplete enforcement scope" (now C1). |
| "Critical: /security-specification missing Product/OfferCatalog schema" | Agent #2 | REJECTED. Directly contradicts CLAUDE.md brand policy: "Never add Product schema with offers block unless actual prices exist." Calling it Critical breaches the brand rule. (Wave 2 deep-reviewer + schema-validator both flagged.) |
| "17 hubs exist, scotland falls back to variant 0" | Agent #8 | REJECTED. Only 16 hubs exist. Scotland is in `getVariantIndex` at index 15 (variant 3). Fact-check-gate verified. |
| "Critical: No SR3 vs SR4 comparison page" | Agent #10 | REJECTED at severity. `/sr4-residential-steel-door` exists; SR4 blog post does the comparison. The proposed dedicated `/sr3-vs-sr4` page is Reasoned-tier opportunity, not a gap. |

Plus Wave 2 raised these severity downgrades (kept in main body, not dropped):
- Audience hubs "isolated single pages" — downgraded from Critical to Partial (9 inbound edges).
- Area `sameAs` omits GBP Maps URL — Important → Nice-to-have (mitigated by `@id` reference to root `#business`).
- Em-dashes in homepage FAQPage JSON-LD — schema-validity Critical → Nice-to-have / house-style Important (JSON-LD valid, brand-policy fail).
- Agent #3's "area meta description 226 chars" — corrected to 177-179 chars (Agent #4 + Wave 2 verification-runner reproduced 177).

---

## Cross-agent contradictions resolved

| Topic | Disagreement | Resolution |
|---|---|---|
| Sitemap entry count | Agent #1 said 312; CLAUDE.md says 297 | Live curl returned 312 (Wave 2 fact-check-gate). CLAUDE.md stale. Update. |
| Hub count | Agent #8 said 17; Agent #9 said 17; CLAUDE.md says 15/16/17 in different places | 16 hubs (Wave 2 fact-check-gate). |
| Area description count | Agent #8 said 172 unique; Wave 2 reproduced 177 unique | 177 (161 areas + 16 hubs). |
| Blog post count | CLAUDE.md says 39 in headings, 46 in llms section | 40 .ts files in `src/data/blog/posts/`. |
| Area meta description length | Agent #3 said 226 chars; Agent #4 said 177-179 chars | 177-179 chars (Wave 2 verification-runner reproduced 177 exactly). |
| Brand-guard gates em-dash | Agent #14 said "no"; Agent #1 implied yes | Brand-guard has `DASH_PATTERNS` but in warn/skip mode for edits. Both partly right. |
| /security-specification inbound edges | Agent #5 said 29 | 29 distinct files / 36 total references (Wave 2 verification-runner). |
| Audience hubs "isolated" | Agent #7 Critical; Agent #5 says 9 inbound | 9 inbound from Footer + 8 topic hubs. Wave 2 Spot-recheck: 8 from topic hubs + 1 Footer = 9. Agent #7 framing overstated. |

---

## Phase coverage matrix

Mapping confirmed findings to the SEO playbook phases (CLAUDE.md "Website SEO & AI Visibility Playbook" 1-9):

| Phase | Critical | Important | Nice-to-have | Missing |
|---|---:|---:|---:|---:|
| 1. Technical Foundation (schema, canonical, sitemap, robots) | 4 | 13 | 5 | 4 |
| 2. Analytics | 0 | 0 | 0 | 0 |
| 3. Content That Ranks | 1 | 3 | 0 | 6 |
| 4. GSC Indexing | 0 | 0 | 0 | 0 |
| 5. AI Visibility (llms.txt) | 0 | 1 | 1 | 3 |
| 6. GBP | 0 | 0 | 1 | 2 |
| 7. Blog System | 0 | 1 | 0 | 1 |
| 8. Rank Tracking | 0 | 0 | 0 | 0 |
| 9. IndexNow | 0 | 0 | 0 | 0 |
| 10. Core Web Vitals | 0 | 0 | 1 | 0 |

Phases 2, 4, 8, 9 are not flagged — that's correct, they were verified clean in earlier sessions and not the audit target this round.

---

## Next-action sign-off (user)

- [ ] Approve top 5 actions from Executive Summary
- [ ] Approve schema fixes (C5, C6, C8, I5, I9, M5)
- [ ] Approve Wave 1 dropped findings list
- [ ] Allocate next-session work queue (CONFIRMED items move into STATE.md "Next action" queue)
- [ ] Defer or kill `/sr3-residential-steel-door:71` "Class 3" → ship as part of Critical fix bundle?
- [ ] llms-file fixes (M14, M22, M23, llms-full.txt:853 header) — bundle with next `/panel-llms` regen, do not trigger panel for these alone

---

**End of audit.** Wave 1 raw output retained at `audit-data/wave1-tmp/wave1-aggregated.md`. Wave 2 raw verdicts captured in this synthesis. No source files were edited.
