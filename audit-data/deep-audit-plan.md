# Deep Audit Plan — SteelR

**Pattern:** Vitrums-style multi-skill audit + Wave 2 verifier set.
**Inspiration:** `vitrums/audit-data/seo-full-audit-2026-04-27.md` (12 SKILL.md methodologies in parallel + companion schema/llms/competitor audits, severity-tagged findings).
**SteelR addition:** every Wave 1 finding gets a Wave 2 verifier verdict (CONFIRMED / PARTIAL / REJECTED / UNVERIFIABLE) before it lands in the final document.
**Mode:** **read-only**. No commits. No `/panel-llms`. No live edits to llms files. No staging.
**Output target:** `audit-data/deep-audit-{YYYYMMDD}.md` (gitignored — competitive intel).

## Scope

Wave 1 covers the 8 highest-priority page types + cross-cuts:

**Pages sampled:**
- `/` (homepage)
- `/security-specification`
- `/security`
- `/bespoke-steel-front-doors-uk` (priority 0.9 hub)
- `/sr3-residential-steel-door` (one ladder page)
- `/architects` (one audience hub)
- `/areas/kensington` (one area page)
- `/blog/sr4-lps-1175-commercial-grade-residential` (one blog)

**Cross-cuts:**
- `public/llms.txt` + `public/llms-full.txt`
- `src/app/sitemap.ts`
- `public/robots.txt`
- Site-wide internal-link graph (via crawl + grep)
- All 161 area pages template-uniqueness audit

## Baseline data files (Wave 1 must read these before measuring — don't re-run live captures)

- `audit-data/visibility-audit-20260506.md` — Google + Bing + Maps morning baseline (Serper)
- `audit-data/serp-captures/20260506-ai-citation-spotcheck.md` — 5-engine AI spot-check
- `audit-data/serp-captures/20260506-google-organic-spotcheck.md` — 5-query Google live spot-check
- `audit-data/change-log/20260505-llms-update.md` — what shipped 5 May
- `STATE.md` — current state of project

## Phase 0 — Prep (5 min)

1. Confirm read-only mode (no commits, no edits to source files except writing the audit output).
2. Confirm output target file path with user.
3. Confirm baseline files exist (5 files listed above).

## Phase 1 — Wave 1 Discovery (parallel, ~25-40 min)

**14 agents/skills dispatched in a single message with multiple Agent tool calls.** Each must produce structured findings: severity (Critical/Important/Nice-to-have), file:line, first-step fix.

| # | Skill or Agent | Scope |
|---|---|---|
| 1 | `technical-seo` skill | Crawlability, indexing, sitemap, robots, canonicals, mobile, lab CWV |
| 2 | `schema-markup` skill | JSON-LD across 8 sample pages + identify missing schema types per page type |
| 3 | `seo-audit` skill | On-page elements (titles, meta descriptions, H1, H2, alt, internal links) per page |
| 4 | `meta-tags` skill | Title + description + OG + Twitter card optimization audit, character lengths, uniqueness |
| 5 | `internal-links` skill | Site-wide link graph, orphan pages, link equity flow, audience hub inbound coverage |
| 6 | `site-architecture` skill | URL hierarchy, navigation, breadcrumb consistency, audience hub Nav placement |
| 7 | `content-strategy` skill | Gap vs category-authority topics; what blog posts / hub pages are still missing |
| 8 | `programmatic-seo` skill | Uniqueness audit on the 161 area pages (template detection + unique-content threshold) |
| 9 | `geo-audit` skill | AI engine optimization audit using today's spot-check baseline + llms files coverage |
| 10 | `cannibalisation-auditor` agent | Full sweep across 40 blogs + 10 topic hubs + 4 ladder pages + 4 audience hubs + 161 area pages |
| 11 | `accessibility-reviewer` agent | WCAG 2.2 AA on 8 sample pages (alt, headings, contrast, landmarks, keyboard, ARIA) |
| 12 | `roast-landing` skill | 6-dimension audit on homepage + /bespoke-steel-front-doors-uk + /security-specification |
| 13 | `competitor-alternatives` skill | Crittall, Bradbury, Strongdor, Gerda gap analysis (what they do that SteelR doesn't) |
| 14 | `copy-editor` agent | House style + AI-tells + brand-policy adherence on top 12 pages |

**Each agent output should follow the Vitrums template:**
- "What's good" (2-5 bullets)
- "What can be improved" (severity-tagged bullets with file:line + first-step fix)
- "What's missing" (severity-tagged bullets with first-step fix)

## Phase 2 — Wave 2 Verification (parallel, ~15-25 min, AFTER Wave 1 returns)

Each Wave 1 finding gets at least one verifier verdict: **CONFIRMED / PARTIAL / REJECTED / UNVERIFIABLE**.

| # | Verifier | Job |
|---|---|---|
| 1 | `deep-reviewer` agent | Reads ALL Wave 1 findings, scores evidence quality per finding, flags speculative / unsourced / contradictory ones. Verdict per finding. |
| 2 | `fact-check-gate` agent | Every factual claim in Wave 1 findings checked against `CLAUDE.md` + live URLs. Catches "agent X said the page has 100 reviews" type errors. |
| 3 | `seo-schema-validator` agent | Re-runs JSON-LD validation on every URL Wave 1 flagged with a schema issue. Confirms the issue exists. |
| 4 | `verification-runner` agent | Reproduces any Wave 1 metric claim that maps to a build/lint/test/script (e.g. "67 meta descriptions over 160 chars" → re-run the trim script). |
| 5 | **Spot re-check** | Top 3 highest-severity Wave 1 findings get re-run by a *different* skill than the original (e.g. if `seo-audit` flagged a meta length issue, `meta-tags` re-runs against the same URLs to see if it agrees). |

## Phase 3 — Synthesis (~10 min)

1. Aggregate Wave 1 + Wave 2 outputs into single document `audit-data/deep-audit-{YYYYMMDD}.md`.
2. Format: Vitrums-style — "What's good / What can be improved / What's missing" + Severity (Critical/Important/Nice-to-have) + Phase tag (1-9) + file:line + first-step fix.
3. Add **Wave 2 verdict column** per finding (CONFIRMED / PARTIAL / REJECTED / UNVERIFIABLE) with verifier reasoning.
4. Move REJECTED findings to "Wave 1 dropped" appendix at the bottom.
5. Severity summary at the bottom (e.g. "12 Critical CONFIRMED, 4 Critical PARTIAL, 0 Critical REJECTED").

## Phase 4 — Delivery (5 min)

1. Save to `audit-data/deep-audit-{YYYYMMDD}.md` (gitignored).
2. 1-page executive summary to user: total findings count, Critical-CONFIRMED breakdown, top 5 next-actions ranked by leverage-per-effort.
3. User picks which CONFIRMED findings move into the next-session work queue. Nothing ships without sign-off.

## Constraints / ground rules

- **READ-ONLY.** Don't write, edit, or commit any source file except the audit output document.
- **No /panel-llms.** llms files are read-only for this audit.
- **Don't re-run live captures** that were done today — read the baseline files instead. (5-engine AI spot-check + 5-query Google live + visibility audit all from 6 May.)
- **Wave 2 must be different agents than Wave 1** — that's the whole point. No agent verifies its own findings.
- **Failures are findings.** If an agent can't reach a tool / API / page, it reports that as UNVERIFIABLE in Wave 2 — don't quietly skip.
- **Token budget.** Plan for ~200-400k tokens across the 19 agents. Each agent should produce concise structured output, not long narratives.

## Definition of done

A single markdown file at `audit-data/deep-audit-{YYYYMMDD}.md` containing:
- ✅ Findings from all 14 Wave 1 agents
- ✅ Wave 2 verdict per finding
- ✅ Severity summary
- ✅ Top 5 next-actions list
- ✅ Wave 1 dropped appendix (any REJECTED findings)

User reviews. Approved findings get moved to STATE.md "Next action" queue.
