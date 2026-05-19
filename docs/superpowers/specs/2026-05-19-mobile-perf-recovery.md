# Mobile Performance Recovery — Spec

> **Status:** Ready for execution. Self-contained handoff for a fresh session. Plan at `docs/superpowers/plans/2026-05-19-mobile-perf-implementation.md`. Pre-fix Lighthouse baseline at `.checks/lighthouse-mobile-home.json` (captured 19 May 2026 21:41 UTC, commit `82e5d2d`).

## Goal

Recover mobile Performance from 44/100 to ≥80/100 on the homepage. Bring LCP under 2.5s, TBT under 200ms, FCP under 1.8s. Preserve premium-brand visual feel — the Ken Burns hero carousel and crossfade transitions are non-negotiable.

## Why this matters

CLAUDE.md flagged this as a known follow-up: "Site was 19 days young in 22 Apr (too young for CrUX); now ~7 weeks old. Could now be measured. Worth doing." A Lighthouse audit run 19 May 2026 confirmed Vitrums-class regression. Google's Core Web Vitals SERP confidence penalty kicks in materially above LCP 2.5s. As organic traffic accumulates over the next 4-8 weeks (when CrUX field data starts populating), the lab regression becomes a field regression that affects ranking on every page.

This is a 2-3 hour focused session for a specialist surface — high blast-radius if done wrong (hero, nav, layout all touch the perceived brand quality). It deserves its own dedicated session, not a tacked-on pass at the end of unrelated work.

## Evidence (captured 19 May 2026)

### Lighthouse mobile scores (homepage)

| Category | Score |
|---|---|
| Performance | **44 / 100** |
| Accessibility | 100 / 100 |
| Best Practices | 100 / 100 |
| SEO | 100 / 100 (post robots.txt fix in commit `82e5d2d`) |

### Core Web Vitals (lab)

| Metric | Value | Google threshold | Status |
|---|---|---|---|
| FCP | 4.2 s | <1.8s good, <3.0s needs work | Poor |
| LCP | 5.7 s | <2.5s good, <4.0s needs work | Poor |
| TBT | 1,286 ms | <200ms good, <600ms needs work | Poor |
| CLS | 0 | <0.1 good | Excellent (preserve) |
| Speed Index | 4.7 s | <3.4s good | Needs work |

CrUX (real-user field) data: not yet available. Site is 7 weeks old. CrUX populates after 28 days of meaningful traffic. Window opens approximately mid-June 2026.

### Specific Lighthouse diagnostics

```
0/100  bootup-time            2.6s total JS bootup
0/100  unused-javascript      Est savings of 92 KiB
```

Largest single JS contributor: `_next/static/chunks/2117-53ad066d3e80cc29.js` — 924ms scripting. Likely framer-motion or animation library bundle in the shared chunk.

GTM script `gtag/js?id=G-VSZ1XXGY2Z` consumes 290ms scripting time. Already loaded with `strategy="lazyOnload"` per CLAUDE.md, but still measurable on cold-load LCP because it competes for the main thread.

### Network breakdown (50 requests, 1,105 KB total)

| Type | KB |
|---|---|
| Image | 537 |
| Script | 367 |
| Fetch | 88 |
| Font | 82 |
| Document | 22 |
| Stylesheet | 7 |

Image at 537 KB is the dominant LCP contributor. The hero carousel cycles 5 landscape images. Without `priority` on the first image and proper `sizes`, mobile downloads full-resolution assets meant for desktop.

## Out of scope

- Field-data measurement (wait for CrUX, 4-8 weeks)
- Desktop perf (already strong, do not regress it)
- Image quality reduction below `quality={80}` (CLAUDE.md notes 80 is the floor — already optimised from 100 in a prior pass)
- Switching framework or hosting (no change to Next.js 14 / Vercel)

## Reference pattern: the Vitrums playbook

Per CLAUDE.md Apr 22 entry ("Option C: CrUX / Lighthouse perf baseline"), Vitrums shipped a documented fix from Perf 27 / LCP 8s to recovery. Four steps in priority order:

1. **Nav server-component split.** Split `Nav.tsx` into a server component shell that renders the bar markup + logo + static links, and a client component that handles only the mobile-menu toggle + scroll-state. Reduces JS bundle on first paint.
2. **Defer overlays.** Any modal, popup, accordion or interactive overlay should load via `next/dynamic` with `{ ssr: false, loading: () => null }`. Not in critical render path.
3. **`lazyOnload` GA.** Already done on SteelR per CLAUDE.md ("GoogleAnalytics component renders `<Script strategy='lazyOnload'>`"). Verify still in place; no regression.
4. **Hero paint cleanup.** Biggest LCP contributor. Three sub-fixes:
   - Add `priority` to the first hero image (`<Image priority />`), defer the rest.
   - Set explicit `sizes` attribute per breakpoint so mobile downloads the mobile asset, not the desktop one.
   - Defer the Ken Burns animation and the carousel transition timer until after first paint. The hero must look static for the first 100ms after FCP, then animate in.
   - Confirm `quality={80}` is set (already documented in CLAUDE.md).

## Acceptance criteria (every box must tick before commit)

- [ ] Lighthouse mobile Performance ≥ 80
- [ ] LCP ≤ 2.5 s
- [ ] TBT ≤ 200 ms
- [ ] FCP ≤ 1.8 s
- [ ] CLS unchanged at 0
- [ ] Accessibility score still 100
- [ ] Best Practices score still 100
- [ ] SEO score still 100
- [ ] Visual regression check: home, /collection, /areas/london, /heritage-steel-front-doors-uk, /luxury-steel-front-doors-uk all render visually identical to current production (same hero, same Ken Burns, same crossfade, same brand feel)
- [ ] Build, type-check, lint all pass
- [ ] `npm run brand-guard:staged` PASS

## Reversibility

Medium. Hero + Nav are the most visually load-bearing components on the site. The risk is shipping a visual regression that hurts brand perception more than the perf gain helps SERP. Mitigations:

- Each phase commits separately so any one phase can be reverted independently.
- Visual regression check runs against five named pages before each commit.
- Pre-fix Lighthouse baseline is preserved at `.checks/lighthouse-mobile-home.json` for measurement reference.

If the post-fix score does not hit ≥ 80 Performance or any of the acceptance boxes fails, do not commit. Park the work, write a follow-up spec for whatever specific blocker emerged.

## Brand guardrails (non-negotiable)

- Hero carousel: 5 images, Ken Burns zoom + crossfade, 12s cycle. Animation pattern preserved exactly.
- Nav: dark on hero, gold pipe separator, uppercase, 9px letter-spacing. Preserved exactly.
- Premium feel: no "loading..." spinners, no skeleton placeholders, no flash of unstyled content visible to the user. If a defer adds a visible flash, the defer is wrong.
- No emoji anywhere in commits, comments or copy.
- No em dashes or exclamation marks introduced anywhere.

## Files in scope

Confirmed via grep + filesystem inspection on 19 May 2026:

- `src/components/Hero.tsx` — primary LCP contributor; the carousel + Ken Burns logic lives here
- `src/components/Nav.tsx` — currently fully client-rendered; split target
- `src/app/layout.tsx` — GoogleAnalytics + Vercel Analytics scripts already deferred; verify only
- `src/components/GoogleAnalytics.tsx` — confirm `lazyOnload` still active
- `next.config.mjs` — may add `images.formats: ["image/avif", "image/webp"]` if not already
- `public/images/hero/*` — 9 images. Verify `priority` + `sizes` after edit

Read each file at the start of the session before making changes.

## Reviewer agents to dispatch

In order:

1. **After Nav split:** `accessibility-reviewer` on `src/components/Nav.tsx` and the new client child. Mobile menu must remain keyboard-accessible.
2. **After Hero edits:** `accessibility-reviewer` on `src/components/Hero.tsx`. Carousel ARIA semantics must not regress.
3. **Before commit:** `deep-reviewer` with the full diff + the pre-fix Lighthouse baseline + the post-fix Lighthouse report. Brief: "Is the visual brand feel preserved end to end? Flag any change that reads as cheaper, slower, or less premium."
4. **Mandatory:** `verification-runner` for build + type-check + lint pass.

## Measurement protocol

1. **Pre:** Read `.checks/lighthouse-mobile-home.json` for the current numbers. Do not re-run Lighthouse pre-fix; the baseline is locked at commit `82e5d2d`.
2. **Post:** Run `npx lighthouse https://steelr.co.uk --form-factor=mobile --output=json --output-path=.checks/lighthouse-mobile-home-postfix.json --chrome-flags="--headless --no-sandbox" --quiet`. The EPERM cleanup warning is non-fatal; the JSON writes successfully.
3. **Comparison:** Parse both JSONs and present a delta table. Required for the final report.
4. **Site live verification:** After deploy, re-run Lighthouse against live `https://steelr.co.uk` (not the local build). Local and live can differ due to Vercel's edge optimisations.

## Out-of-band notes

- Field CrUX data window opens approximately mid-June 2026. Re-measure then.
- Vitrums precedent recovered to Perf ~80 on the same playbook. Treat that as the realistic target, not an aspirational ceiling.
- If Hero rework drops CLS above 0.05, that's a regression. CLS at 0 is currently a structural advantage worth defending.

## Out-of-spec wishlist (do not action in this session)

- Critical CSS extraction beyond Next.js defaults
- Service worker for offline / cache-first asset delivery
- Image CDN swap away from Vercel's bundled image optimisation
- Migration to React Server Components for non-Nav components

Each of those is its own follow-up if the four-step playbook is insufficient. Do not bundle them into this session.
