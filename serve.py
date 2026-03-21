import http.server
import socketserver
import os

PORT = 8082
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # These headers are required for SharedArrayBuffer to work in modern browsers
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        super().end_headers()

    def do_GET(self):
        # Special handler for the /diag endpoint to avoid 404 logs
        if self.path.startswith('/diag'):
            self.send_response(204)
            self.end_headers()
            return
        return super().do_GET()

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print("COOP/COEP headers enabled for v86 SharedArrayBuffer support.")
    httpd.serve_forever()
