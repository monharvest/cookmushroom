/**
 * Cloudflare Worker with Cron Trigger
 * Triggers GitHub Actions workflow to rebuild the site every 12 hours
 * 
 * Setup:
 * 1. Create a GitHub Personal Access Token with 'repo' or 'workflow' scope
 * 2. Add it as a secret in Cloudflare Worker: GITHUB_TOKEN
 * 3. Deploy this worker
 * 4. Add cron trigger in Cloudflare dashboard: 0 */12 * * *
 */

export default {
  async scheduled(event, env, ctx) {
    // Trigger the GitHub Actions workflow
    await triggerRebuild(env);
  },

  // Also allow manual trigger via HTTP
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/trigger' && request.method === 'POST') {
      const result = await triggerRebuild(env);
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Cloudflare Worker for CookMushroom rebuild\n\nPOST /trigger to manually trigger rebuild', {
      status: 200
    });
  }
};

async function triggerRebuild(env) {
  const GITHUB_OWNER = 'monharvest';
  const GITHUB_REPO = 'cookmushroom';
  const WORKFLOW_ID = 'scheduled-rebuild.yml';
  
  try {
    // Trigger GitHub Actions workflow via API
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/${WORKFLOW_ID}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
          'User-Agent': 'Cloudflare-Worker-Rebuild',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ref: 'main'
        })
      }
    );

    const timestamp = new Date().toISOString();
    
    if (response.ok) {
      console.log(`[${timestamp}] Successfully triggered rebuild`);
      return {
        success: true,
        timestamp,
        message: 'Rebuild triggered successfully'
      };
    } else {
      const error = await response.text();
      console.error(`[${timestamp}] Failed to trigger rebuild:`, response.status, error);
      return {
        success: false,
        timestamp,
        status: response.status,
        error
      };
    }
  } catch (error) {
    console.error('Error triggering rebuild:', error);
    return {
      success: false,
      error: error.message
    };
  }
}
