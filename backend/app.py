import json
import os
import re
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


HOST = os.environ.get("HOST", "0.0.0.0")
PORT = int(os.environ.get("PORT", "8000"))
CONTACTS_FILE = Path(os.environ.get("CONTACTS_FILE", "/data/messages.jsonl"))
MAX_REQUEST_BYTES = 16 * 1024
EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


class ApiHandler(BaseHTTPRequestHandler):
    def send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/api/health":
            self.send_json(200, {"status": "ok", "service": "portfolio-backend"})
            return
        self.send_json(404, {"error": "Not found"})

    def do_POST(self):
        if self.path != "/api/contact":
            self.send_json(404, {"error": "Not found"})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self.send_json(400, {"error": "Invalid content length"})
            return
        if length <= 0 or length > MAX_REQUEST_BYTES:
            self.send_json(413, {"error": "Message is empty or too large"})
            return

        try:
            payload = json.loads(self.rfile.read(length))
        except (json.JSONDecodeError, UnicodeDecodeError):
            self.send_json(400, {"error": "Expected a JSON request"})
            return
        if not isinstance(payload, dict):
            self.send_json(400, {"error": "Expected a JSON object"})
            return

        name = str(payload.get("name", "")).strip()
        email = str(payload.get("email", "")).strip()
        message = str(payload.get("message", "")).strip()
        if not name or len(name) > 120:
            self.send_json(400, {"error": "Name is required and must be 120 characters or fewer"})
            return
        if len(email) > 254 or not EMAIL_RE.fullmatch(email):
            self.send_json(400, {"error": "Enter a valid email address"})
            return
        if not message or len(message) > 5000:
            self.send_json(400, {"error": "Message is required and must be 5000 characters or fewer"})
            return

        record = {
            "received_at": datetime.now(timezone.utc).isoformat(),
            "name": name,
            "email": email,
            "message": message,
        }
        try:
            CONTACTS_FILE.parent.mkdir(parents=True, exist_ok=True)
            with CONTACTS_FILE.open("a", encoding="utf-8") as contacts:
                contacts.write(json.dumps(record, ensure_ascii=False) + "\n")
        except OSError:
            self.send_json(500, {"error": "Could not save your message"})
            return

        self.send_json(201, {"message": "Your message was received and saved"})

    def log_message(self, format, *args):
        if self.path == "/api/health":
            return
        print("%s - %s" % (self.address_string(), format % args))


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), ApiHandler)
    print(f"Portfolio API listening on {HOST}:{PORT}")
    server.serve_forever()
