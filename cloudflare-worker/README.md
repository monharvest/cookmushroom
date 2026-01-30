# Cloudflare Worker Cron for Auto-Rebuild

This Cloudflare Worker triggers your GitHub Actions workflow every 12 hours to rebuild your site with fresh WordPress content.

## Why Use This Instead of GitHub Actions Schedule?

GitHub's scheduled actions are unreliable:
- Can be delayed by 10-15+ minutes during high load
- May be disabled after 60 days of inactivity
- No guarantee they'll run on time

Cloudflare Workers Cron triggers are:
- ✅ Extremely reliable
- ✅ Run on time (within seconds)
- ✅ Free tier includes 100,000 requests/day
- ✅ Integrated with your Cloudflare Pages setup

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
3. Give it a name: "Cloudflare Worker Rebuild"
4. Select scope: `workflow` (to trigger workflows)
5. Click "Generate token"
6. **Copy the token** (you'll need it in step 5)

### 4. Deploy the Worker

```bash
cd cloudflare-worker
wrangler deploy
```

### 5. Add GitHub Token as Secret

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
2. Check you added the GITHUB_TOKEN secret
3. Test manual trigger: `curl -X POST https://your-worker.workers.dev/trigger`

### GitHub Actions not triggering

1. Verify your GitHub token has `workflow` scope
2. Check token hasn't expired
3. Verify the workflow file is on the `main` branch

### Need to update the token

```bash
wrangler secret put GITHUB_TOKEN
# Enter new token
```

## Cost

**Free tier includes:**
- 100,000 requests/day
- 10ms CPU time per request
- Cron triggers count as requests

With 2 cron runs per day (every 12 hours), you'll use ~60 requests/month = **FREE** ✅

## Disable GitHub Actions Schedule

Since Cloudflare Worker is more reliable, you can remove the schedule from `.github/workflows/scheduled-rebuild.yml`:

```yaml
on:
  workflow_dispatch: # Keep manual trigger
  # Remove the schedule section
```

This keeps the workflow file for the Worker to trigger, but removes the unreliable GitHub schedule.
