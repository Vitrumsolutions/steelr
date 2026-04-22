"""Weekly rank tracker for steelr.co.uk.

Runs the same keyword-visibility scan as visibility-check.py, but also:
  - Compares to the previous run's snapshot
  - Writes a dated snapshot to audit-data/rank-history/
  - Emits a "delta" report showing which keywords moved up, down, or stayed

Designed to be run by GitHub Actions weekly (see .github/workflows/weekly-rank-check.yml).
Can also run locally: `python audit-data/rank-tracker.py`

Reads the Serper API key from:
  1. SERPER_API_KEY environment variable (used in CI)
  2. Falls back to the existing hardcoded key in visibility-check.py (local dev)
"""
from __future__ import annotations
import json
import os
import sys
import urllib.request
from datetime import datetime
from pathlib import Path

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).parent
HISTORY_DIR = SCRIPT_DIR / "rank-history"
HISTORY_DIR.mkdir(exist_ok=True)

API_KEY = os.environ.get(
    "SERPER_API_KEY",
    "b28fc7dffddcd83ed0ceb9d5fcd83e90cd7a1ec6",  # same as visibility-check.py
)
ENDPOINT = "https://google.serper.dev/search"

# Keywords are a mix of high-value commercial + the three that previously
# ranked (Bucks organic, Bucks Maps, steel-vs-composite). Drops on those
# three are the most actionable signals.
KEYWORDS = [
    # Core category
    "bespoke steel front doors",
    "steel front doors UK",
    "steel entrance doors UK",
    "luxury front doors UK",
    # Security tier
    "SR3 steel door",
    "SR4 LPS 1175 residential",
    "PAS 24 front door",
    "Secured by Design front door",
    # Comparison (known-ranking)
    "steel vs composite front door",
    "steel front door cost UK",
    "steel vs timber front door",
    # Location (known-ranking was #2 organic Bucks, now #4)
    "steel doors Buckinghamshire",
    "steel doors Surrey",
    "steel doors Kensington",
    "luxury front door London",
    # Brand (sanity check — we should always own this)
    "SteelR doors",
]

# Drops of this many positions are flagged as actionable in the delta report.
DROP_THRESHOLD = 3


# ---------------------------------------------------------------------------
# Fetch
# ---------------------------------------------------------------------------


def search(q: str) -> dict:
    body = json.dumps({"q": q, "gl": "gb", "hl": "en"}).encode()
    req = urllib.request.Request(
        ENDPOINT,
        data=body,
        headers={"X-API-KEY": API_KEY, "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def find_steelr(d: dict) -> dict:
    """Return {organic: int|None, maps: int|None} for steelr in result."""
    organic = None
    maps = None

    for i, r in enumerate(d.get("organic", []) or [], 1):
        if "steelr.co.uk" in (r.get("link") or "").lower():
            organic = i
            break

    for i, p in enumerate(d.get("places", []) or [], 1):
        title = (p.get("title") or "").lower()
        website = (p.get("website") or "").lower()
        if "steelr" in title or "steelr.co.uk" in website:
            maps = i
            break

    return {"organic": organic, "maps": maps}


# ---------------------------------------------------------------------------
# Compare + report
# ---------------------------------------------------------------------------


def latest_prev_snapshot() -> Path | None:
    snapshots = sorted(HISTORY_DIR.glob("*.json"))
    return snapshots[-1] if snapshots else None


def format_pos(p: int | None) -> str:
    return f"#{p}" if p else "—"


def delta_arrow(now: int | None, before: int | None) -> str:
    if now is None and before is None:
        return "  no change"
    if now is None and before is not None:
        return f"  LOST (was {format_pos(before)})"
    if now is not None and before is None:
        return f"  NEW ({format_pos(now)})"
    d = before - now  # positive = we moved up
    if d == 0:
        return f"  same"
    if d > 0:
        return f"  UP {d} (was {format_pos(before)})"
    return f"  DOWN {-d} (was {format_pos(before)})"


def main() -> int:
    today = datetime.utcnow().strftime("%Y-%m-%d")
    today_path = HISTORY_DIR / f"{today}.json"

    results = {}
    for kw in KEYWORDS:
        try:
            d = search(kw)
            results[kw] = find_steelr(d)
        except Exception as e:
            print(f"ERR {kw}: {e}", file=sys.stderr)
            results[kw] = {"organic": None, "maps": None, "error": str(e)}

    snapshot = {"date": today, "results": results}
    today_path.write_text(json.dumps(snapshot, indent=2))

    # Compare to previous
    prev_path = latest_prev_snapshot()
    prev_snap = None
    if prev_path and prev_path != today_path:
        prev_snap = json.loads(prev_path.read_text())

    print()
    print("=" * 70)
    print(f"STEELR RANK TRACKER — {today}")
    if prev_snap:
        print(f"Compared against: {prev_snap['date']}")
    else:
        print("First run — no prior snapshot to compare.")
    print("=" * 70)
    print()
    print(f"{'Keyword':<40} {'Organic':<10} {'Maps':<8} Delta")
    print("-" * 70)

    actionable_drops = []
    for kw, r in results.items():
        org = r.get("organic")
        mp = r.get("maps")
        prev_org = prev_snap and prev_snap["results"].get(kw, {}).get("organic")
        prev_mp = prev_snap and prev_snap["results"].get(kw, {}).get("maps")
        line = f"{kw:<40} {format_pos(org):<10} {format_pos(mp):<8}"
        line += delta_arrow(org, prev_org)
        print(line)

        # Flag actionable drops
        if prev_snap:
            if prev_org and (not org or (org - prev_org) >= DROP_THRESHOLD):
                actionable_drops.append(f"{kw}: organic {format_pos(prev_org)} → {format_pos(org)}")
            if prev_mp and (not mp or (mp - prev_mp) >= DROP_THRESHOLD):
                actionable_drops.append(f"{kw}: maps {format_pos(prev_mp)} → {format_pos(mp)}")

    print()
    if actionable_drops:
        print("=" * 70)
        print("ACTIONABLE DROPS (>= 3 positions lost or fell out of top-15)")
        print("=" * 70)
        for d in actionable_drops:
            print(f"  · {d}")
        print()
        print("Review in Google Search Console → Performance.")
        print("Consider: fresh content, updated metadata, internal links.")
        return 2  # non-zero exit to flag in CI

    print("No actionable drops this week. ✓")
    return 0


if __name__ == "__main__":
    sys.exit(main())
