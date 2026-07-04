#!/usr/bin/env python3
"""Clean mobile baseline: PSI API v5 (runs on Google infra, no local CPU contention).
5 runs/page for a noise-killed lab median + CrUX field data (real-user ground truth)."""
import urllib.request, urllib.parse, json, time, statistics, sys

ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
PAGES = {
    "home":        "https://steelr.co.uk/",
    "collection":  "https://steelr.co.uk/collection",
    "bucks":       "https://steelr.co.uk/areas/buckinghamshire",
    "blog-sr4":    "https://steelr.co.uk/blog/sr4-lps-1175-commercial-grade-residential",
    "bespoke":     "https://steelr.co.uk/bespoke-steel-front-doors-uk",
}
RUNS = 5

def call(url):
    q = urllib.parse.urlencode({"url": url, "strategy": "mobile",
                                "category": "performance"})
    req = urllib.request.Request(f"{ENDPOINT}?{q}",
                                 headers={"User-Agent": "steelr-baseline"})
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

out = {}
for name, url in PAGES.items():
    perfs, errs = [], 0
    crux_str = origin_str = None
    for i in range(RUNS):
        try:
            d = call(url)
            lr = d.get("lighthouseResult", {})
            sc = lr.get("categories", {}).get("performance", {}).get("score")
            if sc is not None:
                perfs.append(round(sc * 100))
            if crux_str is None:
                crux_str = crux(d)
                oe = d.get("originLoadingExperience", {})
                origin_str = oe.get("overall_category", "no origin field data")
            print(f"  {name} run {i+1}: perf={round(sc*100) if sc else '?'}", flush=True)
        except Exception as e:
            errs += 1
            print(f"  {name} run {i+1}: ERROR {e}", flush=True)
        time.sleep(3)
    med = statistics.median(perfs) if perfs else None
    out[name] = {"url": url, "runs": perfs, "median": med, "errors": errs,
                 "crux_page": crux_str, "crux_origin": origin_str}
    print(f">>> {name}: median={med} runs={perfs} errors={errs}", flush=True)

print("\n" + "=" * 78)
print(f"{'page':<12} {'lab median (mobile)':<26} {'CrUX field data'}")
print("-" * 78)
for name, r in out.items():
    rng = f"{r['median']}  runs={r['runs']}" if r["median"] is not None else f"NO DATA (errors={r['errors']})"
    print(f"{name:<12} {rng:<26} {r['crux_page']}")
print(f"\nCrUX origin overall: {out[list(out)[0]]['crux_origin']}")
json.dump(out, open("audit-data/psi-baseline-20260522.json", "w"), indent=1)
print("\nwritten: audit-data/psi-baseline-20260522.json")
