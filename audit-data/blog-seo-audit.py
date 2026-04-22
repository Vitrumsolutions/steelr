"""Extract blog-post metadata and flag SEO misalignments."""
import re
from pathlib import Path

POSTS_DIR = Path(r"C:\Users\SOT\Documents\Projects\steelr\src\data\blog\posts")

def extract_field(content: str, field: str) -> str:
    # match `field: "..."` or `field: `template`` — first-line heuristic
    m = re.search(
        rf'^\s*{field}:\s*"((?:[^"\\]|\\.)*)"',
        content,
        re.MULTILINE,
    )
    if m:
        return m.group(1)
    m = re.search(
        rf"^\s*{field}:\s*'((?:[^'\\]|\\.)*)'",
        content,
        re.MULTILINE,
    )
    if m:
        return m.group(1)
    return ""


rows = []
for f in sorted(POSTS_DIR.glob("*.ts")):
    txt = f.read_text(encoding="utf-8", errors="ignore")
    slug = extract_field(txt, "slug") or f.stem
    title = extract_field(txt, "title")
    excerpt = extract_field(txt, "excerpt")
    category = extract_field(txt, "category")
    word_count = len(txt.split())
    rows.append((slug, title, excerpt, category, word_count))


def flag(row):
    slug, title, excerpt, category, wc = row
    flags = []
    if len(title) > 60:
        flags.append(f"TITLE-TOO-LONG({len(title)})")
    if len(title) < 40:
        flags.append(f"TITLE-TOO-SHORT({len(title)})")
    if len(excerpt) > 160:
        flags.append(f"EXCERPT-TOO-LONG({len(excerpt)})")
    if len(excerpt) < 120:
        flags.append(f"EXCERPT-TOO-SHORT({len(excerpt)})")
    # Check title has at least one commercial-intent keyword
    tl = title.lower()
    has_comm = any(k in tl for k in [
        "steel", "bespoke", "luxury", "sr3", "sr4", "security",
        "pas 24", "cost", "uk", "front door"
    ])
    if not has_comm:
        flags.append("NO-COMM-KW")
    if title.lower().startswith(("how ", "what ", "why ", "are ", "do ", "should ")):
        flags.append("QUESTION-STYLE")
    # Word count flag
    if wc < 1500:
        flags.append(f"THIN-CONTENT({wc}w)")
    return flags


print(f"{'#':<3} {'SLUG':<50} {'T-LEN':<6} {'E-LEN':<6} FLAGS")
print("-" * 120)
totals = {"TITLE-TOO-LONG": 0, "TITLE-TOO-SHORT": 0, "EXCERPT-TOO-LONG": 0,
         "EXCERPT-TOO-SHORT": 0, "NO-COMM-KW": 0, "QUESTION-STYLE": 0,
         "THIN-CONTENT": 0}

for i, row in enumerate(rows, 1):
    slug, title, excerpt, cat, wc = row
    fl = flag(row)
    for f in fl:
        k = f.split("(")[0]
        if k in totals:
            totals[k] += 1
    flags_str = " ".join(fl)
    print(f"{i:<3} {slug:<50} {len(title):<6} {len(excerpt):<6} {flags_str}")

print()
print("=" * 60)
print(f"TOTAL POSTS: {len(rows)}")
for k, v in totals.items():
    print(f"  {k}: {v}")

# Print titles of flagged posts for easy review
print()
print("=" * 60)
print("FULL TITLES OF FLAGGED POSTS")
for row in rows:
    slug, title, excerpt, cat, wc = row
    fl = flag(row)
    if fl:
        print(f"  [{','.join(f.split('(')[0] for f in fl)}]")
        print(f"    slug:  {slug}")
        print(f"    title: {title}")
        print()
