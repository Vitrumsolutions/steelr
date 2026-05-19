# /luxury-steel-front-doors-uk Hub — Design Spec

**Date:** 2026-05-19
**Author:** Drafted in session anchored to the 19 May peer-vs-peer audit
**Status:** Spec written. Awaiting user sign-off before implementation.

## Background

19 May peer-vs-peer audit (audit-data/serp-captures/20260519-peer-vs-peer-audit.md) and AWT baseline (audit-data/ahrefs-baseline-2026-05-19.md) document a single sharp diagnostic finding:

**SteelR wins specification-led AI queries (PAS 24 SR3, LPS 1175 SR3 + £3m London townhouse) — cited as "Best fit" or "Current benchmark". SteelR is absent on category-led AI queries (best, premium, luxury, bespoke, made to measure) where Black Steel Doors, Latham's, Steel Door Company, Modern Doors, and Original Steel Doors dominate.**

Cross-channel evidence:
- Perplexity 1/5 cited (only spec-led query); ChatGPT 2/2 cited; Google web 0/1 cited
- AWT confirms: ChatGPT 55 citations across 10 pages, Perplexity 6/2, Gemini 3/2, Copilot 2/1, Grok 1/2 — total 67 across all engines
- AWT confirms zero on backlink + domain authority side: DR 0, RD 0, BL 0

The existing `/luxury-steel-entrance-door-london` page is GEO-led (London-bound) and does not anchor to the category entity "luxury steel front doors UK" at the national level. The new hub fills that exact slot.

## Goal

Land SteelR as a cited UK authority on category-led queries — "luxury", "premium", "bespoke", "best", "made to measure", "high-end" steel front door, at NATIONAL UK level (not London-bound).

Same pattern as `/steel-front-door-vs-composite`: InfoPage shell + spec table + FAQs that mirror common search-query patterns. But this hub does NOT compare against composite (per user directive 19 May). It positions SteelR against peer UK steel-door manufacturers.

## Non-goals

- No composite/uPVC/timber comparison framing on the page (per user directive 19 May)
- No displayed prices anywhere on the page
- No public-facing owner/founder content (per `feedback_nothing_about_owner.md`)
- No fabricated competitor prices or claims
- Not naming individual customer projects (anonymous area-level only if a credibility marker is used)
- Not London-bound — this is the national category hub; geo-led queries continue to route to `/luxury-steel-entrance-door-london`

## Page design

URL: `https://steelr.co.uk/luxury-steel-front-doors-uk`
Template: shared `<InfoPage>` component
Schema: `BreadcrumbList` + `FAQPage` + `WebPage` with `about` array (binding category entities)
Sitemap priority: 0.9
Target rendered body word count: 2,000-2,500

### Meta

- Title: `Luxury Steel Front Doors UK | Bespoke SR3 Specialists | SteelR` (~63 chars)
- Description: targets `luxury`, `bespoke`, `UK`, `SR3`, `SteelR` in one sentence (~155 chars)
- Open Graph: title, description, type=website, image=`/og-image.png`

### Sections (7)

**1. Intro (above-the-fold Quick Answer)**

Hero + 60-word stat-rich opener directly anchoring SteelR to the four category entities:

> The UK steel front door market splits into four specification tiers, defined by certification not by price: entry security (PAS 24:2022 baseline only); mid-market premium (PAS 24 with optional LPS 1175 SR2); architectural luxury (BS EN 1627:2011 RC4 single leaf, unglazed certification as standard, with LPS 1175 SR3 available as an upgrade); and ultra-bespoke commissioned work (LPS 1175 SR3 or SR4 as specified, individually engineered, certificated to the project). SteelR's standard specification sits at the architectural luxury tier: RC4 as standard, SR3 / SR4 available on every door, FD30S fire-rated, fully bespoke, UK-manufactured.

Body2 (the framing paragraph):

> Buyers searching "luxury", "premium", "bespoke" or "made to measure" steel front doors are usually choosing within tier three or tier four. This page covers how to specify a luxury steel front door at that tier, what genuine UK manufacturers offer at this level, and how SteelR's standard specification compares to category peers.

**2. What "luxury" actually means at this tier**

Section defining the category entities. Anchors `luxury`, `premium`, `bespoke`, `made to measure`, `high-end`, `architect-grade` to specific specifications. Key claims (every one anchored to existing SteelR-published facts or a named published standard from LPCB, BSI, BRE, or the UK Planning Portal — no category-typical reasoning):

- True bespoke fabrication (not configurator-based) — panel proportions, mouldings, glazing, hardware specified individually
- UK manufacture (not imported and rebadged)
- Certification beyond PAS 24 (RC4 single leaf, unglazed as Standard; SR3 / SR4 upgrade tiers available)
- Heritage RAL colour range + dual-colour interior/exterior
- 8-12 week lead time as standard
- DBS-checked in-house installation team (not subcontracted)
- Manufacturer-supplied measured drawings + spec pack for planning applications

**3. Other UK steel-door specialists at the architectural luxury specification tier**

Honest peer section. Every brand listed below is sourced to today's audit captures at `audit-data/serp-captures/20260519-peer-vs-peer-audit.md` — they are the brands actually surfaced by ChatGPT-with-Search, Perplexity, and Google web on category-led queries this week. Not invented, not pattern-matched.

- **SteelR** — RC4 single leaf, unglazed certification as standard; LPS 1175 SR3 (Enhanced upgrade) and SR4 (Commercial-grade upgrade) available on every door; FD30S fire-rated; Secured by Design approved; UK-manufactured + installed.
- **Black Steel Doors Ltd** — sourced to ChatGPT-with-Search query `luxury bespoke steel front door UK manufacturer who makes the best` (17 May + 19 May): cited as "Best overall: security + craftsmanship + true bespoke steel" with Wembley HA9 showroom, 020 8908 0006, slim-profile architectural focus, pivot-door specialism.
- **Steel Door Solutions Ltd** — sourced to ChatGPT-with-Search same query: cited as "Best engineered/security-led luxury steel door" with 5.0★ Maps rating, engineering-driven positioning.
- **Original Steel Doors Limited** — sourced to Perplexity query `luxury steel front door London` (19 May) and Google web (depersonalised) on `luxury steel front door manufacturer UK`: London NW10 Park Royal, 5.0★ Maps with 5 reviews.
- **Steel Door Company** — sourced to Perplexity queries `premium steel entrance doors UK` and `made to measure steel front door UK bespoke` (19 May): UK-wide install-included luxury specification.

Honesty note appended: "All five are credible UK luxury steel-door specialists. The right choice depends on architectural style, security threshold, lead time, project scale, and where the buyer is in the country."

**4. Spec table — the category entities, applied to SteelR's specification**

Four-column table. Columns:
- Category entity ("Luxury", "Premium", "Bespoke", "Architect-grade")
- What it usually means
- What SteelR's specification provides
- What to verify when comparing manufacturers

Rows:
- True bespoke (panel proportions, mouldings, hardware)
- Security certification
- Thermal performance
- Fire rating
- Service life + warranty
- Hardware finish range
- Lead time
- Installation included
- Heritage RAL palette

NOTE: this table is SteelR + category — NOT comparing against other named brands. The "What to verify when comparing manufacturers" column is the honest-disclosure framing.

**5. Where SteelR's spec is genuinely above the category**

Honest section naming three concrete advantages where SteelR exceeds the typical luxury-tier baseline:

- BS EN 1627 RC4 as STANDARD (not upgrade) — most luxury manufacturers offer PAS 24 baseline
- SR3 + SR4 available on every door (not just commercial range)
- FD30S as standard (not upgrade)

This is the "objection-handling" section — explains why SteelR-spec is genuinely premium without disparaging peers.

**6. Where another manufacturer might suit better**

Honest "do not choose SteelR if..." block. Anchored to the peer-set:

- "If your design brief is pivot-led contemporary, Black Steel Doors specialises in this segment."
- "If your specification is PAS 24 baseline without RC4 or SR3 upgrade, Modern Doors and Latham's serve that mid-market premium specification well."
- "If you specifically want a heritage-craftsmanship maker, The Handmade Door Company is a credible alternative."

This builds editorial credibility — the same effect deep-reviewer flagged on the heritage hub spec.

**7. Specifying a luxury steel front door, step by step**

Process / what to expect:
- Survey + measured drawings (week 1)
- Design specification (weeks 2-3)
- Quote + sign-off (week 4)
- Manufacture (weeks 5-10)
- Installation (1 day)
- Aftercare + warranty

### FAQs (6) — mirroring natural search-query patterns

1. **"What's the difference between a luxury steel front door and a premium one?"** — tier definitions, what each typically includes
2. **"Who makes the best luxury steel front doors in the UK?"** — names the RC4-standard architectural-luxury peer set honestly (Black Steel Doors, Steel Door Solutions, Original Steel Doors, Steel Door Company, SteelR), positions SteelR within it on the RC4-as-standard and SR3-available-on-every-door specification differentiators
3. **"How much does a luxury steel front door cost in the UK?"** — frames the cost-driving factors (size, security tier specified, hardware, finish, heritage / planning requirements, installation access) without naming any price figure. Cross-link to `/steel-front-door-cost-uk` for the published factor breakdown. State that SteelR quotes individually after on-site survey.
4. **"Are luxury steel front doors worth it compared to standard front doors?"** — service life, security, lifetime cost framing (NOT vs composite specifically)
5. **"What's the lead time for a bespoke luxury steel front door UK?"** — 8-12 weeks standard
6. **"Can a luxury steel front door be installed in a conservation area or on a listed property?"** — yes with LBC process; cross-link to `/blog/steel-doors-conservation-areas-planning-guide`

### `whyConsider` closing block

Three lines:
- "You are specifying at the BS EN 1627 RC4 standard tier or higher and want genuine RC4-as-standard certification, not as an extra-cost upgrade"
- "Your architect or designer has asked for true bespoke fabrication rather than a configurator-based product"
- "You value UK manufacture, named SR3/SR4 certification, and in-house installation over imported rebadged systems"

CTA destination: `/contact`

### Related links (4)

- `/sr3-residential-steel-door` (Enhanced upgrade depth)
- `/bs-en-1627-rc4-residential-steel-door` (Standard tier depth)
- `/luxury-steel-entrance-door-london` (geo-led sister page for London prospects)
- `/steel-front-door-cost-uk` (no-prices factor breakdown)

## Schema

Inline JSON-LD:

1. **BreadcrumbList** — Home → Luxury Steel Front Doors UK
2. **FAQPage** — built from the 6 FAQs
3. **WebPage with `about` array** — anchoring category entities to bind SteelR to them in AI engine entity graphs:
   - `Luxury steel front door`
   - `Premium steel front door`
   - `Bespoke steel front door`
   - `Made to measure steel front door`
   - `High-end steel front door`
   - `Architect-grade steel front door`
   - `LPS 1175 SR3`
   - `LPS 1175 SR4`
   - `BS EN 1627 RC4`
   - `PAS 24:2022`
   - `Secured by Design`
   - `UK steel door manufacturer`

The `about` array is the load-bearing schema mechanism for the category-language binding the audit identified as missing.

## llms.txt + llms-full.txt updates (panel-gated, separate commit)

- Add `/luxury-steel-front-doors-uk` to `public/llms.txt` Topic Pages section
- Add 300-word extract in `public/llms-full.txt` Topic Pages section with the tier breakdown + peer set + category-entity anchors
- These require `/panel-llms` → `/panel-llms-approve` per the existing gate
- Ship as commit B after commit A (the page itself)

## Sitemap + indexing

- Add to `src/app/sitemap.ts` at priority 0.9
- IndexNow submit via `node scripts/bing/indexnow-submit.mjs`
- Queue in `audit-data/gsc-indexing-tracker-steelr.json`
- Manual URL Inspection priority crawl push in GSC

## Verification gates (before commit)

- `npm run build` — 0 errors
- `npm run brand-guard:staged` — 0 violations (em dashes, exclamations, displayed prices, banned words)
- copy-editor subagent PASS
- fact-check-gate subagent PASS on all named claims (peer manufacturers anchored to today's audit at `audit-data/serp-captures/20260519-peer-vs-peer-audit.md`, certifications anchored to LPCB / BSI / BRE published standards, zero displayed prices anywhere on the page per brand-policy)
- seo-schema-validator subagent PASS on all 3 schema blocks

## Recommendation Gate compliance

- **Baseline captured today:** `audit-data/serp-captures/20260519-peer-vs-peer-audit.md` + `audit-data/ahrefs-baseline-2026-05-19.md`
- **Confidence:** [REASONED] — pattern-matched to `/steel-front-door-vs-composite` (ranks page 1 organic, ChatGPT-cited) and the spec-led PAS 24 SR3 Perplexity win on the same audit
- **Reversibility:** cheap — single new page + sitemap entry + llms updates, all reversible
- **Measurement:** re-pull the 5 Perplexity + 2 ChatGPT category-led queries on 19 June 2026 (31 days post-deploy). Compare to today's baseline. Expected: SteelR enters Perplexity citation on at least 2 of the 5 category queries.

## What this spec does NOT solve

Per the AWT baseline: backlinks remain 0, DR remains 0. **On-site content alone will not move Google web rankings on this query — paid ads + backlinks would be needed.** This hub is targeting AI engine citation lift specifically (where SteelR's structural ceiling is lower).

If after 30 days SteelR enters AI citations on category queries but Google web remains absent, that confirms the diagnostic: on-site content fixes the AI channel but a separate backlink-acquisition campaign is needed for the Google web channel.

## Out of scope for this build

- Backlink-acquisition campaign (separate user-driven workstream)
- Trustpilot setup (user-driven)
- Paid ads (separate budget conversation)
- Heritage hub work (parked from 16 May session)
- Companies House `sameAs` (user-supplied registration number pending)
