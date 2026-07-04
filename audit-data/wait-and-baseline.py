#!/usr/bin/env python3
"""Poll until the new API key propagates, then run the CrUX+PSI baseline."""
import urllib.request, json, time, os, subprocess, sys

KEY = os.environ["PSI_KEY"]

def key_live():
    url = f"https://chromeuxreport.googleapis.com/v1/records:queryRecord?key={KEY}"
    body = json.dumps({"origin": "https://steelr.co.uk", "formFactor": "PHONE"}).encode()
    req = urllib.request.Request(url, data=body,
        headers={"Content-Type": "application/json"}, method="POST")
    try:
        urllib.request.urlopen(req, timeout=30)
        return True
    except urllib.error.HTTPError as e:
        msg = e.read().decode()
        if "API_KEY_INVALID" in msg:
            return False
        return True  # any non-key error means the key itself is accepted
    except Exception:
        return False

for attempt in range(1, 25):
    if key_live():
        print(f"key live after {attempt} check(s) (~{(attempt-1)*30}s)", flush=True)
        break
    print(f"  attempt {attempt}: key not propagated yet, waiting 30s...", flush=True)
    time.sleep(30)
else:
    print("KEY NEVER PROPAGATED after ~12min — abort", flush=True)
    sys.exit(1)

print("=" * 70, flush=True)
subprocess.run([sys.executable, "audit-data/crux-psi-baseline-20260522.py"],
               check=False)
