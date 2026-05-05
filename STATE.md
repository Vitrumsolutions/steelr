# SteelR — STATE

**Last updated:** 2026-05-05
**Priority:** P0

## Where I left off

Session 2026-05-05 evening closed with commit `b0a78b1` on main: a Tested-locally bundle through the `/panel-llms` 4-agent gate. 8 files / +506 / -49. Bundle covers the Audience Hubs llms-file additions (4 B2B hubs) + numerical-first Technical Glossary rewrite + 5 fact-check fixes (Class A4/C/D labels stripped, lead times reconciled to canonical 8-12 weeks, fire curve "above 800°C", ISO body LPCB→UKAS, ISO :2015 stripped) + on-site parity edits across `layout.tsx`, `security-specification/page.tsx`, `lps-1673-attack-resistant-steel-door/page.tsx`, and `specifying-steel-doors-architects-guide-2026.ts`. Gate cycle ran 3 pre-panel verification passes + the formal 4-agent panel + post-deploy 3-agent verification — all clean. Build PASS 317/317. Live curl: 10/10 positive markers, 0/12 banned phrases. Marker at `.checks/llms-panel.json`. Change-log at `audit-data/change-log/20260505-llms-update.md`.

## Next action

**NEXT SESSION = full-audit architecture build (12-15 hrs, single focused session).** Same brief as previous STATE — unchanged by today's work. Pre-flight: Playwright + Perplexity + Chrome MCP availability. Then 4 phases × ~3 hrs each: capture-ai-citation.mjs (Phase A), capture-lighthouse + capture-gsc-pages (Phase B), Tier 2 meta-audit scripts (Phase C), `/full-audit` slash command + mirror to other projects (Phase D).

**Outside the build session, queued:**
- Between 2026-05-12 and 2026-05-19, run the post-state checklist in `audit-data/change-log/20260505-llms-update.md`: re-run capture-serp.mjs, manual ChatGPT/Perplexity/AI Mode spot-check on 3 baseline queries, re-run visibility-audit.py, decide promote-to-Verified vs revert.
- Investigate `/areas/buckinghamshire` regression flagged by today's panel (was #1 on 22 Apr, off top-30 on 5 May; predates this diff).
- 2 cannibalisation retitles from today's panel (Reasoned tier, cheap, reversible): `/blog/hmo-front-door-requirements-uk-landlord-guide` (drop "Developer" framing) and `/blog/specifying-steel-doors-architects-guide-2026` (lead with "Specification Checklist" / "RIBA-stage").
- Earlier carry-forwards: post-state checklist for `audit-data/change-log/20260505-tested-locally-bundle.md`; the 5 deferred Reasoned recommendations from 5 May afternoon panel; rename `src/data/blog/posts/front-door-security-ratings-compared-sr1-to-sr3.ts`.
- Cosmetic nit (low priority): `public/llms-full.txt:853` header reads "178 Pages Total" but actual is 177; bundle with next genuine llms regen, do not trigger panel for this alone.

## Blockers

- Reviews still 0 — #1 Maps 3-pack blocker, user-managed.
- Pre-existing subpage `HomeAndConstructionBusiness #business` schema override — long-term cleanup, not introduced today.
- 4-tier ladder rewrite ranking volatility only confirmable after 7-14 day post-state capture.
- Hero "use client" LCP fix and `/best-secure-front-doors-uk` listicle still blocked on Lighthouse + AI-citation capture scripts (full-audit architecture build).

## Recent wins (last 14 days)

- 2026-05-05 evening — `/panel-llms` gate-protected llms update shipped (`b0a78b1`). 4-agent panel verdict APPROVE WITH FIXES (both applied: PAS 24 "No power tools" sentence dropped; Glossary intro de-meta-tagged). Pre-panel + post-deploy verification each ran 3 agents, all PASS. New visibility baseline `audit-data/visibility-audit-20260505.md` shows Google organic 5/26 → 6/26 (+4pp) since 22 Apr; new wins on `/areas/kensington` #5 and `/areas/esher` #1; `/sr3-residential-steel-door` #8 → #6.
- 2026-05-05 — Recommendation Gate process layer shipped (`d36e79c`): 3 confidence tiers, 4 mandatory questions, per-session caps, loop-prevention rule, templates at `audit-data/templates/`, first capture script `scripts/audit/capture-serp.mjs`. Mirrored to global `~/.claude/CLAUDE.md` + project `CLAUDE.md`.
- 2026-05-05 — First Tested-locally bundle through the gate (`a2dee50`): 644 area→topic-hub links, audience hubs added to `relatedLinks` on 8 topic hubs, 8 hasCredential + 8 makesOffer entries on root schema, Article→BlogPosting upgrade.
- 2026-05-05 — Post-deploy verification panel (3 agents) found 4 actionable issues, all fixed in `e8dc947` (conditional Person/Organization author + a11y cleanup).
- 2026-05-05 — Batch 1C regression patched (`a1c67a2`): doubled 4-tier ladder content on 12 area pages from 2026-05-04 regex sweep.
- 2026-05-03 — 4-tier ladder rolled out site-wide; 4 B2B audience hubs live (`/housing-associations`, `/developers`, `/architects`, `/property-managers`); WCAG 2.2 AA bundle.

## Key files

- `audit-data/templates/recommendation.md`, `audit-data/templates/synthesis-format.md` — gate templates every recommendation passes through.
- `audit-data/change-log/20260505-llms-update.md` — full timeline + post-state checklist for today's gate-protected bundle (fill 2026-05-12 to 2026-05-19).
- `audit-data/change-log/20260505-tested-locally-bundle.md` — pre/post evidence record for earlier Tested-locally bundle; needs post-state filled in same window.
- `audit-data/serp-captures/20260505-pre-panel-recommendations.json` — 24-query SERP baseline.
- `audit-data/visibility-audit-20260505.md` — fresh visibility baseline captured during today's panel run.
- `.checks/llms-panel.json` — gitignored marker that unblocks the llms pre-commit gate; SHA-bound to staged content.
- `scripts/audit/capture-serp.mjs` + `scripts/audit/README.md` — first capture script + per-change-type protocol runbook.
- `scripts/checks/llms-panel-check.mjs` + `.git/hooks/pre-commit` — the architectural gate enforcement.
- `src/app/areas/[slug]/page.tsx` — area template carrying the security spec block (161 pages × 4 inbound topic-hub links).
- `src/app/layout.tsx` — root HomeAndConstructionBusiness schema with hasCredential (now ISO :2015-stripped) + makesOffer arrays.
- `src/app/blog/[slug]/page.tsx` + `src/data/blog/types.ts` — BlogPosting schema with conditional Person/Organization author.
