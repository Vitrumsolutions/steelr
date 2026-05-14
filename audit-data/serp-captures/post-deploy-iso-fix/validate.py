import re, json, os, sys

base = os.path.dirname(os.path.abspath(__file__))

def find_key(obj, key):
    """Recursively find first occurrence of key in nested dict/list."""
    if isinstance(obj, dict):
        if key in obj:
            return obj[key]
        for v in obj.values():
            r = find_key(v, key)
            if r is not None:
                return r
    elif isinstance(obj, list):
        for v in obj:
            r = find_key(v, key)
            if r is not None:
                return r
    return None

def find_all(obj, key, results=None):
    if results is None:
        results = []
    if isinstance(obj, dict):
        if key in obj:
            results.append(obj[key])
        for v in obj.values():
            find_all(v, key, results)
    elif isinstance(obj, list):
        for v in obj:
            find_all(v, key, results)
    return results

for label, fname in [("HOME (https://steelr.co.uk)", "home.html"),
                     ("SECSPEC (https://steelr.co.uk/security-specification)", "sec.html")]:
    path = os.path.join(base, fname)
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    blocks = re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.DOTALL)
    print("=" * 70)
    print(f"{label}")
    print(f"  JSON-LD blocks: {len(blocks)}")

    # canonical link
    cans = re.findall(r'<link\s+rel="canonical"\s+href="([^"]+)"', html)
    print(f"  Canonical: {cans}")

    for i, b in enumerate(blocks):
        try:
            data = json.loads(b)
            t = data.get('@type', 'n/a') if isinstance(data, dict) else f'array[{len(data)}]'
            print(f"\n  Block {i}: PARSE OK, @type={t}")

            # collect all hasCredential occurrences
            all_creds = []
            find_all(data, 'hasCredential', all_creds)
            if all_creds:
                for ci, creds in enumerate(all_creds):
                    if isinstance(creds, list):
                        print(f"    hasCredential[{ci}]: {len(creds)} entries")
                        for j, c in enumerate(creds):
                            if isinstance(c, dict):
                                name = c.get('name', '?')
                                ctype = c.get('credentialCategory', c.get('@type', '?'))
                                print(f"      [{j}] name={name!r}  category={ctype!r}")

            # url field if present
            url = data.get('url') if isinstance(data, dict) else None
            if url:
                print(f"    url: {url}")
        except Exception as e:
            print(f"\n  Block {i}: PARSE ERROR — {e}")
            print(f"    snippet: {b[:300]}")

    # quick scan for stray :2015 in raw HTML
    iso2015 = len(re.findall(r'ISO\s+\d+:2015', html))
    print(f"\n  Raw HTML 'ISO ####:2015' occurrences: {iso2015}")
