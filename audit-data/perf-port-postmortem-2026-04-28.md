# SteelR Vitrums perf-port — postmortem (28 Apr 2026)

## Outcome
Reverted both commits. Vitrums playbook helps infopages but hurts home/blog.

## Commits attempted
- `a1da13d` — Nav split: server-component shell + NavScrollState client island + MobileNavToggle client island
- `563ada2` — ScrollProgress deferred via `next/dynamic` with `ssr: false`

Both reverted in `8a74a6c` and `92bfc5d`.

## Lighthouse mobile data (3 home runs, 2 blog runs, 2 london runs)

| Page | Baseline | Post-port mean | Delta | TBT delta | bootup-time delta |
|---|---|---|---|---|---|
| home | 74 | (50+61+67)/3 = 59 | **-15** | +604 ms | +1188 ms |
| blog | 65 | (53+54)/2 = 54 | **-11** | +1483 ms | +2222 ms |
| /areas/london | 56 | (64+62)/2 = 63 | **+7** | -326 ms | -222 ms |

Bytes only grew +11-13 KB across all three pages, so the regression was hydration cost, not bundle size.

## Why it failed where Vitrums succeeded

1. **Three client islands replaced one client component.** Old SteelR Nav was a single `"use client"` component. New version split into NavScrollState + MobileNavToggle + (separate) deferred ScrollProgress. Each island is its own React reconciliation root. On home and blog, those roots queued behind already-large client trees (Hero with framer-motion, blog-card lazy-loading) and lengthened the long-task chain.

2. **`next/dynamic` with `ssr: false` defers JS off the critical path but doesn't shrink it.** ScrollProgress chunk fetches AFTER hydration. On infopages with little competing client work this nets a TBT win. On home/blog, where the main thread is already saturated, the deferred chunk arrives in the middle of an already-busy long-task window and pushes TBT higher than inline rendering would have.

3. **Hero on the homepage is already a large client component using framer-motion.** Vitrums' homepage hero is server-rendered with no framer-motion. The Vitrums playbook assumed minimal client overhead BEFORE the Nav split — SteelR has a much heavier client baseline before the port.

## What did work
The london recheck (+7 perf, -326 ms TBT) confirms the playbook is sound on infopages. If we want to apply it again, scope it surgically: serve the lighter Nav only on infopages, leave home and blog with the original Nav. Not worth the complexity right now.

## Decision
Leave SteelR on the pre-port Nav. Re-baseline targets stand: home 74 / blog 65 / london 56. SteelR perf priorities sit elsewhere (image LCP on hero, framer-motion bundle on Hero, blog-card lazy-load timing).
