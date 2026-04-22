"""Export each post's current metadata."""
import json
import re
from pathlib import Path

POSTS_DIR = Path(r"C:\Users\SOT\Documents\Projects\steelr\src\data\blog\posts")
OUT = Path(r"C:\Users\SOT\Documents\Projects\steelr\audit-data\blog-current-metadata.json")


def extract_single_line(content: str, field: str) -> str:
    for pat in (
        rf'^\s*{field}:\s*"((?:[^"\\]|\\.)*)"',
        rf"^\s*{field}:\s*'((?:[^'\\]|\\.)*)'",
    ):
        m = re.search(pat, content, re.MULTILINE)
        if m:
            return m.group(1)
    return ""


def extract_multiline(content: str, field: str) -> str:
    """Extract a string value that may be split across lines via indentation."""
    # Pattern 1: field: "..." on same line
    single = extract_single_line(content, field)
    if single:
        return single
    # Pattern 2: field:\n    "..." (multi-line formatting)
    m = re.search(
        rf'^\s*{field}:\s*\n\s*"((?:[^"\\]|\\.)*)"',
        content,
        re.MULTILINE,
    )
    if m:
        return m.group(1)
    return ""


rows = []
for f in sorted(POSTS_DIR.glob("*.ts")):
    txt = f.read_text(encoding="utf-8", errors="ignore")
    rows.append({
        "file": f.name,
        "slug": extract_multiline(txt, "slug"),
        "title": extract_multiline(txt, "title"),
        "description": extract_multiline(txt, "description"),
        "category": extract_multiline(txt, "category"),
        "date": extract_multiline(txt, "date"),
        "title_len": len(extract_multiline(txt, "title")),
        "desc_len": len(extract_multiline(txt, "description")),
    })

OUT.write_text(json.dumps(rows, indent=2), encoding="utf-8")
print(f"Wrote {len(rows)} entries")
print()

# Stats + flags
too_long_title = []
too_long_desc = []
too_short_desc = []
em_dash = []
for r in rows:
    if r["title_len"] > 60:
        too_long_title.append(r)
    if r["desc_len"] > 160:
        too_long_desc.append(r)
    if r["desc_len"] < 120:
        too_short_desc.append(r)
    if "—" in r["description"] or "–" in r["description"]:
        em_dash.append(r)

print(f"Titles too long (>60): {len(too_long_title)}")
print(f"Descriptions too long (>160): {len(too_long_desc)}")
print(f"Descriptions too short (<120): {len(too_short_desc)}")
print(f"Descriptions with em/en dash (brand violation): {len(em_dash)}")
