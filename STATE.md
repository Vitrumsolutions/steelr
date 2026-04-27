# STATE — SteelR

**Last updated:** 2026-04-27 (PM session, mobile menu queued)
**Priority:** P0
**Branch:** `main` at `5fdb098`. Worktree branch `claude/goofy-swanson-679429` was the working surface; all 12 commits since `38f713d` shipped direct to main via fast-forward push.

## Where I left off

Major shipping day. Twelve commits direct to main since `38f713d`, all production-deployed and verified live on `steelr.co.uk`:

- AM: worktree-safe `install-git-hooks` (`38f713d`), llms drift fix to 161/16/177/40 (`6841ff3`), blog queue refilled with 3 staged posts (`ceeb4f3`), STATE refresh (`0881f0d`), panel-llms gate + autonomous publish pipeline (`a77b256`), selective llms revert per user pick B (`1d9f5c1`).
- PM: collection per-door `objectPosition` for tall portraits (`643e157`), `unoptimized` flag on 6 doors hitting Vercel quota (`b99b754`), 4:5 aspect-ratio crop on 6 tall doors + click-to-zoom (`e2a537e`), detail-modal blank-image fix (`559d28a`), grid-lightbox blank-image fix (`aee1c7e`), grid-card tap → detail page (`3df1364`), ESLint unused-ref cleanup for Vercel build (`5fdb098`).

Spot-checked production: tap a card → routes to `/collection/[slug]`; click hero on detail page → modal opens with image visible; older 54 doors render unchanged (lion-knocker spot-check passed).

## Next action

**Mobile menu fixes (paused mid-brainstorm — user picks approach 1/2/3 to resume.)** Investigated at 375x812 via Claude Preview MCP, three confirmed bugs in `src/components/Nav.tsx`:

1. Second-click bug — overlay + 8 menu items stuck at `opacity:0; translateY(20px)` after close→reopen. Root cause: `transition-all duration-500` confuses when multiple inline-style props change at once. Fix: `transition-all` → `transition-opacity` on overlay (line 173) + menu items (line 193).
2. Collection menu too high — top edge y=113 (33px below nav). Inner content 690px in 684px space. Fix: item `fontSize` 32→26, `gap` 32→24, `paddingBottom` 32→64.
3. Tel link too low + invisible — y=783 (29px from bottom), `fontSize:12`, `color: rgba(245,240,232,0.4)`. Fix: `fontSize:16`, color → gold `#c9a96e`, `mt-12`.

Also flagged: 32x32 hamburger (below 44px iOS), no backdrop-tap-close, missing `aria-expanded`. **Approach 1 recommended (~15 min, Nav.tsx only).** Approach 2 adds the a11y/touch fixes. Approach 3 = bug 1 only.

## Blockers

- 0 GMB reviews still blocking Maps 3-pack — user-managed. Reviews SSoT + aggregateRating shipped (`35eb0a9`); array stays empty until first review lands.
- Bing post-migration indexing lag — expected through mid-late May.
- `steelr-black-ornate-lion-knocker-sidelights.jpg` off-centre is in source-photo composition (door right-of-centre, more brick on left). 1200x1600 source into 3:4 card = no CSS overflow, so `objectPosition` cannot help. Out of scope for code; needs JPG re-crop.

## Recent wins (last 14 days)

- 2026-04-27 PM — Image fixes shipped: grid-card 4:5 crop on 6 newest doors, grid lightbox + detail-page click-to-zoom modal blank-image fix, tap-card → detail-page routing, per-door `objectPosition` + `unoptimized` overrides. 12 commits to main, 0 regressions on older 54 doors.
- 2026-04-27 AM — Worktree-safe hooks (`38f713d`), llms drift fix to 161/16/177/40 (`6841ff3`), 3 blog posts staged (`ceeb4f3`), 7 URLs to IndexNow + Indexing API (HTTP 200), panel-llms SHA-gate (`a77b256`).
- 2026-04-25 — GA4 site-wide live (`b106d9c`/`c95cfce`); mobile nav unclickable bug fixed (`2ddcd14`/`6a2e07e`/`685d020`/`99037b3`); reviews SSoT + thank-you review CTA (`35eb0a9`); brand-guard pre-commit + `/preflight` (`582208e`); area-count + price scrub (`0f53998`/`3732232`/`709ec68`/`bdc99b9`).
- 2026-04-23 — 18 URLs Indexing API push; `/ai-answers` HTML page; 11 inline links across 3 under-linked blogs; Serper visibility scan (steel-vs-composite NEW at #5).

## Key files

- `src/components/Nav.tsx` — next-up edit. `transition-all` on lines 173 (overlay) + 193 (menu items) is the second-click bug source.
- `src/app/collection/page.tsx` + `src/app/collection/sidelights/page.tsx` — grid cards now route to `/collection/[slug]` via `router.push` on tap; lightbox state machinery dormant.
- `src/components/HeroImageWithZoom.tsx` — detail-page click-to-zoom uses plain `<img loading="eager">` to bypass Next.js IntersectionObserver lazy-load fragility.
- `src/data/doors.ts` — `Door` type now carries optional `objectPosition`, `unoptimized`, `heroAspectRatio` per-door overrides; lookup maps next to `doorPageContent`.
- `scripts/checks/llms-panel-check.mjs` — pre-commit gate for llms files (SHA-matched marker required from `/panel-llms-approve`).
- `public/images/gallery/steelr-black-ornate-lion-knocker-sidelights.jpg` — needs source-JPG re-crop to centre door visually.
- `src/data/blog/staged/` — 3 posts queued for Tue 28 Apr / Thu 30 Apr / Sun 3 May cron fires.
