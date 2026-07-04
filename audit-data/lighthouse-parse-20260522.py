#!/usr/bin/env python3
"""Parse the 42 Lighthouse JSON runs, compute 3-run medians per page/mode."""
import json, glob, os, statistics

OUT = "audit-data/lighthouse-20260522"
labels = ["home", "collection", "door", "area", "blog", "topic", "contact"]

def med(xs):
    xs = [x for x in xs if x is not None]
    return statistics.median(xs) if xs else None

def load(label, mode):
    rows = []
    for i in (1, 2, 3):
        f = f"{OUT}/{label}-{mode}-{i}.json"
        if not os.path.exists(f):
            continue
        try:
            d = json.load(open(f, encoding="utf-8"))
        except Exception as e:
            print(f"  PARSE FAIL {f}: {e}")
            continue
        c = d.get("categories", {})
        a = d.get("audits", {})
        def cat(k):
            s = c.get(k, {}).get("score")
            return round(s * 100) if s is not None else None
        def aud(k):
            return a.get(k, {}).get("numericValue")
        rows.append({
            "perf": cat("performance"),
            "a11y": cat("accessibility"),
            "bp": cat("best-practices"),
            "seo": cat("seo"),
            "fcp": aud("first-contentful-paint"),
            "lcp": aud("largest-contentful-paint"),
            "tbt": aud("total-blocking-time"),
            "cls": aud("cumulative-layout-shift"),
            "si": aud("speed-index"),
        })
    return rows

print(f"{'page':<11} {'mode':<8} {'Perf':<14} {'A11y':<5} {'BP':<5} {'SEO':<5} "
      f"{'FCP(s)':<8} {'LCP(s)':<8} {'TBT(ms)':<9} {'CLS':<7} {'SI(s)':<7} runs")
print("-" * 108)
for label in labels:
    for mode in ("mobile", "desktop"):
        rows = load(label, mode)
        if not rows:
            print(f"{label:<11} {mode:<8} NO DATA")
            continue
        perfs = [r["perf"] for r in rows]
        pm = med(perfs)
        prange = f"{pm}({min(p for p in perfs if p is not None)}-{max(p for p in perfs if p is not None)})"
        a11y = med([r["a11y"] for r in rows])
        bp = med([r["bp"] for r in rows])
        seo = med([r["seo"] for r in rows])
        fcp = med([r["fcp"] for r in rows])
        lcp = med([r["lcp"] for r in rows])
        tbt = med([r["tbt"] for r in rows])
        cls = med([r["cls"] for r in rows])
        si = med([r["si"] for r in rows])
        def s(v, d=1000):
            return f"{v/d:.2f}" if v is not None else "-"
        print(f"{label:<11} {mode:<8} {prange:<14} {a11y!s:<5} {bp!s:<5} {seo!s:<5} "
              f"{s(fcp):<8} {s(lcp):<8} {tbt and round(tbt) or '-':<9} "
              f"{cls is not None and round(cls,3) or '-':<7} {s(si):<7} {len(rows)}")
