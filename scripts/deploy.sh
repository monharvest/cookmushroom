#!/bin/bash

# ====================================================
# DEPLOYMENT SCRIPT - Astro to Production
# ====================================================
# This script builds and deploys your Astro site
# ====================================================

set -e

echo "=========================================="
echo "Deploying Astro to cookmushroom.com"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# ====================================================
# 1. BUILD ASTRO
# ====================================================

echo -e "${YELLOW}Step 1: Building Astro site${NC}"

npm run build

echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# ====================================================
# 2. TEST BUILD LOCALLY (optional)
# ====================================================

echo -e "${YELLOW}Step 2: Testing build locally${NC}"
echo "Preview at: http://localhost:4321"
echo "Press Ctrl+C when done testing..."
echo ""

# Uncomment to auto-preview:
# npm run preview &
# PREVIEW_PID=$!
# sleep 5
# kill $PREVIEW_PID

# ====================================================
# 3. DEPLOYMENT OPTIONS
# ====================================================

echo ""
echo "=========================================="
echo "Deployment Options:"
echo "=========================================="
echo ""
echo "Option 1: FTP/SFTP Upload"
echo "  - Upload contents of dist/ to /public_html/"
echo "  - Keep /admin directory intact"
echo "  - Update .htaccess (see server-config/root-htaccess.conf)"
echo ""
echo "Option 2: cPanel File Manager"
echo "  - Zip the dist/ folder"
echo "  - Upload to server via cPanel"
echo "  - Extract in /public_html/"
echo ""
echo "Option 3: SSH/rsync (fastest)"
echo "  - See below for rsync command"
echo ""
echo "=========================================="
echo ""

# ====================================================
# 4. RSYNC DEPLOYMENT (if SSH access available)
# ====================================================

echo "Rsync command (requires SSH access):"
echo ""
echo "rsync -avz --delete dist/ user@cookmushroom.com:/public_html/ \\"
echo "  --exclude='admin' \\"
echo "  --exclude='wp-config.php' \\"
echo "  --exclude='.htaccess'"
echo ""
echo "=========================================="

# Uncomment and configure for auto-deployment:
# SERVER_USER="your_username"
# SERVER_HOST="cookmushroom.com"
# SERVER_PATH="/home/your_username/public_html"
#
# rsync -avz --delete \
#   --exclude='admin' \
#   --exclude='wp-config.php' \
#   --exclude='.htaccess' \
#   dist/ $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

echo ""
echo -e "${GREEN}Build ready for deployment!${NC}"
echo "Files located in: ./dist/"
echo ""
