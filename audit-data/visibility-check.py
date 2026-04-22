"""One-off SERP visibility scan for steelr.co.uk across Google UK.

Checks whether steelr appears in organic top 15 and Google Maps pack for
each keyword. Also extracts People Also Ask and Related Searches so we can
spot new content opportunities.

Run: python audit-data/visibility-check.py
"""
import json
import sys
import urllib.request

API_KEY = "b28fc7dffddcd83ed0ceb9d5fcd83e90cd7a1ec6"
ENDPOINT = "https://google.serper.dev/search"

KEYWORDS = [
    # Core brand-category
    "bespoke steel front doors",
    "steel front doors UK",
    "steel entrance doors UK",
    "bespoke steel entrance doors",
    "luxury front doors UK",
    # Security tier
    "SR3 steel door",
    "SR4 LPS 1175 residential",
    "PAS 24 front door",
    "Secured by Design front door",
    "fire rated front door FD30",
    # Comparison
    "steel vs composite front door",
    "steel front door cost UK",
    "steel vs timber front door",
    # Location
    "steel front door London",
    "steel doors Buckinghamshire",
    "steel doors Surrey",
    "steel doors Kensington",
    "luxury front door London",
    # Brand query
    "SteelR doors",
]


def search(q: str) -> dict:
    body = json.dumps({"q": q, "gl": "gb", "hl": "en"}).encode()
    req = urllib.request.Request(
        ENDPOINT,
        data=body,
        headers={"X-API-KEY": API_KEY, "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def find_steelr_organic(organic):
    for i, r in enumerate(organic or [], 1):
        link = (r.get("link") or "").lower()
        if "steelr.co.uk" in link:
            return i, r
    return None, None


def find_steelr_maps(places):
    for i, p in enumerate(places or [], 1):
        title = (p.get("title") or "").lower()
        website = (p.get("website") or "").lower()
        if "steelr" in title or "steelr.co.uk" in website:
            return i, p
    return None, None


def main():
    summary = []
    paa_pool = {}
    related_pool = {}

    for kw in KEYWORDS:
        try:
            d = search(kw)
        except Exception as e:
            print(f"ERROR: {kw}: {e}")
            continue

        org_pos, org_hit = find_steelr_organic(d.get("organic", []))
        map_pos, map_hit = find_steelr_maps(d.get("places", []))

        top_competitors = []
        for r in (d.get("organic") or [])[:3]:
            link = r.get("link") or ""
            dom = link.split("/")[2] if len(link.split("/")) > 2 else link
            top_competitors.append(dom)

        row = {
            "kw": kw,
            "organic": org_pos,
            "organic_url": (org_hit or {}).get("link"),
            "maps": map_pos,
            "top3": top_competitors,
        }
        summary.append(row)

        for q in d.get("peopleAlsoAsk", []) or []:
            question = q.get("question")
            if question:
                paa_pool[question] = paa_pool.get(question, 0) + 1
        for q in d.get("relatedSearches", []) or []:
            term = q.get("query")
            if term:
                related_pool[term] = related_pool.get(term, 0) + 1

    print()
    print("=" * 72)
    print("STEELR.CO.UK VISIBILITY ACROSS 19 KEYWORDS — GOOGLE UK")
    print("=" * 72)
    print()
    print(f"{'Keyword':<40} {'Organic':<10} {'Maps':<8} Top organic")
    print("-" * 72)
    for r in summary:
        kw = r["kw"][:38]
        org = f"#{r['organic']}" if r["organic"] else "—"
        mp = f"#{r['maps']}" if r["maps"] else "—"
        top = r["top3"][0] if r["top3"] else ""
        print(f"{kw:<40} {org:<10} {mp:<8} {top}")

    # Tally ranked vs not
    ranked_org = sum(1 for r in summary if r["organic"])
    ranked_map = sum(1 for r in summary if r["maps"])
    print()
    print(f"Ranking in organic top-15: {ranked_org}/{len(summary)}")
    print(f"Ranking in Maps top-10:    {ranked_map}/{len(summary)}")

    print()
    print("=" * 72)
    print("TOP PEOPLE-ALSO-ASK QUESTIONS (content opportunities)")
    print("=" * 72)
    for q, c in sorted(paa_pool.items(), key=lambda x: -x[1])[:20]:
        print(f"  ({c}x) {q}")

    print()
    print("=" * 72)
    print("TOP RELATED SEARCHES (keyword mining)")
    print("=" * 72)
    for q, c in sorted(related_pool.items(), key=lambda x: -x[1])[:20]:
        print(f"  ({c}x) {q}")


if __name__ == "__main__":
    main()
