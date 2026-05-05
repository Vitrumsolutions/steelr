# Synthesis Format

When Claude responds to a "what should we do" / "what's holding us back" / "audit"
type question, the synthesis output uses this format. The format makes confidence
visible to the user so they know what they're trusting before shipping.

## Confidence tiers

Every recommendation is tagged with one of three confidence labels.

### **Verified** — captured before/after data exists, the change moved the metric

Use only when:
- A previous similar change has been tested in this codebase
- Live artefact exists in `audit-data/` showing the metric moved
- The recommendation is "ship more like the verified pattern"

Example: "Splitting Hero from `'use client'` to a server-shell + client-rotator
component lifted Vitrums Lighthouse mobile from 27 → 55 (commit `<hash>`,
captured at `vitrums/audit-data/lighthouse-2026-04-XX.md`). Apply same pattern to
SteelR Hero." → **Verified**.

### **Tested-locally** — measurable in sandbox before/after this commit, evidence captured

Use when:
- The metric can be checked locally (build PASS, lint PASS, brand-guard, schema validity,
  meta length, FAQ extraction count)
- We capture the value before, ship, capture after, ship verifies movement
- No external API or live-site verification needed

Example: "Trim 8 metadata titles from >60ch to ≤60ch. Pre: `audit-meta-lengths.mjs` reports
8 issues. Ship. Post: 0 issues. Tool path: `scripts/audit-meta-lengths.mjs`." → **Tested-locally**.

### **Reasoned** — based on logic from file:line evidence, no captured before/after

Use when:
- The recommendation comes from agent inference, code review, competitor analysis, or
  general SEO/content principles
- We cannot capture before/after with tools available in this sandbox
- The change is reasonable but unproven

Example: "Add `hasCredential` array to layout.tsx schema for ISO 9001, SBD, BS EN 1627.
Reasoning: AI engines cite certifications more confidently when structured. No before/after
captureable from this sandbox (would need monitored AI citation runs)." → **Reasoned**.

**Reasoned recommendations may only ship if reversibility is cheap or medium.** Never
ship an expensive-to-reverse Reasoned recommendation.

## Output format

Synthesis output is structured. Every recommendation looks like:

```markdown
## Recommendation: <one-line action>
**Metric:** <what proves it works>
**Measurable pre/post:** <yes / no / partial — and tool>
**Reversibility:** <cheap / medium / expensive>
**Evidence:** <captured at <path> | inferred from <file:line>>
**Confidence:** <Verified / Tested / Reasoned>
**Action:** <what to do, where>
```

Recommendations are then grouped by confidence tier (Verified first, Tested second,
Reasoned last) and within each tier sorted reversibility-first (cheap before medium
before expensive).

## Per-session recommendation cap

A single synthesis session may not include more than:
- **Unlimited** Verified recommendations (these are safe by definition)
- **10** Tested-locally recommendations
- **5** Reasoned recommendations

The cap on Reasoned exists because the loop pain is highest when many Reasoned items
ship together. Smaller batches let us learn from outcomes before committing to more.

If a synthesis would exceed the Reasoned cap, the bottom-ranked items go into a
"deferred — needs data" bucket with a note on what would unblock them.

## Sample synthesis output

```markdown
# Synthesis: SteelR ranking improvements (5 May 2026)

Total recommendations: 8 (0 Verified, 4 Tested-locally, 4 Reasoned)
Cap status: within limits.

## Verified (0)

None this round. (Verified recommendations require prior captured success.
First use of a pattern is Tested or Reasoned until it has been verified in
SteelR's own data.)

## Tested-locally (4)

### Recommendation: Trim 8 metadata titles to ≤60ch
**Metric:** audit-meta-lengths.mjs returns 0 issues
**Measurable pre/post:** yes — node scripts/audit-meta-lengths.mjs
**Reversibility:** cheap (8 single-line edits, 1-commit revert)
**Evidence:** captured at audit-data/meta-audit-20260505.txt (pre-state)
**Confidence:** Tested-locally
**Action:** edit titles in [list of files], measure post

(... 3 more in same format ...)

## Reasoned (4)

### Recommendation: Add hasCredential array to layout.tsx schema
**Metric:** rich result eligibility on Schema.org markup test (manual)
**Measurable pre/post:** partial — Google Rich Results Test, manual
**Reversibility:** cheap (one-block addition, 1-commit revert)
**Evidence:** inferred from src/app/layout.tsx:96 (certifications in prose only)
**Confidence:** Reasoned
**Action:** add `hasCredential` array at layout.tsx line 121, 8 entries

(... 3 more in same format ...)

## Deferred — needs data (3)

### Cap-exceeded: Build /best-secure-front-doors-uk listicle page
**Why deferred:** 4-6 hour effort, expensive partial reversal.
**Unblocks via:** Live AI citation capture on "most secure front door" before/after
deploy. Requires Playwright MCP + Perplexity API run, ~30 min.

(... 2 more ...)
```

## Why this works (and where it doesn't)

It works because:
- Every recommendation declares its confidence visibly. User knows what they trust.
- Reasoned recommendations are capped, slowing the volume of unverified shipping.
- Reversibility ordering means we ship low-cost-to-undo first, learn, then commit.
- The deferred bucket forces honest "I don't know yet" admissions.

It does not solve:
- Wrong synthesis when I (Claude) misread captured data. Tier 2 meta-audit was supposed
  to catch this; lean fix doesn't include Tier 2.
- Slow feedback cycles (GSC lags 2-3 days, ranking lags 7-14 days, CrUX lags weeks).
- Confounders when many commits ship close together.

The lean fix is the floor, not the ceiling. Ground-truth capture (Tier 1.5) layered on
later improves Verified-tier promotion rate over time.
