# llms-full.txt Topic-Entry Restructure — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans. Spec at `docs/superpowers/specs/2026-05-19-llms-topic-restructure.md` — read it first.

**Goal:** Add 3-4 Q&A pairs (80-180 words per answer) above the existing prose for every topic-hub entry in `public/llms-full.txt`. Four panel-gated commits, grouped by topical theme to bound cache-disruption risk per commit.

**Phases:** Pre-flight → Commit 1 Security ladder → Commit 2 Performance + regulatory → Commit 3 Category + comparison → Commit 4 Category language.

User sign-off between each commit.

---

## Pre-flight (do not skip)

- [ ] Read `docs/superpowers/specs/2026-05-19-llms-topic-restructure.md` in full.
- [ ] `git status --short` clean. `git pull origin main`.
- [ ] Read the current state of each topic entry in `public/llms-full.txt` (15 entries at lines 787-879 per the spec's inventory). Note the existing word count, statute references, and Lighter / heavier register so the Q&A you draft matches.
- [ ] Read each parent page's FAQPage JSON-LD: open the corresponding `.tsx` file and locate the `faqs = [...]` array. Confirm the on-page FAQs match what you're about to lift into llms-full.txt.
- [ ] Confirm `.checks/llms-panel.json` does not exist (or is invalidated). The marker is per-content-SHA so it will need to be regenerated per commit.

---

## Commit 1 — Security ladder (4 entries)

**Entries:** `/bs-en-1627-rc4-residential-steel-door`, `/sr3-residential-steel-door`, `/sr4-residential-steel-door`, plus add `/sr3-vs-sr4-residential-steel-doors-uk` as a new entry.

### Task 1.1: Read parent pages

- [ ] Read `src/app/bs-en-1627-rc4-residential-steel-door/page.tsx` — lift its FAQ array.
- [ ] Read `src/app/sr3-residential-steel-door/page.tsx` — lift its FAQ array.
- [ ] Read `src/app/sr4-residential-steel-door/page.tsx` — lift its FAQ array.
- [ ] Read `src/app/sr3-vs-sr4-residential-steel-doors-uk/page.tsx` — lift its FAQ array. This entry is new to llms-full.txt and needs a full entry, not just Q&A injection.

### Task 1.2: Draft Q&A blocks

- [ ] For each of the 4 entries, draft 3-4 Q&A pairs in this format:

  ```
  **Q: <question lifted verbatim from page FAQ>**
  
  A: <100-150 word answer, statute references inline, terminating in a specific takeaway>
  ```

- [ ] Insert above the existing prose. Add a blank line separator. Existing prose stays as-is.
- [ ] For the new `/sr3-vs-sr4-residential-steel-doors-uk` entry, draft from scratch following the pattern of an existing entry. Include URL line + 2-3 paragraphs of prose + 3-4 Q&A pairs.

### Task 1.3: Verify per-entry

- [ ] Word count per answer: 80-180 (the Princeton GEO range)
- [ ] Statute references inline: BS EN 1627:2011, LPS 1175 Issue 8, certification body names verbatim
- [ ] No em dashes, no exclamations, no banned words, no SteelR-attributed prices, no individual competitor names

### Task 1.4: Run reviewer agents

- [ ] `fact-check-gate`. Brief: "Verify the 4 new/modified topic entries in llms-full.txt for the security-ladder cluster. Specifically check certification body names, statute references, scheme version numbers, and consistency with parent pages."
- [ ] `copy-editor` on diff.

### Task 1.5: Stage + run /panel-llms

- [ ] `git add public/llms-full.txt`
- [ ] Invoke `/panel-llms` skill. Wait for all 4 agents.
- [ ] Synthesize + present findings to user. Use the protocol-required closing line.

### Task 1.6: Wait for user approval

- [ ] User reviews. User types explicit approval.
- [ ] Run `/panel-llms-approve`.

### Task 1.7: Commit + sign-off stop

- [ ] Commit message: `seo(llms): add Q&A blocks to security-ladder hub entries (RC4 / SR3 / SR4 / SR3 vs SR4)`
- [ ] Body: cite the research-scout finding, list the 4 entries restructured, note the panel approval timestamp.
- [ ] Do not push yet. Wait for user sign-off on the commit before moving to Commit 2.

---

## Commit 2 — Performance + regulatory (5 entries)

**Entries:** `/pas-24-steel-entrance-door`, `/secured-by-design-steel-front-door`, `/thermally-broken-steel-front-door`, `/fire-rated-fd30-front-door`, `/lps-1673-attack-resistant-steel-door`.

### Task 2.1: Read parent pages

- [ ] Same procedure as Task 1.1 for each of the 5 entries.

### Task 2.2: Draft Q&A blocks

- [ ] Same format as Task 1.2.

### Task 2.3: Verify, dispatch reviewers, stage, panel, approve, commit

- [ ] Same procedure as Tasks 1.3 through 1.7.
- [ ] Commit message: `seo(llms): add Q&A blocks to regulatory + performance hub entries (PAS 24 / SBD / Thermally Broken / FD30 / LPS 1673)`

### Task 2.4: Phase sign-off stop

- [ ] Wait for user sign-off before moving to Commit 3.

---

## Commit 3 — Category + comparison (4 entries)

**Entries:** `/bespoke-steel-front-doors-uk`, `/steel-front-door-vs-composite`, `/uk-steel-doors-vs-imported`, `/steel-front-door-cost-uk`.

### Task 3.1: Read parent pages

- [ ] Same procedure.

### Task 3.2: Special handling for `/steel-front-door-vs-composite`

- [ ] This entry has already been restructured once (16 May 2026) and is currently the strongest AI-citation surface on the site (Perplexity 4x inline citation on `composite vs steel doors UK` verified 17 May). Do not over-edit.
- [ ] Add Q&A pairs only if the existing prose does not already contain extractable Q&A structure. If the existing format is winning, leave it.
- [ ] If you do add Q&A, draw exclusively from the parent page's FAQPage JSON-LD with zero paraphrasing — preserve the proven format.

### Task 3.3: Special handling for `/steel-front-door-cost-uk`

- [ ] CLAUDE.md brand policy: no displayed prices on cost-page. The Q&A must respect this — no "£X to £Y" ranges.
- [ ] The Q&A must talk about cost factors (size, hardware, glazing, finish, lead time, installation access) not numbers.

### Task 3.4: Verify, dispatch reviewers, stage, panel, approve, commit

- [ ] Same procedure.
- [ ] Commit message: `seo(llms): add Q&A blocks to category + comparison hub entries (Bespoke / vs-Composite / vs-Imported / Cost)`

### Task 3.5: Phase sign-off stop

- [ ] Wait for user sign-off before moving to Commit 4.

---

## Commit 4 — Category language (3 entries)

**Entries:** `/luxury-steel-entrance-door-london`, `/luxury-steel-front-doors-uk`, `/heritage-steel-front-doors-uk`.

### Task 4.1: Read parent pages

- [ ] Same procedure.

### Task 4.2: Special handling for `/heritage-steel-front-doors-uk`

- [ ] This entry was added 19 May 2026 (commit 1f75f9a) with prose only. The panel-llms gate at that time explicitly deferred the Q&A addition as out-of-scope. This commit is the work that closes that deferral.
- [ ] Source the Q&A from the parent page's 6 FAQs:
  1. Is a steel door allowed on a Grade II listed building?
  2. What is the difference between Listed Building Consent and Conservation Area planning permission?
  3. How long does Listed Building Consent take and what does it cost?
  4. Can a steel door visually match my original Victorian, Georgian or Edwardian timber door?
  5. What if my property is in a Crittall-original or Arts and Crafts context?
  6. Which UK home insurers recognise SR3 certification on heritage properties?
- [ ] Pick 3-4 of the 6 (highest commercial-intent first: Q1, Q2, Q3 are the priority). Lift the answers verbatim.

### Task 4.3: Special handling for `/luxury-steel-entrance-door-london`

- [ ] Lift from parent page FAQPage JSON-LD if exists; otherwise paraphrase from page body.

### Task 4.4: Special handling for `/luxury-steel-front-doors-uk`

- [ ] Same.

### Task 4.5: Verify, dispatch reviewers, stage, panel, approve, commit

- [ ] Same procedure.
- [ ] Commit message: `seo(llms): add Q&A blocks to category-language hub entries (Luxury / Luxury London / Heritage)`

### Task 4.6: Final phase sign-off

- [ ] All 4 commits ready. Wait for user final sign-off.

---

## Push + verify

### Task 5.1: Push

- [ ] `git push origin main`. All 4 commits in order.

### Task 5.2: Verify live

- [ ] Poll `curl -s "https://steelr.co.uk/llms-full.txt?cb=$RANDOM" | grep -c "^\*\*Q:"` until the count reflects the new Q&A blocks. Approximate target: 45-60 new `**Q:**` matches across the 15-16 entries (3-4 per entry).
- [ ] Spot-check 3 entries against the live file. Confirm Q&A renders correctly.

### Task 5.3: Indexing push

- [ ] IndexNow: `node scripts/bing/indexnow-submit.mjs https://steelr.co.uk/llms-full.txt`
- [ ] Note: the GSC Indexing API does not index llms-full.txt directly. The AI engines that crawl it (ChatGPT-with-Search via Bing, Perplexity, Google AI Mode) pick it up via their own crawl schedules. IndexNow pushes Bing, which is the primary surface for ChatGPT.

### Task 5.4: Schedule re-measurement

- [ ] Update STATE.md with a re-measurement reminder for 2 June 2026 (14 days post-deploy). The re-measurement re-pulls the 12 default panel-llms queries and compares citation density against the pre-fix baseline at `audit-data/serp-captures/20260511-chatgpt-gemini-verified.md`.

---

## Roll-back protocol

If after deploy any of the four commits causes a measurable regression on AI citation rate (re-pull the panel-llms 12 queries; if SteelR loses citation on a query where it was cited pre-fix, that's a regression):

1. `git revert <commit-sha>` for the offending commit only.
2. Push.
3. The 4-commit structure is exactly so each can revert independently without losing the others.
4. File a follow-up spec for the specific format issue.

Do not revert all four. Each commit is independent. If commit 1 regresses but commits 2-4 hold, revert only commit 1.

---

## Stopping points

If the session runs out of energy or time:

- After Commit 1: 4 entries restructured. Acceptable partial state. STATE.md should note "3 more commits pending."
- After Commit 2: 9 entries restructured. Acceptable.
- After Commit 3: 13 entries restructured. Acceptable.
- After Commit 4: complete.

If stopping mid-commit (i.e. some entries in the new format, some not, within the same group), do not commit. Revert to a clean state and stop at the previous commit boundary. Partial within-commit inconsistency is not acceptable.
