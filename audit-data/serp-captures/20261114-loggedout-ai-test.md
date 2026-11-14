# Logged-out AI answer test, 14 Nov 2026 (about 20:05 to 21:50 UK)

Owner instruction: "do searches in ai without logging in for true findings". Every row below was run in a clean Playwright browser profile with no account signed in. Logged-out state was confirmed by a visible "Log in" or "Sign in" control. Answers were localised to the machine's IP (Hillingdon / Ickenham), so local listings may differ elsewhere. The site was serving the pre-rewrite ratings post throughout (rewrite committed locally, not pushed).

Queries: Q1 "difference between SR and RC security ratings front door", Q2 "is SR3 the same as RC3", Q3 "UK-made vs imported steel front doors", Q4 "best bespoke steel front door manufacturer UK", Q5 "SR3 vs SR4 difference", Q6 "PAS 24 vs SR3 explained". ChatGPT also ran Q7 to Q13 of the panel set.

## Results by engine

| Engine (logged out) | Queries answered | SteelR cited or named | SR versus RC treatment |
|---|---|---|---|
| ChatGPT, web search on | 13 of 15 (browser froze on Q14) | 6 of 13: Q3, Q4 (named first), Q7 (named first), Q8 (named first), Q9 (map listing, first), Q13 | Correct on Q1 and Q2: separate schemes, "SR3 and RC3 are not the same" |
| DuckDuckGo Search Assist | 6 of 6 | Assist cites steelr.co.uk on Q1, Q2, Q3, Q6. Organic position: Q1 #1, Q2 #1, Q3 #3, Q4 #5, Q5 #2, Q6 #1 | Correct on Q1 and Q2. A variant, "is SR3 the same as RC3 door security rating", answered "Yes, SR3 and RC3 refer to the same level" |
| Google AI Mode | 6 of 6 | steelr.co.uk shown as a source on Q2 and Q6; Q3 repeats the 8 week and 12 to 20 week figures | WRONG on Q1 ("no functional or technical difference ... under BS EN 1627:2011") and Q2 ("Yes, SR3 and RC3 represent equivalent levels"), with steelr.co.uk shown as a source on Q2. Q5 answered about a video game |
| Gemini | 3 of 3 (Q2, Q3, Q4) | Named on Q3. Not named on Q4 | Q2 answered about software release versions |
| Perplexity | 0 | Not tested | Account wall when logged out: "Sign up and repeat your request." |
| Microsoft Copilot app | 0 | Not tested | Redirects to a sign-in page when logged out |
| Bing Copilot Search | 0 | Not tested | Page rendered no answer in the clean browser (two attempts) |

## Wrong or sensitive facts seen

- Google AI Mode still repeats the old "SR3 and RC3 are the same" wording and shows steelr.co.uk as a source. The corrected FAQ answer went live at 18:59 UK the same day; the engine has not picked it up.
- ChatGPT showed "Ickenham, Uxbridge" for SteelR in three answers (Q4, Q7, Q9), taken from the Google Maps listing. The response data carried a Maps directions link whose text includes a full street address and postcode. This is the known Business Profile address trade-off; no site page carries the address.
- No answer described SteelR as an importer.

## Not measured

- Google and Bing organic positions logged out: two scripted captures returned zero result links on every query, so no figure is reported.
- Perplexity, Copilot app, Bing Copilot Search: see table.
- Claude: needs an account.
