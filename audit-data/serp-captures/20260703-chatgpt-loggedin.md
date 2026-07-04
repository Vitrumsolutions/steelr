# SteelR ChatGPT-with-Search re-baseline — 2026-07-03

**Method:** user's logged-in Chrome via claude-in-chrome MCP. Account: Mani Sandhu, Free tier. 8 exact baseline queries, one per fresh chat, full answer allowed to finish streaming before reading. Baseline for comparison: 9 Jun 2026 (`20260609-full-visibility-check.md`).

**Model downgrade:** NONE observed. No "out of messages with most advanced model" banner appeared on any of the 8 queries. All answers ran with live search and full source panels. (Both prior runs, 27 May and 9 Jun, downgraded partway through.)

## Results vs 9 Jun baseline

| # | Query | 3 Jul | 9 Jun | Delta |
|---|---|---|---|---|
| 1 | best steel front doors uk | Named, top tier "Premium steel security door systems" (2nd after Gerda). Shortlist: "Highest security focus: Gerda / SteelR". steelr.co.uk in sources (vs-composite page) but the SteelR entry's inline chip is Vitrum Solutions | Named | = |
| 2 | steel security doors for home uk | ABSENT. Suppliers named: Doors4Security Ltd, Latham's | Named (supplier list) | DOWN, loss |
| 3 | steel doors london | Absent. TH Doors, Latham's, London Fire Door Co | Absent | = |
| 4 | most secure steel front door | ABSENT entirely, not even a source chip. Hörmann called "closest mainstream high-security steel option". Others: Solidor, Winkhaus, Nuki | Source chip only | DOWN, loss |
| 5 | bespoke steel front door uk | Named FIRST under "High-security bespoke steel doors", steelr.co.uk chip on the entry. Shortlist: "Maximum security + long-term durability: SteelR / Bradbury-type engineering" | Named body rec + link | = |
| 6 | steel front door companies uk | Named FIRST, premium segment. Takeaway: "Security + long-term durability: SteelR / Bradbury-tier systems". BUT SteelR entry chip reads Vitrum Solutions +1, and Vitrum Solutions is listed as its own separate supplier entry | #1 | = |
| 7 | steel front doors for homes uk | Absent. Vitrum Solutions cited for the high-end price band, Royal Doors for retail prices | Absent (Vitrums cited instead) | = |
| 8 | residential steel front door london | Named FIRST, "Premium bespoke steel door specialists (London-focused)", steelr.co.uk chip. Recommendation: "Design-led/high-end: SteelR or Urban Front". Answer says "Installations across London areas including Ickenham and surrounding boroughs" | #1 | = |

**Citation rate: 4/8 (50 percent), down from ~5.5/8 (69 percent) on 9 Jun.** The wins that flipped on 9 Jun (Q2, Q4 chip) flipped back off. The core premium queries (Q1, Q5, Q6, Q8) remain solid and SteelR is the first-named brand on three of them.

## Vitrums sister-site cannibalisation (watch item, worsening)

- Q1: the SteelR entry is sourced to the Vitrums blog "Best Entrance Door Brands in the UK: 2026 Comparison Guide" (dated 2 Jun 2026), which appears FIRST in the sources panel. steelr.co.uk (vs-composite page) is second.
- Q6: every chip on the SteelR entry reads Vitrum Solutions. Vitrum Solutions also occupies its own supplier slot in the same list, described as "Supplies SteelR doors and installs across UK regions". The Gerda entry is also sourced to Vitrums.
- Q7: SteelR absent while Vitrums is cited for steel-door pricing facts. Same pattern as 9 Jun.
- Net: on 3 of 8 queries ChatGPT grounds steel-door facts on vitrums.co.uk rather than steelr.co.uk. Where SteelR wins, roughly half its supporting citations flow to the sister domain.

## Price attribution check

No price directly attributed to SteelR. Nearest miss, Q6 market-structure section, exact text: "1) Security-first bespoke (£2,500–£8,000+)" with first bullet "SteelR-style RC3/RC4 systems". This attaches a band to "SteelR-style" as a category label, not to SteelR the company. Q5 quoted generic market norms ("True bespoke steel front door (made-to-measure, security rated): £6,000–£12,000") without naming SteelR. Q5 also stated category lead time "Typically 6–12 weeks minimum", not attributed to SteelR.

## Caveats

- The account was in concurrent use during the run. New chats not created by this session ("Cortizo Schüco Installers Uxbridge", "Premium Aluminium Installers", "High-end house builders") appeared in Recents mid-run. Each audit query used its own fresh chat, but account-level memory or personalisation could colour answers on this logged-in surface.
- Q8 names Ickenham as a SteelR install area. That is the home-address town surfacing in an AI answer, consistent with the visible GBP address decision (see feedback_address-hidden-affects-visibility.md).
- Free tier, single run per query. ChatGPT answers vary run to run, treat single-query flips (Q2, Q4) as directional until confirmed by the next capture.
