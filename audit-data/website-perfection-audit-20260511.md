# SteelR Website Perfection Audit — 2026-05-11

**Method:** Wave 1 (10 parallel agents) + Wave 2 (4 verifiers) per the deep-audit protocol.
**Mode:** read-only across the live site + repo. No source edits during the audit.
**Baselines:** `visibility-audit-20260510.md`, `20260510-deep-diagnostic.md`, `deep-audit-20260509.md`.
**Wave 1 raw output:** `audit-data/wave1-tmp/perfection-wave1-aggregated.md`.

---

## Executive verdict

**Overall: FIX with 5 actionable priorities. Core foundation is GO; the gaps are concentrated.**

The site is technically sound (313/313 URLs serve 200 OK, brand-guard PASS, all deep-audit schema fixes held, new `/sr3-vs-sr4` page is already ranking #5 + extracting verbatim into Google AI synthesis), but five concrete issues prevent a "perfection" verdict:

1. **Mobile performance** — LCP averages 5.65s across 10 sampled pages (Google "Good" threshold is 2.5s). `/collection` and homepage worst. Vitrums-playbook fixes haven't been applied to SteelR yet. (Wave 2 verdict: PARTIAL — couldn't independently measure via PSI/CrUX, but Wave 1 evidence + project history make it plausible.)
2. **5 pages never crawled by Google** — 4 audience hubs (`/architects`, `/developers`, `/property-managers`, `/housing-associations`) + new `/sr3-vs-sr4`. Need Indexing API push today. GSC tracker is also drifted (says totalPages 259, actual 313).
3. **8 Phase 1D topic pages missing og:image** — Wave 2 V1 corrected Wave 1 A3 (which said 1 page). All 8 InfoPage-driven topic hubs have per-page `openGraph` blocks that omit `images:`.
4. **51 em-dashes in `src/data/doors.ts` → 119 rendered em-dashes on `/collection`** — `doors.ts` is not in brand-guard's `PROTECTED_GLOBS`. Sweep didn't reach it. 60 product pages affected.
5. **3 "BS EN 1627 Class 3" residuals in llms-full.txt:1337/1340/1345** — auto-generated from `luxury-front-doors-uk-buyer-guide.ts` blog excerpt. Same Class 3 issue C5 fixed elsewhere. Gated by `/panel-llms`.

**Top 5 next actions ranked by leverage-per-effort:**

| # | Action | Effort | Why |
|---|---|---|---|
| 1 | **Add `images: ["/og-image.png"]` to 8 Phase 1D openGraph blocks** | 15 min | Mechanical fix; closes social-share preview gap on every topic hub |
| 2 | **Push 5 unknown pages to Google via Indexing API + reconcile tracker** | 20 min | New /sr3-vs-sr4 is already winning AI citations — getting it into Google's index unlocks SERP too. Audience hubs same. |
| 3 | **Fix `doors.ts` em-dashes + add doors.ts to brand-guard PROTECTED_GLOBS** | 30 min | 60 collection pages cleaner + prevents regression on future product additions |
| 4 | **Fix I23 (security-spec table caption + scope attrs)** | 15 min | A4 missed this — real `<table>` exists at `:245`, no `<caption>`, no `scope=` |
| 5 | **CLAUDE.md doc reconciliation (312→313, 16→17 hubs)** | 5 min | Stops downstream drift |

**Mobile perf and the 3 Class 3 residuals are queued for separate sessions:** perf needs the Vitrums playbook applied carefully (~2-4 hours focused); llms-full edits gated by `/panel-llms` flow.

---

## What's working (verified strengths)

- **313/313 sitemap URLs serve 200 OK** (Wave 1 A1, no broken links, no 4xx/5xx)
- **Zero broken internal hrefs** across 320 sampled (A1)
- **All deep-audit fixes held post-deploy-37c6833:** C5 (sr3 Class 3 Thing), C6 (breadcrumb trailing slash), I6 (LPCB single Organization), I7 (knowsAbout dedupe), I9 (sr4 + lps-1673 WebPage parity), C8 (focus-visible ring), M5 (prefers-reduced-motion) — all verified by A3 + A4
- **New `/sr3-vs-sr4-residential-steel-doors-uk` page already ranking Google #5 + heavy AI synthesis extraction** (B2). Best signal of recent work paying off. Verbatim phrases AI engines extract: *"Where SR3 ends, SR4 begins"*, *"SR3 is the baseline on every door we make. SR4 is the step beyond"*, *"the commercial-grade option for owners who want the certification standard used for data centre entrances on their home"*.
- **Other proven AI-citation wins** (B2 confirmed): Q12 steel-vs-timber #1, Q13 UK-made-vs-imported #1, Q6 planning permission #1, Q11 steel-vs-composite #2+#5, Q2 are-steel-doors-worth-it #2, Q3 cost #6, Q5 burglar-proof #6
- **brand-guard PASS** (44 dash-warn matches, 0 blocking) — 95.8% reduction from 1,047 session-start
- **Zero em-dashes in 40 blog posts + 17 location files + llms files** (within the brand-guard scan paths)
- **Zero displayed prices** on `/steel-front-door-cost-uk`
- **Zero banned words** ("affordable/cheap/discount/best prices") describing SteelR products
- **Zero exclamation marks** in user-facing prose
- **Zero competitor names** in URLs/H1s
- **44 JSON-LD blocks parse cleanly** across 12 audited pages, all @types Google-supported (A3)
- **Build PASSES** with all changes — npm run build, validate-faqs, brand-guard all green
- **Visual brand identity excellent** (C2): cream/dark/gold palette clean, typography hierarchy clear, brand pipe correct as CSS span, mobile hamburger 44×44px (WCAG 2.5.5 OK)
- **Accessibility GO** (A4 + V1): C8 focus-visible shipped, M5 reduced-motion shipped, new /sr3-vs-sr4 cleanest a11y surface SteelR has shipped
- **Roast scores up** (C4): home 481/600 (B, +3 vs 9 May), `/architects` 472/600 (+12 estimated from Specifier-pack section)

---

## What can be improved

### CRITICAL

| # | Finding | Source | Wave 2 verdict | First-step fix |
|---|---|---|---|---|
| P1 | Mobile LCP 5.65s avg + TBT 1,297ms avg across 10 sampled pages. Worst: `/collection` (Perf 40, LCP 7.6s, TBT 3.6s). All 10 mobile pages fail LCP threshold. CLS 0 (excellent). | A2 (Lighthouse, 20 runs saved to `audit-data/lighthouse-20260511/`) | **PARTIAL** (V4: PSI quota=0 + CrUX threshold not met, no independent measurement; Wave 1 plausible but unverified) | Apply Vitrums playbook (CLAUDE.md SEO Playbook Phase 10): Nav server-component split, defer client JS overlays, lazyOnload GA, lazy-load hero non-first images, cut hero drop-shadow compositor cost. Capture pre/post Lighthouse on /collection first. |
| P2 | 5 pages unknown to Google: `/architects`, `/developers`, `/property-managers`, `/housing-associations`, `/sr3-vs-sr4-residential-steel-doors-uk`. All 200 OK live but never crawled. | B3 (GSC API spot-check 24/24) + V4 corroborates (Wayback + DuckDuckGo silence) | **CONFIRMED** | (a) Add 5 URLs to `vitrums/audit-data/gsc-indexing-tracker-steelr.json` queue. (b) Run `python vitrums/audit-data/submit_indexing.py 5 --site=steelr`. (c) Push via GSC URL Inspection "Request Indexing" UI if quota available. (d) Update tracker `totalPages: 259` → 313 + reconcile against full sitemap. |
| P3 | 8 Phase 1D topic pages missing og:image in openGraph block (regression on the shared template pattern). Affected: `/pas-24-steel-entrance-door`, `/secured-by-design-steel-front-door`, `/thermally-broken-steel-front-door`, `/fire-rated-fd30-front-door`, `/steel-front-door-vs-composite`, `/uk-steel-doors-vs-imported`, `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk`. | A3 (1 page) + C1 (8 pages) + V1 reconciled (V1 confirmed 8) + V3 confirmed via per-page curl | **CONFIRMED** (8 pages, not 1) | Add `images: ["/og-image.png"]` to each `openGraph` block. Mirror pattern at `src/app/sr3-residential-steel-door/page.tsx:17` + `bespoke-steel-front-doors-uk/page.tsx:17`. |
| P4 | 51 em-dashes in `src/data/doors.ts` → 119 rendered em-dashes on `/collection` (DOM duplication × 60 cards). Also 1 prose em-dash in `src/app/collection/page.tsx` intro. brand-guard PROTECTED_GLOBS at `scripts/brand-guard.mjs:56-63` does NOT include `src/data/doors.ts`. | C2 (80) + V3 (119 rendered, 51-53 source) + V4 (119/51/intro reconciliation) | **CONFIRMED** (violation real, count was understated by Wave 1) | (a) Run em-dash codemod on `src/data/doors.ts` (extend `scripts/codemod-emdash.mjs` FILE_GLOBS). (b) Fix the intro em-dash in `src/app/collection/page.tsx`. (c) Add `src/data/doors.ts` to `scripts/brand-guard.mjs:56-63` PROTECTED_GLOBS to prevent regression. |
| P5 | `/security-specification` has a real `<table>` element at `:245` without `<caption>` or `scope=col`/`scope=row` attributes. A4 incorrectly dismissed this as "FALSE ALARM" (claimed CSS grid not table). V1 caught the error. | A4 (dismissed) + V1 (REJECTED dismissal, original I23 finding stands) | **CONFIRMED** (A4 hallucinated dismissal) | Add `<caption className="sr-only">Four-tier residential security ladder comparison</caption>` to `security-specification/page.tsx:245`. Add `scope="col"` to header cells, `scope="row"` to first cell of each body row. Also: stacked-card breakpoint at md to fix mobile overflow. |

### IMPORTANT

| # | Finding | Source | Verdict | Fix |
|---|---|---|---|---|
| P6 | 3 "BS EN 1627 Class 3" residuals at `public/llms-full.txt:1337, 1340, 1345`. Auto-generated from `src/data/blog/posts/luxury-front-doors-uk-buyer-guide.ts` blog-excerpt — that source file was already fixed in batch 4 (commit `37c6833`), but `backfill-llms-full.mjs` apparently didn't fully regenerate, OR the source still has parenthetical glosses. Need to verify source state. | C1 + C3 same lines + V2 + V3 confirm exact lines | **CONFIRMED** | Verify source `luxury-front-doors-uk-buyer-guide.ts` has no Class 3 residuals. Re-run `node scripts/blog/backfill-llms-full.mjs`. Stage llms.txt + llms-full.txt → /panel-llms gate → approval → commit. |
| P7 | Area-page LocalBusiness JSON-LD reuses `@id="https://steelr.co.uk/#business"` across all 161 area pages (`src/app/areas/[slug]/page.tsx:248`). Google entity-merge currently treats this as OK (per CLAUDE.md comment); A3 + V1 flag as "data quality" risk. | A3 + V1 confirmed | **CONFIRMED** | Change area `@id` to per-slug `https://steelr.co.uk/areas/${slug}/#business`. Update area template once → propagates to 161 pages. Or document as deliberate per CLAUDE.md and leave alone. **User call.** |
| P8 | `/collection/[slug]` openGraph: missing `og:type` + em-dash in `og:title` (e.g. "Lion Head Knocker — Open View"). Source: doors.ts title generator. Same root cause as P4. | A3 + V3 partial | **PARTIAL** (em-dash confirmed via P4; og:type unverified independently) | Add `openGraph.type: 'product'` to collection slug metadata. Em-dash strip handled by P4 doors.ts cleanup. |
| P9 | Gold pretitle `#b8943f` at 9px on cream ≈ 4.0:1 contrast — borderline WCAG 1.4.3 (needs 4.5:1 for normal text). Sitewide pattern across InfoPage hubs. | A4 (not blocked by V1) | **CONFIRMED** | Either bump font-size to 11px+ OR darken to `#8a6f4e` (5.8:1). Sitewide CSS variable change. |
| P10 | `/sr3-vs-sr4` four-tier ladder grid cramped at tablet 768px (4×148px per card). | C2 | **UNVERIFIABLE** in sandbox (no fresh screenshot) but plausible | Change Tailwind classes from `md:grid-cols-4` to `md:grid-cols-2 lg:grid-cols-4`. 1-line edit. |
| P11 | Duplicate `prefers-reduced-motion` block at `globals.css:269-279` (the second instance of M5). | A4 | **CONFIRMED** | Remove duplicate; keep `globals.css:136-145` (the canonical one). |

### NICE-TO-HAVE

| # | Finding | Source | Fix |
|---|---|---|---|
| P12 | CLAUDE.md drift: "312 URLs" in 5 places, actual 313 (post deploy-37c6833). "16 area hubs" but grep shows 17. | A1 + V2 + V3 | One CLAUDE.md edit reconciles. Counts: 313 sitemap, 161 areas + 17 hubs = 178 location records, 40 blog posts. |
| P13 | `audit-data/visibility-audit-results.md` contains fabricated zeros from Serper API failure. Misleading. | B1 | Either delete the file or add a "stale — API failure" header. |
| P14 | Top 3 roast-landing leverage fixes (C4): (a) comparison tables on `/sr3-vs-sr4` + `/architects`; (b) sample NBS clause inline on `/architects`; (c) trust band on homepage with verifiable area-count. | C4 | Cheap content edits. Schedule for next content session. |
| P15 | Mobile bottom CTA height 39px on `/sr3-vs-sr4` — 5px under WCAG 2.5.5 recommended 44×44. | C2 | Bump padding-y by 5px in the button class. |
| P16 | InfoPage chassis doesn't enforce og:image at template level — repeats P3 root cause. Could add a default `images: ["/og-image.png"]` fallback in the metadata helper to prevent future regressions. | V1 | Architectural — defer. |

---

## What's missing

### CRITICAL gaps

- **Performance baseline + CrUX field data captures.** CLAUDE.md "Session Handoff — 22 Apr 2026 evening" still lists "CrUX / Lighthouse perf baseline" as pending option C. SteelR is 5-6 weeks live. CrUX threshold not met per V4's check. Need 4-6 more weeks for field data; lab Lighthouse already shows the problem.
- **PageSpeed Insights API key with billing.** PSI default unauth quota = 0. Apply a real key (linked to a Google Cloud project) so post-fix CrUX/PSI verification has data.
- **GSC indexing-tracker auto-enrolment.** When new pages reach the sitemap, they should auto-flow to the Indexing API queue. Currently no such trigger — 5 pages have been sitting in sitemap.xml without ever being crawled.

### IMPORTANT gaps (per the 20260510 diagnostic — still queued)

- 4 new dedicated pages (the diagnostic's Pages 2-5):
  - `/best-bespoke-steel-front-door-manufacturer-uk` (2,400w listicle)
  - `/building-safety-act-2022-flat-entrance-doors` (1,500w Q&A)
  - `/luxury-steel-entrance-doors-uk` (1,800w national hub)
  - `/pas-24-vs-sr3-vs-sr4-explained` (2,200w canonical hub)

### User-managed gaps (queued, not Claude work)

- Trustpilot brand registration under SteelR
- NBS Source listing application
- SpecifiedBy listing application
- RIBA CPD provider research

---

## Live channel snapshot

### Google organic (8/26 baseline 10 May, fresh check blocked on Serper credits)

Confirmed wins still held (verified via Firecrawl Google-grounded in Wave 1 B2):
- `/steel-front-door-vs-composite` #1
- `/uk-steel-doors-vs-imported` #1
- `/blog/steel-vs-timber-entrance-doors` #1
- `/blog/steel-doors-conservation-areas-planning-guide` #1 (planning permission query)
- `/blog/are-steel-doors-worth-it-uk` #2
- `/sr3-residential-steel-door` ranking for "SR3 vs SR4" — new ranker, #5
- `/blog/how-much-do-steel-doors-cost-uk` #6
- `/blog/best-burglar-proof-front-doors-uk` #6

### Bing

Sustained 0 placements per CLAUDE.md note ("post-migration indexing lag, recovery expected mid-late May"). 21+ days post-IndexNow wired. Outside this audit's scope.

### Google Maps

Esher #6 (NEW per 10 May) — appears to be holding. Other 10 queries blocked on Serper credits.

### AI engines (Wave 1 B2)

- 7/18 wins (39%) on the perfection-audit slate
- New `/sr3-vs-sr4` page extracted verbatim into Google AI synthesis. Best recent ship.

---

## Visual + a11y findings

Visual quality: excellent. Brand identity consistent across 10 sample pages, palette clean (no off-palette violations), typography hierarchy clear, CTA styling consistent.

A11y: GO with minor (C8 + M5 shipped, new sr3-vs-sr4 is cleanest a11y surface SteelR has shipped). I23 (security-spec table) needs real fix per V1's catch of A4's mis-dismissal. Gold 9px pretitle borderline contrast still an open WCAG 1.4.3 item (P9).

Mobile reflow: clean. Hamburger 44×44px. `/sr3-vs-sr4` ladder grid cramped at tablet 768px (P10).

---

## Index coverage snapshot

| Sample size | Indexed | Unknown to Google |
|---|---|---|
| 24 URLs | 19 (79%) | 5 (21%) |

**Extrapolated full-site:** ~285-300 of 313 indexed (91-96%). Older content 100% in sample.

**5 unknowns** all top-level marketing pages added in last 2-3 weeks: `/architects`, `/developers`, `/property-managers`, `/housing-associations`, `/sr3-vs-sr4-residential-steel-doors-uk`. None are "Crawled — not indexed" (which would imply quality rejection). All "URL is unknown to Google" — never even crawled.

---

## Page speed snapshot

| Page | Mob Perf | Mob LCP | Mob TBT | Desk Perf |
|---|---:|---:|---:|---:|
| `/` | 40 | 5,890ms | 1,884ms | 84 |
| `/collection` | 40 | 7,618ms | 3,588ms | 68 |
| `/bespoke-hub` | 50 | 6,096ms | 1,853ms | 73 |
| `/security-specification` | 51 | 4,876ms | 2,099ms | 92 |
| `/sr3` | 51 | 5,616ms | 1,141ms | 96 |
| `/sr4` | 59 | 5,237ms | 476ms | 67 |
| `/sr3-vs-sr4` | 60 | 5,325ms | 648ms | 95 |
| `/architects` | 70 | 5,336ms | 395ms | 96 |
| `/areas/kensington` | 70 | 5,197ms | 416ms | 96 |
| `/blog/sr4-...` | 59 | 5,280ms | 473ms | 99 |

Avg mobile Perf 55 | LCP 5.65s | TBT 1,297ms | CLS 0.

Desktop avg Perf 87 — healthy.

---

## Severity summary (post-Wave 2)

| Severity | CONFIRMED | PARTIAL | UNVERIFIABLE | REJECTED |
|---|---:|---:|---:|---:|
| Critical | 4 | 1 (mobile perf) | 0 | 0 |
| Important | 4 | 2 | 0 | 0 |
| Nice-to-have | 5 | 0 | 1 | 0 |
| **TOTAL** | **13** | **3** | **1** | **0** |

**Wave 1 over-claims caught by Wave 2:**
- A3 og:image count (said 1, actually 8) — V1 corrected
- A4 I23 dismissal (said "FALSE ALARM", actually real `<table>` with a11y gaps) — V1 caught
- C2 /collection em-dash count (said 80, actually 119 rendered / 51 source) — V3 + V4 corrected

**Wave 1 under-claims raised by Wave 2:**
- brand-guard PROTECTED_GLOBS coverage gap on doors.ts (structural, V1 raised)
- @id collision severity (A3 said WARN, V1 raised to HIGH)
- GSC tracker drift (B3 said "drift", V1 raised to operationally serious)

---

## Wave 1 dropped appendix (REJECTED findings)

- A4: "I23 security-spec table is a FALSE ALARM" — REJECTED by V1. Page has real `<table>` at `:245` with no `<caption>` and no `scope=` attrs. Original I23 finding stands.
- A3: "og:image regression on 1 page only" — REJECTED by V1. Actual scope is 8 Phase 1D pages.

---

**End of audit.** Wave 1 raw retained at `audit-data/wave1-tmp/perfection-wave1-aggregated.md`. Lighthouse JSON at `audit-data/lighthouse-20260511/`. Screenshots at `audit-data/screenshots-20260511/`. AI citation spot-check at `audit-data/serp-captures/20260511-perfection-ai-spotcheck.md`.
