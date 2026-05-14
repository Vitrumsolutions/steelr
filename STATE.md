# SteelR — STATE

**Last updated:** 2026-05-14 (full-website health audit + fix batch shipped)
**Priority:** P0

## Where I left off

### 14 May — Full-website health audit + Batch B fixes shipped

**Audit (read-only, diagnostic):** 8 parallel forensic agents covered performance/CWV, broken-link integrity, blog content, area pages, llms.txt integrity, schema/technical SEO, WCAG 2.2 accessibility, visual/UX/conversion-flow. Plus hands-on GA4 analytics + Instagram-linkage checks via the user's browser, consolidated by a deep-reviewer synthesis panel. 9 reports committed at `d2084f7`. Full prioritised report: `audit-data/forensics/20260514-FULL-AUDIT-SYNTHESIS.md`.

**Headline verdict:** site is structurally healthy. 313/313 sitemap URLs return 200, zero orphans, valid JSON-LD sitewide, clean canonicals, zero house-style violations across 40 blog posts, the 13-14 May Buckinghamshire hub recovery shipped correctly. No agent found a blocker.

**Biggest lever found:** a measurement gap, not a defect. GA4 had no Key Event configured and was not linked to Search Console.

**Shipped tonight — commit `7f43c64` (verified live):**
1. **GA4 `generate_lead` fix** — `src/app/design-estimate/page.tsx`. The 4-step estimate form showed an inline success state and never navigated to `/thank-you`, so `ThankYouTracking.tsx` never fired `generate_lead`. A completed estimate sent the Resend email fine but registered zero conversion in GA4. Now `router.push("/thank-you?source=design-estimate&context=4-step-estimate-form")` on success, mirroring ContactForm + QuickEnquiry. Known follow-up: the now-unreachable `if (status === "success")` render block (~line 375) can be removed in a later cleanup pass.
2. **Schema @id collision fix** — `src/app/areas/[slug]/page.tsx`. The area-page template emitted a second `HomeAndConstructionBusiness` node reusing the canonical `#business` @id with a conflicting url/description (unpredictable graph-merge across ~178 pages). Rewritten as a `Service` node with `@id /areas/{slug}#service` and a `provider` reference to the canonical `#business`. seo-schema-validator PASS, verified live on `/areas/buckinghamshire`.
3. **Stale blog link fix** — `src/data/blog/posts/sr4-lps-1175-commercial-grade-residential.ts`. Body link `/blog/what-is-sr3-security-rating` (removed slug, was 308-redirecting) repointed to `/sr3-residential-steel-door`. Verified: 0 refs left in `src/`, live page shows only the new link.

Verification chain: brand-guard PASS, build 318/318, seo-schema-validator PASS, deploy-gate GO, live curl confirmed all items.

**GA4 dashboard tasks — user-completed during the session:**
- Search Console link: DONE (steelr.co.uk Domain → SteelR Website stream, linked 14 May). Organic-query data will start populating in ~48h.
- Key Events: `phone_click` ready to star (it has fired). `generate_lead` cannot be starred in GA4 until it fires once — now that the estimate-form fix is live, the next real estimate submission will make it appear and it can be marked a Key Event.

### Earlier (13-14 May) — Buckinghamshire ranking-regression forensic recovery

`/areas/buckinghamshire` fell from Google #1 (22 Apr) to outside top 30 (5 May). 8 forensic agents + 2 panel-cross-examination agents diagnosed the root cause: structural content thinness across all 17 area hubs (7% unique content), not a commit regression. Shipped: Phase 1 H1 revert across 161 area pages (`b38a698`), Phase 2 data enrichment across all 17 hubs taking unique-content ratio ~7% to ~25-30% (`b38a698` + `976de1a`), prevention rule in CLAUDE.md + `audit-data/hub-uniqueness-scoreboard.md` (`57147a7`). IndexNow + Google Indexing API propagation complete. Full record: `audit-data/forensics/20260513-buckinghamshire-FINAL-TICKLIST.md`.

## Next action

**In progress this session: Batch C — accessibility contrast fixes.** 5 cheap-to-reverse colour-token changes from `audit-data/forensics/20260514-accessibility.md`:
- R1: stop using gold `#c9a96e` as text/link colour (fails 2.05:1 on cream) — keep gold for non-text accents only
- R2: darken breadcrumb link `#b8943f` to ~`#7a6033` (>=4.5:1)
- R3: darken `/security-specification` row-header `#999` to `#595959`
- R4: replace `#8a6f4e` body/helper text under ~18px with `#6b5a42` (already used elsewhere at 6.5:1)
- R5: add `aria-label="Breadcrumb"` to breadcrumb `<nav>` + `aria-current="page"` to final crumb
Needs surgical care: `#c9a96e` and `#8a6f4e` are used for accents/borders/backgrounds too — only the text/link uses change. Verify by recomputing contrast post-change.

**Then, remaining P1 from the synthesis (priority order):**

1. **P1-7 — Area-page hero banner.** ~178 area pages (the largest page class, a major organic entry point) open flat with no visual H1 or hero, unlike every other page type. Visual-UX audit flagged it as highest commercial leverage. Medium effort.
2. **P1-8 — Enrich the 24 thin London-borough leaf pages** (mean ~95 words; Kensington 84 words). Same structural-thinness profile that took Buckinghamshire off top-30. Prioritise Kensington, Chelsea, Fulham, Hammersmith.
3. **Batch E — Instagram activation.** @steelrdoors exists and bio links to steelr.co.uk, but dormant (6 followers, 13 posts, no profile photo). The `social/` folder (built 21 Apr) has 20 ready Reels + 40 Pinterest pins + brand kit that never went live. Posting work, not building.
4. **Gated — 4 llms.txt findings** requiring the `/panel-llms` + `/panel-llms-approve` flow: stale "178 Pages Total" count, `/sr3-vs-sr4` topic page missing from both files, 3 blogs missing from one URL block, and the biggest — llms-full still treats the 16 enriched hubs as URL stubs (none of the new county depth is visible to AI crawlers).

**Deferred — NOT to ship without a separate careful session:**
- **P1-1 — defer GA4 script to `lazyOnload`.** The `GoogleAnalytics.tsx` docblock documents that `next/script` was already tried and broke GA entirely (gtag undefined, no page_view fired). Switching loading strategy risks losing all measurement. Needs a session with a way to verify gtag still fires before/after.

## Blockers

- Reviews still 0 — #1 Maps 3-pack blocker, user-managed.
- `generate_lead` end-to-end confirmation needs one real estimate-form submission (sends a live email) — user's call to test, or wait for an organic submission now the fix is live.
- Serper.dev credits exhausted — visibility-audit script returns silent zeros on fresh API calls. Top up + patch the silent-fail bug before next rank audit.
- ChatGPT Free tier throttles after ~2-7 queries per session. Google AI Mode reCAPTCHA-blocked from sandbox — both only testable via the user's browser.
- GA4 admin SPA is unreliable under browser automation (renderer freezes mid-modal) — dashboard config tasks need the user at the keyboard.
- Mobile LCP 3.4-6.1s sitewide vs 2.5s threshold — perf agent's fixes (split `1356-*` chunk, lazy-load collection gallery) are P1 but separate from the deferred GA4-defer item.

## Recent wins (last 48 hours)

- **2026-05-14 — Full-website health audit (8 agents + synthesis panel) + Batch B fixes shipped (`7f43c64`).** GA4 conversion tracking fixed on the estimate form, schema @id collision resolved across 178 area pages, last stale internal link cleaned. All verified live. Search Console linked by user.
- **2026-05-14 — 9 audit reports committed (`d2084f7`)** as permanent evidence: perf, link-integrity, blog, area-pages, llms-integrity, schema, accessibility, visual-UX + synthesis.
- **2026-05-13/14 — Buckinghamshire forensic recovery shipped (`b38a698`, `976de1a`, `57147a7`).** 8-agent forensic swarm + 2-panel cross-examination. All 17 area hubs enriched from ~7% to ~25-30% unique content. Prevention rule + scoreboard added.
- **2026-05-13 — Closing-block `whyConsider` prop on 18 InfoPage hubs (`c94e1c0`) + spec-by-spec table on `/steel-front-door-vs-composite` (`8ff80a0`).**
- **2026-05-11 — Hands-on ChatGPT-with-Search + Gemini verified baseline.** `audit-data/serp-captures/20260511-chatgpt-gemini-verified.md`.

## Key files

- `audit-data/forensics/20260514-FULL-AUDIT-SYNTHESIS.md` — the canonical prioritised action list (P0/P1/P2 + deferred + one-week plan)
- `audit-data/forensics/20260514-*.md` (8 agent reports) — perf, link-integrity, blog, area-pages, llms-integrity, schema, accessibility, visual-ux
- `audit-data/forensics/20260513-buckinghamshire-FINAL-TICKLIST.md` — Bucks recovery record
- `audit-data/hub-uniqueness-scoreboard.md` — per-hub unique-content tracker, prevention artefact
- `src/app/design-estimate/page.tsx` — estimate form, now redirects to /thank-you on success (commit 7f43c64)
- `src/app/areas/[slug]/page.tsx` — area template; Service-node schema (7f43c64), reverted H1 (b38a698)
- `src/components/GoogleAnalytics.tsx` — GA4 component. Docblock documents the next/script failure — read before touching GA loading.
- `src/data/locations/*.ts` — 17 hub data files, all enriched with localFeatures + faqs + 250-word descriptions
- `audit-data/templates/recommendation.md` — gate templates every recommendation passes through

## GA4 reference (corrected 14 May)

- SteelR property: account `info@supplywindows.co.uk` (116922431) → **Steelr** property **534288863**. NOT the Vitrums property — they are separate, easy to mistake in the account switcher.
- GA4 measurement ID: `G-VSZ1XXGY2Z` (env var `NEXT_PUBLIC_GA_ID` on Vercel).
- 28-day traffic (16 Apr-13 May): 196 sessions, 123 active users over 30 days, **growing +95% (30-day)**. 40.8% engagement, 1m02s avg. Mostly UK. Channels: Direct 64%, Organic Search 22%, Unassigned 9%, Referral 2.5%, Organic Social 2%.
- Events firing: page_view, session_start, first_visit, user_engagement, scroll, phone_click, form_start. NOT yet: `generate_lead` (no completed form submission in the 28-day window; estimate-form path was also broken until 7f43c64), `form_submit` (QuickEnquiry focused but not completed in window).
