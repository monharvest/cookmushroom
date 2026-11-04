// Cloudflare Worker for cookmushroom.com: serves dist/ as static assets and
// answers 410 Gone for the legacy auto-posted WordPress URLs (2025 – Jan 2026).
//
// Safety model: static assets always answer first. Cloudflare runs this script
// only when a request matches no built file (wrangler.jsonc keeps the default
// assets-first routing), so a real page, current or future, never reaches it.
// Here a miss becomes 410 only when legacy/is-legacy-path.js recognises the
// path; everything else stays the site's normal 404. Both reuse 404.html.
import { isLegacyPath, redirectTarget } from '../legacy/is-legacy-path.js';

// Mirrors public/_headers (the asset layer applied it in testing; this is the
// fallback). Keep the CSP in step with that file.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.googleadservices.com https://*.adtrafficquality.google https://*.gstatic.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.googleadservices.com https://*.adtrafficquality.google; img-src 'self' data: https:; media-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; frame-src https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.adtrafficquality.google; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export default {
  /** @param {Request} request @param {{ ASSETS: { fetch: (r: Request) => Promise<Response> } }} env */
  async fetch(request, env) {
    const url = new URL(request.url);

    // public/_redirects runs before this script; this is the fallback.
    const target = redirectTarget(url.pathname);
    if (target) return Response.redirect(new URL(target, url.origin).toString(), 301);

    // A miss: the asset layer answers with 404.html and status 404
    // (not_found_handling: "404-page").
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || (request.method !== 'GET' && request.method !== 'HEAD')) {
      return response;
    }

    const headers = new Headers(response.headers);
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      if (!headers.has(name)) headers.set(name, value);
    }

    if (!isLegacyPath(url.pathname)) {
      return new Response(response.body, { status: 404, statusText: 'Not Found', headers });
    }

    headers.set('X-Robots-Tag', 'noindex');
    headers.set('Cache-Control', 'public, max-age=3600');
    return new Response(response.body, { status: 410, statusText: 'Gone', headers });
  },
};
