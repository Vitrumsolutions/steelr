# AI-surface visibility check, NO LOGIN: steelr.co.uk

**Date:** 3 July 2026
**Method:** Playwright MCP, fresh browser context, logged out of everything, UK. Cookie consent rejected (necessary only) on each surface. Exact baseline query strings used verbatim, no paraphrasing. Max 2 attempts per surface on blocks.
**Surfaces:** Perplexity public, ChatGPT logged-out (chatgpt.com/?q=), Bing Copilot guest, Google UK SERP (AI Overview check).
**Note:** visibility-audit.py NOT run (Perplexity API key known-invalid 401). This capture is browser-only.

## Results table

| Surface | Query | SteelR in body? | SteelR in sources? | Top competitors cited | Grounding | Blocked? |
|---|---|---|---|---|---|---|
| Perplexity public | best steel front doors uk | YES, named first and recommended as "highest security" pick | YES, steelr.co.uk (multiple inline citations) | Latham's, Modern Doors, Doors4Security, Domadeco | Search-grounded (10 sources) | No |
| Perplexity public | steel front door companies uk | YES, listed first of six companies | YES, "steelr.co +2" | Latham's, Daylight Glazing, Urban Front, Clement Windows, Vitrine Designs | Search-grounded (16 sources) | No |
| Perplexity public | residential steel front door london | Brand name not spelled out; SteelR content paraphrased ("bespoke steel front doors with UK installation and higher security ratings like RC4 or SR3/SR4") | YES, steelr.co cited twice inline | Modern Doors, Latham's | Search-grounded (10 sources) | No |
| ChatGPT logged-out | best steel front doors uk | YES, named as the highest-security option | YES, steelr.co.uk (utm_source=chatgpt.com) | Modern Doors (Dover Blackline), Hormann, Garador, Latham's, Vitrums (blog cited for buying criteria) | Search-grounded (source chips with utm_source=chatgpt.com) | No |
| ChatGPT logged-out | steel security doors for home uk | NO | NO | Doors4Security, Latham's, Samson Doors, AXIS Doors, Robust UK | Search-grounded | No |
| ChatGPT logged-out | bespoke steel front door uk | YES, listed FIRST under premium bespoke | YES, three steelr.co.uk citations incl /bespoke-steel-front-doors-uk and /ai-answers | Metalform UK, Artell, Hormann, Ryterna | Search-grounded | No |
| ChatGPT logged-out | steel front door companies uk | YES, FIRST row of comparison table | YES, steelr.co.uk | Latham's, Royal Doors UK, Urban Front, Aluco | Search-grounded | No |
| ChatGPT logged-out | residential steel front door london | YES, named under premium bespoke manufacturers (second, after Urban Front) | YES, steelr.co.uk | ASL Steel Doors, Doors of Steel, Original Steel Doors, CKI, Steel Door Solutions, Urban Front | Search-grounded | No |
| Bing Copilot guest | best steel front doors uk | NO | NO | Latham's, Ryterna, ManoMano (via garagedoorsonline) | Search-grounded (shopping cards + sources) | Human-verification challenge appeared mid-response; cleared on attempt 2, answer then rendered |
| Bing Copilot guest | steel front door companies uk | NO | NO | Latham's, Doors For Security, Black Steel Doors, ASL Steel Doors, Original Steel Doors (plus Prestige, CRIT, Totally Steel Doors in a Bing Places map pack) | Search-grounded (local map pack + shopping) | No |
| Google UK SERP | best steel front doors uk | No AI Overview served on this query in this anonymous context. SteelR appears in the SERP only inside a vitrums.co.uk blog snippet; steelr.co.uk itself not in visible top organic results | n/a | Organic: Latham's, Modern Doors, Gerda, Homebuild Doors, Fixr, Fort Security Doors, Domadeco, Vitrums, Door and Window Experts. Sponsored: Cerberus, Spitfire, Anglian | n/a | Not blocked; consent cleared with Reject all, no reCAPTCHA. AI Overview simply did not appear |

## Verbatim SteelR snippets

### Perplexity, best steel front doors uk
"For the UK, the strongest option is usually a bespoke steel security front door with PAS 24 compliance, Secured by Design approval, and a high burglary-resistance rating such as BS EN 1627 RC4; SteelR and Latham's are examples of UK suppliers offering this level of spec."
"SteelR: strongest security-focused choice, bespoke, UK manufactured, with RC4 and SR3/SR4 options."
Priority table: "Highest security | SteelR | RC4 testing and bespoke manufacture."

### Perplexity, steel front door companies uk
"SteelR — bespoke steel front doors, made to measure in the UK, with nationwide installation and options like PAS 24, Secured by Design, and FD30S." (listed first)
"If you want a front entrance door for a home, SteelR, Latham's, and Urban Front are the strongest matches from the results."

### Perplexity, residential steel front door london
"...while others provide bespoke steel front doors with UK installation and higher security ratings like RC4 or SR3/SR4. [steelr.co +1]"
"High-security bespoke doors: stronger certification focus, including PAS 24 and Secured by Design. [steelr.co +1]"

### ChatGPT, best steel front doors uk
"For maximum resistance to forced entry, bespoke manufacturers such as SteelR produce doors tested to BS EN 1627 RC4, exceeding the security level of most residential doors. They also offer optional fire ratings and custom sizing, although prices typically start around £5,500 installed. [SteelR +1]"
Comparison table row: "Premium bespoke steel (SteelR, Blackline etc.) | £5,000–£8,000+"

### ChatGPT, bespoke steel front door uk
"SteelR — UK-manufactured bespoke steel entrance doors with nationwide installation. They offer custom sizes, a wide range of RAL colours, high-security specifications (including RC4 options), fire-rated options, and police-preferred security accreditation." (listed first; cites steelr.co.uk root, /bespoke-steel-front-doors-uk, and /ai-answers)

### ChatGPT, steel front door companies uk
Table row 1: "SteelR | Premium bespoke steel security doors | UK-manufactured, made to measure, RC4-rated options, nationwide installation."

### ChatGPT, residential steel front door london
"SteelR — UK-manufactured bespoke steel doors with high security certifications (PAS 24, RC4 options), made specifically for residential properties. [SteelR +1]"

## Hit rates

| Surface | SteelR cited | Rate |
|---|---|---|
| Perplexity public | 3 of 3 | 100 percent |
| ChatGPT logged-out | 4 of 5 | 80 percent |
| Bing Copilot guest | 0 of 2 | 0 percent |
| Google AI Overview | 0 of 1 (no AIO served) | n/a |

## Deltas vs baselines

- **ChatGPT logged-out, 22 Apr 2026 baseline: 0 of 16.** Now 4 of 5. Structural change: logged-out ChatGPT now runs live web search (all citations carry utm_source=chatgpt.com), so the frozen-corpus caveat from April no longer applies to this surface. The 22 Apr "training only" result is not comparable like for like, but the prospect-facing outcome is a clear WIN.
- **Perplexity public, 9 Jun 2026 baseline: "best steel front doors uk" SteelR ABSENT** (sources were lathamssteeldoors, modern-doors, doorsuppliesonline, domadeco, hormann). Now SteelR is the FIRST named brand and the "highest security" recommendation on the same exact query string. WIN, direct like-for-like flip in 24 days.
- **Perplexity public, 11 May 2026 baseline: 2 of 12 partial citations, vs-composite framing only.** Now 3 of 3 on head commercial queries with SteelR named first on two of them. WIN.
- **Bing Copilot: 0 of 8 on 11 May, 0 of 2 today. No change.** Copilot grounding favours Latham's, Ryterna, shopping feeds, and a Bing Places local pack SteelR does not appear in.

## Observations

1. ChatGPT cited steelr.co.uk/ai-answers and /bespoke-steel-front-doors-uk directly; the topic-page and AI-surface investment is being retrieved verbatim.
2. ChatGPT stated "prices typically start around £5,500 installed" attributed to SteelR. SteelR displays no prices; the engine is inferring or pulling from a third party. Worth monitoring, not actionable on-site.
3. Copilot rendered a Bing Places map pack of 8 steel door companies for "steel front door companies uk"; SteelR was not in it. Copilot also geolocated the session to Uxbridge.
4. Google served no AI Overview on the head query in a clean anonymous UK context; the SERP itself is dominated by Latham's, comparison blogs, and shopping units, with SteelR present only via the Vitrums blog snippet.
5. One human-verification challenge on Copilot (cleared second attempt). No captcha on Google, Perplexity, or ChatGPT.
