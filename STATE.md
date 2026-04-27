# STATE — SteelR

**Last updated:** 2026-04-27 (worktree-safe hooks + llms drift fix + blog queue refilled + indexing pushes)
**Priority:** P0
**Branch:** `claude/goofy-swanson-679429`

## Where I left off

Today's session shipped three commits on the worktree branch and four phases of work end-to-end:

- **`b37389c`** — patched `scripts/install-git-hooks.sh` to use `git rev-parse --git-common-dir` so the brand-guard pre-commit hook installs in worktrees (previously hardcoded `REPO_ROOT/.git/hooks`, which is a file, not a dir, in worktrees). Hook now active locally.
- **`082421b`** — fixed six pieces of llms drift the 25 Apr Tier A commit missed: 4× "172 dedicated UK area-specific pages" rewritten to "161 town/borough pages plus 16 regional hubs" (177 total), 2× "45 published technical guides" → 40, section header "Full Area Page Listing. 177 Areas Served" rewritten with lead paragraph, added missing `sr4-lps-1175-commercial-grade-residential` URL to `llms-full.txt` Blog Page URLs. Also reconciled CLAUDE.md page-count summary to 40 blogs + 16 hubs explicit. Verified clean by `llms-txt-integrity-checker`: 40/40 blog parity, 177 unique `/areas/*` URLs, zero stale counts, zero SteelR-attributed prices.
- **`f1b2836`** — refilled the empty publish-blog cron queue with 3 staged posts (24 Apr + 26 Apr cron runs both silently no-op'd; Tue 28 Apr would have been the third). Quality gates: brand-guard PASS, copy-editor caught 2 empty-superlative "robust" mentions in HMO post (fixed inline), fact-check-gate caught 3 issues (lead-time contradiction, broken `/blog/steel-vs-composite-doors` link, "twenty-five to thirty years" service life claim — all fixed inline before commit).

Also pushed 7 priority URLs via IndexNow + Indexing API (Bucks + Cobham priority, plus 5 topic hubs). Tracker now at 309 submitted, 0 in queue. GA4 verified live in production via Playwright (`gtag` present, `_ga`/`_ga_VSZ1XXGY2Z` cookies set on first pageview — 25 Apr trailing-newline fix is holding). Mobile nav fix series verified shipped via DOM inspection.

## Next action

1. **Tue 28 Apr 20:00 UTC: cron auto-publishes Sidelights post.** No manual action — watch for the GitHub Actions run + a github-actions[bot] commit moving staged → posts. `publish-post.mjs` auto-updates `llms.txt` and rebuilds `llms-full.txt` Blog Excerpts section.
2. **After each cron publish: manually push to Indexing API + IndexNow.** Not yet automated. Run `node scripts/bing/indexnow-submit.mjs https://steelr.co.uk/blog/<slug>`, then re-queue the URL into `vitrums/audit-data/gsc-indexing-tracker-steelr.json` and run `python audit-data/submit_indexing.py 1 --site=steelr`.
3. **GSC UI push (user-action, ~5 min)** — 7 URLs queued for Search Console Request Indexing: `/areas/buckinghamshire`, `/areas/cobham`, `/steel-front-door-vs-composite`, `/luxury-steel-entrance-door-london`, `/uk-steel-doors-vs-imported`, `/thermally-broken-steel-front-door`, `/fire-rated-fd30-front-door`. Daily UI quota fresh (4 days unused).
4. **Visibility audit deferred to ~5 May 2026** — running today would just baseline an unchanged surface (3 new blogs not live yet, indexing days behind). Run after at least 2 of the 3 posts have indexed to measure session impact, including Bucks #1→#9 and Cobham #9→unranked recovery signal.

## Blockers

- 0 GMB reviews still blocking Maps 3-pack — user-managed, do not prescribe process. Reviews SSoT + aggregateRating already shipped (commit `35eb0a9`, 25 Apr); array stays empty until first review lands, then schema lights up automatically.
- Bing post-migration indexing lag — expected through mid-late May, no action.

## Recent wins (last 14 days)

- 2026-04-27 — Worktree-safe install-git-hooks (`b37389c`) + llms drift fix to 161/16/177/40 (`082421b`) + blog queue refilled with 3 posts staged for 28 Apr/30 Apr/3 May (`f1b2836`) + 7 URLs pushed to IndexNow & Indexing API (HTTP 200 across the board).
- 2026-04-25 — GA4 live site-wide (`b106d9c`, `c95cfce`); mobile nav unclickable bug fixed across 4 commits (`2ddcd14`/`6a2e07e`/`685d020`/`99037b3`); reviews SSoT + thank-you review CTA (`35eb0a9`); brand-guard pre-commit hook + `/preflight` slash command (`582208e`); Tier A area-count + cost-guide rewrite (`0f53998`); displayed-price scrub across area FAQs + 2 blogs + llms-full (`3732232`/`709ec68`/`bdc99b9`).
- 2026-04-23 — 18 URLs pushed via Indexing API + IndexNow; `/ai-answers` HTML page shipped; 11 inline body links added across 3 under-linked blog posts; fresh visibility scan via Serper (steel-vs-composite NEW at #5).

## Key files

- `scripts/install-git-hooks.sh` — worktree-safe via `git rev-parse --git-common-dir` (today's `b37389c`).
- `public/llms.txt` + `public/llms-full.txt` — page counts canonical at 161 areas / 16 hubs / 177 total / 40 blogs. `backfill-llms-full.mjs` rebuilds Blog Excerpts.
- `src/data/blog/staged/` — 3 posts queued: `steel-front-doors-with-sidelights-uk-buyers-guide.ts` (28 Apr), `hmo-front-door-requirements-uk-landlord-guide.ts` (30 Apr), `steel-front-doors-building-safety-act-2022.ts` (3 May).
- `scripts/blog/publish-post.mjs` — cron entrypoint; missing IndexNow + Indexing API ping (manual step after each fire).
- `vitrums/audit-data/gsc-indexing-tracker-steelr.json` — 309 submitted, 0 queued. Re-queue URLs here to trigger recrawls.
- `scripts/bing/indexnow-submit.mjs` — Bing/Yandex/Seznam/Naver push, used today on 7 priority URLs.
- `audit-data/visibility-audit.py` — defer next run to ~5 May 2026 once new blogs indexed.
