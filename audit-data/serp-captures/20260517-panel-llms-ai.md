# Panel-llms live AI baseline — 17 May 2026

Captured during `/panel-llms` run on staged llms.txt + llms-full.txt diff (commits in-flight, not yet pushed at time of capture). Live capture via Claude_in_Chrome against user's logged-in browser session in the main session (research-scout subagent sandbox could not reach Perplexity/ChatGPT/Gemini runtimes).

**Purpose:** baseline AI citation surface BEFORE the staged llms diff lands, to give the user a clean pre/post pair for re-measurement in 14-30 days.

---

## Perplexity — `steel vs composite front door uk` (depersonalised)

**SteelR cited: NO (page 1 sources).**

Answer summary: "For a UK front door, steel usually wins on security and brute-force resistance, while composite usually wins on warmth, aesthetics, and lower maintenance."

Page-1 sources cited (in order):
1. `jkdoors.co.uk/blog/steel-vs-aluminium-front-doors-which-should-you-choose-your-property-uk-2025/`
2. `edgebp.co.uk/composite-vs-pvc-vs-steel-alu/`
3. `forums.moneysavingexpert.com/discussion/5676837/which-is-most-secure-composite-or-metal-door`
4. `facebook.com/Fbsdoors/videos/...`
5. `doorsforsecurity.co.uk/blog/post/differences-between-a-steel-door-and-a-composite-timber-or-upvc-door`

**Interpretation:** SteelR's `/steel-front-door-vs-composite` page has been restructured today (commit `94f9c79` ~12h ago) but Perplexity hasn't re-crawled. The staged llms-full.txt extract refresh would amplify the new content to Perplexity's discovery feed and accelerate re-indexing.

---

## Other engines

ChatGPT-with-Search, Gemini, Google AI Mode not re-tested in this run. Earlier today's session captured ChatGPT-with-Search on 3 queries (`bespoke steel front door uk`, `luxury bespoke steel front door uk`, `steel front door for a grade ii listed property`) — see CLAUDE.md / session transcript for results.

Free-tier ChatGPT throttling makes more queries today risky. Defer to next session for ChatGPT + Gemini sweep.

---

## Re-measurement plan

Re-pull `steel vs composite front door uk` on Perplexity, ChatGPT-with-Search and Gemini in **30 May 2026** (13 days post-deploy). Compare cited-source list against this baseline. Expected outcome: SteelR enters Perplexity page-1 sources via the rewritten llms-full extract + the restructured live page.

If SteelR enters citation on Perplexity but not on ChatGPT-with-Search after 30 days, that's a Bing-index lag signal. If still absent on both after 60 days, the restructure failed — revisit format or content.
