---
description: Pre-ship validation — runs brand-guard, build, copy-editor, seo-schema-validator, llms-txt-integrity-checker, fact-check-gate in parallel before pushing
---

# /preflight

Run the full pre-ship validation suite for SteelR. Use this **before any push** that touches:

- Prose in blog posts (`src/data/blog/posts/*.ts`)
- Area page content or FAQ generators (`src/app/areas/`, `src/data/locations/*.ts`)
- Schema.org JSON-LD (`src/app/layout.tsx`, page-level Script tags)
- The `llms.txt` or `llms-full.txt` files
- The cost-guide blog or any pricing-adjacent content

## What runs

In **parallel** (single message, multiple subagent dispatches):

1. **`brand-guard`** (npm script) — scans for SteelR-attributed prices and brand-banned words. Local script, fast.
2. **`copy-editor`** subagent — reviews the prose changes for AI tells, dash misuse, weak verbs, hedging, brand-voice consistency.
3. **`seo-schema-validator`** subagent — validates JSON-LD parses, schema types are Google-supported, canonicals consistent, meta descriptions in range.
4. **`llms-txt-integrity-checker`** subagent — confirms `/llms.txt` and `/llms-full.txt` are in sync with site content, no orphaned references, no remaining banned price patterns.
5. **`fact-check-gate`** subagent — verifies any claims about SteelR (counts, GA4 IDs, GSC quotas, etc.) match the canonical CLAUDE.md.

Then **sequentially**:

6. **`npm run build`** — confirms the change compiles.
7. **`git status`** — confirms nothing accidentally staged.

## Output

Single block per subagent: PASS / FAIL / WARN with line-level fixes if FAIL.

## Block on push?

If any agent returns FAIL, do not push. Fix, re-run `/preflight`, push only when clean.

## When NOT to use

- Pure infrastructure changes (Vercel env vars, `.gitignore`, build config) that don't touch user-visible content.
- Docs-only changes inside `STATE.md` that don't claim project facts.

## Implementation prompt template

When invoked, dispatch all four subagents in a single message with multiple Agent tool calls (parallel), specifying the changed files in each prompt. Use the diff between `HEAD` and the working tree to scope the reviews. Wait for all four to return, then run `npm run brand-guard` + `npm run build` sequentially.

Report back as a single PASS/FAIL summary table.
