# Recommendation Gate

Every recommendation made in any SteelR session must answer these four questions
before being included in an action list. If a question cannot be answered honestly,
the recommendation is not ready to ship — it goes to the "needs more data" bucket,
not the action list.

The gate exists because of the recurring failure mode where I (Claude) recommend
changes based on reasoning, the user trusts me, the change ships, then later we
discover it was wrong and reverse. Each loop costs time, trust, and tokens. The
gate slows recommendations down enough to stop the loop.

## The four questions

### 1. What metric proves this works?

Specific, measurable, attributable. Not "rankings improve" — "this page moves from
position #X to #Y for query Z within W days, measurable in GSC Performance / Serper
rank tracker / Lighthouse / etc."

Examples:
- ✅ "Lighthouse Performance score on /sr3-residential-steel-door (mobile, 5-run median)
   moves from current to ≥70."
- ✅ "/areas/chelsea regains a top-10 organic position on 'steel doors Chelsea' within
   14 days, measured by Serper rank tracker."
- ✅ "FAQPage rich result eligibility on /pas-24-steel-entrance-door turns to PASS in
   Google Rich Results Test post-deploy."
- ❌ "AI engines cite us more." (Not specific, not attributable.)
- ❌ "It looks better." (Not measurable.)

### 2. Can I measure it pre and post?

With the tools available in this sandbox / via the SteelR audit pipeline. Tools
currently available:
- Serper API (rank tracking, SERP snapshots) — `audit-data/scripts/serper-rank-checker.py`
- GSC via Chrome MCP — Page Indexing, Performance reports
- Schema.org Rich Results Test — manual or via curl
- Lighthouse CLI — locally only (sandbox cannot run Chrome runtime)
- Build artefacts (npm run build, lint, brand-guard, audit-meta-lengths) — every commit
- Live AI engine queries — Perplexity API + Playwright MCP (when MCP available)

If the metric requires a tool not in this list, the recommendation is **Reasoned**
tier (see synthesis-format.md), not Verified.

### 3. Is it reversible?

How expensive is it to undo if wrong?

- **Cheap reversal** (<10 min): copy edit, schema field add, one-line config change.
  Ship freely if other gates pass.
- **Medium reversal** (1-2 hr): rename a route + add 308 redirect, content rewrite,
  component refactor.
  Ship only if Tested-locally or higher confidence.
- **Expensive reversal** (>2 hr or destructive): delete pages, restructure URL hierarchy,
  change brand voice, migrate data structure.
  Ship only if Verified.

Recommendations are sorted reversibility-first. Cheap-to-undo lands first; learn from
outcomes; commit to harder changes only after lower-risk ones validate the direction.

### 4. Is the evidence captured or inferred?

- **Captured** = real artefact exists (live Lighthouse run, Serper rank, GSC screenshot,
  Schema.org test result, before/after metric). The recommendation cites the artefact path.
- **Inferred** = reasoning from code, file:line, SERP excerpt, competitor comparison,
  general SEO principle.

Inferred recommendations are not banned, but they must be tagged **Reasoned** (lowest
confidence tier) and ship reversibly only.

## Filling the gate

Every recommendation in synthesis output uses this format:

```markdown
### Recommendation: <one-line action>

**Metric:** <what proves it works>
**Measurable pre/post:** <yes / no / partial — and which tool>
**Reversibility:** <cheap / medium / expensive>
**Evidence:** <captured at <path> | inferred from <file:line>>
**Confidence:** <Verified / Tested / Reasoned>
**Action:** <what to do, file:line where to do it>
```

Recommendations missing any of the five fields are not shippable. They go into a
"needs more data" bucket with a note on what would unblock them.

## Loop-prevention rule

**You may not recommend reversing a previous recommendation without first capturing
whether the previous one moved the metric.**

If the original recommendation was tagged Reasoned and 7+ days have passed without
visible regression, "we should reverse" requires before/after data. Without it,
the reversal recommendation is rejected.

This stops the constant-pivot pattern where each session second-guesses the previous
session's calls without measurement.

## Exceptions

The gate does not apply to:
- Bug fixes (build error, lint failure, broken link, typo) — ship immediately
- Verification/audit work itself (running scripts, reading data, agent dispatch)
- House-style enforcement that is already documented (em-dash removal, banned words)
- Reverting code that demonstrably broke production (verified via deploy logs, error
  reports, or live site failure)

Everything else goes through the gate.
