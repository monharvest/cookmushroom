/**
 * Cloudflare Worker with Cron Trigger
 * Directly triggers Cloudflare Pages rebuild every 12 hours
 * 
 * Setup:
 * 1. Get your Cloudflare Pages Deploy Hook URL
 * 2. Add it as a secret: PAGES_DEPLOY_HOOK
 * 3. Deploy this worker
 * 4. Cron trigger is configured in wrangler.toml
 */

export default {
  async scheduled(_event, env, _ctx) {
    // Trigger Cloudflare Pages rebuild
    await triggerRebuild(env);
  },

  // Also allow manual trigger via HTTP
  async fetch(request, env, _ctx) {
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
  if (!env.PAGES_DEPLOY_HOOK) {
    console.error('PAGES_DEPLOY_HOOK not configured');
    return {
      success: false,
      error: 'Deploy hook URL not configured'
    };
  }
  
  try {
    // Trigger Cloudflare Pages rebuild via deploy hook
    const response = await fetch(env.PAGES_DEPLOY_HOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const timestamp = new Date().toISOString();
    
    if (response.ok) {
      console.log(`[${timestamp}] Successfully triggered Cloudflare Pages rebuild`);
      return {
        success: true,
        timestamp,
        message: 'Cloudflare Pages rebuild triggered successfully'
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
