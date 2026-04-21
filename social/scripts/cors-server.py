"""Simple CORS-enabled HTTP server so Pinterest/IG tabs can fetch pin files.

Run from any folder:
    python social/scripts/cors-server.py [port]

Default port 8766. Kill with Ctrl+C.
"""
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8766
    print(f"CORS server on http://127.0.0.1:{port}", flush=True)
    HTTPServer(("127.0.0.1", port), CORSRequestHandler).serve_forever()
