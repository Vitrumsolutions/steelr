#!/usr/bin/env python3
"""
submit_url.py — push a single URL to Google's Indexing API.

Designed for the publish-blog GitHub Actions workflow: after the Node publish
step writes the freshly-published URL to .published-url.txt, this Python step
reads that file, decodes the GSC service account JSON from a temp path, and
submits the URL to Google's Indexing API as a URL_UPDATED notification.

The Indexing API is officially scoped to JobPosting and BroadcastEvent schema
only. For regular pages it works as a freshness ping that encourages Google to
re-crawl. It does not guarantee indexing, but in practice it shortens crawl
latency from days to hours.

Usage in CI:
    GSC_SERVICE_ACCOUNT_FILE=/tmp/gsc.json \\
        python scripts/indexing/submit_url.py https://steelr.co.uk/blog/<slug>

Usage from .published-url.txt:
    GSC_SERVICE_ACCOUNT_FILE=/tmp/gsc.json \\
        python scripts/indexing/submit_url.py --from-file .published-url.txt

Exit codes:
    0  success (HTTP 200 from Google)
    1  bad arguments or missing credentials file
    2  Google API call failed (will be reported but the workflow can choose
       to continue rather than fail the publish on this)
"""
import argparse
import os
import sys
from pathlib import Path


def get_service(credentials_file: Path):
    """Build the Indexing API client with service account credentials."""
    if not credentials_file.exists():
        print(f"ERROR: credentials file not found: {credentials_file}")
        sys.exit(1)
    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except ImportError:
        print("ERROR: install google-auth google-api-python-client first.")
        print("  pip install google-auth google-api-python-client")
        sys.exit(1)
    creds = service_account.Credentials.from_service_account_file(
        str(credentials_file),
        scopes=["https://www.googleapis.com/auth/indexing"],
    )
    return build("indexing", "v3", credentials=creds, cache_discovery=False)


def submit_url(service, url: str) -> tuple[bool, str]:
    """Submit a single URL_UPDATED notification. Returns (ok, message)."""
    try:
        from googleapiclient.errors import HttpError
    except ImportError:
        return False, "googleapiclient not installed"
    try:
        request = service.urlNotifications().publish(
            body={"url": url, "type": "URL_UPDATED"}
        )
        response = request.execute()
        return True, f"submitted ({response.get('urlNotificationMetadata', {}).get('latestUpdate', {}).get('type', 'ok')})"
    except HttpError as exc:
        status = exc.resp.status if exc.resp else "?"
        return False, f"HTTP {status}: {exc}"
    except Exception as exc:
        return False, f"{type(exc).__name__}: {exc}"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Submit a single URL to Google's Indexing API."
    )
    parser.add_argument("url", nargs="?", help="The URL to submit.")
    parser.add_argument(
        "--from-file",
        help="Read the URL from this file (used by the publish-blog workflow).",
    )
    args = parser.parse_args()

    credentials_path = os.environ.get("GSC_SERVICE_ACCOUNT_FILE")
    if not credentials_path:
        print("ERROR: GSC_SERVICE_ACCOUNT_FILE env var not set.")
        print("Point it at a Google Cloud service account JSON file.")
        return 1

    if args.from_file:
        path = Path(args.from_file)
        if not path.exists():
            print(f"INFO: {path} not found. No URL to submit. Exiting cleanly.")
            return 0
        url = path.read_text().strip()
        if not url:
            print(f"INFO: {path} is empty. No URL to submit. Exiting cleanly.")
            return 0
    elif args.url:
        url = args.url
    else:
        parser.error("Provide a URL or --from-file <path>.")
        return 1

    print(f"Submitting to Google Indexing API: {url}")
    service = get_service(Path(credentials_path))
    ok, message = submit_url(service, url)
    if ok:
        print(f"  OK: {message}")
        return 0
    print(f"  FAIL: {message}")
    return 2


if __name__ == "__main__":
    sys.exit(main())
