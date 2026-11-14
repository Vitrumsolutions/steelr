# Panel visibility capture: steelr.co.uk, 14 Nov 2026 (/panel-llms gate, Gerda Collection llms change)

**Role:** visibility-audit-runner, panel member 1 of 4. This is the "before" picture. The staged llms change was NOT live when this was captured.

**Baselines compared:** `20260718-full-visibility-sweep.md` (main checkout, untracked), `20260703-chatgpt-loggedin.md`, `20260703-ai-no-login.md`, `visibility-audit-20260610.md`.

**Method and labels**

- "Organic proxy" = Firecrawl search API, UK location, top 20 (top 10 for the two expansion queries). Same proxy the 18 Jul sweep used. It is a search-API proxy, not live Google rank: no ads, no map pack, no AI Overview. Directional only.
- "ChatGPT logged-in (Temporary Chat)" = owner's Chrome, Plus account, Temporary Chat with Web search, one fresh chat per query, single run each. The baselines used a standard chat on the Free tier, so this is not a like-for-like method. Reason for the switch is in "Contamination" below.
- Exact baseline query strings used verbatim.
- Nothing here is "AI search" unless it is labelled ChatGPT. Organic proxy rows are classic search results.

## Live state before the llms change (HTTPS fetch, 14 Nov 2026)

| URL | Status | Notes |
|---|---|---|
| /gerda-doors | 200 | self canonical, no robots noindex meta |
| /gerda-doors/optima-60 | 200 | self canonical, no robots noindex meta |
| /gerda-doors/thermo-premium-75 | 200 | self canonical, no robots noindex meta |
| /gerda-doors/thermo-prime-75 | 200 | self canonical, no robots noindex meta |
| /llms.txt | 200 | 46,025 chars, 0 mentions of "Gerda" |
| /llms-full.txt | 200 | 342,450 chars, 0 mentions of "Gerda" |
| /sitemap.xml | 200 | 325 URLs (318 on 18 Jul), all 4 Gerda URLs present |

## Core bespoke queries, today vs baseline

| # | Query | Organic proxy today | Organic proxy 18 Jul | ChatGPT logged-in (Temporary Chat) today | ChatGPT logged-in baseline (18 Jul / 3 Jul) |
|---|---|---|---|---|---|
| 1 | best steel front doors uk | steelr.co.uk absent top 20. vitrums.co.uk #6 (blog best-entrance-door-brands-uk-2026, snippet names SteelR) | absent, vitrums ranks | ABSENT. Named: Latham's, Hormann, Gerda (gerdadoors.co.uk/doors/), Fort | Named 2nd, grounded on vitrums.co.uk |
| 2 | steel security doors for home uk | absent | absent | Absent. Latham's, Doors4Security, Samson | Absent |
| 3 | steel doors london | absent | absent | Absent. Black Steel Doors, CKI, Steel Door Solutions, Latham's | Absent |
| 4 | most secure steel front door | absent | absent | Absent. Generic spec answer, links to Metador and Teckentrup | Absent |
| 5 | bespoke steel front door uk | absent top 20 | not in the 18 Jul absence list (implied present, position not recorded) | Named 1st. Cites steelr.co.uk/bespoke-steel-front-doors-uk. Quotes "approximately eight weeks" lead time | Named 1st |
| 6 | steel front door companies uk | absent. gerdadoors.co.uk #8 | absent | Named 1st row. Cites steelr.co.uk/ | Named 1st, SteelR chip |
| 7 | steel front doors for homes uk | absent | absent | Named 4th after Gerda, Latham's, Hormann. Cites steelr.co.uk/ | Named, own chip |
| 8 | residential steel front door london | absent | absent | Named 1st. Cites steelr.co.uk/areas/london | Named 1st (3 Jul) |
| 9 | heritage steel front door uk grade ii listed | #2 /heritage-steel-front-doors-uk (MultiSteel #1) | #1 | not run | not run |
| 10 | rc4 rated steel front door for home uk | #3 steelr.co.uk/ . vitrums.co.uk/steelr #1, vitrums.co.uk/entrance-doors #8 | #2, vitrums #1 | not run | not run |

**ChatGPT logged-in hit rate: 4 of 8 named, all 4 with a first-party steelr.co.uk citation.** 18 Jul: 4 of 8. 3 Jul: 4 of 8.

Across the 8 Temporary Chat answers: vitrums.co.uk appears in the page HTML of 0 answers (18 Jul: 1 of 7 grounded on vitrums). No GBP price sits within 160 characters of the SteelR name in any answer (18 Jul recorded fabricated prices). "Ickenham" appears in 0 answers.

## Contamination finding (affects how far the ChatGPT numbers can be trusted)

- Standard logged-in chat, query 1, memory on: SteelR named 3rd with a steelr.co.uk/ chip, but the answer carried a section headed "My assessment for STEELR" and the words "For your STEELR business". The account knows the user owns SteelR. That answer is not a prospect's view and is excluded from the hit rate.
- Same query in Temporary Chat (labelled "Unpersonalized", "will ignore memory"): SteelR absent.
- The leak is not fully closed by Temporary Chat. The Temporary Chat answer to "gerda doors uk" still said "For STEELR, however, I would investigate..." and asked about buying "wholesale for Vitrums". So the 4 of 8 may be inflated by account context. Treat it as an upper bound until a genuinely logged-out run confirms it.

## What moved

- Query 1 on ChatGPT logged-in: named on 18 Jul, absent today in Temporary Chat. Method changed (memory off), so this may be a method effect rather than a real loss.
- Query 5 on the organic proxy: implied present on 18 Jul, absent top 20 today. Single run on a proxy.
- Vitrums grounding on ChatGPT: 1 of 7 on 18 Jul, 0 of 8 today.
- Fabricated SteelR prices on ChatGPT: present on 18 Jul, none found today.
- Queries 9 and 10 on the organic proxy: each down one place (below the 3-place threshold, so STABLE).
- Everything else: unchanged.

## Pages the surfaces currently lean on

- steelr.co.uk/ (homepage): ChatGPT queries 6 and 7; organic proxy #3 for the RC4 query.
- steelr.co.uk/bespoke-steel-front-doors-uk: ChatGPT query 5.
- steelr.co.uk/areas/london: ChatGPT query 8.
- steelr.co.uk/heritage-steel-front-doors-uk: organic proxy #2.
- vitrums.co.uk/steelr and the vitrums "best entrance door brands" blog: organic proxy for the RC4 query and query 1.

Facts ChatGPT repeats about SteelR in today's answers: RC4 tested single leaf unglazed, PAS 24, SR3 and SR4 upgrades, bespoke, UK made, nationwide survey and installation, lead time of approximately eight weeks. These are the same company-wide attributes carried by the "every door" sentences the staged diff rescopes to "every bespoke door".

## Gerda baseline (pages one hour old)

| Query | Organic proxy, steelr.co.uk | Organic proxy, vitrums.co.uk | Who holds the top |
|---|---|---|---|
| gerda doors uk | absent top 20 | #9 /blog/gerda-doors-review-uk, #18 /gerda | gerdadoors.co.uk #1, #2, #4 |
| gerda optima 60 | absent top 20 | absent | gerdadoors.co.uk/doors/optima-series #1, doorandwindowexperts.co.uk #2 |
| gerda thermo premium 75 | absent top 20 | absent | gerdadoors.co.uk #1, gerda.pl #2 |
| gerda door installer london | absent top 20 | absent | gerdadoors.co.uk/find-a-partner #1, a Southall installer page #3 |

ChatGPT logged-in (Temporary Chat), "gerda doors uk": steelr.co.uk not cited (0 occurrences in page HTML). Every link went to gerdadoors.co.uk. SteelR and Vitrums were mentioned only through the account-context leak described above, not as sources.

Gerda already appears as a peer brand beside SteelR in ChatGPT answers to queries 1 and 7, cited to gerdadoors.co.uk.

## Could not test, and why

- Serper (live Google organic, Maps, Bing): account balance is -8 credits, search endpoint returns HTTP 400. `serper-rank-checker.py` and `visibility-audit.py` were not run, since they would write zeros.
- Perplexity API: 401 "Invalid API key". Perplexity public UI not run.
- ChatGPT logged-out: one attempt through Playwright. The Playwright browser is shared with another session, which navigated the page mid-capture. Result discarded, no further attempts so as not to collide.
- Standard (memory on) logged-in ChatGPT for queries 2 to 8: not run after query 1 showed the owner personalisation.
- Google AI Overview, Bing Copilot, Gemini, Claude: not run.
- Firecrawl returned 429 for a period. Three planned searches were dropped: brand query "steelr", "site:steelr.co.uk gerda" (index check), "gerda thermo prime 75".
- Google Search Console index status for the four Gerda URLs: not checked.
- Every ChatGPT row is a single run. Answers vary run to run.
