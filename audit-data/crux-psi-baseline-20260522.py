#!/usr/bin/env python3
"""Trustworthy mobile baseline. CrUX = real-user field data (instant, definitive).
PSI = lab score 5x/page via Google infra. Key passed via PSI_KEY env var (not stored)."""
import urllib.request, urllib.parse, json, time, statistics, os, sys

KEY = os.environ["PSI_KEY"]
PAGES = {
    "home":       "https://steelr.co.uk/",
    "collection": "https://steelr.co.uk/collection",
    "bucks":      "https://steelr.co.uk/areas/buckinghamshire",
    "blog-sr4":   "https://steelr.co.uk/blog/sr4-lps-1175-commercial-grade-residential",
    "bespoke":    "https://steelr.co.uk/bespoke-steel-front-doors-uk",
}

def post(url, body):
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode())

def cat(metric, p75):
    t = {"largest_contentful_paint": (2500, 4000),
         "interaction_to_next_paint": (200, 500),
         "cumulative_layout_shift": (0.10, 0.25),
         "first_contentful_paint": (1800, 3000)}
    if metric not in t or p75 is None: return "?"
    good, poor = t[metric]
    return "GOOD" if p75 <= good else ("POOR" if p75 > poor else "NEEDS-IMPROVEMENT")

def crux(key_field, value):
    url = f"https://chromeuxreport.googleapis.com/v1/records:queryRecord?key={KEY}"
    try:
        rec = post(url, {key_field: value, "formFactor": "PHONE"})["record"]
    except urllib.error.HTTPError as e:
        return None if e.code == 404 else f"ERROR {e.code}"
    except Exception as e:
        return f"ERROR {e}"
    out = {}
    for m, d in rec.get("metrics", {}).items():
        p75 = d.get("percentiles", {}).get("p75")
        if isinstance(p75, str):
            try: p75 = float(p75)
            except: pass
        out[m] = (p75, cat(m, p75))
    return out

print("### CrUX FIELD DATA (real Chrome users, mobile, trailing 28 days) ###", flush=True)
for name, url in PAGES.items():
    pg = crux("url", url)
    if pg is None:
        print(f"  {name:11} page-level: NO field data (low traffic) -> origin used", flush=True)
    elif isinstance(pg, str):
        print(f"  {name:11} {pg}", flush=True)
    else:
        s = "  ".join(f"{m.split('_')[0].upper()}={v[0]}({v[1]})" for m, v in pg.items()
                      if m in ("largest_contentful_paint","interaction_to_next_paint","cumulative_layout_shift"))
        print(f"  {name:11} {s}", flush=True)
org = crux("origin", "https://steelr.co.uk")
print(f"\n  ORIGIN steelr.co.uk (whole-site real-user mobile):", flush=True)
if isinstance(org, dict):
    for m, v in org.items():
        print(f"    {m:32} p75={v[0]} -> {v[1]}", flush=True)
else:
    print(f"    {org}", flush=True)

print("\n### PSI LAB SCORE (5 runs/page, mobile, Google infra) ###", flush=True)
PSI = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
results = {}
for name, url in PAGES.items():
    perfs = []
    for i in range(5):
        q = urllib.parse.urlencode({"url": url, "strategy": "mobile",
                                    "category": "performance", "key": KEY})
        try:
            with urllib.request.urlopen(f"{PSI}?{q}", timeout=120) as r:
                d = json.loads(r.read().decode())
            sc = d["lighthouseResult"]["categories"]["performance"]["score"]
            perfs.append(round(sc * 100))
        except Exception as e:
            print(f"  {name} run {i+1}: ERR {str(e)[:60]}", flush=True)
        time.sleep(2)
    med = statistics.median(perfs) if perfs else None
    results[name] = {"median": med, "runs": perfs}
    print(f"  {name:11} median={med}  runs={perfs}", flush=True)

json.dump(results, open("audit-data/crux-psi-baseline-20260522.json", "w"), indent=1)
print("\nDONE", flush=True)
