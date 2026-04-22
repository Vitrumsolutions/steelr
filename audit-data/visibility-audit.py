"""
SteelR visibility audit — Google organic + Google Maps + Bing organic.
Mirrors the Vitrums audit pattern (vitrums/audit-data/visibility-audit.py).
"""
import requests, json, time
from pathlib import Path

API = "b28fc7dffddcd83ed0ceb9d5fcd83e90cd7a1ec6"
OUT = Path(__file__).parent / "visibility-audit-results.md"

GOOGLE_KEYWORDS = [
    # Brand (should dominate)
    "steelr", "steelr doors", "steelr uk", "steelr bespoke steel entrance doors",
    # Core product queries — UK-wide
    "bespoke steel entrance doors UK", "steel front doors UK", "steel front door UK",
    "steel security doors residential UK", "steel doors UK",
    # Standards / certifications (high-intent specifier queries)
    "PAS 24 front doors", "Secured by Design doors UK",
    "SR3 residential steel door", "fire rated entrance doors flats",
    "FD30 front door UK",
    # Comparison
    "steel vs composite doors", "steel doors with glass panels UK",
    # Cost / shopper queries
    "how much do steel doors cost UK", "best front door for security UK",
    "bespoke front doors London",
    # Location queries (we have /areas/[slug] for all these)
    "steel doors Buckinghamshire", "steel doors Surrey",
    "steel doors Kensington", "steel doors Chelsea",
    "steel doors Cobham", "steel doors Esher",
    "bespoke steel doors London",
]

MAPS_QUERIES = [
    # Local intent
    "SteelR",
    "steel front doors near me London",
    "bespoke steel doors London",
    "steel doors installer Surrey",
    "steel doors Cobham",
    "steel doors Esher",
    "steel doors Richmond",
    "steel security doors London",
    "steel front door installer",
    "steel doors Uxbridge",
    "steel doors Kensington",
]

BING_KEYWORDS = GOOGLE_KEYWORDS[:15]


def g_organic(q):
    r = requests.post("https://google.serper.dev/search",
        headers={"X-API-KEY": API, "Content-Type": "application/json"},
        json={"q": q, "gl": "uk", "location": "United Kingdom", "hl": "en", "num": 30},
        timeout=30)
    return r.json()

def g_maps(q):
    r = requests.post("https://google.serper.dev/maps",
        headers={"X-API-KEY": API, "Content-Type": "application/json"},
        json={"q": q, "gl": "uk", "hl": "en"},
        timeout=30)
    return r.json()

def bing_search(q):
    r = requests.post("https://google.serper.dev/bing-search",
        headers={"X-API-KEY": API, "Content-Type": "application/json"},
        json={"q": q, "gl": "uk", "location": "United Kingdom", "hl": "en", "num": 30},
        timeout=30)
    return r.json()

def find_domain(d, domain="steelr.co.uk"):
    for i, r in enumerate(d.get("organic", []), 1):
        if domain in r.get("link", ""):
            return i, r.get("link", "")
    return None, None


lines = ["# SteelR Visibility Audit \u2014 baseline (22 Apr 2026)\n"]

# --- Google organic ---
print("Running Google organic...")
lines.append("## Google Organic Search (UK, 25 keywords)\n")
lines.append("| # | Keyword | Position | URL |")
lines.append("|---|---------|----------|-----|")
g_hits = 0
for i, kw in enumerate(GOOGLE_KEYWORDS, 1):
    try:
        d = g_organic(kw)
        pos, url = find_domain(d)
        if pos:
            g_hits += 1
            short = (url or "").replace("https://steelr.co.uk", "").replace("https://www.steelr.co.uk", "")[:50] or "/"
            lines.append(f"| {i} | {kw} | **#{pos}** | {short} |")
        else:
            top = (d.get('organic', [{}])[0].get('link', '') or '').replace('https://', '').split('/')[0][:40]
            lines.append(f"| {i} | {kw} | \u2014 | not top 30 (top: {top}) |")
        print(f"  [{i}/{len(GOOGLE_KEYWORDS)}] {kw}: {'#' + str(pos) if pos else '\u2014'}")
        time.sleep(0.7)
    except Exception as e:
        lines.append(f"| {i} | {kw} | ERROR | {str(e)[:50]} |")
        print(f"  ERR {kw}: {e}")
lines.append(f"\n**Google organic hits: {g_hits}/{len(GOOGLE_KEYWORDS)}**\n")

# --- Google Maps ---
print("\nRunning Google Maps...")
lines.append("## Google Maps (local 3-pack)\n")
lines.append("| # | Query | Position | Listing |")
lines.append("|---|-------|----------|---------|")
m_hits = 0
for i, q in enumerate(MAPS_QUERIES, 1):
    try:
        d = g_maps(q)
        places = d.get("places", [])
        found = None
        for j, p in enumerate(places, 1):
            title = p.get("title", "")
            web = p.get("website", "")
            if "steelr" in title.lower() or "steelr.co.uk" in str(web):
                found = (j, title, p.get("rating", "?"), p.get("ratingCount", "?"))
                break
        if found:
            m_hits += 1
            lines.append(f"| {i} | {q} | **#{found[0]}** | {found[1]} ({found[2]}* / {found[3]} reviews) |")
            print(f"  [{i}] {q}: #{found[0]}")
        else:
            top = places[0].get("title", "n/a") if places else "no results"
            lines.append(f"| {i} | {q} | \u2014 | not in Maps (top: {top}) |")
            print(f"  [{i}] {q}: \u2014")
        time.sleep(0.7)
    except Exception as e:
        lines.append(f"| {i} | {q} | ERROR | {str(e)[:50]} |")
lines.append(f"\n**Google Maps hits: {m_hits}/{len(MAPS_QUERIES)}**\n")

# --- Bing ---
print("\nRunning Bing organic...")
lines.append("## Bing Organic Search\n")
lines.append("| # | Keyword | Position | URL |")
lines.append("|---|---------|----------|-----|")
b_hits = 0
for i, kw in enumerate(BING_KEYWORDS, 1):
    try:
        d = bing_search(kw)
        pos, url = find_domain(d)
        if pos:
            b_hits += 1
            short = (url or "").replace("https://steelr.co.uk", "").replace("https://www.steelr.co.uk", "")[:50] or "/"
            lines.append(f"| {i} | {kw} | **#{pos}** | {short} |")
        else:
            lines.append(f"| {i} | {kw} | \u2014 | not top 30 |")
        print(f"  [{i}/{len(BING_KEYWORDS)}] {kw}: {'#' + str(pos) if pos else '\u2014'}")
        time.sleep(0.7)
    except Exception as e:
        lines.append(f"| {i} | {kw} | ERROR | {str(e)[:50]} |")
lines.append(f"\n**Bing organic hits: {b_hits}/{len(BING_KEYWORDS)}**\n")

# --- Summary ---
lines.append("## Summary\n")
lines.append(f"- Google organic: {g_hits}/{len(GOOGLE_KEYWORDS)} ({g_hits*100//len(GOOGLE_KEYWORDS)}%)")
lines.append(f"- Google Maps: {m_hits}/{len(MAPS_QUERIES)} ({m_hits*100//len(MAPS_QUERIES)}%)")
lines.append(f"- Bing organic: {b_hits}/{len(BING_KEYWORDS)} ({b_hits*100//len(BING_KEYWORDS)}%)")

OUT.write_text("\n".join(lines), encoding="utf-8")
print(f"\nWritten: {OUT}")
print(f"Google: {g_hits}/{len(GOOGLE_KEYWORDS)}, Maps: {m_hits}/{len(MAPS_QUERIES)}, Bing: {b_hits}/{len(BING_KEYWORDS)}")
