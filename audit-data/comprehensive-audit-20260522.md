# SteelR — Comprehensive Site & Visibility Audit

**Date:** 2026-05-22
**Method:** Live testing only. Every figure traced to a tool output, GSC screen, or live fetch. Where a result was uncertain it was re-tested. No figures carried over from CLAUDE.md or STATE.md without re-verification.
**Scope:** Desktop + mobile performance, site health, schema, accessibility, GSC indexing & performance, llms files, cannibalisation, and product visibility across Google and three AI engines.

---

## Scorecard

| Area | Verdict | One-line |
|---|---|---|
| Site health | PASS | All 30+ key pages 200; sitemap 312 URLs; llms files live & match repo |
| Desktop performance | PASS | Lighthouse 86–97 on every page type |
| Mobile performance | WEAK | `/collection` Perf 45 (LCP 6.3s, TBT 2.24s); home TBT 975ms |
| Schema / JSON-LD | PASS (minor) | 14 types valid, no Product offers block; 4 long meta descriptions; duplicate BreadcrumbList on door pages |
| Accessibility | WARN | No prefers-reduced-motion; footer contrast 4.2:1; no input focus rings |
| GSC indexing | HEALTHY | 287 indexed / 7 not indexed; sitemap snapshot stale |
| GSC performance | EARLY-STAGE | 33 clicks / 7.76k impressions / position 34.1; impressions rising |
| llms / AI-citation files | PASS (gap) | Live == repo; 17 of 37 blog posts still lack FAQ schema |
| Cannibalisation | 2 conflicts | sr4 blog vs sr4 page; fire-rated-doors vs fire-rated-fd30 |
| AI engine visibility | MIXED | ChatGPT-with-Search strong; Perplexity & Gemini do not cite SteelR |
| Bing Places listing | PUBLISHED | NAP correct; Google-sync 4 weeks stale |

---

## 1. Site health — PASS

- Sitemap live: **312 URLs** (`curl /sitemap.xml | grep -c '<loc>'`).
- All 30+ key pages return **200**: home, collection, collection/sidelights, all 10 topic pages, `/sr3-vs-sr4-residential-steel-doors-uk`, 4 audience hubs, blog, areas, security pages, thank-you, design-estimate.
- 5 routes the llms-integrity agent could not verify all return **200**: `/bs-en-1627-rc4-residential-steel-door`, `/sr4-residential-steel-door`, `/lps-1673-attack-resistant-steel-door`, `/luxury-steel-front-doors-uk`, `/heritage-steel-front-doors-uk`.
- `llms.txt` (366 lines / 44.5 KB) and `llms-full.txt` (2,813 lines / 299 KB) are live and **byte-match the repo** after line-ending normalisation.
- `robots.txt`: llms references are commented out — deliberate (inline note: validators flag non-standard directives; AI crawlers fetch llms files natively).

## 2. Performance — desktop excellent, mobile weak

Lighthouse, live site, 3-run medians, 2026-05-22. JSON in `audit-data/lighthouse-20260522/`.

| Page | Mobile Perf | Mob FCP | Mob LCP | Mob TBT | Desktop Perf | A11y |
|---|---|---|---|---|---|---|
| home | 52 (48–67) | 2.01s | 5.14s | 975ms | 97 | 100 |
| collection | **45** | 1.79s | **6.34s** | **2240ms** | 86 | 91 |
| collection door | 71 | 2.18s | 3.98s | 562ms | 92 | 96 |
| area page | 70 (66–88) | 1.80s | 3.94s | 665ms | 95 | 96 |
| blog post | 62 | 3.37s | 4.89s | 564ms | 93 | 97 |
| topic hub | 79 | 1.67s | 3.83s | 408ms | 92 | 89 |
| contact | 65 | 3.34s | 4.48s | 461ms | 97 | 96 |

- Desktop is healthy everywhere (86–97, all metrics green).
- **`/collection` is the worst page on the site** — mobile Perf 45, LCP 6.3s, TBT 2.24s.
- Home mobile TBT measured **975ms** vs 494ms on the 21 May 5-run close-out (STATE.md). Either Vercel lab variance (STATE.md documents a 43–79 Perf spread with no code change) or a regression — needs a 5-run reconfirm before acting.
- SEO category 100 and Best-Practices 100 on every page.
- **Core Web Vitals field data: none.** GSC reports "Not enough usage data" for both mobile and desktop — the site is too young for CrUX. Speed is therefore currently neutral for ranking; lab Lighthouse is the only signal.

## 3. Schema / JSON-LD — PASS with minor issues

- All 14 JSON-LD blocks valid; types Google-supported (HomeAndConstructionBusiness, Service, BreadcrumbList, FAQPage, BlogPosting, Product, CollectionPage).
- **No Product `offers`/price block** — the project rule holds.
- Canonicals consistent: https, non-www, no trailing slash, one per page.
- Live-verified: every topic page emits FAQPage + BreadcrumbList; every page has exactly one H1 (the accessibility agent's "blog/area H1 may be missing" was a false alarm).
- Issues:
  - **4 meta descriptions over 160 chars**: `/sr3-vs-sr4...` (181), `/areas/buckinghamshire` (182), `/areas/surrey` (173), `/areas/kensington` (177). Root meta description 168 / title 63 — marginally over.
  - **Collection door pages emit a duplicate BreadcrumbList** (CollectionPage layout + Product page each inject one).

## 4. GSC indexing — healthy

- **287 indexed / 7 not indexed** (CLAUDE.md's "67 indexed" is badly stale). 287 of 312 sitemap URLs = 92%.
- The 7 not indexed: 6 "Page with redirect" (benign) + 1 "Duplicate without user-selected canonical" = `/collection/grey-panelled-lever-handle`, last crawled 12 Apr — *before* the 16 Apr collection-title dedup fix, so it should clear on recrawl.
- **Zero** "Discovered – not indexed" and **zero** "Crawled – not indexed" — Google has fully processed the site.
- **Sitemap: status Success, but last read 22 Apr 2026** showing 306 discovered. Live sitemap is now 312. Google's sitemap snapshot is ~1 month and ~6 URLs stale.
- www→non-www redirect verified correct (clean 308). `www.steelr.co.uk/` still ranks as a separate page in GSC (legacy index) — the 308 will consolidate it; monitor, no action.

## 5. GSC performance — early-stage, climbing

3-month window: **33 clicks · 7,760 impressions · CTR 0.4% · average position 34.1**. Impressions trending up through May. 537 distinct queries, 214 pages drawing impressions.

Product / area query positions:

| Query | Impressions | Position |
|---|---|---|
| steelr (brand) | 123 | 2.6 |
| composite vs steel doors | 283 | **10.2** |
| steel doors in clapham | 99 | 39.5 |
| new build front door | 113 | 40.0 |
| steel doors surrey | 126 | 25.0 |
| bespoke steel doors | 97 | 65.7 |
| buckinghamshire doors | 101 | 64.8 |
| secure front doors | 102 | 76.9 |
| steel doors london | 149 | 79.1 |

Top pages by clicks: `/` (12 clicks, pos 6.5), `www./` (9 clicks, pos 43.2 — legacy), `/about` (2, pos 6.6), `/steel-front-door-vs-composite` (1, 308 impr, pos 21.2), `/uk-steel-doors-vs-imported` (1, pos 3.4), `/blog/steel-vs-upvc-front-doors-comparison` (1, pos 8.1).

**Read:** topic/comparison pages are the ranking engine — `/uk-steel-doors-vs-imported` (3.4) and the vs-upvc blog (8.1) are page-1. `composite vs steel doors` at 10.2 is one slot off page 1, the single highest-leverage near-win. High-volume area terms are buried (London pos 79). Only the brand term converts to clicks.

## 6. llms files & cannibalisation

- llms.txt / llms-full.txt: live, in sync with repo, no broken routes.
- **17 of 37 blog posts still lack a FAQ section** — they emit no FAQPage schema and contribute no Q&A to AI-citation surfaces. This is the biggest single AI-citation content gap.
- Cannibalisation — 2 live conflicts:
  - **HIGH:** `/blog/sr4-lps-1175-commercial-grade-residential` ~64% keyword overlap with `/sr4-residential-steel-door`.
  - **MEDIUM:** `/fire-rated-doors` vs `/fire-rated-fd30-front-door` ~70% overlap.
- **Stale internal link (corrected finding):** `getAreaGuides()` in `src/app/areas/[slug]/page.tsx:119` links all 161 area pages to `/blog/period-property-front-door-ultimate-guide`, which **308-redirects** to `/heritage-steel-front-doors-uk`. A subagent mislabelled this a "404" and edited the file; that edit was reverted (it is a redirect, not a broken link). Real impact: 161 pages pass link equity through a redirect hop with anchor text that no longer matches the destination.

## 7. Accessibility — WARN

- **No `prefers-reduced-motion`** — Ken Burns hero animation ignores OS motion preference.
- **Footer nav links 4.2:1 contrast** (50%-opacity cream on dark) — below WCAG AA 4.5:1.
- **No visible focus ring** on ContactForm / QuickEnquiry inputs; mobile-menu links lack a focus style.
- Gold (#c9a96e) on cream (#f5f0e8) is marginal for label text.
- Lighthouse A11y: topic pages **89**, `/collection` **91** (3 pre-existing failures: contrast on filter/sort + pagination, footer h3 heading-order, pagination target-size). Other pages 96–100.

## 8. AI engine visibility — product visibility across engines

Fresh live tests, 2026-05-22, via the logged-in browser.

### ChatGPT-with-Search (logged in) — strong on the surface that matters
- **Comparison / security query** ("steel vs composite + which UK companies for SR3/PAS 24"): SteelR is the **most-cited source (~7 citation clusters)**, **listed first** in the company recommendations ("one of the few UK residential-focused companies offering PAS 24, RC4..."), ahead of Latham's, Security Direct, Maxium. ChatGPT reproduced SteelR's own tier-honest framing almost verbatim ("£1,500 retail composite vs £12,000 architect-grade steel system... different tiers") and used SteelR's exact PAS 24 / RC4 / SR3 / SR4 ladder.
- **Local-pack query** ("best manufacturers for a high-end project"): SteelR **absent** — the answer rendered a Bing Places map-pack of 9 rated competitors. SteelR has 0 reviews so it cannot enter a ratings-ranked pack. This is reviews-gated, not content-gated.
- **Heritage / conservation query**: SteelR **absent** — ChatGPT recommended heritage-joinery firms (Ayrton, Victorian Front Door Co, KSDW) and steered toward timber-with-steel-reinforcement. Confirms the documented heritage content gap.

### Perplexity (public) — does not cite SteelR
- Steel-vs-composite query: SteelR **not cited**. 10 sources were doorsforsecurity, Gerda, Hallmark, Rockdoor, Latham's, etc.; recommended manufacturers were Hallmark, Rockdoor, Doors4Security, Gerda. Consistent with the documented domain-authority gap — SteelR's young domain loses to established door sites even on its strongest topic.

### Gemini (logged in) — does not cite SteelR
- Comparison query: SteelR **absent**. Gemini recommended Sunray Engineering, Lathams, Robust UK, HAG Ltd & Security Direct UK.

**Verdict:** Per CLAUDE.md doctrine (ChatGPT-with-Search is the bellwether), the AI channel is healthy — SteelR wins the web-citation surface on comparison/security/spec intent. But it loses Perplexity (domain authority) and Gemini (separate grounding model) entirely, and loses local-pack and heritage intent on ChatGPT. AI visibility is strong but narrow: it depends on comparison/spec intent and the ChatGPT/Bing index.

## 9. Bing Places for Business — published

Listing **Published**; NAP correct (11 Silverbirch Close, Uxbridge UB10 8AP / 0800 861 1450 / steelr.co.uk); category Door sales/service. Synced from Google **4 weeks ago** (stale — newer GBP service descriptions not pulled). Email field blank. No views data yet (new listing).

## 10. Not completed this session

- **Bing Webmaster Tools** site-indexing and AI-citation (BETA) tabs — the session was redirected to Bing Places instead. BWT indexing status for steelr.co.uk remains unverified.
- **Google Maps 3-pack neutral position** — cannot be measured cleanly: the GBP-owner's logged-in Google account shows the business-management panel, not a neutral SERP. GBP shows 43 customer interactions and "Complete info" (not 100%) profile strength.

## 11. Stale CLAUDE.md facts to correct

| CLAUDE.md says | Actual (verified 2026-05-22) |
|---|---|
| 67 pages indexed in GSC | **287 indexed** |
| Sitemap 313 URLs | **312** |
| llms.txt 239 lines / 21 KB | **366 lines / 44.5 KB** |
| llms-full.txt 1,231 lines / 94 KB | **2,813 lines / 299 KB** |
| 40 blog posts / "46 covered" | **37 post files** |
| Sitemap 298 known URLs | 312 live; GSC last read 306 on 22 Apr |

## 12. Findings, prioritised

**Do soon (low risk):**
1. [REASONED] Resubmit `sitemap.xml` in the GSC UI — Google's snapshot is 22 Apr / 306 URLs vs 312 live. Cheap, reversible, documented house practice.
2. [TESTED] Trim 4 over-length meta descriptions (`/sr3-vs-sr4` 181, `/areas/buckinghamshire` 182, `/areas/surrey` 173, `/areas/kensington` 177) to ≤160 chars.
3. [REASONED] Repoint `getAreaGuides()` in `src/app/areas/[slug]/page.tsx:119` from the redirected `period-property-front-door-ultimate-guide` slug directly to `/heritage-steel-front-doors-uk` (the live 308 target) — removes a redirect hop on 161 pages.

**Investigate:**
4. [REASONED] `/collection` mobile performance — Perf 45, LCP 6.3s, TBT 2.24s; the worst page on the site. Needs a dedicated diagnosis pass.
5. [REASONED] Resolve the 2 cannibalisation conflicts (sr4 blog vs sr4 page; fire-rated-doors vs fire-rated-fd30) — re-angle or redirect after checking which page Google favours.

**Backlog:**
6. Accessibility: add `prefers-reduced-motion`, fix footer link contrast to ≥4.5:1, add input focus rings. Fix the 3 `/collection` A11y failures.
7. Add FAQ sections to the 17 blog posts lacking them — biggest AI-citation content gap.
8. Remove the duplicate BreadcrumbList on collection door pages.
9. Re-sync the Bing Places listing from Google to pull current service descriptions.

**User-managed (noted, not a task):** 0 Google/Bing reviews is the gate keeping SteelR out of AI local-packs and the Maps 3-pack. Heritage AI-citation gap would need Google-side domain authority, not just on-site content.
