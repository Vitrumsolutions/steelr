# Claude workflow: default to main, automate the rest

**Date:** 2026-04-27
**Status:** Approved
**Scope:** SteelR project workflow only. Other projects can adopt later if it works here.

## Decision

Default to working directly on `main`. Spawn a branch only when there is a specific named reason. Automate the post-cron indexing pings so blog publishing is end-to-end autonomous. Add the slow quality gates to a pre-push hook so they fire before code leaves the machine, not retroactively.

## Why

Two weeks of commit history shows zero work that would have benefited from a worktree-PR-merge ritual. Every change was either content, copy, a small component fix, or tooling. The PR review surface adds latency without functional safety because the reviewer is non-developer and skim-trusts the diff. Brand-guard, copy-editor, fact-check-gate and llms-txt-integrity-checker catch more real issues than a human skim of a PR diff would. The £5,000 area-page incident on 23 Apr was a brand-guard miss, not a PR-review miss.

The rare day a structural change genuinely needs review (schema migration, route restructure, payment integration) — I can spawn a branch ad-hoc and explain why. No rule needed; the call is obvious in the moment.

## In scope, this session

### A. Default to main

- Project `CLAUDE.md` documents the rule: routine work direct to main; branch only with a named reason.
- Today's worktree (`claude/goofy-swanson-679429`, 4 commits ahead of `main`) merges to main as the first act under the new rule. Without this, the Tue 28 Apr 20:00 UTC cron silently no-ops for the third consecutive firing.

### B. End-to-end autonomous blog publishing

- `scripts/blog/publish-post.mjs` adds an IndexNow ping for the freshly-published blog URL after the llms-full.txt rebuild step. No auth required, single fetch.
- `.github/workflows/publish-blog.yml` adds a Python step after the Node publish step that re-queues the new URL into the GSC tracker and runs `submit_indexing.py 1 --site=steelr` against Google's Indexing API. Requires a new GitHub Actions secret `GSC_SERVICE_ACCOUNT_STEELR_JSON` containing the service account JSON. User adds the secret out of band; the workflow change ships ready for it.

### C. Quality gates fire before push, not retroactively

- Pre-commit hook (already live): `brand-guard --staged`. Fast, no LLM calls, no API costs.
- Pre-push hook (new): static llms-integrity check. Validates that `public/llms.txt` and `public/llms-full.txt` have matching blog post counts vs `src/data/blog/posts/`, no em-dashes (banned per house style), no SteelR-attributed price patterns. Fast, no LLM calls. Catches the cheap drift classes mechanically.
- `/preflight` slash command (already live, `582208e`): the on-demand full sweep dispatching brand-guard + copy-editor + seo-schema-validator + llms-txt-integrity-checker + fact-check-gate + build. Documented as the pre-push step for any session that touched prose, schema, or factual claims about the project.

## Out of scope, follow-up tasks

- Migrating `gsc-indexing-tracker-steelr.json` from `vitrums/audit-data/` into the SteelR repo. Cross-project file sharing is awkward, but moving it is a separate task with its own risks.
- Cross-project rollout of the same pattern to Vitrums, GlazingQuoter, HXL. Each project decides for itself based on its own commit history.
- A full subagent-based CI pipeline (running copy-editor + fact-check-gate in GitHub Actions with Anthropic API keys). Cost and complexity are material; defer until the static checks prove insufficient.
- GitHub auto-merge + PR-as-default. Explicitly rejected for this project.

## Acceptance criteria

1. `git log origin/main..HEAD` returns empty after the merge step (worktree fully merged).
2. `node scripts/blog/publish-post.mjs` (when run with a due staged post) fires an IndexNow request that returns HTTP 200.
3. `.github/workflows/publish-blog.yml` contains a Python step that calls `submit_indexing.py`, gated on the secret existing.
4. `git push` triggers the new pre-push hook and fails on a deliberately-introduced em-dash, banned word, or blog-count mismatch in `public/llms*.txt`.
5. SteelR project `CLAUDE.md` contains a paragraph documenting the "default to main, branch ad-hoc" rule with a date and rationale link to this spec.

## Risk assessment

- **Risk:** main breaks because a session pushes broken code with no PR gate.
  **Mitigation:** Vercel build fails → no deploy → broken code never serves users. `git revert` is one command. Pre-push hook adds a safety layer above and beyond the pre-commit hook.
- **Risk:** Indexing API secret leak.
  **Mitigation:** Stored as encrypted GitHub Actions secret, never committed to repo. Existing `gsc-service-account*.json` is already in the global `.gitignore` per CLAUDE.md.
- **Risk:** Pre-push hook becomes too slow and developers learn to bypass it.
  **Mitigation:** Static checks only, no LLM calls. Should run in well under 2 seconds. If it gets slower, drop checks rather than allow bypass.
