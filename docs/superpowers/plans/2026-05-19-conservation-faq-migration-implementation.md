# Conservation-Area FAQ Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans. Spec at `docs/superpowers/specs/2026-05-19-conservation-faq-migration.md` — read it first.

**Goal:** Restore the 6 citation-grade FAQs lost when `conservation-area-door-requirements-uk` was 308-redirected on 19 May 2026.

**Phases:** Pre-flight → Phase 1 inspect target + recover source → Phase 2 merge + edit → Phase 3 verify + commit blog → Phase 4 llms rebuild + panel-gate + commit + push.

---

## Pre-flight

- [ ] Read `docs/superpowers/specs/2026-05-19-conservation-faq-migration.md` in full.
- [ ] `git status --short` — must be clean.
- [ ] `git pull origin main` to get the latest including 411914a (heritage hub) and 1f75f9a (heritage llms).

---

## Phase 1 — Inspect target + recover source

### Task 1.1: Recover source FAQs

- [ ] Run `git show 1f75f9a^:src/data/blog/posts/conservation-area-door-requirements-uk.ts` and save lines 130-156 (the `## Frequently Asked Questions` section through end-of-content-string) to a scratch file.
- [ ] The 6 questions, for reference:
  - Do I need planning permission to replace a front door in a conservation area?
  - Can I use a steel door in a conservation area?
  - What colour should I specify for a conservation area door?
  - How long does conservation area approval take?
  - What happens if I replace a door without approval in a conservation area?
  - Does a heritage-style steel door meet modern thermal and security standards?

### Task 1.2: Inspect target blog

- [ ] Read `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts` in full.
- [ ] Note the existing structure: H2 sections, any existing FAQ section, total word count, the closing paragraph.
- [ ] If the target already has a `## Frequently Asked Questions` section, list every existing question. Compare to the 6 source questions. Identify duplicates (exact match), near-duplicates (different phrasing same topic), and net-new.

### Task 1.3: Decision point

- [ ] **If the target has no FAQ section:** add one with all 6 source FAQs at the end of the content body, before any closing paragraph.
- [ ] **If the target has overlapping FAQs:** for each duplicate, keep whichever phrasing is more citation-friendly (longer, more inline statute references, more specific numbers). For each near-duplicate, merge into one answer that incorporates both perspectives.
- [ ] **If the target has its own FAQs but none overlap:** append the 6 source FAQs after the existing ones.

### Task 1.4: Phase 1 sign-off stop

- [ ] Present the decision and the proposed merged FAQ list to the user before editing. Stop for confirmation.

---

## Phase 2 — Merge + edit

### Task 2.1: Apply the FAQ edits

- [ ] Edit `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts`. Add the 6 FAQs (or the merged subset from Phase 1 decision) under `## Frequently Asked Questions`.
- [ ] FAQ format must match the project convention. The publish-post.mjs + FAQ extractor accept three formats:
  1. `### Question?` heading + blank line + answer paragraph (most common)
  2. `**Question?**` bold + newline + answer paragraph
  3. `**Question?** Answer` inline
  Use format 1.
- [ ] Confirm the answers preserve the existing apostrophe convention (curly or straight) used elsewhere in the file.
- [ ] Do not introduce em dashes or exclamation marks.

### Task 2.2: Cross-reference against heritage hub

- [ ] Open `src/app/heritage-steel-front-doors-uk/page.tsx`. Read the 6 FAQs there.
- [ ] Confirm: planning-guide blog FAQs concern **Article 4 / Conservation Area planning permission**. Heritage hub FAQs concern **Listed Building Consent**. The two should be complementary, not contradictory.
- [ ] If any planning-guide FAQ now reads like it overlaps the LBC heritage-hub framing (e.g. accidentally talks about listed buildings when the source question was about conservation areas), revise to keep the legal route clear.

### Task 2.3: Phase 2 sign-off stop

- [ ] Show the final edited blog content to the user. Get sign-off before verification.

---

## Phase 3 — Verify + commit blog

### Task 3.1: Run reviewer agents

- [ ] Dispatch `fact-check-gate`. Brief: "Verify the 6 migrated FAQs in `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts` against project CLAUDE.md and external sources. Specifically check BS EN 1627 RC4 / SR3 wording, Article 4 framing legal accuracy, no contradiction with the heritage hub at `/heritage-steel-front-doors-uk` which covers a different consent route (Listed Building Consent)."
- [ ] Dispatch `copy-editor` on the diff. Brief: "Catch AI tells, em dashes, weak hedging, banned words."
- [ ] Wait for both. Address any findings.

### Task 3.2: Build + brand-guard

- [ ] `npm run build` clean.
- [ ] `npm run brand-guard:staged` PASS after `git add src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts`.
- [ ] `npm run validate-faqs` (or whichever command is in package.json) PASS.

### Task 3.3: Commit blog edit alone

- [ ] **Important:** commit the blog file edit WITHOUT the llms.txt rebuild. The llms change is a separate panel-gated commit.
- [ ] Commit message body should reference: "Restores 6 citation-grade FAQs lost when conservation-area-door-requirements-uk was 308-redirected on 19 May 2026. Per deep-reviewer HIGH finding in panel-llms gate of commit 1f75f9a. Source FAQs recovered from git history at 1f75f9a^."

### Task 3.4: Phase 3 sign-off stop

- [ ] Do not push yet. Wait until the llms commit (Phase 4) is also ready.

---

## Phase 4 — llms rebuild + panel-gate + commit + push

### Task 4.1: Rebuild llms-full.txt Blog Excerpts

- [ ] Run `node scripts/blog/backfill-llms-full.mjs`. Confirm the planning-guide blog excerpt now includes the 6 new FAQs.
- [ ] Confirm no other blog's excerpt has changed (the script regenerates all 37 entries, but the diff should be limited to the planning-guide blog).

### Task 4.2: Stage llms changes

- [ ] `git add public/llms-full.txt`. (llms.txt is unlikely to change unless the script also updates it; if so, add that too.)

### Task 4.3: Run /panel-llms

- [ ] Invoke the `/panel-llms` skill in Claude Code.
- [ ] Four agents run in parallel (visibility-audit-runner, cannibalisation-auditor, research-scout, deep-reviewer). Wait for all to return.
- [ ] Synthesise the findings into a single report.
- [ ] Present to user with the protocol-required closing line.

### Task 4.4: Wait for user approval

- [ ] User reviews findings and types explicit approval ("approve", "ok proceed", "go").
- [ ] Do not write the marker file based on agent output alone. Wait for user message.

### Task 4.5: Run /panel-llms-approve

- [ ] Once user approves, invoke `/panel-llms-approve`. Marker file written with SHA bound to the staged content.

### Task 4.6: Commit llms change

- [ ] Commit message: `seo(llms): rebuild Blog Excerpts after conservation-area FAQ migration`
- [ ] Body references the panel approval and links back to the Phase 3 blog commit.

### Task 4.7: Push + verify live

- [ ] `git push origin main`.
- [ ] Wait for Vercel deploy. Poll `curl -s -o /dev/null -w "%{http_code}\n" https://steelr.co.uk/blog/steel-doors-conservation-areas-planning-guide` until 200.
- [ ] Verify FAQ section appears on the live page.
- [ ] Verify llms-full.txt: `curl -s "https://steelr.co.uk/llms-full.txt?cb=$RANDOM" | grep -A1 "steel-doors-conservation-areas-planning-guide" | head -5` shows the rebuilt excerpt with the 6 FAQs.

### Task 4.8: Cleanup

- [ ] Update STATE.md to remove this work from the pending-handoff section.

---

## Roll-back protocol

If the live page shows broken FAQ rendering or if the FAQPage JSON-LD fails Google's Rich Results Test:

1. `git revert` the blog commit + the llms commit.
2. Push.
3. File a follow-up spec with the specific blocker.
