"""
Augment pins.csv with Pinterest-ready descriptions.

Pinterest descriptions rank better when they include natural long-tail search
phrases alongside the product-specific detail. This script enriches the
existing pins.csv with:
  - description (300-500 chars, search-optimised)
  - alt_text (for accessibility)
  - hashtags_none (Pinterest ignores hashtags inside descriptions, so we omit them)

Run: python social/scripts/build-pin-descriptions.py
"""
from pathlib import Path
import csv

ROOT = Path(__file__).resolve().parents[2]
CSV_IN = ROOT / "social" / "pinterest" / "pins.csv"
CSV_OUT = ROOT / "social" / "pinterest" / "pins-with-descriptions.csv"

SEARCH_PHRASES_BY_BOARD = {
    "ornate": "ornate front door ideas, grand entrance inspiration, ornate steel door, period door inspiration",
    "traditional": "traditional front door UK, period property front door, traditional steel front door, heritage home entrance",
    "contemporary": "contemporary front door ideas, modern steel front door, architect front door, minimalist entrance",
    "panelled": "panelled front door ideas, classic panelled entrance, panelled steel door inspiration",
    "colour-ideas": "coloured front door ideas, bold front door colours, statement door colour inspiration",
    "security": "high security front door, secured by design, SR3 steel door, SR4 LPS 1175",
}


def build_description(title, subtitle, board):
    """Generate a Pinterest description for one pin."""
    search_phrases = SEARCH_PHRASES_BY_BOARD.get(board, "bespoke steel front door")

    base = f"{title}. "
    if subtitle:
        base += f"{subtitle}. "
    base += (
        "UK-manufactured bespoke steel entrance door, SR3 certified to BS EN 1627 Class 3 "
        "as standard with SR4 (LPS 1175) commercial-grade upgrade available. "
        "Secured by Design approved, PAS 24 compliant, FD30S fire rated. "
        "Any RAL colour specification, matched inside and out. "
        f"Inspiration for: {search_phrases}. "
        "Private consultations at steelr.co.uk."
    )
    return base


def build_alt_text(title, subtitle):
    parts = [title]
    if subtitle:
        parts.append(subtitle)
    return ". ".join(parts) + ". SteelR bespoke steel entrance door."


def main():
    if not CSV_IN.exists():
        print(f"ERROR: {CSV_IN} not found. Run build-pinterest.py first.")
        return

    with CSV_IN.open("r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        pins = list(reader)

    # Load title subtitle info from build-pinterest.py by re-reading source
    # Actually pins.csv already has title + board, we'll build from that
    rows = []
    for pin in pins:
        # Infer subtitle from filename/board if not in csv
        # (pins.csv doesn't carry subtitle, so we supply generic by board)
        subtitle_default = {
            "ornate": "Bespoke Craftsmanship",
            "traditional": "Heritage Detailing",
            "contemporary": "Architect Ready",
            "panelled": "Classical Proportion",
            "colour-ideas": "Bespoke RAL Colour",
            "security": "Secured by Design",
        }.get(pin["board"], "UK Manufactured")

        description = build_description(pin["title"], subtitle_default, pin["board"])
        alt = build_alt_text(pin["title"], subtitle_default)

        rows.append({
            **pin,
            "description": description,
            "alt_text": alt,
            "char_count": len(description),
        })

    with CSV_OUT.open("w", encoding="utf-8", newline="") as f:
        fieldnames = list(rows[0].keys())
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    avg_len = sum(r["char_count"] for r in rows) / len(rows)
    print(f"Augmented {len(rows)} pins with descriptions.")
    print(f"Avg description length: {avg_len:.0f} chars")
    print(f"Output: {CSV_OUT}")


if __name__ == "__main__":
    main()
