# SteelR — STATE

## Where I left off

Session 2026-05-03 shipped 12 commits to `origin/main` (`950741e` through `2a5f3d8`, plus interleaved cron commit `2cb8cbc`). Site is now consistent on the **4-tier residential security ladder** (BS EN 1627 RC4 Standard / LPS 1175 SR3 Enhanced / LPS 1175 SR4 Commercial-grade / LPS 1673 Ultra-high) across 161 area pages, 39 blog posts, 14 topic hubs, the contact form, and `public/llms-full.txt`. Four new B2B audience hubs went live (`/housing-associations`, `/developers`, `/architects`, `/property-managers`); site total now 292 prerendered static pages. WCAG 2.2 AA bundle landed (skip-to-main link sitewide, footer contrast lifted across 4 alpha values, `/design-estimate` ARIA progressbar + focus management). Today's visibility audit (`audit-data/visibility-audit-20260503.md`): Google organic 7/26 (+2 vs 22 Apr baseline), `/sr3-residential-steel-door` jumped #7 → #4. `llms-full.txt` regenerated through the full `/panel-llms` gate — marker at `.checks/llms-panel.json` written 21:14 by `/panel-llms-approve` after 4-agent SHIP convergence.

## Next action

- **GSC URL Inspection priority push** for the 4 new audience hubs: `/housing-associations`, `/developers`, `/architects`, `/property-managers` (~4 of daily ~11 quota — accelerates Google indexing of pages that didn't exist at last sitemap re-read).
- **Rename** `src/data/blog/posts/front-door-security-ratings-compared-sr1-to-sr3.ts` to drop the `sr1-to-sr3` framing that contradicts the 4-tier ladder. 5-min fix; flagged MEDIUM by `cannibalisation-auditor`. Update slug + redirect + internal links + `index.ts` + `llms-full.txt` Blog Excerpts cluster.
- **Build `/why-steel-front-doors` consolidation hub** for the comparison cluster (currently 5 separate `/blog/steel-vs-X` URLs splitting equity vs Latham's single hub). Biggest commercial lever from today's panel research; ~1 week of work — schedule as next major sprint.

## Blockers

- **Manufacturer-voice provenance lines** (workshop sq ft, install count, founded year, team size) and **numerical attack-specifics** in `llms-full.txt` Technical Glossary — both panel-flagged as citation-format gaps vs Bradbury / Strongdor. Each requires a fresh `/panel-llms` cycle before commit (gate at `.checks/llms-panel.json`).
- **Reviews still 0** — #1 Maps 3-pack blocker, user-managed (do not re-suggest).

## Recent wins (last 14 days)

- 2026-05-03 — 4-tier ladder rolled out site-wide across 16 location data files, 11 blog posts, 9 topic + layout files (commits `950741e`, `65ad41e`, `2c54c8b`).
- 2026-05-03 — 4 B2B audience hubs live at `/housing-associations`, `/developers`, `/architects`, `/property-managers` (`0accd80`, `2a5f3d8`).
- 2026-05-03 — WCAG 2.2 AA bundle: skip-to-main, footer contrast, `/design-estimate` ARIA progressbar + focus mgmt, error consistency across 3 forms (`c3b79cd`, `9c76c04`).
- 2026-05-03 — 26 metadata title/description trims for SERP truncation (`f56e3dc`).
- 2026-05-03 — `llms-full.txt` Blog Excerpts regenerated to 4-tier framing through full `/panel-llms` gate (`f93ee4d`); 4 agents all returned SHIP.
- 2026-05-03 — Visibility audit baseline: Google organic 7/26 (+1 vs yesterday), `/sr3-residential-steel-door` #7 → #4 (`d7eadbb`).

## Key files

- `audit-data/visibility-audit-20260503.md` — today's ground-truth audit. Rerun via `python audit-data/visibility-audit.py`.
- `.checks/llms-panel.json` — current `/panel-llms` SHA marker (gitignored). Any edit to `public/llms.txt` or `public/llms-full.txt` blocks at pre-commit until re-approved.
- `src/app/housing-associations/page.tsx`, `src/app/developers/page.tsx`, `src/app/architects/page.tsx`, `src/app/property-managers/page.tsx` — the 4 new B2B hubs. `/architects` does not yet cross-link to `/housing-associations` (already at 6/6 related links — editorial choice, not a bug).
- `scripts/audit-meta-lengths.mjs` — new tooling. Known bug: uses `git ls-files` so untracked new files are skipped (caught housing-assoc meta regression only after staging). Worth switching to filesystem scan; deploy-gate currently catches via build/lint.
- `scripts/one-shot-4tier-locations.mjs` — new tooling used for Batch 1C location sweep; keep for future ladder-revision passes.
- `src/data/blog/posts/front-door-security-ratings-compared-sr1-to-sr3.ts` — rename target (see Next action #2).
