"""
Vocabulary World - Mahalliy Server Skripti
Ushbu skript dasturni brauzerda avtomatik tarzda ochib beradi.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

# Windows konsolida UTF-8 ni qo'llab-quvvatlash
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def main():
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)

    server_address = ("", PORT)
    try:
        httpd = socketserver.TCPServer(server_address, CustomHandler)
        actual_port = PORT
    except OSError:
        httpd = socketserver.TCPServer(("", PORT + 1), CustomHandler)
        actual_port = PORT + 1

    url = f"http://localhost:{actual_port}/index.html"
    print("=" * 60)
    print("  [*] Vocabulary World Platformasi Muvaffaqiyatli Ishga Tushdi!")
    print(f"  [*] Manzil: {url}")
    print("  [*] To'xtatish uchun: Ctrl + C bosing")
    print("=" * 60)

    # Brauzerda avtomatik ochish
    webbrowser.open(url)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer to'xtatildi.")
        httpd.server_close()
        sys.exit(0)

if __name__ == "__main__":
    main()
