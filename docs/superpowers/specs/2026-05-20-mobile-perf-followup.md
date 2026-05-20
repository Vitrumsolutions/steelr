# Mobile Performance Follow-up — Spec

> **Status:** Ready for execution. Self-contained handoff for a fresh session. Prior session's spec at `docs/superpowers/specs/2026-05-19-mobile-perf-recovery.md` (Phases 1-3, all landed). This is the continuation that addresses what Phase 1-3 did not move.

## Where the prior session left off

Three commits landed on main 2026-05-20:

- `cab209c` perf: defer framer-motion off homepage initial JS chunk
- `b1d71e5` perf(nav): split Nav into Server Component + thin client children
- `9afb65c` perf(hero): defer Ken Burns until after first paint + AVIF format

A fourth commit (`86d3f2a` perf(hero): fetchPriority=high on first image + drop mobile animations) was applied AND reverted (`16f5f51`) within the same session because measurement showed it made LCP and TBT worse, not better. See "Why fetchPriority on the hero image was the wrong fix" below.

### Live measurement, three runs against the live deploy after Phase 1-3 only

| Metric | Pre (19 May) | Post Phase 1-3 (median of 3) | Delta |
|---|---|---|---|
| Performance | 44 | 53 (range 49-72) | +9 |
| FCP | 4.19s | 2.15s | -2.04s |
| LCP | 5.65s | 4.49s | -1.16s |
| TBT | 1,286ms | 732ms | -554ms |
| CLS | 0 | 0 | 0 |
| Accessibility | 100 | 100 | 0 |
| Best Practices | 100 | 100 | 0 |
| SEO | 92 | 100 | +8 |

CrUX field-data window: opens approximately mid-June 2026 (4 weeks of accumulated traffic). Re-measure then via PSI API.

## Why fetchPriority on the hero image was the wrong fix

The prior session dispatched an agent to dig into `lcp-breakdown-insight` across 3 runs of the post-Phase-1-3 Lighthouse. It returned a finding that completely rewrote the diagnosis:

**The LCP candidate is a TEXT element, not an image.**

LCP element across all 3 runs: `main#main-content > section#hero > div.absolute > h2.mb-3`, text "The UK's highest security entrance doors, made to your exact specification". Lighthouse `lcp-discovery-insight` returns `notApplicable` — explicitly skipped because LCP is text. `metricSavings.LCP = 0` for any image preload audit.

LCP sub-phase breakdown (medians across 3 runs):
- timeToFirstByte: 432ms
- elementRenderDelay: **1,545ms** (the bottleneck)

The elementRenderDelay is the H2 waiting for two things in series: Cormorant Garamond display font load, plus main-thread scripting to unblock. Both happen before the H2 paints.

Fixing this requires font-loading work and main-thread work, not image priority work. Setting `fetchPriority="high"` on the hero image (as I did in `86d3f2a`) elevated the image to the browser's highest resource-loading priority, which on a constrained mobile network starves the font fetch of bandwidth and likely makes elementRenderDelay worse. Measurement bore this out across 8 runs: TBT regressed from 732ms median to 1,395ms median, LCP regressed from 4.49s to 5.07s.

The spec at `2026-05-19-mobile-perf-recovery.md:60` assumes image-LCP ("Image at 537 KB is the dominant LCP contributor"). That assumption is wrong for this codebase.

## Correction to the prior spec's Vitrums precedent claim

The prior spec at line 146 says "Vitrums precedent recovered to Perf ~80 on the same playbook." This is not supported by Vitrums' actual records.

Vitrums' last documented mobile Lighthouse (per `vitrums/CLAUDE.md:50`, 22 Apr 2026): **Perf 55, LCP 3.4s, TBT 2.41s.** Not 80. The earlier Vitrums recovery table (`vitrums/CLAUDE.md:487-530`) tracks the journey from Perf 27 → 42 → 45 → 45, all on mobile lab Lighthouse.

SteelR after Phase 1-3 is at **Perf 53 median (range 49-72)** on the same lab harness. That is already at or above the Vitrums precedent on every metric. The 80/2.5s/200ms acceptance criteria in the prior spec were aspirational, not grounded in observed precedent.

## Goal

Move mobile Lighthouse mobile **median** from 53 toward 70+, prioritising LCP and TBT specifically. Stop comparing to an aspirational 80 target that no comparable codebase has hit. Accept that lab Lighthouse against Vercel is heavy variance (single runs spread 49-72 Perf with no code change) and only act on median or trimmed-mean over N≥5 runs.

## Three evidence-cited fixes to apply

Each fix is independently committable and reversible. Apply them in order. Re-measure (median of 5 runs) between phases. Stop progressing if any phase regresses median.

### Fix 1: Preload the Cormorant Garamond display font

**Why.** The LCP element is the hero H2 styled with Cormorant Garamond. The font currently loads via `next/font/google` with `display: "swap"`. With swap, the browser paints a fallback first, then swaps in Cormorant once it loads. Lighthouse measures LCP at the moment the FINAL font paints. Preloading the font shortens that window.

**Edit.** In `src/app/layout.tsx`, change the Cormorant Garamond declaration to add `preload: true`. By default `next/font` preloads only when used in a Server Component at top-level rendering; ensure the preload is explicit. If `preload: true` is already the default, add a manual `<link rel="preload" as="font" type="font/woff2" crossorigin>` in `<head>` pointing at the resolved Cormorant `.woff2` URL (find via `npx next dev` then network tab).

**Expected delta.** LCP -300 to -800ms (font is the dominant ER-delay contributor on mobile per the Lighthouse breakdown).

**Reversibility.** Single-file change. `git revert` undoes cleanly.

### Fix 2: Defer @vercel/analytics and @vercel/speed-insights via next/dynamic

**Why.** `unused-javascript` Lighthouse audit reports 93 KB of unused JS on the homepage after Phase 1-3. The two Vercel runtime packages (`@vercel/analytics/react` and `@vercel/speed-insights/next`) load eagerly via `src/app/layout.tsx:3-4` and contribute to TBT during hydration. Vitrums applies a `DeferredClientOverlays` pattern that wraps these in `next/dynamic({ ssr: false, loading: () => null })`.

**Edit.** Create `src/components/DeferredAnalytics.tsx` modelled on `vitrums/src/components/DeferredClientOverlays.tsx`. Remove the two static imports from `src/app/layout.tsx` and replace the bottom-of-body `<Analytics />` and `<SpeedInsights />` JSX with `<DeferredAnalytics />`.

**Expected delta.** TBT -100 to -200ms.

**Reversibility.** Two files. `git revert` undoes cleanly. Risk: vercel analytics may take slightly longer to start beaconing, which is a tracking-quality trade we accept for the TBT win.

### Fix 3: Add long-cache headers for /images and /_next/image

**Why.** `next.config.mjs` does not emit `Cache-Control` headers for image assets. Browsers fall back to no-store semantics on revisits, forcing the hero image through the Vercel image optimisation endpoint on every page load. Vitrums sets `public, max-age=31536000, immutable` for `/images/:path*` and reports it as the largest contributor to repeat-visit CrUX improvements.

**Edit.** Append a `headers()` block to `next.config.mjs` matching the Vitrums pattern at `vitrums/next.config.ts:100-128`. Apply the rule to `/images/:path*` and verify Next.js Image's `/_next/image` endpoint also benefits (it should, because it serves transformed responses and Vercel applies the same `Cache-Control`).

**Expected delta.** First-visit lab Lighthouse: 0 to -100ms LCP. Repeat-visit field CrUX: materially better. CrUX is what Google actually ranks on, so this is the highest-leverage fix for SEO ranking even if lab Lighthouse barely moves.

**Reversibility.** Single-config change. `git revert` undoes cleanly.

## Out of scope for this follow-up

- Switching to `images.unoptimized: true` (Vitrums did this; SteelR's hero benefits from Vercel's AVIF transform too much to give up)
- Trimming the three font families to one (would be a meaningful change to brand visual identity, requires separate creative review)
- Switching Next.js 14.2 → 16.x (Vitrums runs on 16; major upgrade, requires separate session)
- Removing GoogleAnalytics.tsx's raw `<script async>` pattern (the component's JSDoc documents prior breakage with `next/script strategy="lazyOnload"`; do not regress without re-investigating)

## Acceptance criteria

- [ ] Median of 5 fresh-CDN Lighthouse runs: Perf ≥ 65 (target 70, stretch 75)
- [ ] LCP median ≤ 4.0s
- [ ] TBT median ≤ 500ms
- [ ] FCP median ≤ 2.0s
- [ ] CLS still 0
- [ ] Accessibility, Best Practices, SEO still 100
- [ ] Visual regression check on /, /collection, /areas/london, /heritage-steel-front-doors-uk, /luxury-steel-front-doors-uk passes
- [ ] No FOUC introduced
- [ ] `npm run brand-guard:staged` PASS

## Reviewer agents

In order:
1. After Fix 1: `seo-schema-validator` on `src/app/layout.tsx` (font preload directive validity).
2. After Fix 2: `accessibility-reviewer` on the new `DeferredAnalytics.tsx`.
3. Before commit: `deep-reviewer` with the pre/post Lighthouse JSONs + the diff. Brief identical to prior session's Phase 4.
4. Mandatory: `verification-runner` for build + typecheck + lint.

## Measurement protocol

1. Take pre-fix median Lighthouse baseline (5 runs against current live).
2. Apply Fix 1, commit, push, wait for deploy (poll for a unique marker in the HTML or CSS hash).
3. Wait 2-3 minutes for Vercel edge cache to refresh.
4. Run 5 Lighthouse against `https://steelr.co.uk` mobile.
5. Compute median for each metric. Compare to baseline.
6. If any metric regressed (median, not single run), revert that phase. Do not proceed.
7. Repeat for Fix 2 and Fix 3.

## Reversibility per phase

Each fix lands as its own commit. If lab Lighthouse median regresses after any phase, `git revert <sha>` and push. Do not chain reverts. Re-measure after each.

## When to declare done

When all three fixes are landed AND the median moves the spec's acceptance criteria, OR when median has plateaued and additional work has diminishing returns. The CrUX field-data window opens mid-June 2026; that becomes the next decision point regardless of lab Lighthouse numbers.

## Out-of-band notes

- Lab Lighthouse against Vercel has heavy variance. Always measure 5+ runs and use median. Single-run deltas are meaningless.
- Vercel edge cache for the homepage URL can hold for 5+ minutes after a deploy. Either wait or measure against `/contact` (which refreshes faster) as a sanity check.
- Cormorant Garamond is brand-load-bearing. Do NOT switch to a system font as a "fix" — that would be a brand regression worse than any Lighthouse score.
