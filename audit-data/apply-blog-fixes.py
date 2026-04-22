"""Apply the SEO fixes from blog-fixes.json to each post .ts file.

For each post:
  - If new_title is set, replace the current title with the new one.
  - If new_description is set, replace the current description with the new one.

Uses exact-string matching against the known current value to avoid accidents.
"""
import json
import re
from pathlib import Path

POSTS_DIR = Path(r"C:\Users\SOT\Documents\Projects\steelr\src\data\blog\posts")
FIXES = Path(r"C:\Users\SOT\Documents\Projects\steelr\audit-data\blog-fixes.json")

data = json.loads(FIXES.read_text(encoding="utf-8"))

titles_changed = 0
descs_changed = 0
errors = []

for item in data:
    slug = item["slug"]
    new_title = item.get("new_title")
    new_desc = item.get("new_description")
    current_title = item.get("current_title")
    current_desc = item.get("current_description")

    # Find the file for this slug
    candidates = list(POSTS_DIR.glob(f"{slug}.ts"))
    if not candidates:
        errors.append(f"No file for slug {slug}")
        continue
    path = candidates[0]
    txt = path.read_text(encoding="utf-8")

    orig = txt

    # Replace title if asked
    if new_title and current_title:
        old_line = f'title: "{current_title}"'
        new_line = f'title: "{new_title}"'
        if old_line in txt:
            txt = txt.replace(old_line, new_line)
            titles_changed += 1
        else:
            errors.append(f"{slug}: title line not found as literal: {old_line[:60]}...")

    # Replace description — may be single-line or multi-line literal
    if new_desc and current_desc:
        # Try single-line form first
        old_single = f'description: "{current_desc}"'
        new_single = f'description:\n    "{new_desc}"'  # always write as multi-line formatted
        if old_single in txt:
            txt = txt.replace(old_single, new_single)
            descs_changed += 1
        else:
            # Try multi-line form
            # Match: description:\n  "..."
            # Using regex that spans lines but anchored on current_desc exact content
            esc_desc = re.escape(current_desc)
            pattern = rf'description:\s*\n\s*"{esc_desc}"'
            new_ml = f'description:\n    "{new_desc}"'
            new_txt, n = re.subn(pattern, new_ml, txt)
            if n == 1:
                txt = new_txt
                descs_changed += 1
            else:
                errors.append(f"{slug}: description not matched (single-line or multi-line)")

    if txt != orig:
        path.write_text(txt, encoding="utf-8")

print(f"Titles updated: {titles_changed}")
print(f"Descriptions updated: {descs_changed}")
if errors:
    print(f"Errors ({len(errors)}):")
    for e in errors:
        print("  ", e)
