# SteelR visibility — round 4 (residential steel doors, the actual market)

**Date:** 2026-05-22 (final round)
**Scope (corrected, from Mani's note):** every query must contain both `steel` AND `home`/`house`/`residential`/`domestic`. SteelR does not sell composite, aluminium, or mass-market timber doors — so "luxury front doors UK" and "bespoke front door UK" are NOT SteelR's market. The actual buyer has already self-selected into "I want a steel door for my house" before they type.
**Method:** Google with `&pws=0&gl=uk&hl=en` (personalisation off, UK geo). Browser still logged in (would need a true incognito window for a 100% clean read), but `pws=0` neutralises most signal. Perplexity attempted — hit daily free-tier limit. ChatGPT/Gemini still blocked by hidden tab.

---

## Headline

**On the 4 queries Mani wrote verbatim (the residential-steel-door buyer's actual language) — SteelR is absent on Google for all 4.** On 26 residential-steel queries total, SteelR appears organically on only 5, and 4 of those 5 are location-tagged area pages (Surrey, Buckinghamshire, Kensington, Chelsea). The "who makes residential steel doors" generic intent — the top-of-funnel buyer journey — scores zero.

---

## Mani's verbatim queries — 4/4 absent

| # | Query | SteelR position | Who Google ranked |
|---|---|---|---|
| 1 | `who does the highest security steel doors for houses` | **ABSENT** | High Security Front Doors, Highest Security Steel Door & Frame, Eurocell, JCFireDoor (India), Bradbury Group, Security Doors London "Fort Knox", Best Front Security Doors London Residential, Steel Doors |
| 2 | `which steel door company does house front doors` | **ABSENT** | High Security Front Doors, Modern Doors, Black Steel Doors, External Steel Doors London, Doors & External Doors London, Steel Door Company, Fort Knox, Steel Security Doors, Wellste |
| 3 | `steel doors best for home entrance` | **ABSENT** | Modern Doors, Domadeco (Sta Cortez), Garage Doors Online, Steel Security Doors, Gerda, Hörmann, UltraTech, Wellste |
| 4 | `best home front door steel door companies` | **ABSENT** | Modern Doors, Black Steel Doors, Gerda, Domadeco, London Door Co, Fort Knox, JCFireDoor (India), Wellste |

Every one of these is a competitor or generic listicle. SteelR's three product pages, ten topic pages, and 161 area pages are not retrieved for any of these phrases.

---

## Generic residential-steel queries — 0/10 hits

| Query | SteelR |
|---|---|
| `steel front doors for homes uk` | ABSENT |
| `residential steel front door uk` | ABSENT |
| `bespoke steel front door for my house` | Maps pin only (owner-managed, not a neutral signal) |
| `steel entrance door for home uk` | ABSENT |
| `steel front door manufacturer for houses uk` | ABSENT |
| `steel front doors for private residences uk` | ABSENT |
| `who installs steel front doors on houses uk` | ABSENT |
| `steel front door for a detached house uk` | ABSENT |
| `steel front door for a new build home uk` | ABSENT |
| `domestic steel front door uk` | ABSENT |

Competitor names that own this layer of the SERP: Modern Doors, Black Steel Doors, Strongdor, Gerda, Latham's, Maxium, Fort Premium, Domadeco, Stronghold, Hörmann, Steel Door Company.

---

## Location + residential steel queries — area pages working

| Query | SteelR position | What ranked |
|---|---|---|
| `residential steel front door london` | ABSENT | TH Doors London, Modern Doors, Steel Security Doors, Fort Knox, External Steel Doors London, Black Steel Doors, Cerberus Doors |
| `steel front door for a house in surrey` | **#9** | `/areas/surrey` |
| `steel front door installer for houses in buckinghamshire` | **#2** | `/areas/buckinghamshire` |
| `steel home entrance door kensington` | **#2** | `/areas/kensington` |
| `steel front doors for homes in chelsea` | **#2** | `/areas/chelsea` |

Area pages do their job when "steel + [specific town/borough]" combine. The general `residential steel front door london` query is too broad and competitor pages own it.

---

## Security-tied residential queries — 0/4

| Query | SteelR |
|---|---|
| `most secure steel front door for a house uk` | ABSENT |
| `steel front door for home security uk` | ABSENT |
| `burglar proof steel front door for house uk` | ABSENT |
| `steel front door for a family home uk` | ABSENT |

Competitor names winning: Latham's, Stronghold, Henleys Security, Fort Premium, Security Doors Direct, Modern Doors. Note Bradbury Group and Latham's appear repeatedly — these are SteelR's nearest peer/competitor set on the security side.

---

## Project-tied residential queries — 1/3

| Query | SteelR position | What ranked |
|---|---|---|
| `steel front door for victorian house london` | ABSENT | Victorian Front Doors, Joinery for All Seasons Mayfair, London Premium Steel Front Door, London Door Co |
| `steel front door for georgian townhouse uk` | **#5 (blog)** | `/blog/best-areas-london-period-property-renovations` |
| `steel front door for self build home uk` | ABSENT | Latham's Budget Steel Door, Modern Doors, Domadeco, Internal STEEL doors |

---

## What this round actually proves

The round-3 noise (composite/aluminium/timber competition I shouldn't have tested) is gone. What we have left is a clean test of the queries the real customer types when they have decided they want a steel door for their house.

**SteelR's standing on those queries on Google:**

- **The 4 most representative buyer queries (Mani's own examples): all absent.**
- **The next 10 generic residential-steel queries: 0 organic, 1 owner-personalised Maps pin.**
- **5 long-tail location queries: 4 of 5 win.** Area pages built for Surrey, Buckinghamshire, Kensington, Chelsea. London general does not.
- **4 security-tied: all absent.**
- **3 project-tied: 1 win (Georgian — and that's a blog, not the topic page).**

**5 wins out of 26 residential-steel queries. Of those 5 wins, 4 are area pages. The product/category/manufacturer-intent traffic isn't reaching us.**

## What's blocked, what's left to test

- **ChatGPT-with-Search:** still locked behind the hidden-tab + free-tier-throttle combination. Free tier resets at 12:22 PM UK tomorrow. To run the 4 Mani verbatim queries cleanly we need either (a) Chrome window in the foreground for 5 minutes after the reset, or (b) ChatGPT Plus on your account.
- **Gemini:** same hidden-tab streaming problem.
- **Perplexity:** hit daily free-tier search limit during round 4 — "Your access will reset in a few hours". Cannot complete the Mani-verbatim Perplexity sweep tonight.
- **True incognito (no Chrome login):** the cleanest read would be a genuine incognito window without our Google account attached. Worth running once for the 4 Mani queries to confirm the Maps pin isn't masking any owner-side personalisation we missed. Same outcome expected.

## Files written this round

- `audit-data/serp-captures/20260522-residential-steel-round4.md` (this file)
- `~/.claude/projects/.../steelr/memory/feedback_scope_residential_steel_doors.md` (the methodology lesson)
- `~/.claude/projects/.../steelr/memory/MEMORY.md` updated
