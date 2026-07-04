#!/usr/bin/env python3
"""Live verification: H1 count, JSON-LD @types, canonical, meta description, title.
Closes the 'verify live' gaps left by the schema + accessibility agents."""
import urllib.request, re, json, sys

UA = {"User-Agent": "Mozilla/5.0 (audit) SteelR-live-verify"}

def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")

# discover a real collection door slug
try:
    coll = fetch("https://steelr.co.uk/collection")
    m = re.search(r'href="(/collection/[a-z0-9-]+)"', coll)
    door = "https://steelr.co.uk" + m.group(1) if m else None
except Exception as e:
    door = None
    print("could not discover door slug:", e)

pages = {
    "home": "https://steelr.co.uk/",
    "topic-bespoke": "https://steelr.co.uk/bespoke-steel-front-doors-uk",
    "topic-sr3": "https://steelr.co.uk/sr3-residential-steel-door",
    "topic-pas24": "https://steelr.co.uk/pas-24-steel-entrance-door",
    "topic-sbd": "https://steelr.co.uk/secured-by-design-steel-front-door",
    "topic-thermal": "https://steelr.co.uk/thermally-broken-steel-front-door",
    "topic-fd30": "https://steelr.co.uk/fire-rated-fd30-front-door",
    "topic-vs-composite": "https://steelr.co.uk/steel-front-door-vs-composite",
    "topic-vs-imported": "https://steelr.co.uk/uk-steel-doors-vs-imported",
    "topic-luxury-london": "https://steelr.co.uk/luxury-steel-entrance-door-london",
    "topic-cost": "https://steelr.co.uk/steel-front-door-cost-uk",
    "topic-sr3-vs-sr4": "https://steelr.co.uk/sr3-vs-sr4-residential-steel-doors-uk",
    "area-hub-bucks": "https://steelr.co.uk/areas/buckinghamshire",
    "area-hub-surrey": "https://steelr.co.uk/areas/surrey",
    "area-leaf-kensington": "https://steelr.co.uk/areas/kensington",
    "blog-sr3": "https://steelr.co.uk/blog/what-is-sr3-security-rating",
    "blog-vs-composite": "https://steelr.co.uk/blog/steel-vs-composite-doors",
    "collection-listing": "https://steelr.co.uk/collection",
    "security": "https://steelr.co.uk/security",
    "audience-architects": "https://steelr.co.uk/architects",
}
if door:
    pages["collection-door"] = door

print(f"{'page':<24} {'h1':<4} {'canon-ok':<9} {'metaDesc':<9} {'title':<6} ld+json @types")
print("-" * 110)
for name, url in pages.items():
    try:
        html = fetch(url)
    except Exception as e:
        print(f"{name:<24} FETCH FAILED: {e}")
        continue
    h1 = len(re.findall(r"<h1[ >]", html))
    canon = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    canon_ok = "MISSING"
    if canon:
        c = canon.group(1)
        canon_ok = "ok" if c.startswith("https://steelr.co.uk") and "//www." not in c else f"BAD:{c}"
    md = re.search(r'<meta name="description" content="([^"]*)"', html)
    md_len = len(md.group(1)) if md else 0
    md_flag = str(md_len) if md else "MISSING"
    t = re.search(r"<title>([^<]*)</title>", html)
    t_len = len(t.group(1)) if t else 0
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    types = []
    parse_err = 0
    for b in blocks:
        try:
            obj = json.loads(b)
            items = obj if isinstance(obj, list) else [obj]
            for it in items:
                t_ = it.get("@type", "?") if isinstance(it, dict) else "?"
                types.append(t_ if isinstance(t_, str) else "/".join(t_))
        except Exception:
            parse_err += 1
    types_s = ",".join(types) + (f" [PARSE-ERR x{parse_err}]" if parse_err else "")
    h1flag = str(h1) if h1 == 1 else f"!!{h1}!!"
    print(f"{name:<24} {h1flag:<4} {canon_ok:<9} {md_flag:<9} {t_len:<6} {types_s}")
