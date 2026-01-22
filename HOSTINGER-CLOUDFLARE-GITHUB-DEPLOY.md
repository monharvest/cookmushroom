# 🚀 Deploy Astro to Cloudflare Pages (Hostinger + GitHub)

## Your Current Setup

✅ WordPress on Hostinger cPanel at `cookmushroom.com`  
✅ Domain already on Cloudflare  
✅ Want to deploy via GitHub  

Perfect! This is the ideal setup. Here's exactly what to do:

---

## Part 1: Prepare WordPress on Hostinger (Choose One)

### Option A: Keep WordPress at Root (Simplest)

**Pros:** No changes needed  
**Cons:** WordPress still at main domain

Just make sure REST API is accessible:
```
https://cookmushroom.com/wp-json/wp/v2/posts
```

**Skip to Part 2 if using this option.**

### Option B: Move WordPress to /admin (Recommended)

This frees up the root domain for Astro.

#### Via cPanel File Manager:

1. **Login to Hostinger cPanel**
2. **Go to File Manager** → `public_html`
3. **Create New Folder:** `admin`
4. **Select all WordPress files** (NOT the admin folder you just created):
   - `wp-admin` folder
   - `wp-content` folder
   - `wp-includes` folder
   - `index.php`
   - `wp-config.php`
   - All `wp-*.php` files
   - `.htaccess`
5. **Move** (not copy) all selected files to the `admin` folder

#### Update WordPress Configuration:

1. **Edit** `/admin/wp-config.php`
2. **Add these lines** BEFORE `/* That's all, stop editing! */`:

```php
define('WP_HOME', 'https://cookmushroom.com');
define('WP_SITEURL', 'https://cookmushroom.com/admin');
define('WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content');
define('WP_CONTENT_URL', 'https://cookmushroom.com/admin/wp-content');
```

3. **Save** the file

#### Update .htaccess in /admin:

1. **Edit** `/admin/.htaccess`
2. **Replace content** with:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /admin/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /admin/index.php [L]
</IfModule>
# END WordPress
```

3. **Save** the file

#### Test WordPress:

- **Admin:** `https://cookmushroom.com/admin/wp-admin`
- **API:** `https://cookmushroom.com/admin/wp-json/wp/v2/posts`

**If you can't login:** Go to phpMyAdmin and update these values in `wp_options` table:
- `siteurl` → `https://cookmushroom.com/admin`
- `home` → `https://cookmushroom.com`

---

## Part 2: Update Astro Environment

### If WordPress is at ROOT:
Keep `.env` as is:
```env
WP_API_URL=https://cookmushroom.com/wp-json/wp/v2
```

### If WordPress is at /admin:
Update `.env`:
```env
WP_API_URL=https://cookmushroom.com/admin/wp-json/wp/v2
```

---

## Part 3: Test Build Locally

```bash
npm run build
npm run preview
```

Visit `http://localhost:4321` and verify:
- ✅ Homepage loads
- ✅ Posts display
- ✅ Images appear
- ✅ Blog page works
- ✅ Individual posts load

---

## Part 4: Push to GitHub

### Step 1: Create .gitignore

Make sure you have a `.gitignore` file:

```bash
# Check if .gitignore exists
cat .gitignore
```

If it doesn't exist or is missing items, create/update it:

```gitignore
# dependencies
node_modules/

# build output
dist/
.astro/

# environment
.env
.env.production

# macOS
.DS_Store

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
```

### Step 2: Initialize Git

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial Astro + WordPress hybrid setup"
```

### Step 3: Create GitHub Repository

1. **Go to** [github.com/new](https://github.com/new)
2. **Repository name:** `cookmushroom`
3. **Visibility:** Private (recommended) or Public
4. **DO NOT** initialize with README (we already have code)
5. **Click** "Create repository"

### Step 4: Push to GitHub

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/cookmushroom.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

---

## Part 5: Deploy to Cloudflare Pages

### Step 1: Login to Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Login (same account managing your domain)

### Step 2: Create Pages Project

1. Click **Workers & Pages** in the left sidebar
2. Click **Create application**
3. Select **Pages** tab
4. Click **Connect to Git**

### Step 3: Authorize GitHub

1. Click **Connect GitHub**
2. Authorize Cloudflare to access your repositories
3. Select **All repositories** or just `cookmushroom`
4. Click **Install & Authorize**

### Step 4: Configure Build

1. **Select repository:** `cookmushroom`
2. Click **Begin setup**

**Build settings:**
- **Project name:** `cookmushroom` (or any name)
- **Production branch:** `main`
- **Framework preset:** Select **Astro**
- **Build command:** `npm run build` (auto-filled)
- **Build output directory:** `dist` (auto-filled)
- **Root directory:** `/` (leave empty)

**Environment variables (IMPORTANT):**
Click **Add variable** and add:

**If WordPress at root:**
- **Variable name:** `WP_API_URL`
- **Value:** `https://cookmushroom.com/wp-json/wp/v2`

**If WordPress at /admin:**
- **Variable name:** `WP_API_URL`
- **Value:** `https://cookmushroom.com/admin/wp-json/wp/v2`

### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait 2-3 minutes for the build
3. Watch the build logs
4. ✅ You'll see "Success! Deployed to [your-project].pages.dev"

---

## Part 6: Connect Your Custom Domain

### Step 1: Add Custom Domain to Pages

1. In Cloudflare Pages dashboard, click your project
2. Go to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter `cookmushroom.com`
5. Click **Continue**

### Step 2: Update DNS Records

Since your domain is already on Cloudflare, this is easy!

1. **Go to** DNS management: **Websites** → `cookmushroom.com` → **DNS** → **Records**

2. **Find the existing A record** for `@` (or root/apex)

3. **Delete or update it:**
   - If it's an **A record** pointing to Hostinger IP → **Delete it**
   - We'll replace it with a CNAME

4. **Add new CNAME record:**
   - **Type:** CNAME
   - **Name:** `@` (or root)
   - **Target:** `cookmushroom.pages.dev` (your Pages URL, Cloudflare will show you)
   - **Proxy status:** ✅ Proxied (orange cloud icon)
   - **TTL:** Auto

5. Click **Save**

**Note:** Cloudflare might automatically create the CNAME when you add the custom domain. Check if it's already there!

### Step 3: Handle www subdomain (Optional)

If you want `www.cookmushroom.com` to work too:

1. **Add CNAME record:**
   - **Type:** CNAME
   - **Name:** `www`
   - **Target:** `cookmushroom.pages.dev`
   - **Proxy status:** ✅ Proxied
   - **TTL:** Auto

2. In Cloudflare Pages, also add `www.cookmushroom.com` as a custom domain

### Step 4: Wait for Activation

- **DNS propagation:** 5-10 minutes (usually instant since domain is already on Cloudflare)
- **SSL certificate:** Automatic (Cloudflare provides free SSL)
- Visit `https://cookmushroom.com` to verify!

---

## Part 7: Handle WordPress Access

### Important: Protect WordPress from Public Access

Since Astro is now serving your main site, you need to make sure WordPress admin is secure.

#### Option A: If WordPress is at Root

WordPress files are still at root, but Cloudflare Pages will serve Astro. You need to create rules:

**In Cloudflare DNS**, add these records to preserve WordPress access:

1. **Add subdomain** for WordPress:
   - **Type:** CNAME
   - **Name:** `wp`
   - **Target:** Your Hostinger IP or hostname
   - **Proxy status:** DNS only (grey cloud)

2. Access WordPress at: `https://wp.cookmushroom.com/wp-admin`

#### Option B: If WordPress is at /admin (Recommended)

You need to create a **Page Rule** to ensure `/admin` requests go to Hostinger, not Cloudflare Pages.

**In Cloudflare:**
1. Go to **Rules** → **Page Rules**
2. Click **Create Page Rule**
3. **URL:** `cookmushroom.com/admin/*`
4. **Settings:**
   - Cache Level: Bypass
   - Origin Server: `your-hostinger-server-ip` (if needed)
5. Click **Save and Deploy**

**Alternative: Use Workers route** (more reliable):

1. Go to **Workers & Pages**
2. In your Pages project → **Settings** → **Functions**
3. Under **Routes**, you can configure `/admin/*` to bypass Pages

**Or create a redirect in Pages:**

Create a file `public/_redirects` in your Astro project:

```
/admin/* https://your-hostinger-direct-url.com/admin/:splat 200
/wp-content/* https://your-hostinger-direct-url.com/wp-content/:splat 200
/wp-includes/* https://your-hostinger-direct-url.com/wp-includes/:splat 200
/wp-json/* https://your-hostinger-direct-url.com/wp-json/:splat 200
```

Then rebuild and push to GitHub.

---

## Part 8: Configure CORS (If Needed)

If you get API errors like "CORS policy blocked", add this to WordPress:

### Method 1: Via wp-config.php

In Hostinger cPanel → File Manager → `/public_html/wp-config.php` (or `/admin/wp-config.php`):

Add BEFORE `/* That's all, stop editing! */`:

```php
// Allow Cloudflare Pages to access API
header('Access-Control-Allow-Origin: https://cookmushroom.com');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

### Method 2: Via .htaccess

In `/admin/.htaccess` or `/public_html/.htaccess`, add:

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "https://cookmushroom.com"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
```

### Method 3: Use Plugin (Easiest)

1. Install **"WP REST API - Allow All CORS"** plugin in WordPress
2. Activate it
3. No configuration needed!

---

## Part 9: Automatic Deployments

Now whenever you update your code:

```bash
git add .
git commit -m "Update design"
git push
```

Cloudflare automatically:
1. Detects the push
2. Builds your site (`npm run build`)
3. Deploys to production
4. Updates `cookmushroom.com` in 1-2 minutes

**To update WordPress content:**
1. Just edit in WordPress admin
2. Astro fetches via API automatically
3. **BUT** since Astro builds static pages, you need to rebuild:

```bash
git commit --allow-empty -m "Rebuild: WordPress content updated"
git push
```

**Or** set up webhooks (advanced) to auto-rebuild when WordPress content changes.

---

## Part 10: Verify Everything Works

### Checklist:

✅ **Main site:** `https://cookmushroom.com` → Shows Astro (fast!)  
✅ **WordPress admin:** `https://cookmushroom.com/admin/wp-admin` → Shows WordPress login  
✅ **API accessible:** `https://cookmushroom.com/admin/wp-json/wp/v2/posts` → Shows JSON  
✅ **SSL certificate:** Green lock icon in browser  
✅ **Images load:** From WordPress wp-content  
✅ **GitHub auto-deploy:** Push to trigger rebuild  

### Test Performance:

Visit: https://pagespeed.web.dev/
Enter: `https://cookmushroom.com`

**You should see:**
- Performance: 90-100 ⚡
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s

---

## Troubleshooting

### Build Fails on Cloudflare

**Check build logs in Cloudflare Pages dashboard.**

Common issues:
- Node version mismatch → Add env var `NODE_VERSION=18`
- Missing dependencies → Check `package.json`
- API unreachable → Check `WP_API_URL` environment variable

### WordPress Admin Not Accessible

**If WordPress at /admin:**
1. Check Page Rules in Cloudflare
2. Try accessing directly via Hostinger subdomain
3. Verify .htaccess in /admin folder

**If WordPress at root:**
1. Create subdomain CNAME (see Part 7)
2. Access via `wp.cookmushroom.com`

### Images Not Loading

**Check image URLs in browser console.**

Should be: `https://cookmushroom.com/wp-content/uploads/...`

**Fix:**
1. WordPress admin → Settings → General
2. Verify "WordPress Address (URL)" matches your setup
3. Update if needed, save settings

### API Returns 404

**Test API directly:**
```bash
curl https://cookmushroom.com/admin/wp-json/wp/v2/posts
```

**If 404:**
1. Check WordPress permalinks: Settings → Permalinks → Save
2. Verify .htaccess has rewrite rules
3. Check if REST API is disabled (plugins might block it)

### DNS Not Updating

- **Clear browser cache:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- **Check DNS:** https://dnschecker.org
- **Wait:** Can take up to 24 hours (usually 5-10 minutes)

---

## Performance Tips

### 1. Cloudflare Settings

**Speed → Optimization:**
- ✅ Auto Minify: HTML, CSS, JavaScript
- ✅ Brotli
- ✅ HTTP/3 (with QUIC)
- ✅ 0-RTT Connection Resumption
- ✅ WebSockets

**Caching → Configuration:**
- Browser Cache TTL: 4 hours
- Crawler Hints: On

### 2. Hostinger Optimization

Keep WordPress lightweight:
- Remove unused plugins
- Use image optimization plugins (before upload)
- Keep WordPress updated
- Only serve API, not pages

---

## Costs

**Cloudflare Pages:** FREE forever
- Unlimited bandwidth
- Unlimited requests
- 500 builds/month (more than enough)
- Free SSL
- Global CDN

**Hostinger:** Keep current plan
- Only for WordPress backend
- Reduced load = better performance

**Total extra cost:** $0 💰

---

## Quick Command Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Test build locally
npm run preview

# Deploy (via GitHub)
git add .
git commit -m "Your update message"
git push

# Force rebuild (WordPress content changed)
git commit --allow-empty -m "Rebuild"
git push

# Test API
curl https://cookmushroom.com/admin/wp-json/wp/v2/posts
```

---

## Next Steps After Deployment

1. **Monitor performance:** Cloudflare Analytics dashboard
2. **Set up webhook:** Auto-rebuild when WordPress updates (advanced)
3. **Add more pages:** Create more .astro files in `src/pages/`
4. **Optimize images:** Use Astro Image component for better performance
5. **Add analytics:** Google Analytics, Plausible, etc.

---

## Need Help?

- **Hostinger Support:** Available 24/7 in your cPanel
- **Cloudflare Community:** https://community.cloudflare.com
- **Cloudflare Discord:** https://discord.gg/cloudflaredev
- **Check build logs** in Cloudflare Pages dashboard for errors

---

You're all set! 🎉

Your WordPress site is now lightning-fast with Astro + Cloudflare Pages while keeping the familiar WordPress admin for content management.
