# 🚀 Cloudflare Pages Deployment Guide

## Overview

Deploy your Astro site to Cloudflare Pages while keeping WordPress as the headless CMS on your current server.

## Architecture After Deployment

```
Cloudflare Pages          → Astro static site (blazing fast)
cookmushroom.com/admin    → WordPress (content management)
cookmushroom.com/wp-json  → WordPress REST API (content source)
```

---

## Part 1: Prepare WordPress (Do This First)

### Option A: Keep WordPress at Root (Simplest)

1. **Keep WordPress running at cookmushroom.com**
2. **Ensure REST API is accessible**
3. **Test API endpoint:**
   ```bash
   curl https://cookmushroom.com/wp-json/wp/v2/posts
   ```

**Pros:** No changes needed to WordPress
**Cons:** WordPress still handles some requests (slower)

### Option B: Move WordPress to /admin (Recommended)

This is cleaner but requires server access.

**SSH to your server:**

```bash
ssh your_username@cookmushroom.com
cd public_html
```

**Run migration script:**

```bash
# Download the migration script
curl -O https://raw.githubusercontent.com/your-repo/migrate-to-admin.sh
chmod +x migrate-to-admin.sh
./migrate-to-admin.sh
```

**Or manually:**

```bash
# 1. Create admin directory
mkdir admin

# 2. Move WordPress files
mv wp-* admin/
mv index.php admin/
mv .htaccess admin/
mv wp-includes admin/
mv wp-content admin/

# 3. Update wp-config.php
nano admin/wp-config.php
```

**Add these lines before `/* That's all, stop editing! */`:**

```php
define('WP_HOME', 'https://cookmushroom.com');
define('WP_SITEURL', 'https://cookmushroom.com/admin');
define('WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content');
define('WP_CONTENT_URL', 'https://cookmushroom.com/admin/wp-content');
```

**Update .htaccess in /admin:**

```apache
# BEGIN WordPress
RewriteEngine On
RewriteBase /admin/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /admin/index.php [L]
# END WordPress
```

**Test:**
- Admin: https://cookmushroom.com/admin/wp-admin
- API: https://cookmushroom.com/admin/wp-json/wp/v2

---

## Part 2: Build Astro Site

### 1. Update Environment Configuration

**Update `.env` (if you moved WordPress to /admin):**

```env
WP_API_URL=https://cookmushroom.com/admin/wp-json/wp/v2
```

**Or keep it as is (if WordPress stays at root):**

```env
WP_API_URL=https://cookmushroom.com/wp-json/wp/v2
```

### 2. Build Static Site

```bash
npm run build
```

This creates the `dist/` folder with your static site.

### 3. Test Build Locally

```bash
npm run preview
```

Visit http://localhost:4321 to verify everything works.

---

## Part 3: Deploy to Cloudflare Pages

### Method 1: Direct Upload (Fastest)

#### Step 1: Create Cloudflare Account

1. Go to https://dash.cloudflare.com/sign-up
2. Create free account

#### Step 2: Create Pages Project

1. Go to **Workers & Pages** → **Create application** → **Pages**
2. Click **Upload assets**
3. Name your project: `cookmushroom`

#### Step 3: Upload Build

```bash
# From your project directory
cd dist
# Zip the contents (not the dist folder itself!)
zip -r ../cookmushroom-build.zip .
cd ..
```

4. Upload `cookmushroom-build.zip` to Cloudflare Pages
5. Click **Deploy site**

#### Step 4: Configure Environment Variables

1. In Cloudflare Pages dashboard, go to **Settings** → **Environment variables**
2. Add:
   - **Name:** `WP_API_URL`
   - **Value:** `https://cookmushroom.com/wp-json/wp/v2` (or `/admin/wp-json/wp/v2`)
   - **Environment:** Production & Preview

#### Step 5: Custom Domain

1. Go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `cookmushroom.com`
4. Click **Continue**
5. Cloudflare will provide DNS records

**Update DNS:**
- Remove existing A record for `@` (root domain)
- Add CNAME record:
  - **Name:** `@`
  - **Target:** `cookmushroom.pages.dev` (your Cloudflare Pages URL)
  - **Proxy status:** Proxied (orange cloud)

**Wait 5-10 minutes for DNS propagation**

### Method 2: GitHub Integration (Automated)

#### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial Astro + WordPress hybrid setup"

# Create GitHub repo at github.com/your-username/cookmushroom
git remote add origin https://github.com/YOUR_USERNAME/cookmushroom.git
git push -u origin main
```

#### Step 2: Connect to Cloudflare

1. Go to **Workers & Pages** → **Create application** → **Pages**
2. Click **Connect to Git**
3. Select your repository: `cookmushroom`
4. Click **Begin setup**

#### Step 3: Configure Build Settings

**Framework preset:** Astro

**Build settings:**
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- **Node version:** 18 or higher

**Environment variables:**
- `WP_API_URL` = `https://cookmushroom.com/wp-json/wp/v2`

#### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait 2-3 minutes for build
3. Your site is live at `cookmushroom.pages.dev`

#### Step 5: Add Custom Domain

Same as Method 1, Step 5 above.

---

## Part 4: Configure CORS (Important!)

If you get API errors, WordPress needs to allow requests from Cloudflare.

**Add to WordPress `wp-config.php`:**

```php
// Allow Cloudflare Pages to access API
header('Access-Control-Allow-Origin: https://cookmushroom.com');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

**Or use a plugin:**
1. Install "WP REST API Controller" plugin
2. Enable CORS for your domain

---

## Part 5: Cloudflare Optimizations

### 1. Enable Caching

In Cloudflare dashboard:
1. Go to **Caching** → **Configuration**
2. Set **Browser Cache TTL:** 4 hours
3. Enable **Always Online**

### 2. Enable Speed Features

1. **Auto Minify:** Turn on HTML, CSS, JS
2. **Brotli:** Enable
3. **HTTP/3:** Enable
4. **0-RTT Connection Resumption:** Enable

### 3. Set Page Rules (Optional)

1. Go to **Rules** → **Page Rules**
2. Add rule for `cookmushroom.com/admin/*`
   - **Cache Level:** Bypass
   - **Security Level:** High
3. Add rule for `cookmushroom.com/*`
   - **Cache Level:** Standard
   - **Edge Cache TTL:** 4 hours

---

## Part 6: Continuous Deployment

### With GitHub (Automatic)

Every time you push to GitHub, Cloudflare automatically:
1. Pulls latest code
2. Runs `npm run build`
3. Deploys to production

**To deploy:**
```bash
git add .
git commit -m "Update content"
git push
```

### Without GitHub (Manual)

1. Run `npm run build` locally
2. Go to Cloudflare Pages dashboard
3. Click **Create new deployment**
4. Upload `dist` folder

---

## Part 7: WordPress Setup Summary

### Essential WordPress Settings

1. **Permalinks:** Settings → Permalinks → "Post name"
2. **REST API:** Should be enabled by default (test with curl)
3. **Media:** Upload images normally in WordPress
4. **Posts:** Create posts normally
5. **Pages:** Create pages normally

### WordPress Admin Access

- **Option A (root):** https://cookmushroom.com/wp-admin
- **Option B (admin):** https://cookmushroom.com/admin/wp-admin

### Updating Content

1. Log into WordPress admin
2. Create/edit posts
3. Cloudflare fetches from API automatically
4. **If using GitHub:** Rebuild Astro site to update static pages
   ```bash
   git commit --allow-empty -m "Trigger rebuild"
   git push
   ```

---

## Troubleshooting

### API Not Loading

**Check:**
```bash
curl https://cookmushroom.com/wp-json/wp/v2/posts
```

**Fix:**
1. Verify WP_API_URL in Cloudflare environment variables
2. Check WordPress permalink settings
3. Enable CORS (see Part 4)

### Images Not Displaying

**WordPress images need full URLs:**
- Correct: `https://cookmushroom.com/wp-content/uploads/...`
- Wrong: `/wp-content/uploads/...`

**Fix in WordPress:**
- Settings → General
- Ensure **WordPress Address** and **Site Address** are correct

### Build Fails

**Check Node version:**
```bash
# Cloudflare Pages requires Node 18+
# Set in Cloudflare: Environment variables → NODE_VERSION = 18
```

### DNS Not Updating

- Wait 10-15 minutes for propagation
- Clear browser cache (Cmd+Shift+R)
- Use https://dnschecker.org to verify

---

## Cost

**Cloudflare Pages:** FREE
- Unlimited bandwidth
- Unlimited requests
- Free SSL certificate
- 500 builds/month
- 5,000 builds/month (paid plan: $20/mo)

**Your Current Hosting:** Keep for WordPress
- WordPress needs PHP/MySQL
- Stays on current server

---

## Performance Comparison

| Metric | Before (WordPress) | After (Cloudflare + Astro) |
|--------|-------------------|---------------------------|
| Time to First Byte | 800ms - 2s | 50-150ms |
| Page Load | 2-4s | 300-800ms |
| Global CDN | No | Yes (200+ locations) |
| Lighthouse Score | 60-80 | 90-100 |

---

## Need Help?

1. Cloudflare Discord: https://discord.gg/cloudflaredev
2. Astro Discord: https://astro.build/chat
3. Check Cloudflare Pages docs: https://developers.cloudflare.com/pages/

---

## Quick Reference Commands

```bash
# Build site
npm run build

# Test build locally
npm run preview

# Deploy via GitHub
git add . && git commit -m "Update" && git push

# Check API
curl https://cookmushroom.com/wp-json/wp/v2/posts

# Check build size
du -sh dist/
```
