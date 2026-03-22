#!/bin/bash
# run_portfolio.sh
# Script to host the Bikash Portfolio locally using Python 3

echo "Starting Bikash Portfolio server on http://localhost:8084..."
echo "v86 Emulator will boot as Bikash@Spydomain with full boot logs."

# Check if serve.py exists
if [ -f "serve.py" ]; then
    python3 serve.py
else
    echo "Error: serve.py not found in current directory."
    exit 1
fi
