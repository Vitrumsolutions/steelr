# SteelR — STATE

## Where I left off

Session 2026-05-05 closed with four commits on `main`: `a1c67a2` (Batch 1C doubled-content fix on 12 area pages), `d36e79c` (Recommendation Gate + capture protocol), `a2dee50` (first Tested-locally bundle of 5 schema/linking changes), `e8dc947` (a11y + schema cleanup from post-deploy verification panel), plus cron `8c759e6` (weekly rank-tracker snapshot 2026-05-04). All shipped, build green, 296+ static pages prerendered. 24-query SERP baseline captured at `audit-data/serp-captures/20260505-pre-panel-recommendations.json` (5 ranking, 19 not in top 30, 1 AI Overview SteelR mention) — paired pre-state for the bundle.

## Next action

**NEXT SESSION = full-audit architecture build (12-15 hrs, single focused session).**

Pre-flight check before starting (do not consume build budget if any fail):
- Playwright MCP reachable — test run on one URL
- Perplexity MCP reachable — one test query (~$0.0003)
- Chrome MCP connected — one tab open + close
- Tools flickered today (multiple disconnect/reconnect cycles), so pre-flight is not optional

Then 4 phases × ~3 hrs each, each phase ends with a working component or it doesn't end:

- **Phase A** — `scripts/audit/preflight.mjs` (tool availability + baseline loader + scope definer) + `scripts/audit/capture-ai-citation.mjs` (Perplexity API for 32 queries, 3× per query for non-determinism, captures cited sources). Smoke test on 5-query subset.
- **Phase B** — `scripts/audit/capture-lighthouse.mjs` (5-run median per page mobile + desktop via Playwright) + `scripts/audit/capture-gsc-pages.mjs` (Performance report via Chrome MCP). Smoke test on home + one topic hub.
- **Phase C** — Tier 2 meta-audit: `scripts/audit/contradiction-checker.mjs` (catches today's Article-schema-vs-not-exists contradiction class automatically), `scripts/audit/depth-checker.mjs` (audit-the-auditor), `scripts/audit/dedupe-rank-synthesiser.mjs` (single ranked output).
- **Phase D** — `.claude/commands/full-audit.md` slash command (single-command dispatch of whole pipeline) + `STATE.template.md` "Last full audit:" line update + mirror `audit-data/templates/` and `scripts/audit/` to Vitrums / GlazingQuoter / HXL. End-to-end run on SteelR validates every component.

After this build, `/full-audit` runs the whole structural review as one command, Tier 2 catches my synthesis errors automatically, all 4 projects inherit the same architecture.

**Outside the build session, queued:**
- Between 2026-05-12 and 2026-05-19, run `node scripts/audit/capture-serp.mjs post-tested-locally-bundle`, diff against `audit-data/serp-captures/20260505-pre-panel-recommendations.json`, and complete the post-state checklist in `audit-data/change-log/20260505-tested-locally-bundle.md`. Decide promote-to-Verified vs revert for the 5 Tested-locally items.
- Schedule the 5 deferred Reasoned recommendations from 2026-05-05 afternoon panel (Mani Sandhu /about visibility, YMYL author bylines on 6 blogs, homepage scale anchor, two cannibalisation merges/retitles).
- Carry-forward from 2026-05-03: rename `src/data/blog/posts/front-door-security-ratings-compared-sr1-to-sr3.ts` to drop the `sr1-to-sr3` framing.

## Blockers

- Reviews still 0 — #1 Maps 3-pack blocker, user-managed.
- Pre-existing subpage `HomeAndConstructionBusiness #business` schema override — flagged by today's seo-schema-validator as long-term cleanup, not introduced by today's commits.
- 4-tier ladder rewrite ranking volatility only confirmable after the 7-14 day post-state capture.
- Hero "use client" LCP fix and `/best-secure-front-doors-uk` listicle both blocked on Lighthouse + AI-citation capture scripts (medium-reversibility Reasoned items the gate forbids shipping without before/after).

## Recent wins (last 14 days)

- 2026-05-05 — Recommendation Gate process layer shipped (`d36e79c`): 3 confidence tiers, 4 mandatory questions, per-session caps, loop-prevention rule, templates at `audit-data/templates/`, first capture script `scripts/audit/capture-serp.mjs` working against Serper API. Mirrored to global `~/.claude/CLAUDE.md` and project `CLAUDE.md`.
- 2026-05-05 — First Tested-locally bundle through the gate (`a2dee50`): 644 new area→topic-hub links via `src/app/areas/[slug]/page.tsx` security spec block (161×4); audience hubs added to `relatedLinks` on 8 topic hubs; 8 hasCredential + 8 makesOffer entries on root schema in `src/app/layout.tsx`; Article→BlogPosting upgrade in `src/app/blog/[slug]/page.tsx` with optional `author?` / `dateModified?` (39 posts now eligible for BlogPosting rich result).
- 2026-05-05 — Post-deploy verification panel (3 agents) found 4 actionable issues, all fixed in `e8dc947` (conditional Person/Organization author + a11y cleanup).
- 2026-05-05 — Batch 1C regression patched (`a1c67a2`): doubled 4-tier ladder content on 12 area pages from 2026-05-04 regex sweep.
- 2026-05-03 — 4-tier ladder rolled out site-wide; 4 B2B audience hubs live (`/housing-associations`, `/developers`, `/architects`, `/property-managers`); WCAG 2.2 AA bundle; visibility audit captured `/sr3-residential-steel-door` #7 → #4.

## Key files

- `audit-data/templates/recommendation.md`, `audit-data/templates/synthesis-format.md` — gate templates every recommendation passes through.
- `audit-data/change-log/20260505-tested-locally-bundle.md` — pre/post evidence record for today's bundle; needs post-state filled in 2026-05-12 to 2026-05-19.
- `audit-data/serp-captures/20260505-pre-panel-recommendations.json` — paired pre-state for diff (24 queries, gitignored directory).
- `scripts/audit/capture-serp.mjs` + `scripts/audit/README.md` — first capture script + per-change-type protocol runbook.
- `src/app/areas/[slug]/page.tsx` — area template carrying the security spec block (161 pages × 4 inbound topic-hub links).
- `src/app/layout.tsx` — root HomeAndConstructionBusiness schema with hasCredential + makesOffer arrays.
- `src/app/blog/[slug]/page.tsx` + `src/data/blog/types.ts` — BlogPosting schema with conditional Person/Organization author.
- `src/data/blog/posts/front-door-security-ratings-compared-sr1-to-sr3.ts` — rename target carried over from 2026-05-03.
