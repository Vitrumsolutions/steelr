# Em-dash / en-dash backlog — SteelR — 2026-04-28

## What this is

The brand-pass sweep on 28 Apr surfaced 1,174 em-dashes (`—`) and en-dashes (`–`) used as sentence separators or parentheticals across SteelR protected content. Per the CLAUDE.md house-style rule:

> **No em dashes or en dashes** in captions, copy, posts, blog, llms files, or any brand output. Use full stops, commas, semicolons.

`scripts/brand-guard.mjs` was upgraded the same day to detect dashes:

- **Newly added files** (--staged, diff-filter=A): hard fail on any dash → prevents regression
- **Modified files** (--staged): dash check skipped → won't surprise-block edits to dashed-corpus files
- **Full repo scan** (no flag): dash count surfaced as informational warning, not failure

This file documents the backlog so a future content-rewrite pass can clear it deliberately.

## Counts as of 28 Apr 2026

| Location | Occurrences | Files affected |
|---|---:|---:|
| `src/data/blog/posts/` | 960 | 37 of 40 |
| `public/llms-full.txt` | 80 | 1 |
| `src/data/locations/` | 13 | 3 |
| `src/app/areas/` | 12 | 2 |
| `public/llms.txt` | 0 | 0 |
| **Total** | **1,065** | **43** |

(Note: brand-guard reports 1,174; the difference is because brand-guard scans `src/app/` more broadly than just `src/app/areas/`. The 1,065 above counts only the explicitly itemised locations.)

## Top files by dash count

```
54  src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts
54  src/data/blog/posts/specifying-steel-doors-architects-guide-2026.ts
54  src/data/blog/posts/how-much-do-steel-doors-cost-uk.ts
46  src/data/blog/posts/are-steel-doors-worth-it-uk.ts
41  src/data/blog/posts/bespoke-entrance-doors-uk-guide.ts
40  src/data/blog/posts/best-front-doors-period-properties.ts
38  src/data/blog/posts/how-to-improve-home-security-uk.ts
33  src/data/blog/posts/front-doors-london-townhouses-guide.ts
32  src/data/blog/posts/ral-colours-front-doors-complete-guide.ts
31  src/data/blog/posts/steel-doors-country-homes-guide.ts
31  src/data/blog/posts/home-insurance-door-security-ratings-uk.ts
30  src/data/blog/posts/pas-24-doors-explained-uk-homeowners.ts
```

## Why this matters

Em-dashes are an **AI-tell** flagged by the user-global `copy-editor` subagent. The premium understated SteelR brand voice uses periods, commas and semicolons — never the em-dash sentence break that LLM-generated prose defaults to. AI-citation engines also pick up on the rhythm: copy with em-dashes reads as model-generated and may be filtered down by detection layers used in some downstream LLM caches.

## Cleanup approach (when prioritised)

This is **not safe to mass-replace mechanically.** Each dash needs a context-aware decision: period (sentence break), comma (parenthetical), semicolon (clause join), or restructure (when the dash was carrying real load).

Recommended approach:
1. **Phase 1 — high-volume blog posts (160 dashes in top 3 files).** Rewrite by hand or via `Agent` dispatch with `copy-editor` subagent per file. Should fix 14% of backlog in 3 files.
2. **Phase 2 — remaining 34 blog posts (~750 dashes across files of 1-46 dashes each).** Batch rewrite, file-by-file.
3. **Phase 3 — non-blog surfaces (105 dashes across `llms-full.txt`, `src/data/locations/`, `src/app/areas/`).** Mostly hand-edit; some llms-full.txt sections may regenerate from `scripts/blog/backfill-llms-full.mjs` so check that first.

Each phase should run `node scripts/brand-guard.mjs` before commit and confirm the dash-warn count drops. Do not bypass the gate — if the count goes UP, something regressed.

## Blocking note

While the backlog exists, future blog publishes (cron at `.github/workflows/publish-blog.yml`) bypass the gate via `--no-verify` because:
- The cron is a trusted bot author
- Newly-staged blog posts published from `src/data/blog/staged/` have already been hand-written (and will be checked by `brand-guard --staged` if they're added in a human commit before being moved to staged)

When new blog posts are added by a human commit (not the cron), brand-guard will hard-fail on any em-dash in the new file. This is the regression-prevention gate.
