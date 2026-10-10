// 410 Gone for the legacy auto-posted WordPress URLs (2025 – Jan 2026).
//
// Safety model: the static site always answers first. This function only changes a
// response that is already a 404, and only when the path is a known legacy URL
// (legacy/is-legacy-path.js), so a real page, current or future, can never be turned
// into a 410. Everything else passes through. The 410 reuses the site's 404 page body.
//
// dist/_routes.json (written by scripts/write-routes-json.mjs at build time) keeps
// real pages, assets and the _redirects sources away from this function entirely.
import { isLegacyPath, redirectTarget } from '../legacy/is-legacy-path.js';

// Mirrors public/_headers, in case Pages does not apply it to Function responses.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com; img-src 'self' data: https://www.google-analytics.com; style-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

/** @param {{ request: Request, next: () => Promise<Response> }} context */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  const target = redirectTarget(url.pathname);
  if (target) return Response.redirect(new URL(target, url.origin).toString(), 301);

  const response = await context.next();
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
}
