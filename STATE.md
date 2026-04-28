# STATE — SteelR

**Last updated:** 2026-04-28 (post-audit-execution + perf-port revert)
**Priority:** P0
**Branch:** `main` at `ecf03dc`. Audit findings from 27 Apr executed cleanly, perf-port attempted then reverted with evidence.

## Where I left off

SteelR audit execution closed. The 27 Apr findings (5 critical SEO, 6 llms drift, 4 competitor) were addressed in sequence over this session:

- **Internal linking + Topics footer** (`183755f` + `c7d22a0`) — every blog post now links to a Phase 1D hub, every blog has 1-3 area links, Footer ships a 10-entry Topics column with proper h3 hierarchy.
- **llms-full.txt rebuilt** (`021cb1c`) via the `/panel-llms` + `/panel-llms-approve` SHA gate — 7 wrong-region slugs fixed, 12 wrong subtotals corrected, "172 → 177" and "45 → 40" stale claims fixed.
- **Brand presence on blogs** (`5bd01e1` + `638637b`) — every one of the 40 posts now has at least 2 SteelR mentions in body copy, no em dashes added.
- **Buckinghamshire title pattern fix** (`875df5e`) — area pages now lead with `Steel Doors [Town]` and demote SR4 LPS 1175 from front to end. Targets the #4 → #10 regression.
- **Lighthouse mobile baseline locked** (`e0e850c`) — home 74 / london 56 / blog 65 captured against live prod.
- **Vitrums perf playbook port attempted then reverted** — commits `a1da13d` (Nav split) + `563ada2` (defer ScrollProgress) regressed home -15 / blog -11 (TBT +604ms / +1483ms) while improving london +7. Reverted in `8a74a6c` + `92bfc5d`. Postmortem at `audit-data/perf-port-postmortem-2026-04-28.md`.

The `/thank-you` Google review CTA already exists on the page (lines 281-348 of `src/app/thank-you/page.tsx`) — was on the open-options list incorrectly.

## Next action

SteelR has no in-Claude-scope loose ends. Next session should move to a different project. If/when SteelR perf is revisited, the work is **Hero framer-motion bundle directly** (the actual JS hot spot on home), not the Nav.

User-managed items still outstanding:
- 0 GMB reviews → blocks Maps 3-pack.
- Bing 0/15 organic → recovery in flight, IndexNow live, expected mid-late May.

## Blockers

- 0 GMB reviews → user-managed; the on-site review CTA on `/thank-you` is shipped and ready to support outreach.
- Domain authority lag → 3-week-old domain vs 5-15 year competitors. No quick fix.

## Recent wins (last 14 days)

- 2026-04-28 — Closed SteelR Phase 5. 6 commits shipped (link pass, Topics footer, llms rebuild, brand presence, title fix, baseline). Perf-port attempted + reverted with full Lighthouse data. SteelR is back to locked baseline.
- 2026-04-27 — Cross-project SEO audit pass landed 4 SteelR reports: `seo-full-audit-2026-04-27.md`, `llms-integrity-2026-04-27.md`, `schema-audit-2026-04-27.md`, `competitor-benchmark-2026-04-27.md`. 11 critical findings, all addressed.
- 2026-04-27 evening — Mobile menu Approach 2 + a11y polish (`4fd5612`, `b523c62`); rank-tracker Windows + same-day rerun fixes (`edbe2ec`).
- 2026-04-27 AM — Worktree-safe hooks (`38f713d`), llms drift initial fix to 161/16/177/40 (`6841ff3`), 3 blog posts staged (`ceeb4f3`), panel-llms SHA gate (`a77b256`).
- 2026-04-25 — GA4 site-wide live (`c95cfce`); reviews SSoT + thank-you review CTA (`35eb0a9`); brand-guard pre-commit + `/preflight` (`582208e`).

## Key files

- `audit-data/perf-port-postmortem-2026-04-28.md` — why the Vitrums playbook regressed home/blog on SteelR. Read before any future Nav refactor.
- `audit-data/lighthouse-baseline-2026-04-28.json` — locked perf baseline (home 74 / london 56 / blog 65).
- `audit-data/seo-full-audit-2026-04-27.md` — original 5 critical findings; all addressed.
- `audit-data/llms-integrity-2026-04-27.md` — original 6 drift issues; rebuilt via 021cb1c.
- `src/app/thank-you/page.tsx` — Google review CTA lines 281-348; already live.
- `public/llms-full.txt` — Full Area Page Listing now matches source-of-truth. SHA-gated; only edit via `/panel-llms` + `/panel-llms-approve`.
- `src/components/Footer.tsx` — Topics column with 10 Phase 1D hubs + h3 heading.
- `src/data/blog/posts/*.ts` — every post has 2+ SteelR mentions; brand-guard enforces no banned-word regressions.
