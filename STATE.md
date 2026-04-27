# STATE — SteelR

**Last updated:** 2026-04-27 (evening session)
**Priority:** P0
**Branch:** `main` at `edbe2ec`. Three commits since last refresh: `4fd5612`, `b523c62`, `edbe2ec`.

## Where I left off

Three commits shipped to main, plus two read-only search-visibility audits.

- `4fd5612` — Mobile menu Approach 2 in `src/components/Nav.tsx`. `transition-all` → `transition-opacity` (fixes second-click stuck-invisible bug), geometry rebalance (item fontSize 32→26, gap 8/10→6/8, paddingBottom 32→64), tel link promoted to gold #c9a96e + fontSize 16 + mt-12, hamburger 32→44px, backdrop-tap-close, `aria-expanded`/`aria-controls`, inner-content `stopPropagation`. Verified at 375x812 across 3 open/close cycles.
- `b523c62` — Mobile menu a11y polish: Esc-to-close, `role="dialog"` + `aria-modal` + `aria-label` + `aria-hidden`, focus management (`hamburgerRef` + `firstMenuLinkRef` + `prevMenuOpenRef` initial-mount guard), tel-link aria-labels, `tabIndex` flip alongside `aria-hidden` (WCAG 4.1.2). Static a11y review: PASS (was WARN), only soft "no focus trap" warning remains — not WCAG 2.2 AA mandated.
- `edbe2ec` — `audit-data/rank-tracker.py` Windows fixes: ASCII-only output (em dash / middle dot / arrow / check mark all encoded outside cp1252), and `latest_prev_snapshot()` accepts `exclude` arg so same-day re-runs don't compare a file against itself. Rank-history `2026-04-27.json` now contains real Serper data (replacing the morning's 403 snapshot).

Two audits, no code shipped. **Search rank audit:** SteelR ranks 0/20 on customer-language steel-door queries (category owned by lathamssteeldoors, domadeco, modern-doors), 0/4 Maps in London/Surrey, #1 only on direct brand match (`steelr.co.uk`, `SteelR Uxbridge`) — Google still parses "SteelR doors" as generic "steel doors". **AI search audit:** 2 named citations + 1 quoted-without-name + 3 misses on 6 clean queries. Cited FIRST on category-authority and SR3/PAS-24 spec queries. Confirms AI engines remain SteelR's strongest channel and the llms.txt Authority + Technical Glossary investment is paying off.

## Next action

**Highest leverage based on the 27 Apr audit data: domain authority / off-page work.** The 0/20 customer-language rank result is a 3-week-old domain vs. 5-15 year competitors gap, not an on-page SEO gap. Pick one:

- Backlink campaign — get SteelR mentioned with proper-noun spelling on architectural / luxury-home publications. Drives both ranking and brand-entity recognition (which fixes the "SteelR doors" → generic "steel doors" parsing).
- Surrey Maps push — local-pack competitors are weaker than London (general installers, not steel specialists). Smaller gap to top 3 once first GBP review lands.

Optional small jobs (each ~5-15 min): add customer-language keyword set to rank-tracker; fix `datetime.utcnow()` deprecation; add Nav.tsx focus trap (soft a11y, not blocker).

## Blockers

- 0 GMB reviews still blocking Maps 3-pack — user-managed.
- Bing post-migration indexing lag — expected through mid-late May.
- Domain authority lag — 3-week-old domain ranking against 5-15 year competitors. No quick fix; needs sustained off-page work.

## Recent wins (last 14 days)

- 2026-04-27 evening — Mobile menu Approach 2 + a11y polish shipped (`4fd5612`, `b523c62`); rank-tracker Windows + same-day-rerun bugs fixed (`edbe2ec`); search + AI audits run (no commits, findings in this STATE).
- 2026-04-27 — Image fixes: 4:5 grid crop, click-to-zoom modal, tap-card → detail page, per-door `objectPosition`/`unoptimized` overrides (12 commits).
- 2026-04-27 AM — Worktree-safe hooks (`38f713d`), llms drift fix to 161/16/177/40 (`6841ff3`), 3 blog posts staged (`ceeb4f3`), panel-llms SHA gate (`a77b256`).
- 2026-04-25 — GA4 site-wide live (`c95cfce`); reviews SSoT + thank-you review CTA (`35eb0a9`); brand-guard pre-commit + `/preflight` (`582208e`).
- 2026-04-23 — 18 URLs Indexing API push; `/ai-answers` HTML page; Serper visibility scan (steel-vs-composite NEW at #5).

## Key files

- `src/components/Nav.tsx` — mobile menu shipped (Approach 2 + a11y). Optional focus trap is the only deferred item.
- `audit-data/rank-tracker.py` — fixed for Windows + same-day reruns. Next polish: customer-language keyword set + `datetime.utcnow()` deprecation.
- `audit-data/rank-history/2026-04-27.json` — real Serper baseline. Next run will compare against this.
- `public/llms.txt` + `public/llms-full.txt` — confirmed driving AI citations on category-authority queries; protect on any future content change.
- `src/data/blog/staged/` — 3 posts queued for Tue 28 Apr / Thu 30 Apr / Sun 3 May cron fires.
- `MARKETING-COPY.md` — directory-listing + outreach copy ready when off-page campaign starts.
