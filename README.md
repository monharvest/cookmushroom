# 🍄 CookMushroom - WordPress + Astro Hybrid

Complete setup for migrating **cookmushroom.com** from WordPress to Astro while keeping WordPress as a headless CMS.

## 🏗️ Architecture

```
cookmushroom.com/          → Astro (fast frontend)
cookmushroom.com/admin     → WordPress (admin + content)
cookmushroom.com/wp-json   → WordPress REST API
cookmushroom.com/wp-content → Media files
```

## 📁 Project Structure

```
cookmushroom/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── blog.astro            # Blog listing
│   │   └── blog/[slug].astro     # Individual posts
│   └── lib/
│       ├── wordpress.ts          # WP API client
│       └── utils.ts              # Helper functions
├── server-config/
│   ├── root-htaccess.conf        # Apache config for root
│   ├── admin-htaccess.conf       # Apache config for /admin
│   └── nginx.conf                # Nginx alternative
├── scripts/
│   ├── migrate-to-admin.sh       # Move WP to /admin
│   └── deploy.sh                 # Deploy Astro
└── dist/                          # Built Astro site
```

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

The `.env` file is already set to connect to your live site:

```env
WP_API_URL=https://cookmushroom.com/wp-json/wp/v2
```

### 3. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:4321

The site will fetch content from your **live WordPress site** via the API.

## 📦 Production Deployment (Zero Downtime)

### Phase 1: Move WordPress to /admin

**⚠️ IMPORTANT: Do this on server (via SSH or cPanel Terminal)**

1. **Backup everything first!**
   ```bash
   # You already have: u720079989.cookmushroom-com.20260122122046.tar.gz
   # Keep this safe!
   ```

2. **SSH into your server:**
   ```bash
   ssh your_username@cookmushroom.com
   cd public_html
   ```

3. **Run the migration script:**
   ```bash
   # Upload migrate-to-admin.sh to your server first
   chmod +x migrate-to-admin.sh
   ./migrate-to-admin.sh
   ```

   Or do it manually:
   ```bash
   mkdir admin
   mv wp-admin wp-content wp-includes *.php admin/
   # Keep wp-config.php in root
   ```

4. **Update `wp-config.php`** (in root):
   ```php
   define('WP_HOME', 'https://cookmushroom.com/admin');
   define('WP_SITEURL', 'https://cookmushroom.com/admin');
   ```

5. **Fix `/admin/index.php`:**
   ```php
   require __DIR__ . '/../wp-blog-header.php';
   ```

6. **Copy `/server-config/admin-htaccess.conf` to `/admin/.htaccess`**

7. **Test WordPress admin:**
   - Visit: https://cookmushroom.com/admin/wp-admin
   - Login and verify everything works

8. **Test API:**
   - Visit: https://cookmushroom.com/wp-json
   - Should return JSON

### Phase 2: Deploy Astro

1. **Build Astro locally:**
   ```bash
   npm run build
   ```

2. **Upload `dist/` contents to server root:**
   - Via FTP: Upload all files from `dist/` to `/public_html/`
   - Via cPanel: Zip `dist/`, upload, extract
   - Via rsync (SSH):
     ```bash
     rsync -avz --delete dist/ user@cookmushroom.com:/public_html/ \
       --exclude='admin' \
       --exclude='wp-config.php'
     ```

3. **Copy root .htaccess:**
   - Upload `/server-config/root-htaccess.conf` as `/public_html/.htaccess`

4. **Test the site:**
   - Homepage: https://cookmushroom.com
   - Blog: https://cookmushroom.com/blog
   - Admin: https://cookmushroom.com/admin/wp-admin

### Phase 3: Verify Everything

✅ **Checklist:**
- [ ] Homepage loads (Astro)
- [ ] Blog posts load (Astro fetching from WP)
- [ ] Images display correctly
- [ ] WordPress admin accessible at `/admin/wp-admin`
- [ ] WordPress API works: `/wp-json`
- [ ] Media uploads work in WP admin
- [ ] Old URLs redirect or work (check 301s if needed)

## 🔧 Configuration Files

### For Apache (most shared hosting)

- **Root:** Use `server-config/root-htaccess.conf` as `.htaccess`
- **Admin:** Use `server-config/admin-htaccess.conf` as `admin/.htaccess`

### For Nginx (VPS/Cloud)

- Use `server-config/nginx.conf`
- Adjust PHP-FPM socket path
- Reload: `sudo nginx -t && sudo systemctl reload nginx`

## 🎨 Customization

### Update WordPress Connection

Edit [src/lib/wordpress.ts](src/lib/wordpress.ts):

```typescript
const WP_API_URL = 'https://cookmushroom.com/wp-json/wp/v2';
```

### Add Custom Post Types

```typescript
export async function getRecipes() {
  return fetchWP('/recipes', { per_page: 100 });
}
```

### Styling

- Edit component styles directly in `.astro` files
- Or add a global CSS file in `src/styles/`

### Add More Pages

```bash
# Create new page
touch src/pages/about.astro
```

## 🔒 Security Recommendations

1. **Password protect `/admin`** (via .htpasswd)
2. **Disable XML-RPC** (already in .htaccess)
3. **Use strong WP admin passwords**
4. **Install Wordfence or similar**
5. **Keep WordPress updated**
6. **Restrict `/wp-admin` by IP** (optional)

## 📊 Performance

**Before (WordPress only):**
- Load time: ~2-4s
- Multiple DB queries
- PHP processing overhead

**After (Astro + WP):**
- Load time: ~300-500ms
- Static HTML
- Content fetched at build time

## 🐛 Troubleshooting

### Issue: API not accessible

**Solution:** Check `.htaccess` allows `/wp-json`

```apache
RewriteRule ^wp-json(/.*)?$ admin/index.php [L,QSA]
```

### Issue: Images broken

**Solution:** Fix media URLs in `src/lib/utils.ts`:

```typescript
export function fixMediaUrl(url: string): string {
  return url.replace('old-domain.com', 'cookmushroom.com');
}
```

### Issue: WordPress admin 404

**Solution:** Verify `/admin/index.php` path:

```php
require __DIR__ . '/../wp-blog-header.php';
```

### Issue: Permalinks not working

**Solution:** Regenerate `.htaccess` in WP admin:
- Settings → Permalinks → Save Changes

## 🔄 Updating Content

### Option 1: Rebuild + Redeploy (Static)

```bash
npm run build
# Upload dist/ to server
```

### Option 2: Switch to SSR (Dynamic)

Edit [astro.config.mjs](astro.config.mjs):

```javascript
export default defineConfig({
  output: 'server',  // Change from 'static'
  adapter: node(),
});
```

Now content updates instantly (no rebuild needed).

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Build for production
npm run preview          # Preview production build

# Deployment
chmod +x scripts/*.sh    # Make scripts executable
./scripts/deploy.sh      # Deploy to production
```

## 🆘 Need Help?

Common issues and solutions:

1. **Can't access WP admin after migration**
   - Check `WP_HOME` and `WP_SITEURL` in `wp-config.php`
   - Verify `/admin/.htaccess` exists

2. **Astro can't fetch posts**
   - Test API manually: `https://cookmushroom.com/wp-json/wp/v2/posts`
   - Check CORS (shouldn't be an issue, same domain)

3. **Images 404**
   - Ensure `wp-content` is accessible
   - Check root `.htaccess` rules

## 📝 Next Steps

1. ✅ **Test locally** - `npm run dev`
2. ✅ **Backup live site** - Download everything
3. ✅ **Move WP to /admin** - Run migration script
4. ✅ **Deploy Astro** - Upload `dist/`
5. ✅ **Verify** - Test all pages
6. 🎉 **Go live!**

## 📄 License

Your website, your rules! 🍄

---

**Built with:**
- [Astro](https://astro.build) - Frontend
- [WordPress](https://wordpress.org) - CMS
- ❤️ Love for mushrooms
