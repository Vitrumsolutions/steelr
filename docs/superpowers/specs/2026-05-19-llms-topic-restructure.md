# llms-full.txt Topic-Entry Restructure — Spec

> **Status:** Ready for execution. Self-contained handoff for a fresh session. Plan at `docs/superpowers/plans/2026-05-19-llms-topic-restructure-implementation.md`.

## Goal

Add an extractable Q&A block (3-4 pairs, 80-180 words per answer) above the existing prose paragraphs of every topic-hub entry in `public/llms-full.txt`. Match the format that research-scout verified wins AI citation on the wider UK construction / heritage category.

15 topic-hub entries in scope. The work is high leverage — every entry compounds on top of existing on-page FAQPage JSON-LD by giving AI engines a denser citation surface inside the llms-full.txt artefact that ChatGPT-with-Search, Perplexity and Google AI Mode prefer.

## Why this matters

The research-scout agent flagged this as a [REASONED] recommendation in the panel-llms gate on 19 May 2026 for the heritage hub entry:

> Top-cited pages on these query clusters are paragraph-led, with definitional framing and inline statute/scheme references. Cited passage length: 80-180 words per surfaced answer. AI engines pull a discrete proposition + qualifier + named statute. Single paragraphs of ~100 words win over 5-paragraph blocks because the engine extracts a self-contained chunk. Add 3-4 explicit Q&A pairs above the prose, mirroring the existing Blog Excerpts FAQ pattern.

The recommendation was held for the heritage commit specifically because applying it only to the heritage entry would create inconsistency with the other 14 hub entries. Restructuring all 15 in one coordinated piece of work gets the format benefit across the entire AI citation surface, not just one page.

Each Q&A pair is a self-contained citation hook. ChatGPT-with-Search currently cites SteelR on `composite vs steel doors UK` with inline citation density of 4 references per response (verified 17 May 2026 capture, post the 16 May vs-composite restructure). Replicating that citation density across SR3, SR4, PAS 24, SBD, thermally-broken, FD30, LPS 1673, luxury, heritage, RC4, vs-composite, vs-imported, and cost is the unlock.

## Evidence

### research-scout citation-format intelligence (19 May 2026)

Top-cited UK heritage / Grade II / conservation pages on AI surfaces:

- [Historic England: I Want to Alter a Door](https://historicengland.org.uk/advice/your-home/improvement/door/) — paragraph-led with inline statute names
- [Sashwindows London Grade II guide](https://sashwindows.london/news/changing-a-grade-2-listed-building-what-you-need-to-know) — paragraph + statute-named, top-cited
- [Wandsworth Council FAQ](https://www.wandsworth.gov.uk/planning-and-building-control/conservation-and-urban-design/conservation-areas/conservation-areas-faq/) — Q&A format on Article 4

The Wandsworth Council FAQ format is the directly applicable pattern: each Q is a query an AI engine receives verbatim, each A is a self-contained 100-150 word answer with named statute / scheme inline.

### What we already have

- 6-question FAQPage JSON-LD on most hub pages (page-level, crawled by Google for Rich Results, but the llms-full.txt artefact does not currently include them)
- The Blog Excerpts section of llms-full.txt does include FAQ blocks per blog post — proven citation pattern, currently active on 37 blogs

### What's missing

The 15 topic-hub entries in llms-full.txt are paragraph-only. AI engines that retrieve via llms-full.txt see no Q&A scaffolding for hub content. That is the gap this spec closes.

### Citation map prior

- ChatGPT-with-Search citing SteelR on 5/7 premium-intent queries (11 May 2026 capture)
- Perplexity citing SteelR 4x inline on `composite vs steel doors UK` (17 May 2026 capture, post llms-full.txt restructure on that single entry)
- Gemini 0/3 (different grounding, different blocker — separate spec needed for Gemini)
- Google AI Mode citing #1 on `best UK bespoke steel front door manufacturer` (17 May 2026 capture)

Adding Q&A blocks targets the AI surfaces SteelR already wins on (ChatGPT-with-Search, Perplexity, Google AI Mode), not Gemini. Gemini needs domain-authority work, not on-site content restructuring.

## Topic entries in scope (15)

Inventoried from `public/llms-full.txt` on 19 May 2026:

| # | Line | URL |
|---|---|---|
| 1 | 787 | `/bespoke-steel-front-doors-uk` Central Hub |
| 2 | 794 | `/bs-en-1627-rc4-residential-steel-door` Standard Tier |
| 3 | 799 | `/sr3-residential-steel-door` Enhanced Tier |
| 4 | 805 | `/sr4-residential-steel-door` Commercial-Grade Tier |
| 5 | 811 | `/pas-24-steel-entrance-door` Approved Doc Q |
| 6 | 816 | `/secured-by-design-steel-front-door` Police Preferred |
| 7 | 821 | `/thermally-broken-steel-front-door` U-Values |
| 8 | 826 | `/fire-rated-fd30-front-door` Flats / HMOs / New Builds |
| 9 | 831 | `/lps-1673-attack-resistant-steel-door` Beyond Forced Entry |
| 10 | 836 | `/steel-front-door-vs-composite` Multi-Material Comparison |
| 11 | 849 | `/uk-steel-doors-vs-imported` |
| 12 | 854 | `/luxury-steel-entrance-door-london` |
| 13 | 859 | `/luxury-steel-front-doors-uk` Specification Tier Reference |
| 14 | 866 | `/heritage-steel-front-doors-uk` Listed Building Consent Reference |
| 15 | 879 | `/steel-front-door-cost-uk` |

Note: `/sr3-vs-sr4-residential-steel-doors-uk` is NOT currently in llms-full.txt as a standalone entry. Listed in llms.txt under Topic and Comparison Guides only. Adding it to llms-full.txt as a 16th entry is in scope of this spec.

## Out of scope

- Restructuring the Blog Excerpts section (already in good shape, proven format)
- Editing the page-level FAQPage JSON-LD on any hub (separate work)
- llms.txt (the short summary file) — its bulleted topic list is fine as-is
- Gemini-specific outreach or domain-authority work
- Migrating area-page entries to Q&A format (areas are categorically different content; not in scope)

## Acceptance criteria

- [ ] Each of the 15 (or 16 incl. sr3-vs-sr4) topic entries has 3-4 Q&A pairs added above the existing prose
- [ ] Each Q&A pair is 80-180 words per answer (Princeton GEO optimal citation range)
- [ ] Each Q lifts a real query a UK customer would ask. No marketing copy disguised as a question.
- [ ] Each A inlines the relevant statute, scheme, certification body or named standard verbatim (BS EN 1627:2011 RC4, LPS 1175 SR3, PAS 24:2022, FD30S, Secured by Design, Approved Document Q, Planning (Listed Buildings and Conservation Areas) Act 1990, etc.)
- [ ] No new spec claim introduced beyond what's already on the parent page (the Q&A pairs draw from the page's FAQPage JSON-LD where it exists, otherwise paraphrase the page body)
- [ ] No em dashes, no exclamation marks, no banned words applied to SteelR, no SteelR-attributed prices, no competitor names by individual brand
- [ ] llms.txt unchanged (only llms-full.txt is touched by this work)
- [ ] Build, type-check, lint all pass
- [ ] `npm run brand-guard:staged` PASS
- [ ] panel-llms gate approved
- [ ] Live verification: at least 3 entries spot-checked against `https://steelr.co.uk/llms-full.txt` for correct rendering

## Reversibility

Medium-to-high risk class. llms-full.txt is the strongest AI citation surface; a poorly-executed restructure could disrupt the cache that ChatGPT, Perplexity and Google AI Mode have built on the current content. Per CLAUDE.md: "even factually-correct fixes can disrupt AI engine cache and cost ranking positions."

Mitigations:

- Ship in 3-4 separate panel-gated commits, not one monster commit. Group entries by topical theme.
- Suggested grouping:
  - **Commit 1:** Security ladder (RC4, SR3, SR4, sr3-vs-sr4) — 4 entries
  - **Commit 2:** Performance and regulatory (PAS 24, SBD, Thermally Broken, FD30, LPS 1673) — 5 entries
  - **Commit 3:** Category and Comparison (Bespoke Hub, vs-Composite, vs-Imported, Cost) — 4 entries
  - **Commit 4:** Category language (Luxury, Luxury London, Heritage) — 3 entries
- Each commit goes through `/panel-llms` + user approval + `/panel-llms-approve`. Four panel cycles total.
- If any commit causes a regression on the citation map (measured 7-14 days later), revert that specific commit and re-plan.

## Brand guardrails

- The Q&A must read as a manufacturer-led specialist answer, not a marketing pitch.
- Statute references inline. Acronyms expanded on first mention per entry, then abbreviated.
- No "we are the best" claims. Show, do not tell.
- Tone matches the existing prose in the same entry. If the existing prose is dense and technical, the Q&A must be too. If the existing prose is more accessible, the Q&A matches that register.

## Sources for Q&A content

For each entry, the Q&A pairs draw from:

1. **First priority:** the parent page's FAQPage JSON-LD if it exists. The questions there are already brand-approved and AI-citation-tested.
2. **Second priority:** Top user queries from `audit-data/serp-captures/*.md` capture files. These are the actual queries ChatGPT-with-Search and Perplexity surface on these intents.
3. **Third priority:** Paraphrase from the parent page's body content into new Q&A pairs where the FAQ section is thin.

Never invent a Q&A pair from external research without checking against the parent page. The llms-full.txt is the citation surface, but the parent page is the authority anchor — they must be consistent.

## Files in scope

- `public/llms-full.txt` — primary edit target
- Optionally `public/llms.txt` — confirm the bulleted topic list does not need updating; do not edit unless the topic page list changes (it should not in this spec)

## Reviewer agents to dispatch (per commit)

1. **Before edit per entry:** Read the parent page's FAQPage JSON-LD. Confirm the Q&A pairs you draft align.
2. **After edits:** `fact-check-gate` with brief: "Verify every spec claim in the new Q&A blocks against project CLAUDE.md and the parent page content. Specifically check certification bodies, scheme names, statute references, U-value claims if any, service life claims if any."
3. **After edits:** `copy-editor` on the diff. Brief: "Confirm tone matches the existing entry's register. Catch em dashes, exclamations, banned words, weak hedging."
4. **Mandatory per commit:** `/panel-llms` gate.

## Time estimate

2-3 hours across 4 commit cycles. Roughly 30-45 minutes per commit including panel-llms run (each panel run is ~15-20 minutes).

If a single dedicated session can carry the full scope, do it in one session with sign-off between commits. If energy fades, stop after Commit 1 or 2 and ship the rest in a follow-up session. Partial completion is acceptable; partial inconsistency is not (i.e. do not stop with one entry in the new format and the other 14 in the old).

## Measurement protocol

Pre-fix baseline lives in:
- `audit-data/serp-captures/20260511-chatgpt-gemini-verified.md`
- `audit-data/serp-captures/20260517-bing-and-ai-engine-coverage.md`
- `audit-data/serp-captures/20260519-peer-vs-peer-audit.md`

Re-measure 14-30 days post-deploy. The expectation, per the 17 May Perplexity precedent on `/steel-front-door-vs-composite`, is that Perplexity citation density on the relevant queries should improve materially within 7-14 days; ChatGPT-with-Search citation rate should hold or improve; Google AI Mode should hold or improve.

Re-pull the same panel-llms 12 default queries from the original spec at `.claude/commands/panel-llms.md` for the comparison run.

## Out-of-band notes

- This is the most architecturally consequential of the three follow-up specs because it touches the highest-traffic AI surface. Treat the panel-llms gate seriously per commit. Do not bypass.
- The first commit (security ladder) is the lowest-risk because the page-level FAQPage JSON-LD on those pages is already strong; the Q&A migration is essentially a copy-format conversion. Do this commit first to build pattern confidence before moving to the more bespoke entries (heritage, luxury, cost).
- If at any point the user feels the new format reads weaker than the prose-only version, stop. The previous format has demonstrated citation results. Do not ship a regression.
