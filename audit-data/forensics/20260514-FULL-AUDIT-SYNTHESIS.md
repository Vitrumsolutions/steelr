# SteelR Full-Website Health Audit — Synthesis

Date: 2026-05-14. Consolidates 8 forensic agent reports + GA4 analytics + Instagram findings.
Read-only. No source files changed. Every recommendation gate-tagged.

## 1. Headline health verdict

The site is structurally healthy: 313 sitemap URLs all return 200, zero orphans, valid JSON-LD sitewide, clean canonicals, no house-style violations across 40 blog posts, and the 13-14 May Buckinghamshire hub recovery shipped correctly across all 16 hubs. The single biggest lever is not a defect to fix but a measurement gap to close: GA4 has no `generate_lead` Key Event and is not linked to Search Console, so the site is converting (or failing to) completely blind. The second lever is mobile performance: every mobile LCP sits at 3.4-6.1s against a 2.5s threshold, and the newly-live GA4 script is now the top main-thread offender on every page.

## 2. What is already good — do not touch

- **Link integrity.** 313/313 sitemap URLs return 200, zero redirect chains, zero orphans, nav and footer all resolve. One stale internal link only (see P1).
- **Schema.** Every page type emits valid JSON-LD. All 16 hubs emit unique county-specific FAQPage blocks. Canonicals are non-www, slash-less, self-referential. robots.txt and headers clean. One isolated `#business` @id conflict on area pages (see P1).
- **Blog content.** 40 posts, all above thin-content threshold, zero house-style violations, zero "Class 3" residuals, 39/40 carry FAQ sections. The CLAUDE.md "17 posts without FAQ" backlog is stale — it is down to 1.
- **Accessibility structure.** Correct `lang`, working skip link, single H1 pattern, proper landmarks, fully labelled forms including the multi-step estimate and 288-page QuickEnquiry, keyboard-trapped modals, carousel pause control, genuine reduced-motion support. The 3 May bundle held.
- **Brand and conversion plumbing.** Wordmark correct everywhere, colour tokens uniform, QuickEnquiry on 288 pages, design-estimate well-built, GA4 events firing. The 0-reviews gap is correctly hidden on-site (no empty star widgets).
- **Hub recovery.** 14/16 hubs fully pass the new content-density rule; the 2 misses are 4 words short, trivial.

## 3. Prioritised action list

### P0 — Measurement (highest commercial impact, lowest effort)

**P0-1. Configure `generate_lead` as a GA4 Key Event.**
Surfaced by: analytics findings. The `/thank-you` page has `ThankYouTracking.tsx` wired to fire `generate_lead`, but the event does not appear in GA4's event list and 0 Key Events are configured. Commercially this means every lead the site generates is invisible — the user cannot tell if the site converts, cannot attribute leads to channels, and cannot feed conversions to any ad platform later. Fix: in GA4 Admin, confirm the event is firing (submit a test lead), then mark `generate_lead` and `phone_click` as Key Events. Confidence: Verified (this is the documented Phase 2 pattern, proven on Vitrums). Reversibility: cheap. Effort: 15 minutes, dashboard only.

**P0-2. Link GA4 to Google Search Console.**
Surfaced by: analytics findings. A 1-minute dashboard link that unlocks organic-query and landing-page data inside GA4 — which search terms bring traffic, which landing pages convert. Without it, the 22% organic channel is a black box. Confidence: Verified. Reversibility: cheap. Effort: 1 minute.

### P1 — Visibility and conversion fixes (ship as coherent batches)

**Batch A — Mobile performance (perf audit)**
**P1-1. Defer GA4 to idle load.** `GoogleAnalytics.tsx` injects plain `<script async>` in `<head>`; GA is the top unused-JS item (64-66 KiB) on all 5 tested pages and measurably caused the blog/Kensington TBT regression. Switch to `next/script` `strategy="lazyOnload"`. Why it matters: removes 64+ KiB from the critical path, recovers the TBT regression, lifts mobile Performance scores. Confidence: Tested-locally (Lighthouse pre/post). Reversibility: cheap. Effort: small.
**P1-2. Audit and split the `1356-*` shared chunk** (24-29 KiB unused on home + collection). Confidence: Reasoned. Reversibility: cheap. Effort: medium (needs bundle-analyzer run).
**P1-3. Defer the collection-door gallery** — worst page at LCP 6.1s. Confidence: Reasoned. Reversibility: cheap. Effort: small.
Measurement: re-run local Lighthouse on the 5 page types; target every mobile LCP under 4s as a first milestone.

**Batch B — Quick technical corrections**
**P1-4. Fix the stale blog link.** `sr4-lps-1175-commercial-grade-residential.ts:20` links to `/blog/what-is-sr3-security-rating`, which 308-redirects. Point it at `/sr3-residential-steel-door`. Surfaced by: link-integrity + blog + schema audits (3 reports agree). Why: avoidable redirect hop, only stale link site-wide. Confidence: Reasoned. Reversibility: cheap. Effort: trivial.
**P1-5. Fix the duplicate `#business` @id on ~178 area pages.** Two `HomeAndConstructionBusiness` nodes share one `@id` with conflicting `url`/`description` — a graph-merge conflict Google resolves unpredictably across the largest page class. Give the area-scoped block its own `@id` or change its `@type` to `Service`. Surfaced by: schema audit. Confidence: Reasoned. Reversibility: cheap (one template edit). Effort: small.
**P1-6. Decide `/collection/sidelights` sitemap inclusion** — indexable, internally linked, absent from XML feed. Confidence: Reasoned. Reversibility: cheap. Effort: trivial.

**Batch C — Accessibility contrast (accessibility audit)**
Five cheap colour-token changes plus one aria-label. Gold `#c9a96e` fails as text/link colour (2.05:1), breadcrumb links fail (2.93:1), table row-headers fail (2.51:1), warm-brown body text fails (4.29:1). Why it matters commercially: the buyer demographic skews older; low-vision readability directly affects whether a £15k prospect can read the site. Fixes R1-R5 in the accessibility report. Confidence: Reasoned (each verifiable by recomputing contrast). Reversibility: cheap. Effort: small, ship as one batch.

**Batch D — Area-page visual lift + thin London leaves**
**P1-7. Add a dark hero banner to the `/areas/[slug]` template.** Surfaced by: visual-UX audit. ~178 area pages — the largest page class and a major organic entry point — open flat with no visual H1 or hero, unlike every other page type. Confidence: Reasoned. Reversibility: cheap. Effort: medium. Measurement: area-page scroll depth + enquiry rate by source tag (needs P0-1 done first).
**P1-8. Enrich the 24 thin London-borough leaves** (mean ~95 words; Kensington at 84 words is a flagship slug thinner than most market towns). This is the exact structural-thinness profile that took Buckinghamshire off top-30. Prioritise Kensington, Chelsea, Fulham, Hammersmith. Confidence: Reasoned. Reversibility: medium. Effort: medium. Measurement: pre/post Serper rank via `capture-serp.mjs`.

**Batch E — Instagram activation**
The `social/` folder (built 21 Apr) has 20 ready Reels + 40 Pinterest pins + a full brand kit that never went live. @steelrdoors is dormant (6 followers, 13 posts, no profile photo) and sent 4 bounced sessions in 28 days. The asset cost is already sunk. Fix: add a profile photo from the brand kit, post the queued Reels and pins. Why it matters: a near-zero-cost channel that is currently producing nothing from completed work. Confidence: Reasoned. Reversibility: cheap. Effort: small (posting, not building). Note: this is content activation, not the user-managed review/GBP cadence.

### P2 — Polish (do when convenient, low leverage)

- **P2-1.** Top up Hertfordshire + Surrey hub descriptions to 250+ words (4 words short each). Tested-locally, cheap, trivial.
- **P2-2.** Add a FAQ section to `best-front-doors-period-properties` — the last post without one. Tested-locally, cheap.
- **P2-3.** Add 2-3 internal links each to `how-to-improve-home-security-uk` and `steel-vs-timber-entrance-doors` (at 4 links vs 10-15 average). Reasoned, cheap.
- **P2-4.** Standardise the CTA label — 4 variants of "Request a Consultation" across hero/InfoPage/QuickEnquiry. Tested-locally, cheap.
- **P2-5.** Swap the near-square hero image `steelr-navy-panelled-chrome-frosted.jpg` (1.04:1, crops badly) for a true landscape frame. Reasoned, cheap.
- **P2-6.** Collection-door title at 67 chars and Bucks hub meta description at 178 chars — both over soft caps, mild SERP truncation. Tested-locally, cheap.

### Gated — llms.txt changes (require /panel-llms + /panel-llms-approve)

The llms files are SteelR's strongest citation surface and are pre-commit gate-protected. Four findings, all blocked until the panel flow runs:
1. Fix area header line 859: `17 Regional Hubs, 178 Pages Total` -> `16 Regional Hubs, 177 Pages Total` (provably wrong count).
2. Add `/sr3-vs-sr4-residential-steel-doors-uk` to both files (real citable page, currently invisible to AI crawlers via llms).
3. Add the 3 missing posts to llms-full's "Blog Page URLs" block (40/40 parity).
4. **Highest value:** enrich the llms-full area section so each of the 16 hubs carries a 2-3 sentence extract from its new `description` — the hubs are now 25-30% unique-content on-site but llms-full still treats them as URL stubs, so AI engines get none of the new county depth. Largest edit, most cache-disruptive — needs full panel sign-off.

## 4. Cross-cutting themes

- **Content thinness is the recurring structural risk.** It took Buckinghamshire off top-30, it now sits in the 24 London leaves (P1-8), and it shows as the llms-full area section lagging the live hubs (gated item 4). The hub fix proved the pattern; the same playbook needs extending to leaves and propagating to llms.
- **The GA4 script appears in two reports for two different reasons.** The perf audit flags it as the top main-thread offender (P1-1); the analytics findings flag that despite being live it has no Key Event configured (P0-1). It is simultaneously the biggest perf drag and not yet earning its keep as a measurement tool. Fixing both is the highest combined-leverage move.
- **Measurement blindness undercuts the recommendation gate itself.** Several P1 items (area-page hero, London leaf enrichment) can only be proven by GA4 or Serper data. P0-1 and P0-2 must ship first or the rest cannot be measured — which is exactly what the gate's "what metric proves this works" question demands.
- **The site is in good structural shape; the gaps are polish, perf, and instrumentation.** No report found a blocker. Three reports independently flagged the same stale blog link, which is reassuring cross-validation.

## 5. Explicitly deferred / do-not-do

- **0 reviews / GBP cadence.** User-managed. The metric impact is real (0 reviews is the #1 Maps 3-pack blocker, and Maps is the channel SteelR does not rank in), but per the brief no review-acquisition process is recommended.
- **Cannibalisation merges.** Three Security posts and two BS EN 1627 explainers have soft topic overlap. Do NOT merge or redirect without captured Serper data — the loop-prevention rule forbids reversing prior decisions without before/after evidence. Run a SERP-position check first; treat as diagnostic only.
- **`other-cities.ts` "missing hub".** It has no hub by design (8 standalone leaf cities). Correctly built — no action.
- **Nav at 9-item ceiling.** Not a defect. A constraint to remember: do not add a 10th top-level nav item, it re-breaks small-viewport layout.
- **Trailing-slash 308s, transient `000` curl result, desktop performance, CrUX absence.** All non-defects: standard Next.js normalisation, a connection blip that re-tested clean, desktop is healthy, and the site is simply too young (under 500 CrUX samples). Leave alone.
- **Mobile menu serif font, footer Topics/Specifiers redundancy.** Cosmetic, sub-threshold. Not worth a change for its own sake.

## 6. The one-week plan

If the user says "go" tomorrow, ship this coherent batch in order:

**Day 1 (dashboard, 20 minutes): P0-1 + P0-2.** Configure `generate_lead` and `phone_click` as GA4 Key Events, link GA4 to Search Console. This is the foundation — every later measurement depends on it. Submit one test lead to confirm the event fires end to end.

**Days 2-3 (one deploy): Batch A + Batch B.** Defer GA4 to `lazyOnload` (P1-1), fix the stale blog link (P1-4), fix the duplicate `#business` @id (P1-5), resolve `/collection/sidelights` in the sitemap (P1-6). These are all small, low-risk, and share a single build/deploy. Run `npm run build` + brand-guard before push; route through deploy-gate.

**Days 4-5 (one deploy): Batch C.** The five accessibility colour-token fixes plus the breadcrumb aria-label. One self-contained CSS-token batch, cheap to revert.

**The measurement that proves it worked:** Re-run local Lighthouse on the 5 page types after the Day 2-3 deploy — target every mobile LCP under 4s and the blog/Kensington TBT regression recovered (back under ~500ms). Then, one week after P0-1 ships, check GA4: `generate_lead` should appear in the events list with a non-zero count if the site is converting at all, and the Search Console link should be populating organic-query data. That single GA4 check converts the site from "converting blind" to "measurable" — which is the precondition for proving every P1 content and UX change after this.

Recommendation gate tally: 2 Verified (P0-1, P0-2), within caps for Tested-locally and Reasoned. No expensive-to-reverse items. All llms items gated as required.
