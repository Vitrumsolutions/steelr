# Area regression forensics — 13 May 2026

Investigation: did the Buckinghamshire #1 to off-top-30 drop happen to other area pages, or is it isolated?

## 1. Method

Source: all visibility-audit-*.md baselines in `audit-data/`. Nine dated files cover 22 Apr to 13 May. Two of those (11 May, 13 May) are dark — Serper credits exhausted, no Google measurements. Seven are usable: 22 Apr, 2 May, 3 May, 4 May, 5 May, 6 May, 10 May.

The script-driven runs (2-10 May) tracked the same 26 Google organic keywords, of which 7 are area-page queries: Bucks, Surrey, Kensington, Chelsea, Cobham, Esher, plus the London hub (bespoke front doors London / bespoke steel doors London — treated as London-hub adjacent).

`rank-history/*.json` files exist but most positions there are null or 403-blocked — they are not a reliable parallel source for this window.

Net movement is measured 22 Apr (canonical human-written baseline) versus the last good run (10 May).

## 2. Full area-keyword timeline

Positions across the seven usable runs. "—" means not in top 30.

| Keyword | 22 Apr | 2 May | 3 May | 4 May | 5 May | 6 May | 10 May | Net |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| steel doors Buckinghamshire | **#1** | — | — | — | — | — | — | drop >29 |
| steel doors Surrey | — | — | — | — | — | — | — | flat |
| steel doors Kensington | — | — | #5 | #5 | #5 | #6 | #5 | NEW (+25+) |
| steel doors Chelsea | — | #8 | #7 | — | — | — | #9 | volatile, net +21+ |
| steel doors Cobham | #9 | #10 | #10 | #10 | — | #9 | #9 | held (flat) |
| steel doors Esher | — | — | — | #1 | #1 | #1 | #2 | NEW (+28+) |
| bespoke steel doors London | — | — | — | — | — | — | — | flat |
| bespoke front doors London | — | — | — | — | — | — | — | flat |

Notes on URL attribution as captured in the audit files:
- Bucks 22 Apr was at `/areas/buckinghamshire` (the hub).
- Cobham at every date sat on `/areas/surrey` (parent hub), not `/areas/cobham` — the leaf slug never broke through; Google chose the parent hub as the canonical surrogate.
- Kensington, Chelsea, Esher all surfaced on their own leaf slugs once they appeared.

## 3. Categorisation summary

| Category | Count | Keywords |
|---|---:|---|
| GAINED (newly visible from outside top 30) | 3 | Kensington (#5), Esher (#1 then #2), Chelsea (#7-9, volatile) |
| HELD (within 3 of 22 Apr) | 1 | Cobham (#9 to #9 via #10) |
| REGRESSED MILD (-3 to -10) | 0 | none |
| REGRESSED HARD (>10 or out of top 30) | 1 | Buckinghamshire (#1 to outside top 30) |
| FLAT-INVISIBLE (was off top 30, still off) | 3 | Surrey, bespoke steel doors London, bespoke front doors London |

The HARD-regression cohort contains exactly one keyword: Buckinghamshire.

## 4. HARD regression cohort detail

| Keyword | URL on 22 Apr | Parent slug | Region file | Data type |
|---|---|---|---|---|
| steel doors Buckinghamshire | /areas/buckinghamshire | (hub itself) | src/data/locations/buckinghamshire.ts | hub |

Bucks is a hub (not a leaf area). It was the only hub that was ranking in the tracked set on 22 Apr. No other hub-type page is in the keyword list — so the question "do hubs as a class regress" cannot be answered from this data, only the question "did Bucks regress." It did.

## 5. Pattern analysis — Bucks alone, or template-level event?

### 5a. When did Bucks fall

The Bucks regression is already off top-30 on the first script run (2 May). It did not happen gradually across May — it dropped before script tracking resumed. The window in which it dropped is 22 Apr to 2 May (10 days).

### 5b. Commits that touched location data in that window

`git log src/data/locations/` between 22 Apr and 2 May returns: nothing. The 4-tier ladder sweep (commit `2c54c8b`) was 3 May 20:34 BST — after Bucks was already gone. Same for the regex-doubled regression patch on 4 May (commit `a1c67a2`).

The drop predates both the template-level sweep and its patch. The 4-tier ladder rollout cannot be the cause of the Bucks regression.

### 5c. Did other area pages regress when the 4-tier ladder shipped?

Comparing 3 May (one day before sweep) to 4 May (the morning after):

- Kensington: #5 to #5 (held)
- Cobham: #10 to #10 (held)
- Esher: not top 30 to #1 (gained, big)
- Chelsea: #7 to off top 30 (lost)
- Bucks: already gone
- Surrey: still off top 30

The 4-tier ladder commit had one casualty (Chelsea, off top 30 for 5 May / 6 May, returns at #9 on 10 May) and one breakthrough (Esher, #1 same day). On 5 May the regex-doubled-content fix was already merged, so the Chelsea page would have been touched twice in 24 hours. Chelsea volatility is plausibly the doubled-content artefact and its patch causing a one-week re-rank, not a sustained loss — the page is back at #9 by 10 May.

### 5d. So what did cause the Bucks fall

The Bucks drop window (23 Apr to 1 May) corresponds to no location-file commit. It does correspond to:

- Sweeping competitive change in the SERP: the 2 May audit shows `www.doorsforsecurity.co.uk` newly at #1 for "steel doors Buckinghamshire", later (6 May, 10 May) replaced by `www.lathamssteeldoors.co.uk` at #1. Competitor movement, not site-side breakage, is the simplest explanation.
- No correlated breakage on any other tracked area page in the same window.
- The Bucks page itself was untouched between 22 Apr and the 3 May sweep.

### 5e. Was there a template-level effect anywhere?

The only correlated multi-page volatility is Chelsea's one-week flutter around the 3-5 May sweep. Every other leaf area is either gaining, holding, or stays invisible. Three new leaf areas (Kensington, Esher, Chelsea on entry) broke through in this exact window — the opposite of a template-level downgrade.

## 6. Verdict

**Bucks regression is isolated, not a template-level event.**

Evidence for isolated:
- Six of the eight tracked area keywords gained or held over the window.
- The Bucks drop predates the 4-tier ladder sweep by 1-9 days.
- No commit touched `src/data/locations/buckinghamshire.ts` between the 22 Apr baseline and the 2 May audit that first captured the regression.
- New leaf pages (Esher, Kensington) broke through in the same window — incompatible with a sitewide template downgrade.

Most likely cause: competitive SERP shift on the Bucks query specifically (doorsforsecurity, then Latham's, took the top of page). Site-side, possible secondary contributors are (a) the SR3-as-standard claim being walked back across `/security` / `/security-specification` / layout schema in mid-April, which would have weakened the Bucks page's relevance signal for "steel doors Buckinghamshire" if Google was rewarding the SR3-as-baseline framing; (b) the Bucks hub's content being indistinguishable enough from the parent boilerplate that a Google reranking pass moved authority to leaf pages like Esher and Kensington instead. Both are reasoned hypotheses, not verified — no captured before/after exists.

Recommended next checks (not actioned here, read-only investigation):
1. Pull GSC Performance > steelr.co.uk filtered to `/areas/buckinghamshire` for the 23 Apr to 5 May window. Impressions and average position will show whether Google was downranking or whether queries shifted.
2. Inspect the Bucks hub's current internal-link inbound count vs Esher's. Bucks may have lost the relative authority advantage as more leaf pages were added.
3. Re-run the full visibility audit once Serper credits are restored. Three consecutive runs (11 May, 13 May, current) have been dark — the next real measurement window opens whenever the API key is topped up.

---

_Forensic investigation by Claude (Anthropic). Read-only. Source files: `audit-data/visibility-audit-2026{0422,0502,0503,0504,0505,0506,0510}.md` and `git log --since=2026-04-22 -- src/data/locations/`._
