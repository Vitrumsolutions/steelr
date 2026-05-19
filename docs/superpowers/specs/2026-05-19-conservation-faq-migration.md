# Conservation-Area FAQ Migration — Spec

> **Status:** Ready for execution. Self-contained handoff for a fresh session. Plan at `docs/superpowers/plans/2026-05-19-conservation-faq-migration-implementation.md`.

## Goal

Migrate the 6 FAQs from the deleted `/blog/conservation-area-door-requirements-uk` blog into the surviving `/blog/steel-doors-conservation-areas-planning-guide` blog. Restore the citation-grade Q&A content that was inadvertently lost when the source blog was 308-redirected.

## Why this matters

The deep-reviewer agent flagged this in the panel-llms gate on 19 May 2026 as a **HIGH severity** finding:

> Conservation-area-door-requirements-uk excerpt removed (diff lines 271-303) but the live URL it redirects to is `/blog/steel-doors-conservation-areas-planning-guide`, whose excerpt is retained. Compare the two: the removed conservation-area-door-requirements-uk excerpt has 5 FAQs (Article 4 enforcement, RAL palette by period, pre-application timing, what happens if you skip approval, like-for-like permitted development) — all of these are quotable AI-citation hooks that are NOT in the retained planning-guide excerpt. By removing the source-blog excerpt and relying on the redirect target alone, the file loses ~600 words of FAQ-format quotable content on the exact topic the new heritage hub is supposed to win.

The panel approved the parent commit on the basis that this migration would be tracked as follow-up work, not lost. This spec is that follow-up.

## Evidence

### Source content (recovered from git history)

The 6 FAQs were committed in `1f75f9a^` at `src/data/blog/posts/conservation-area-door-requirements-uk.ts` lines 130-156. Retrievable verbatim via:

```bash
git show 1f75f9a^:src/data/blog/posts/conservation-area-door-requirements-uk.ts
```

The 6 questions:

1. Do I need planning permission to replace a front door in a conservation area?
2. Can I use a steel door in a conservation area?
3. What colour should I specify for a conservation area door?
4. How long does conservation area approval take?
5. What happens if I replace a door without approval in a conservation area?
6. Does a heritage-style steel door meet modern thermal and security standards?

Each answer is 80-180 words. All six are factually sound (already passed fact-check-gate when originally written). All six are panel-approved as citation-grade content.

### Target blog state

`src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts` is the survivor. It currently covers the planning-permission / Article 4 / permitted-development legal route. Its existing FAQ section (if any) needs inspecting before drafting the migration — there may be overlapping questions that need merging not duplicating.

### Why this is not in the heritage hub

The heritage hub at `/heritage-steel-front-doors-uk` is anchored on **Listed Building Consent** (the legal route for listed buildings, all grades). The conservation FAQs concern **planning permission and Article 4 directions** (the legal route for non-listed buildings inside conservation areas). Different statute, different consent path, different audience. Per the cannibalisation-auditor finding in the same panel: "These are two legally distinct consent paths in UK heritage law (LBC vs planning permission under Article 4). Different legal route, different audience, different query intent. Justified as separate URLs."

The FAQs belong on the planning-guide blog, not the hub.

## Out of scope

- Editing the heritage hub content (it ships per the 411914a spec, separately)
- Editing any other blog
- Adding new FAQs to the planning-guide blog beyond the 6 migrated ones (a future content session can extend; not this work)
- Re-creating the 308 redirect (already in place per commit 1f75f9a)

## Acceptance criteria

- [ ] All 6 FAQs from the source blog appear in `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts`, under a `## Frequently Asked Questions` section
- [ ] No duplicate or near-duplicate FAQ in the surviving blog (i.e. if the planning-guide blog already had an "approval timeline" FAQ, merge with the source content rather than ship both)
- [ ] FAQPage JSON-LD on `/blog/steel-doors-conservation-areas-planning-guide` validates against schema.org. Confirm via reading the page render or running the page through `scripts/blog/llms-excerpt.mjs` extraction logic.
- [ ] `npm run validate-faqs` PASS (or whatever the project's faq-validate command is — confirm in package.json before starting)
- [ ] No FAQ contradicts the heritage hub's content. Cross-reference Listed Building Consent vs Conservation Area planning permission carefully.
- [ ] Build, type-check, lint all pass
- [ ] `npm run brand-guard:staged` PASS
- [ ] llms-full.txt Blog Excerpts section rebuilt via `scripts/blog/backfill-llms-full.mjs`, then panel-llms approved + committed separately

## Reversibility

Cheap. The migration is a single file edit. If the post-migration FAQ set reads awkwardly, revert is one git command.

## Brand guardrails

- No em dashes, no exclamation marks introduced
- No SteelR-attributed prices
- No competitor names by individual brand
- Defensible RAL codes only (FAQ 3 references "Georgian green", "ivory", "sage" qualitatively, plus colour categories — already passed brand-guard when first written)
- Service-life and security claims must match the existing brand voice (see the spec at `docs/superpowers/specs/2026-05-16-heritage-hub-design.md` for the established phrasing on BS EN 1627 RC4 / SR3 / SR4)

## Files in scope

- `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts` — target file, edit
- `public/llms.txt` — confirm the blog still listed (it is, per 1f75f9a)
- `public/llms-full.txt` — rebuilds automatically via `scripts/blog/backfill-llms-full.mjs` after the blog edit

## Reviewer agents to dispatch

1. **Before edit:** Read `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts` in full. List existing FAQs (if any). Identify overlap with the 6 source FAQs.
2. **After edit:** `fact-check-gate` with brief: "Verify the 6 migrated FAQs against project canon and external sources. Specifically check the BS EN 1627 RC4 / SR3 wording matches the brand-voice register, the Article 4 framing is legally accurate, and no claim contradicts the heritage hub at `/heritage-steel-front-doors-uk` (different consent route)."
3. **After edit:** `copy-editor` on the diff. Brief: "Catch any AI tells, em dashes, or weak hedging introduced during the migration. Confirm no banned words."
4. **Before commit:** `verification-runner` for build + type-check + lint + brand-guard pass.

## llms.txt change is panel-gated

After the blog file edit, run `node scripts/blog/backfill-llms-full.mjs` to rebuild the Blog Excerpts section. This will regenerate the planning-guide blog's excerpt with the 6 new FAQs included. The diff to `public/llms-full.txt` will be non-trivial.

**This llms change must go through the panel-llms gate.** Per CLAUDE.md: "Any commit touching `public/llms.txt` or `public/llms-full.txt` is blocked unless `.checks/llms-panel.json` contains a SHA matching the staged content."

Workflow:
1. Commit the blog file edit alone (no llms change in this commit). Pre-commit hook passes.
2. Stage the llms-full.txt diff separately.
3. Run `/panel-llms` skill in Claude Code.
4. User reviews findings.
5. User says "approve" → run `/panel-llms-approve`.
6. Commit the llms change.
7. Push both commits.

## Time estimate

~1 hour. Smallest of the three follow-up specs. Mechanical migration + one review pass + panel gate.

## Out-of-band notes

- The 19 May 2026 panel session is the audit-trail justification for this work. Reference it in the commit body.
- Do not extend this work to migrate FAQs from other deleted blogs without spec authority. Scope is exactly these 6.
