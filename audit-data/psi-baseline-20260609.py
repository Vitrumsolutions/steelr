#!/usr/bin/env python3
"""Live mobile speed check 2026-06-09: PSI API v5. Gentle mode after 429:
30s clearing wait, 1 run/page, 15s gaps. CrUX field data is the real-user ground truth."""
import urllib.request, urllib.parse, json, time

ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
PAGES = {
    "home":        "https://steelr.co.uk/",
    "collection":  "https://steelr.co.uk/collection",
    "bucks":       "https://steelr.co.uk/areas/buckinghamshire",
    "blog-sr4":    "https://steelr.co.uk/blog/sr4-lps-1175-commercial-grade-residential",
    "bespoke":     "https://steelr.co.uk/bespoke-steel-front-doors-uk",
}

def call(url):
    q = urllib.parse.urlencode({"url": url, "strategy": "mobile", "category": "performance"})
    req = urllib.request.Request(f"{ENDPOINT}?{q}", headers={"User-Agent": "Mozilla/5.0 steelr"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read().decode("utf-8", "replace"))

def crux(d):
    le = d.get("loadingExperience", {})
    if not le.get("metrics"):
        return "no page-level field data"
    oc = le.get("overall_category", "?")
    lcp = le["metrics"].get("LARGEST_CONTENTFUL_PAINT_MS", {})
    inp = le["metrics"].get("INTERACTION_TO_NEXT_PAINT", {})
    cls = le["metrics"].get("CUMULATIVE_LAYOUT_SHIFT_SCORE", {})
    return (f"overall={oc} | LCP p75={lcp.get('percentile')}ms({lcp.get('category')}) "
            f"INP p75={inp.get('percentile')}({inp.get('category')}) "
            f"CLS p75={cls.get('percentile')}({cls.get('category')})")

print("clearing 30s...", flush=True)
time.sleep(30)
out = {}
for name, url in PAGES.items():
    try:
        d = call(url)
        lr = d.get("lighthouseResult", {})
        sc = lr.get("categories", {}).get("performance", {}).get("score")
        score = round(sc * 100) if sc is not None else None
        oe = d.get("originLoadingExperience", {})
        out[name] = {"url": url, "lab_perf": score, "crux_page": crux(d),
                     "crux_origin": oe.get("overall_category", "no origin field data")}
        print(f">>> {name}: lab_perf={score} | {out[name]['crux_page']}", flush=True)
    except Exception as e:
        out[name] = {"url": url, "lab_perf": None, "error": str(e)}
        print(f">>> {name}: ERROR {e}", flush=True)
    time.sleep(15)

print("\n" + "=" * 78)
for name, r in out.items():
    if r.get("lab_perf") is not None:
        print(f"{name:<12} lab={r['lab_perf']:<4} | {r.get('crux_page','')}")
    else:
        print(f"{name:<12} FAILED: {r.get('error','')[:50]}")
print(f"\nCrUX origin overall: {out.get('home',{}).get('crux_origin','?')}")
json.dump(out, open("audit-data/psi-baseline-20260609.json", "w"), indent=1)
print("written: audit-data/psi-baseline-20260609.json")
