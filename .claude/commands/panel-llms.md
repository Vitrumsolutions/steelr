---
description: Dispatch the 4-agent panel on staged llms file changes — visibility, cannibalisation, AI citation testing, deep review. Required before /panel-llms-approve unblocks the pre-commit gate.
---

# /panel-llms

Convene the panel that audits any staged change to `public/llms.txt` or `public/llms-full.txt` before it can be committed. SteelR's AI-engine citation channel is the project's strongest surface; changes to these files are the highest-risk class of edit. This panel is the architectural enforcement of the rule "no llms changes without explicit user approval."

## When to invoke

- After staging changes to `public/llms.txt` or `public/llms-full.txt` (with `git add`).
- Before invoking `/panel-llms-approve`.
- When the pre-commit hook returns BLOCKED with the "no .checks/llms-panel.json marker" message.

The pre-commit gate **cannot be bypassed except by the user explicitly running this panel and then `/panel-llms-approve`**.

## What the panel does

Four investigations run in parallel. Total runtime ~15-20 minutes, ~£0.30 in Serper credits.

### 1. `visibility-audit-runner` — current ground truth

Fresh visibility audit across Google organic, Bing, Google Maps, ChatGPT, Perplexity, Claude, Gemini and Google AI Mode. Compares against the most recent baseline at `audit-data/visibility-audit-*.md`. **Question it answers:** what's our current AI citation surface, has anything moved since last baseline, and which engines are citing which pages?

### 2. `cannibalisation-auditor` — internal competition

Runs `audit-data/blog-seo-audit.py` plus an area-page sweep. **Question it answers:** are any of our 40 blogs / 10 topic hubs / 161 area pages competing with each other for the same query, suppressing all of them? If yes, that's a structural cause of rank movement independent of llms changes.

### 3. `research-scout` — live AI citation testing + format intelligence

Two parts:
- **(a)** Hits ChatGPT, Perplexity, Claude, Gemini, Google AI Mode RIGHT NOW with 12 representative UK customer queries. Records which answers cite steelr.co.uk, from which page, with which exact extracted text.
- **(b)** Examines what format AI engines are favouring across the wider UK construction/security category — schema Q&A, comparison tables, statistic-heavy paragraphs.

**Question it answers:** is the gap between us and ranking competitors a content gap, a format gap, or a recency gap?

### 4. `deep-reviewer` — synthesis + risk verdict on the staged diff

Reviews findings 1-3 against the actual diff in the staged llms changes (use `git diff --cached -- public/llms.txt public/llms-full.txt`). **Question it answers:** is the cache-disruption risk of the staged change material relative to its accuracy benefit, given the live AI citation patterns 1-3 surface? Verdict on each line of the diff: keep, revert, or selective revert.

## Default representative queries for research-scout part (a)

If no specific query list is provided, use this 12-query baseline:

**Commercial intent (4):**
- "best bespoke steel front door manufacturer UK"
- "steel front door manufacturer London"
- "luxury steel entrance doors UK"
- "where can I buy a bespoke steel front door"

**Specification (4):**
- "PAS 24 vs SR3 explained"
- "FD30 front door requirements for HMO"
- "what does Secured by Design approval mean for a front door"
- "Building Safety Act 2022 entrance door rules"

**Comparison (4):**
- "steel vs composite front door UK"
- "SR3 vs SR4 difference"
- "steel vs timber front door"
- "UK-made vs imported steel front doors"

The user can override the query list at the time of invocation.

## Implementation prompt template (for Claude)

When this slash command is invoked:

1. Confirm there are staged changes to `public/llms.txt` or `public/llms-full.txt`. If not, abort with a clear message: "no llms changes staged — panel not needed."

2. Capture the staged diff: `git diff --cached -- public/llms.txt public/llms-full.txt`. Save the diff to memory for use in agent prompts.

3. Dispatch all four agents in parallel (single message, multiple Agent tool calls):
   - `visibility-audit-runner` (default brief: fresh audit + comparison to most recent baseline)
   - `cannibalisation-auditor` (default brief: full sweep)
   - `research-scout` with the 12 default queries above (or user-specified queries)
   - `deep-reviewer` with the staged diff + a brief that says "you will receive findings from three sibling agents; for now, audit the diff in isolation and flag any line where the AI cache disruption risk feels material relative to the accuracy benefit"

4. Wait for all four to return.

5. Synthesize a single findings report with sections: AI citation map (from research-scout), structural cannibalisation issues (from cannibalisation-auditor), visibility movement since last baseline (from visibility-audit-runner), line-by-line verdict on the staged diff (from deep-reviewer + your own synthesis), and a recommended next-actions list.

6. Present the findings to the user. End the message with this exact line:

   > To accept these findings and unblock the pre-commit gate, run `/panel-llms-approve`. To revert the staged changes, run `git restore --staged public/llms.txt public/llms-full.txt`.

7. **Do not write the marker file.** That happens only in `/panel-llms-approve` after the user has reviewed the findings and explicitly approves.

## Output

A single findings report. No marker. No commit. The user reviews, then runs the approve command.
