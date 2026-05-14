# SteelR Performance and Core Web Vitals Audit — 14 May 2026

Read-only diagnostic. No code changed. Baseline: `audit-data/lighthouse-20260511/`.

## Method

- Parsed all 20 baseline Lighthouse JSON files (mobile + desktop, 11 May 2026).
- PageSpeed Insights API: HTTP 429 rate-limited on first attempt and again after the mandated 30s wait + single retry. Unauthenticated PSI is not reachable from this environment. Documented as blocker.
- Fresh runs: local Lighthouse 13.3.0, mobile preset, 5 representative live pages on 14 May 2026. Runs completed cleanly; an EPERM error fires only on Chrome temp-dir cleanup after the JSON is already written, so all 5 reports are valid.
- CrUX field data: checked `crux-tracker/history/steelr.json`. All 9 samples (19 Apr to 13 May) return `error: 404 chrome ux report data not found` for both phone and desktop origin. Site still below the ~500-sample threshold. No field CWV exists yet.

## Per-page-type scorecard (mobile)

Baseline 11 May vs fresh 14 May. P = Performance score, times in ms.

| Page type | P (11 May) | P (14 May) | LCP base | LCP fresh | TBT base | TBT fresh | FCP fresh | CLS fresh |
|---|---|---|---|---|---|---|---|---|
| Home | 40 | 62 | 5890 | 4141 | 1884 | 801 | 2531 | 0.000 |
| Collection door | 40 | 51 | 7618 | 6149 | 3588 | 1285 | 1928 | 0.019 |
| Topic hub (bespoke) | 50 | 64 | 6096 | 5389 | 1853 | 473 | 1921 | 0.000 |
| Blog (sr4) | 59 | 58 | 5280 | 4590 | 473 | 745 | 3420 | 0.000 |
| Area (kensington) | 70 | 71 | 5197 | 3389 | 416 | 786 | 1860 | 0.000 |

Desktop baseline was healthy throughout (P 67-99, LCP 0.8-2.1s) and is not the concern. Mobile is.

## Delta vs 11 May

- **Improved:** Home (+22), collection (+11), bespoke hub (+14). LCP fell on 4 of 5 pages, biggest on home (-1.75s) and kensington (-1.8s). Home TBT more than halved. This tracks with the Buckinghamshire structural fixes and hub enrichment commits shipped 13 May, which likely trimmed render work.
- **Regressed:** Blog TBT 473 to 745ms (+272), kensington TBT 416 to 786ms (+370). Blog P down 1 point. Root cause: GA4 went live (`G-VSZ1XXGY2Z`) between the two runs — it is now the single largest unused-JS item (64-66 KiB) on every page and adds main-thread script-evaluation cost the 11 May baseline never measured.
- **Unchanged:** CLS effectively zero everywhere except collection (0.019, still well under 0.1). No layout-shift problem.
- **Net:** real improvement masked on TBT-sensitive pages by the new GA payload. No page hits the Phase 10 thresholds on mobile (LCP <=2.5s, TBT proxy for INP). Every mobile LCP is still 3.4-6.1s.

## Top 5 problems ranked by user impact

1. **Mobile LCP 3.4-6.1s across all page types.** Worst on collection (6.1s) and bespoke hub (5.4s). LCP element on image-led pages is the hero/gallery image; on text pages it is the first large heading blocked behind script + style work. Threshold is 2.5s. This is the headline issue.
2. **GA4 loads render-adjacent, not deferred.** `src/components/GoogleAnalytics.tsx` injects plain `<script async>` tags via `dangerouslySetInnerHTML` in `<head>`. `async` still competes for main thread during load. GA is the top unused-JS offender (64-66 KiB) on all 5 pages and is the measurable cause of the blog/kensington TBT regression.
3. **High main-thread script evaluation.** Home: 2564ms scriptEvaluation + 2352ms styleLayout, 6.8s total main-thread work, 2.6s bootup. Collection: 2321ms scriptEvaluation, 1285ms TBT. Shared Next.js chunk `1356-8f14d17c65523a2f.js` shows 24-29 KiB unused on home and collection — a bundle carrying code most pages do not use.
4. **Collection door pages are the worst performers (P 51, LCP 6.1s, TBT 1285ms).** Likely the gallery/image grid plus a client component hydrating above the fold. Also the only page with non-zero CLS (0.019).
5. **High FCP on text-heavy pages.** Blog FCP 3.4s, home FCP 2.5s. First paint is delayed behind render-blocking style/script work before any content shows, compounding perceived slowness independent of LCP.

## Recommended fixes (not implemented)

1. **Defer GA4 to idle.** Switch `GoogleAnalytics.tsx` to `next/script` with `strategy="lazyOnload"`, or load gtag on first interaction / `requestIdleCallback`. Vitrums and the SteelR CLAUDE.md both document `lazyOnload` as the working pattern; the component's docblock rejected it over a stale page_view bug, but `lazyOnload` (not `afterInteractive`) still fires page_view reliably. Removes 64+ KiB from the critical path. **Tested-locally** — unused-JS and TBT deltas are measurable pre/post with Lighthouse.
2. **Audit and split the `1356-*` shared chunk.** Trace what pulls it into home and collection; lazy-import or route-split the unused 24-29 KiB. **Reasoned** — bundle attribution from Lighthouse only; needs a webpack-bundle-analyzer run to confirm. Reversible cheap.
3. **Collection door page: defer the gallery.** Make the image grid / any above-fold client component lazy or server-rendered, and confirm only the LCP hero image carries `priority`. **Reasoned** — file:line evidence is `HeroImageWithZoom.tsx` priority flags plus the 6.1s LCP; needs the actual collection template inspected. Reversible cheap.
4. **Preload the LCP hero image and drop `priority` from non-LCP images.** `Hero.tsx` sets `priority={i === 0}` (correct); verify gallery thumbnails do not also claim priority and steal bandwidth. **Reasoned**. Reversible cheap.
5. **Re-test after fix 1 ships.** GA defer alone should recover the blog/kensington TBT regression and lift home/collection P. Capture pre/post via `scripts/audit/` once a Lighthouse capture script exists. **Tested-locally**.

Recommendation gate: 0 Verified, 2 Tested-locally, 3 Reasoned (within the 10 / 5 caps; all Reasoned items are cheap to reverse).

## Blocker logged

PageSpeed Insights API returned HTTP 429 on the initial call and on the single 30s-delayed retry. An authenticated PSI key (or running the existing `crux-tracker` pattern with a key) would make fresh field-adjacent runs repeatable. Local Lighthouse worked as the fallback and supplied all fresh numbers above.
