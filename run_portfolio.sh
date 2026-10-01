#!/bin/bash
set -e

cd "$(dirname "$0")"

PORT=${PORTFOLIO_PORT:-8080}
LAN_IP=$(ip -4 route get 1.1.1.1 2>/dev/null | awk '{for (i = 1; i <= NF; i++) if ($i == "src") {print $(i + 1); exit}}')

docker compose up --build -d

echo "Portfolio is available at:"
echo "  http://localhost:${PORT}"
if [ -n "$LAN_IP" ]; then
    echo "  http://${LAN_IP}:${PORT} (from another device on this network)"
else
    echo "Find this device's Wi-Fi/Ethernet IPv4 address, then open http://<LAN-IP>:${PORT}"
fi
