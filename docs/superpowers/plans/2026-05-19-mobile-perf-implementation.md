# Mobile Performance Recovery — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans. Spec at `docs/superpowers/specs/2026-05-19-mobile-perf-recovery.md` — read it first. Stop for user sign-off at each phase boundary.

**Goal:** Lighthouse mobile Performance 44 → ≥80. LCP 5.7s → ≤2.5s. TBT 1,286ms → ≤200ms. Visual brand feel preserved end to end.

**Phases:** Pre-flight checks → Phase 1 Nav split → Phase 2 Hero paint cleanup → Phase 3 Overlay defer + script audit → Phase 4 Verification + commit.

User-facing sign-off points: end of every phase. No mid-phase shipping.

---

## Pre-flight (do not skip)

- [ ] Read `docs/superpowers/specs/2026-05-19-mobile-perf-recovery.md` in full.
- [ ] Confirm `.checks/lighthouse-mobile-home.json` exists (pre-fix baseline). If missing, abort — the baseline is the comparison anchor.
- [ ] `git status --short` — must be clean. Do not start on a dirty tree.
- [ ] `git pull origin main` to get the absolute latest including the heritage hub work.
- [ ] Read `src/components/Hero.tsx`, `src/components/Nav.tsx`, `src/components/GoogleAnalytics.tsx`, `src/app/layout.tsx` in full. Do not skim.
- [ ] Confirm Hero currently renders 5 landscape images in Ken Burns + crossfade. Match this exactly in the post-fix version.

---

## Phase 1 — Nav server-component split

**Goal:** reduce JS bundle on first paint by moving the static parts of the navigation to the server.

### Task 1.1: Identify the client-only parts of Nav

- [ ] Read `src/components/Nav.tsx`. List every piece of state, event handler, useEffect, or browser-only API call (window, document, scroll listener, mobile-menu toggle).
- [ ] Identify the static markup: logo wordmark, the pipe separator, the link list, the brand-styled labels. These have no state and can be server-rendered.

### Task 1.2: Create the client child component

- [ ] Create `src/components/NavClient.tsx` as a `"use client"` component.
- [ ] Move only the interactive parts (mobile menu toggle, scroll-state listener, any state hooks) into `NavClient.tsx`.
- [ ] Export the smallest possible interactive surface. The server parent should still pass static props in.

### Task 1.3: Convert Nav.tsx to a server component

- [ ] Remove the `"use client"` directive from `src/components/Nav.tsx`.
- [ ] Render `<NavClient />` from inside the server Nav.tsx, passing whatever static data the client side needs.
- [ ] Confirm no hooks are imported into the new server `Nav.tsx`. If any survived the split, they belong in `NavClient.tsx`.

### Task 1.4: Verify

- [ ] `npm run build` — must compile cleanly. Look at the `_next/static/chunks/` output: the Nav-related chunk size should fall.
- [ ] Visual check on /, /collection, /areas/london, /blog. The nav bar must render identically to production.
- [ ] Mobile menu toggle still works (open, close, ESC to close, click-outside to close).
- [ ] Dispatch `accessibility-reviewer` on both `Nav.tsx` and `NavClient.tsx`. Brief: "Confirm mobile menu keyboard semantics, focus trap on open, ARIA hidden on close. Compare against the production Nav.tsx behaviour."

### Task 1.5: Phase 1 sign-off stop

- [ ] Commit message ready: `perf(nav): split Nav.tsx into server + client to reduce initial JS bundle`
- [ ] Do not commit yet. Stop here for user review.
- [ ] User confirms visual + interaction parity.

---

## Phase 2 — Hero paint cleanup

**Goal:** LCP from 5.7s toward ≤2.5s by making the first hero image the priority-loaded LCP candidate and deferring the carousel mechanics until after first paint.

### Task 2.1: Read the current Hero.tsx end to end

- [ ] Read `src/components/Hero.tsx`. Note: CYCLE_DURATION=12000, LOGO_FADE_IN_START=8000, kenburns 12s, crossfade 2s (per CLAUDE.md). Preserve these exactly.
- [ ] Identify which image renders first on initial paint. That is the LCP element.

### Task 2.2: Priority + sizes on the first image

- [ ] On the first `<Image>` only, add `priority` prop. This tells Next.js to preload the asset.
- [ ] Add `sizes` to every Hero image so mobile downloads mobile-sized variants. Suggested attribute: `sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"`. Confirm against the actual viewport heuristics in the file.
- [ ] Confirm `quality={80}` is set on every Image (CLAUDE.md floor).
- [ ] Remove `priority` from the other four images if present.

### Task 2.3: Defer Ken Burns + crossfade timers

- [ ] Currently the Ken Burns animation runs from t=0. Wrap the carousel state initialisation in a `useEffect` with a small delay (50-100ms after mount) so the first paint shows the first image static, then the animation kicks in.
- [ ] CLS check: defer must not push other elements when the carousel transitions in. Confirm `position: absolute` on the carousel container preserves the layout.

### Task 2.4: Verify

- [ ] `npm run build` clean.
- [ ] Visual check on /. Open in Chrome DevTools mobile emulation, slow 3G throttle, hard reload. The first image should appear within ~1.5-2s, animation should kick in after that, crossfade transitions look identical to production.
- [ ] Run `npx lighthouse https://localhost:3000 --form-factor=mobile --output=json --output-path=.checks/lighthouse-mobile-home-phase2.json --chrome-flags="--headless --no-sandbox" --quiet`. Compare LCP against the pre-fix baseline.
- [ ] Dispatch `accessibility-reviewer` on `Hero.tsx`. Brief: "Carousel ARIA semantics unchanged from production. Image alt text preserved."

### Task 2.5: Phase 2 sign-off stop

- [ ] Commit message ready: `perf(hero): prioritise first image + defer carousel animation start`
- [ ] User confirms visual parity with the production hero behaviour.

---

## Phase 3 — Overlay defer + script audit

**Goal:** TBT from 1,286ms toward ≤200ms by deferring non-critical modals/overlays and confirming all third-party scripts are already deferred.

### Task 3.1: Identify deferrable components

- [ ] Grep for modals, popups, accordions, dialogs, lightboxes across `src/`. Make a list. For each, confirm whether it appears in the critical render path (above-the-fold first paint) or below.
- [ ] Any below-fold component is a defer candidate.

### Task 3.2: Convert defer candidates to `next/dynamic`

- [ ] For each defer candidate, replace the static import with:

  ```tsx
  import dynamic from "next/dynamic";
  const ComponentName = dynamic(() => import("./ComponentName"), {
    ssr: false,
    loading: () => null,
  });
  ```

- [ ] `loading: () => null` is mandatory. A loading spinner or skeleton placeholder would create a visible flash — that violates the brand guardrail in the spec.

### Task 3.3: Audit third-party scripts

- [ ] Confirm `src/components/GoogleAnalytics.tsx` still uses `<Script strategy="lazyOnload">`. Do not regress this.
- [ ] Confirm Vercel Analytics + Speed Insights are imported only in `src/app/layout.tsx` and via the standard `@vercel/analytics/react` + `@vercel/speed-insights/next` Server Component pattern.
- [ ] Look for any other third-party script (chat widget, pixel, ad tag). There should not be any. If you find one, defer it or remove it.

### Task 3.4: Verify

- [ ] `npm run build` clean.
- [ ] Same visual check sweep as Phase 1 + 2. No regressions on /, /collection, /areas/london, /heritage-steel-front-doors-uk, /luxury-steel-front-doors-uk, /blog.
- [ ] Run Lighthouse again. TBT should now be below 600ms (the "needs work" threshold). Sub-200ms is the target.

### Task 3.5: Phase 3 sign-off stop

- [ ] Commit message ready: `perf(overlays): defer non-critical-path components via next/dynamic`
- [ ] User confirms.

---

## Phase 4 — Verification + commit

**Goal:** confirm acceptance criteria, ship the work in three separate commits, push, re-measure live.

### Task 4.1: Final Lighthouse mobile run

- [ ] `npm run build` clean.
- [ ] Start prod server locally: `npm start`.
- [ ] Run Lighthouse:

  ```
  npx lighthouse http://localhost:3000 --form-factor=mobile --output=json --output-path=.checks/lighthouse-mobile-home-postfix.json --chrome-flags="--headless --no-sandbox" --quiet
  ```

- [ ] Parse both pre and post JSON. Print a delta table:

  ```
  Metric    Pre   Post   Delta
  Perf      44    XX     +XX
  LCP       5.7s  XX     -XX
  TBT       1286  XX     -XX
  FCP       4.2s  XX     -XX
  CLS       0     0      0
  A11y      100   XX     —
  BP        100   XX     —
  SEO       100   XX     —
  ```

### Task 4.2: Acceptance check

- [ ] Tick every box from the spec's Acceptance Criteria. If any box fails, do not commit. Park.

### Task 4.3: Dispatch deep-reviewer

- [ ] Brief: "Review the full diff for visual brand-feel regressions. Compare pre and post Lighthouse JSONs. Is anything in the diff cheaper, slower or less premium feeling? Cite specific file:line."
- [ ] Wait for verdict. If `REVERT` or `SELECTIVE REVERT`, address before commit.

### Task 4.4: Commit each phase separately

- [ ] Phase 1 commit: `perf(nav): split Nav.tsx into server + client to reduce initial JS bundle`
- [ ] Phase 2 commit: `perf(hero): prioritise first image + defer carousel animation start`
- [ ] Phase 3 commit: `perf(overlays): defer non-critical-path components via next/dynamic`
- [ ] Each commit body cites the pre/post Lighthouse metrics for that specific phase if measurable, plus the brand-guardrail tick list.

### Task 4.5: Push + live measurement

- [ ] `git push origin main`.
- [ ] Wait for Vercel deploy to complete. Poll with `curl -I https://steelr.co.uk/ | grep -i x-vercel-id` for a fresh deploy ID.
- [ ] Re-run Lighthouse against the live URL (not localhost):

  ```
  npx lighthouse https://steelr.co.uk --form-factor=mobile --output=json --output-path=.checks/lighthouse-mobile-live-postfix.json --chrome-flags="--headless --no-sandbox" --quiet
  ```

- [ ] Parse and print the live delta table. Live and local can differ due to Vercel edge optimisations.

### Task 4.6: Save the field measurement reminder

- [ ] In STATE.md, update the "Next action" with: "Re-pull CrUX field data via PSI API on or after 2026-06-19 (4 weeks post-deploy) to confirm field metrics catch up to lab metrics."

---

## Roll-back protocol

If after deploy the live numbers regress against pre-fix baseline (any metric worse), or any acceptance criterion fails:

1. `git revert <phase-commit-sha>` for the offending phase.
2. Push.
3. Re-measure live.
4. File a follow-up spec at `docs/superpowers/specs/2026-MM-DD-mobile-perf-followup.md` with the specific blocker.

Do not paper over a regression. Better to roll back and re-plan than to ship a half-fix.
