#!/bin/bash

# Setup script for Cloudflare Worker cron trigger
# This script helps you deploy the worker and configure it

set -e

echo "🚀 Cloudflare Worker Cron Setup for CookMushroom"
echo "================================================"
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler is not installed."
    echo ""
    echo "Install it with:"
    echo "  npm install -g wrangler"
    echo ""
    exit 1
fi

echo "✅ Wrangler is installed"
echo ""

# Check if logged in
if ! wrangler whoami &> /dev/null; then
    echo "🔑 Please login to Cloudflare:"
    wrangler login
else
    echo "✅ Already logged in to Cloudflare"
fi

echo ""
echo "📦 Deploying worker..."
cd "$(dirname "$0")"
wrangler deploy

echo ""
echo "✅ Worker deployed successfully!"
echo ""
echo "🔐 Now set up your GitHub token:"
echo ""
echo "1. Go to: https://github.com/settings/tokens"
echo "2. Generate a new token (classic)"
echo "3. Select scope: workflow"
echo "4. Copy the token"
echo ""
read -p "Press Enter when you have your GitHub token ready..."
echo ""

# Set GitHub token
wrangler secret put GITHUB_TOKEN

echo ""
echo "✅ Setup complete!"
echo ""
echo "📊 View your worker:"
echo "   https://dash.cloudflare.com"
echo ""
echo "🧪 Test manual trigger:"
WORKER_URL=$(wrangler deployments list 2>&1 | grep "https://" | head -1 | awk '{print $1}')
if [ -n "$WORKER_URL" ]; then
    echo "   curl -X POST $WORKER_URL/trigger"
else
    echo "   curl -X POST https://cookmushroom-rebuild-cron.<your-subdomain>.workers.dev/trigger"
fi
echo ""
echo "⏰ Cron schedule: Every 12 hours at 00:00 and 12:00 UTC"
echo ""
echo "📚 See cloudflare-worker/README.md for more info"
