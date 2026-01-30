# Cloudflare Worker Cron for Auto-Rebuild

This Cloudflare Worker directly triggers Cloudflare Pages rebuilds every 12 hours to keep your site fresh with the latest WordPress content.

## Why This Approach?

Simple and reliable:
- ✅ Direct Cloudflare → Cloudflare (no GitHub middleman)
- ✅ Extremely reliable cron execution
- ✅ Run on time (within seconds)
- ✅ Free tier includes 100,000 requests/day
- ✅ Fully integrated with Cloudflare Pages

## Setup Instructions

### 1. Install Wrangler (Cloudflare CLI)

```bash
npm install -g wrangler
```

### 2. Login to Cloudflare

```bash
wrangler login
```

### 3. Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. GiveGet Cloudflare Pages Deploy Hook

1. Go to Cloudflare Dashboard: https://dash.cloudflare.com
2. Navigate to: **Workers & Pages** → **cookmushroom** (your Pages project)
3. Go to **Settings** → **Builds & deployments**
4. Scroll to **Deploy hooks**
5. Click **Add deploy hook**
   - Name: "Scheduled Rebuild"
   - Branch: "main"
6. Click **Save**
7. **Copy the deploy hook URL** (looks like: `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/...`
cd cloudflare-worker
wrangler deDeploy Hook as Secret

```bash
wrangler secret put PAGES_DEPLOY_HOOK
# Paste your deploy hook URL
```bash
wrangler secret put GITHUB_TOKEN
# Paste your GitHub token when prompted
```

### 6. Verify It Works

Test the worker manually:

```bash
curl -X POST https://cookmushroom-rebuild-cron.<your-subdomain>.workers.dev/trigger
```

Or check the Cloudflare dashboard:
1. Go to Workers & Pages
2. Click on "cookmushroom-rebuild-cron"
3. Go to "Logs" tab
4. You should see scheduled runs every 12 hours

## Schedule

Current schedule: **Every 12 hours at 00:00 and 12:00 UTC**

To change the schedule, edit `wrangler.toml`:

```toml
# Every 6 hours
crons = ["0 */6 * * *"]

# Daily at 3 AM UTC
crons = ["0 3 * * *"]

# Every 2 hours
crons = ["0 */2 * * *"]
```

Then redeploy:

```bash
wrangler deploy
```

## Manual Trigger

You can manually trigger a rebuild anytime:

```bash
# Via API
curl -X POST https://cookmushroom-rebuild-cron.<your-subdomain>.workers.dev/trigger

# Or via GitHub Actions UI
# Go to: https://github.com/monharvest/cookmushroom/actions
# Select "Scheduled Rebuild" workflow
# Click "Run workflow"
```

## Monitoring

Check if the cron is running:

1. **Cloudflare Dashboard:**
   - Workers & Pages → cookmushroom-rebuild-cron → Logs

2. **GitHub Actions:**
   - https://github.com/monharvest/cookmushroom/actions
   - Look for "Scheduled Rebuild" runs

## Troubleshooting

### Worker deployed but cron not running

1. Verify the worker is active in Cloudflare dashboard
2. Check you added the PAGES_DEPLOY_HOOK secret
3. Test manual trigger: `curl -X POST https://your-worker.workers.dev/trigger`

### Rebuilds not happening

1. Verify your deploy hook URL is correct
2. Check it hasn't been deleted in Cloudflare dashboard
3. Go to Pages project → Deployments to see if builds are triggering

### Need to update the deploy hook

```bash
wrangler secret put PAGES_DEPLOY_HOOK
# Enter new deploy hook URL
```

## Cost

**Free tier includes:**
- 100,000 requests/day
- 10ms CPU time per request
- Cron triggers count as requests

With 2 cron runs per day (every 12 hours), you'll use ~60 requests/month = **FREE** ✅
