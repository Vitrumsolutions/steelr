# Heritage Steel Front Doors Hub — Design Spec

**Date:** 2026-05-16
**Author:** Drafted in brainstorming session, four specialist subagents folded in (deep-reviewer, research-scout, cannibalisation-auditor, seo-schema-validator), pending user approval of this spec
**Status:** Spec written. Awaiting user sign-off before writing-plans invocation.

## Background

Live data captured 16 May 2026 (see `audit-data/serp-captures/20260516-heritage-baseline.md`) shows three gaps:

1. **ChatGPT-with-Search** on `steel front door for a grade ii listed property`: SteelR not cited. Surfaced brands: Modern Doors, Just Value Doors, Latham's, Crittall replica, Ryterna.
2. **Google web** on `steel front door grade ii listed` (depersonalised `pws=0`): AI Overview asserts "Installing a steel front door on a Grade II listed building is generally prohibited unless it is an exact, like-for-like replacement of a historical steel original." Cites JLE Studio + Smith Heritage Surveyors. SteelR not visible page 1.
3. **Google web** on `heritage steel front doors uk`: 8-product Sponsored carousel with displayed prices dominates fold. Editorial / spec-led results below. SteelR not page 1.

Research-scout corrections to my working assumptions (these informed the spec design):

- JLE Studio's editorial line is *repair first, replicate appearance second*. They prohibit composite/PVC imitation of timber; they are **silent on steel**. We have been treating them as anti-steel; they are not.
- Smith Heritage Surveyors takes no material-specific position.
- The actual direct competitor on this query is **MultiSteel** (multisteel.co.uk), claiming "specified for listed buildings, conservation areas, and period properties... 100% planning-compliance across Grade I, II*, II." That claim is unverifiable marketing.
- **Crittall is a glazing / garden-door company**, not a solid heritage front-door competitor.
- The AI Overview's "generally prohibited" line is **a misread of the regulatory framework**. Historic England, LABC and JLE all frame it as a **consent test, not a material ban**. Verbatim from Historic England: "listing does not prevent all changes or freeze a building in time."
- **LBC factual specifics** (UK gov sources): fee £0; 8-week statutory determination period (includes 21-day public consultation); appeal to Planning Inspectorate within 6 months; Historic England consulted only on Grade I and II* (NOT standard Grade II).

## Goal

Land SteelR as a cited UK authority on:
- Editorial-intent heritage queries (Grade II listed, conservation area, period property)
- ChatGPT-with-Search and Perplexity citation on the above queries
- Engage with (not paraphrase around) the Google AI Overview's "generally prohibited" narrative

Same pattern as `/steel-front-door-vs-composite`, which currently ranks Google page 1 organic and gets ChatGPT-cited via the InfoPage + spec-table + FAQPage formula.

## Non-goals

- Not winning the shopping-intent SERP (`heritage steel front doors uk` Sponsored carousel) — the no-displayed-prices brand policy precludes this race. Editorial-intent ceding shopping-intent is by design.
- Not displaying prices anywhere on the page.
- Not naming individual customer projects (privacy). Credibility marker is anonymous and area-level only ("a Grade II listed terrace in Kensington", "a conservation-area property in Hampstead").
- Not mirroring MultiSteel's "100% planning-compliance" marketing claim. The honest framing is "designed to meet conservation-officer detailing expectations; consent is determined case-by-case by the LPA."
- No em dashes, no exclamation marks, no "affordable / cheap / discount" per brand policy.
- Not extending the InfoPage template — page uses existing component as-is.

## Page design

URL: `https://steelr.co.uk/heritage-steel-front-doors-uk` (non-www, slashless, self-referential canonical).
Template: shared `<InfoPage>` component (same as 10 Phase 1D pages).
Schema: `BreadcrumbList` + `FAQPage` JSON-LD inline. Optional `WebPage` with `about` array per seo-schema-validator recommendation (pattern at `sr3-residential-steel-door/page.tsx` lines 63-78).
Word count target: 2,200-2,800 rendered body words (calibrated against JLE Studio ~1,800 and Smith Heritage ~2,400 per research-scout).
Sitemap priority: 0.9 (matches `/bespoke-steel-front-doors-uk` central-hub tier).

### Meta

- Title: `Heritage Steel Front Doors UK | Listed & Conservation | SteelR` (~62 chars)
- Description: focuses on Listed Building Consent + conservation areas + period properties, target ~155 chars
- Open Graph: title, description, type=website, image=`/og-image.png`

### Sections (8, not 9 — section 6 demoted per deep-reviewer)

1. **Intro (hero + first paragraph)** — Direct engagement with the AI Overview's "generally prohibited" claim, named. Reframe: the test is preservation of character, not a material ban. State that Historic England and LABC frame this as a consent test.

2. **What Grade II listed and conservation status actually require** — Legal framework anchored in:
   - Planning (Listed Buildings and Conservation Areas) Act 1990, section 7 (named)
   - Historic England guidance (cited as the published authority)
   - LABC consumer guidance (cited as the regulator's plain-English position)
   - Distinguish: Listed Building Consent (for listed buildings, all grades) vs Conservation Area planning permission (for non-listed buildings in conservation areas) vs Article 4 directions vs AONB context
   - State LBC factual specifics: £0 fee, 8-week statutory determination, appeal to Planning Inspectorate within 6 months, Historic England consulted only on Grade I and II*

3. **Spec-by-spec comparison table — Heritage steel vs Heritage composite imitation vs Heritage timber traditional**
   Rows must include:
   - Security certification (PAS 24 / BS EN 1627 RC4 / LPS 1175 SR3 / SR4)
   - Thermal performance (U-value)
   - Acoustic performance
   - Fire rating (FD30S / FD60)
   - Service life
   - Maintenance cycle
   - **Visual authenticity** (per deep-reviewer — the only column where heritage timber wins in the prospect's head; omitting it reads as evasive)
   - Bespoke flexibility (panel proportions, glazing patterns, hardware placement)
   - Conservation-officer acceptability

4. **Designing a steel door to satisfy a conservation officer** — Six-panel layouts, period proportions, period-correct ironmongery, heritage RAL colour, no visible certification marks on the streetscape. Absorbed from blog `best-front-doors-period-properties` (s.2-s.4).

   **Embedded callout (NOT a separate section per deep-reviewer):** "Where steel does not work for heritage" — Crittall-original façades (recommend Crittall-replica glazing route, not solid steel door); continuous historic steel detailing the substrate cannot match. Two-paragraph honest callout, sets credibility.

5. **Period-by-period guide** — Era-tied design and colour specification:
   - **Georgian (1714-1837):** six-panel doors, rectangular fanlights with radial/spider-web glazing bars, restrained proportions. Period-tied RAL: black (RAL 9005), dark green (RAL 6007), deep red (RAL 3011), navy (RAL 5011).
   - **Victorian (1837-1901):** four-panel doors often with top panels glazed, stained-glass leaded lights, deeper mouldings. Period-tied RAL: dark green (RAL 6007), burgundy (RAL 3005), brown (RAL 8016), navy (RAL 5011), black.
   - **Edwardian (1901-1910):** simpler panels often with large upper glazed panel, Art Nouveau and Arts and Crafts motifs, wider openings. Period-tied RAL: sage green (RAL 6021), cream (RAL 9001), olive (RAL 6003), muted blue.
   - **Inter-war (1918-1939):** flush panels and geometric glazing, Bauhaus / Modernist influences in selected stock. Period-tied RAL: black, anthracite (RAL 7016), olive (RAL 6003).

6. **The Listed Building Consent process, step by step** — Measured drawings → pre-application enquiry with conservation officer → formal LBC application (£0 fee) → 21-day public consultation → conservation officer recommendation → 8-week statutory determination → appeal to Planning Inspectorate within 6 months if refused. SteelR provides drawings + spec pack for the application in-house.

7. **Heritage RAL colour palette consolidated reference** — Same period-tied codes as section 5, presented as quick-reference card for specifying brief or pre-application enquiry. Per deep-reviewer feedback (tied to period, not generic).

8. **Period-appropriate hardware** — Lion-head knockers, ring knockers, decorative letter plates, Art Nouveau handles, ironmongery finishes (polished brass, satin nickel, dark bronze). Brief, completes the design spec.

### FAQs (6)

1. **"Is a steel door allowed on a Grade II listed building?"** — Direct, named rebuttal of the AI Overview's "generally prohibited" line. Cite Historic England's "listing does not prevent all changes or freeze a building in time."
2. "What's the difference between Listed Building Consent and Conservation Area planning permission?"
3. "How long does Listed Building Consent take and what does it cost?" — Answer: £0 fee, 8-week statutory determination, 21-day public consultation period within that window, appeal to Planning Inspectorate within 6 months if refused.
4. "Can a steel door visually match my original Victorian / Georgian / Edwardian timber door?"
5. "What if my property is in a Crittall-original or Arts and Crafts context — should I still consider steel?"
6. "Which UK home insurers recognise SR3 certification on heritage properties?"

### Credibility marker

Anonymous, area-level only (e.g. "We have supplied SteelR doors to Grade II listed terraces in Kensington and conservation-area properties in Hampstead"). Singular load-bearing line. No customer naming, no addresses. Per user confirmation 16 May 2026 that SteelR has completed installations of this type.

### `whyConsider` closing block

Three lines:
- "If your property is Grade II listed in a recognised conservation area and you have time for the Listed Building Consent route..."
- "If your conservation officer has indicated openness to material upgrade with sympathetic design..."
- "If you want heritage proportions and a 25-year service life without the maintenance cycle of timber..."

CTA destination: `/contact` (per deep-reviewer — heritage prospects will not self-serve the multi-step `/design-estimate` form before a conservation conversation).

### Related links (4)

- `/sr3-residential-steel-door` (security spec)
- `/secured-by-design-steel-front-door` (police-preferred)
- `/blog/conservation-area-door-requirements-uk` — **note:** see cannibalisation cleanup below; this blog gets 308'd to blog #5, so the related link points to the target: `/blog/steel-doors-conservation-areas-planning-guide`
- `/luxury-steel-entrance-door-london` (geographic prestige sister-page)

## Cannibalisation cleanup (per cannibalisation-auditor revised plan)

**Three 308 redirects in `next.config.mjs`:**

| From | To | Reason |
|---|---|---|
| `/blog/best-front-doors-period-properties` | `/heritage-steel-front-doors-uk` | Strict subset of blog #4. Content absorbed into new hub. |
| `/blog/period-property-front-door-ultimate-guide` | `/heritage-steel-front-doors-uk` | >85% topical twin with new hub. Content absorbed. |
| `/blog/conservation-area-door-requirements-uk` | `/blog/steel-doors-conservation-areas-planning-guide` | #3 is a 4-min stub of #5's 9-min legally-rigorous version. **Different intent from new hub** — redirects to companion blog, not the hub. Found by cannibalisation-auditor; not in original plan. |

**Retarget (no redirect, separate work):**

`/blog/best-areas-london-period-property-renovations` — keep, but shift title from "Best London Areas for Period Property Front Doors" to "Period Property Front Doors by London Borough: Style Guide" and trim the architectural-style how-to sections that duplicate the new hub. **Deferred to a follow-up commit, not blocking the hub launch.**

## Schema

Inline JSON-LD blocks in `page.tsx`:

1. **BreadcrumbList** — Home → Heritage Steel Front Doors UK
2. **FAQPage** — built from the 6 FAQ items defined in-file
3. **WebPage with `about` array (optional, recommended)** — anchors terminology for AI extraction. `about` array includes: Listed Building Consent, Conservation Area planning, Planning (Listed Buildings and Conservation Areas) Act 1990, Historic England, LABC, PAS 24, BS EN 1627 RC4, LPS 1175 SR3, LPS 1175 SR4, Secured by Design, Grade II listed building, conservation area.

Site-level `HomeAndConstructionBusiness` schema from `layout.tsx` continues to emit on this route.

No `Article` schema (this is an evergreen reference hub, not dated editorial). No `Product` schema (no displayed prices per brand policy).

## Indexing

- Add to `src/app/sitemap.ts` at priority `0.9`
- After deploy: IndexNow submit via `node scripts/bing/indexnow-submit.mjs https://steelr.co.uk/heritage-steel-front-doors-uk`
- After deploy: GSC URL Inspection priority crawl push (manual, daily quota)
- After deploy: queue in `audit-data/gsc-indexing-tracker-steelr.json` for Google Indexing API daily auto-submit

## llms.txt updates — gated, separate commit

Both `public/llms.txt` (URL line in Topic Pages section) and `public/llms-full.txt` (2-3 sentence extract in Topic Pages section) need updating. **These trigger the pre-commit panel gate (CLAUDE.md, llms.txt Panel Gate section).**

Plan: ship the hub page first as commit A. Run `/panel-llms` for the llms changes as a separate workflow producing the panel findings. User reviews findings. Run `/panel-llms-approve` to write the marker. Commit B ships the llms updates.

## Verification before commit

- `npm run build` — 0 errors, 0 type errors
- `npm run brand-guard` — 0 violations (em dashes, exclamations, displayed prices, banned words)
- `copy-editor` subagent — PASS (called against the rendered page content, AI-tells scan, weak verbs scan)
- `seo-schema-validator` subagent — PASS (called against the live URL after deploy)
- `fact-check-gate` subagent — PASS on every named factual claim (Historic England, LABC, LBC fee £0, 8-week clock, Section 7 of the 1990 Act, period-tied RAL codes)

## Recommendation Gate compliance

- **Confidence:** [REASONED]. Pattern-matched to `/steel-front-door-vs-composite` (currently ranks page 1 organic, ChatGPT-cited). Cannot tag [TESTED] until 14-30 days post-launch measurement.
- **Reversibility:** cheap — single new page, three reversible redirects, no shared-component changes.
- **Baseline captured:** `audit-data/serp-captures/20260516-heritage-baseline.md`. Re-pull 14-30 days post-launch on the 3 baseline queries (ChatGPT, Google `grade ii listed`, Google `heritage steel front doors uk`). Add GSC filter pull on keyword cluster `heritage*`, `grade ii*`, `listed building*`, `conservation area*`.

## Out of scope for this build

- Wikidata entity work for the brand-search entity-confusion problem (separate off-site programme)
- vs-composite blog→hub cannibalisation cleanup (separate session)
- The 24 thin London leaves enrichment (deferred)
- Mobile perf P1-1/2/3 (deferred)
- Reviews / GBP cadence (user-managed, do-not-re-suggest)

## Open spec questions

- **Project-reference specificity:** spec currently uses anonymous area-level framing. User has explicit permission to swap in named projects at implementation review, but spec default is anonymous to avoid drift.
- **Inter-war section length:** included for completeness but the era is genuinely smaller market than Georgian/Victorian/Edwardian; consider keeping shortest of the four era subsections.

## Implementation order (writing-plans skill will turn this into a checklist)

1. Write `src/app/heritage-steel-front-doors-uk/page.tsx`
2. Write the inline schema blocks
3. Add 3 redirects to `next.config.mjs`
4. Add URL to `src/app/sitemap.ts` at priority 0.9
5. Run `npm run build`, fix any errors
6. Run `npm run brand-guard`
7. Dispatch copy-editor + fact-check-gate + seo-schema-validator subagents
8. Commit and push (hub page + redirects + sitemap — single commit A)
9. After deploy: IndexNow submit, queue Indexing API, GSC URL Inspection
10. Run `/panel-llms` for the llms.txt + llms-full.txt updates
11. User reviews panel findings
12. `/panel-llms-approve` writes marker
13. Commit B ships llms changes
14. Update `STATE.md`
15. Set 14-day reminder to re-pull baseline queries for measurement
