#!/bin/bash

# ====================================================
# WORDPRESS TO /admin MIGRATION SCRIPT
# ====================================================
# This script safely moves WordPress to /admin subdirectory
# USE WITH CAUTION - Test on staging first!
# ====================================================

set -e  # Exit on error

echo "=========================================="
echo "WordPress → /admin Migration Script"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# ====================================================
# 1. PRE-FLIGHT CHECKS
# ====================================================

echo -e "${YELLOW}Step 1: Pre-flight checks${NC}"

# Check if we're in the right directory
if [ ! -f "wp-config.php" ]; then
    echo -e "${RED}Error: wp-config.php not found. Are you in the WordPress root?${NC}"
    exit 1
fi

# Check if admin directory already exists
if [ -d "admin" ]; then
    echo -e "${RED}Error: /admin directory already exists!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Pre-flight checks passed${NC}"
echo ""

# ====================================================
# 2. BACKUP
# ====================================================

echo -e "${YELLOW}Step 2: Creating backup${NC}"

BACKUP_DIR="backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "Backing up files to $BACKUP_DIR..."
cp -r wp-admin wp-content wp-includes *.php "$BACKUP_DIR/" 2>/dev/null || true

echo -e "${GREEN}✓ Backup created at $BACKUP_DIR${NC}"
echo ""

# ====================================================
# 3. CREATE /admin DIRECTORY
# ====================================================

echo -e "${YELLOW}Step 3: Creating /admin directory${NC}"

mkdir -p admin

echo -e "${GREEN}✓ Created /admin directory${NC}"
echo ""

# ====================================================
# 4. MOVE WORDPRESS FILES
# ====================================================

echo -e "${YELLOW}Step 4: Moving WordPress files to /admin${NC}"

# Move core directories
echo "Moving wp-admin..."
mv wp-admin admin/

echo "Moving wp-content..."
mv wp-content admin/

echo "Moving wp-includes..."
mv wp-includes admin/

# Move all PHP files except wp-config.php
echo "Moving PHP files..."
for file in *.php; do
    if [ "$file" != "wp-config.php" ]; then
        mv "$file" admin/
    fi
done

echo -e "${GREEN}✓ WordPress files moved to /admin${NC}"
echo ""

# ====================================================
# 5. UPDATE wp-config.php
# ====================================================

echo -e "${YELLOW}Step 5: Updating wp-config.php${NC}"

# Check current domain
CURRENT_DOMAIN=$(grep "WP_HOME" wp-config.php || echo "")

if [ -z "$CURRENT_DOMAIN" ]; then
    # Add WP_HOME and WP_SITEURL
    echo "Adding WP_HOME and WP_SITEURL to wp-config.php..."
    
    # Add before "That's all, stop editing!"
    sed -i.bak "/That's all/i \\
// Added by migration script\\
define('WP_HOME', 'https://cookmushroom.com/admin');\\
define('WP_SITEURL', 'https://cookmushroom.com/admin');\\
" wp-config.php
    
    echo -e "${GREEN}✓ wp-config.php updated${NC}"
else
    echo -e "${YELLOW}⚠ WP_HOME already defined. Please update manually:${NC}"
    echo "  define('WP_HOME', 'https://cookmushroom.com/admin');"
    echo "  define('WP_SITEURL', 'https://cookmushroom.com/admin');"
fi

echo ""

# ====================================================
# 6. FIX /admin/index.php
# ====================================================

echo -e "${YELLOW}Step 6: Fixing /admin/index.php${NC}"

# Update the require path
if [ -f "admin/index.php" ]; then
    sed -i.bak "s|require.*wp-blog-header.php|require __DIR__ . '/../wp-blog-header.php';|" admin/index.php
    echo -e "${GREEN}✓ /admin/index.php updated${NC}"
else
    echo -e "${RED}⚠ /admin/index.php not found${NC}"
fi

echo ""

# ====================================================
# 7. CREATE .htaccess FOR /admin
# ====================================================

echo -e "${YELLOW}Step 7: Creating /admin/.htaccess${NC}"

cat > admin/.htaccess << 'EOF'
RewriteEngine On
RewriteBase /admin/
RewriteRule ^index\.php$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /admin/index.php [L]

# Block public access (keep APIs accessible)
RewriteCond %{REQUEST_URI} !^/admin
RewriteCond %{REQUEST_URI} !^/wp-json
RewriteCond %{REQUEST_URI} !^/graphql
RewriteCond %{REQUEST_URI} !^/wp-content
RewriteCond %{REQUEST_URI} !^/wp-includes
RewriteRule ^(.*)$ /admin/wp-admin/ [R=302,L]

# Disable directory browsing
Options -Indexes

# Disable XML-RPC
<Files xmlrpc.php>
    order deny,allow
    deny from all
</Files>
EOF

echo -e "${GREEN}✓ /admin/.htaccess created${NC}"
echo ""

# ====================================================
# 8. SUMMARY
# ====================================================

echo ""
echo "=========================================="
echo -e "${GREEN}Migration Complete!${NC}"
echo "=========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Update WordPress settings:"
echo "   - Go to: https://cookmushroom.com/admin/wp-admin"
echo "   - Settings → General"
echo "   - Verify URLs are set to /admin"
echo ""
echo "2. Test WordPress admin:"
echo "   - https://cookmushroom.com/admin/wp-admin"
echo ""
echo "3. Test WordPress API:"
echo "   - https://cookmushroom.com/wp-json"
echo ""
echo "4. Deploy Astro site to root:"
echo "   - npm run build"
echo "   - Upload dist/* to /public_html/"
echo ""
echo "5. Update root .htaccess (see server-config/root-htaccess.conf)"
echo ""
echo -e "${YELLOW}Backup location: $BACKUP_DIR${NC}"
echo ""
echo "=========================================="
