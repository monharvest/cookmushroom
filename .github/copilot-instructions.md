# CookMushroom AI Coding Instructions

## Architecture Overview

This is a **hybrid WordPress + Astro setup** where:
- **Astro** generates static frontend (fast pages)
- **WordPress** runs as headless CMS (content management + REST API)
- **Cloudflare Pages** hosts the Astro build (optional deployment)
- **Cloudflare Worker** triggers scheduled rebuilds via cron

```
Production Architecture:
├── cookmushroom.com/          → Astro static site
├── cookmushroom.com/admin     → WordPress admin panel
└── cookmushroom.com/wp-json   → WordPress REST API
```

## Critical Knowledge

### WordPress API Integration
- WordPress REST API is the **single source of truth** for all content
- API URL configured via `WP_API_URL` env var (defaults to production endpoint)
- All WordPress interaction happens through [src/lib/wordpress.ts](src/lib/wordpress.ts)
- Uses `_embed` parameter to fetch related data (featured images, categories) in single request
- Error handling returns empty arrays to prevent build failures if API is unreachable

### Build & Deployment Strategy
- **Static mode** (default): Build locally, content fetched at build time
- **SSR mode** (optional): Set `output: 'server'` in astro.config.mjs for dynamic content
- Deploy to Cloudflare Pages via GitHub (auto-deploy on push) or manual upload
- Cloudflare Worker cron ([cloudflare-worker/rebuild-cron.js](cloudflare-worker/rebuild-cron.js)) triggers rebuilds every 12 hours

### Key Files & Their Purpose
- [src/lib/wordpress.ts](src/lib/wordpress.ts): WordPress API client with TypeScript interfaces
- [src/lib/utils.ts](src/lib/utils.ts): Content sanitization, date formatting, reading time calculation
- [src/pages/blog/[slug].astro](src/pages/blog/[slug].astro): Dynamic post pages using `getStaticPaths()`
- [astro.config.mjs](astro.config.mjs): Build configuration, API URL injection via Vite

## Development Workflow

### Local Development
```bash
npm run dev              # Start dev server at localhost:4321
npm run build            # Build + type-check
npm run preview          # Preview production build
```

**Important**: Local dev fetches from **live WordPress API** (no local WordPress required)

### Deployment Commands
```bash
# Manual deployment to Hostinger
./scripts/deploy.sh      # Build + upload instructions

# Cloudflare Pages (via GitHub)
git push origin main     # Auto-deploys via GitHub Actions
```

### Cloudflare Worker Setup
```bash
cd cloudflare-worker
wrangler login
wrangler secret put PAGES_DEPLOY_HOOK  # Add Cloudflare Pages deploy hook URL
wrangler deploy
```

## Project-Specific Patterns

### Content Fetching Pattern
Always use TypeScript interfaces from [src/lib/wordpress.ts](src/lib/wordpress.ts):
```typescript
const posts = await getAllPosts();        // Returns WPPost[]
const post = await getPostBySlug(slug);   // Returns WPPost | null
```

### Static Path Generation
All dynamic routes use `getStaticPaths()` to pre-render pages:
```typescript
export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  return slugs.map(slug => ({ params: { slug } }));
}
```

### Content Sanitization
WordPress content must be cleaned before rendering:
```typescript
import { cleanContent } from '../../lib/utils';
const cleaned = cleanContent(post.content.rendered);  // Removes WordPress artifacts
```

## Critical Gotchas

1. **WordPress Location**: Production WordPress lives at `/admin` subdirectory, not root
   - Update `WP_HOME` and `WP_SITEURL` in wp-config.php after migration
   - Fix `/admin/index.php` to require `../wp-blog-header.php`

2. **API CORS**: Same-domain setup means no CORS issues (API at same domain as frontend)

3. **Media URLs**: WordPress media served from `/wp-content/uploads/` - ensure path accessible

4. **Build Failures**: If WordPress API is down, build continues with empty arrays (graceful degradation)

5. **Cloudflare Worker Secrets**: Deploy hook URL stored as Wrangler secret, not in code

## Testing Checklist

After making changes, verify:
- [ ] `npm run build` completes without errors
- [ ] Blog posts load at `/blog` and `/blog/[slug]`
- [ ] Featured images display correctly
- [ ] WordPress API accessible at `/wp-json`
- [ ] Admin accessible at `/admin/wp-admin`

## Documentation References

- [README.md](README.md): Complete setup & migration guide
- [CLOUDFLARE-DEPLOYMENT.md](CLOUDFLARE-DEPLOYMENT.md): Cloudflare Pages deployment
- [HOSTINGER-CLOUDFLARE-GITHUB-DEPLOY.md](HOSTINGER-CLOUDFLARE-GITHUB-DEPLOY.md): GitHub auto-deploy setup
- [cloudflare-worker/README.md](cloudflare-worker/README.md): Cron worker setup
