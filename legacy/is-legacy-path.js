// Decides which 404s become 410 Gone. Used by worker/index.js; kept separate so
// it can be tested with
// `node legacy/check-legacy-paths.mjs`.
import { LEGACY_PATHS } from './legacy-410-paths.js';

// WordPress system paths from the old install. Matched as a prefix on the
// normalised path ("/tag" matches "/tag" and "/tag/...", not "/tagine").
const LEGACY_PREFIXES = [
  '/tag',
  '/author',
  '/feed',
  '/comments/feed',
  '/page',
  '/wp-content',
  '/wp-includes',
  '/wp-json',
  '/wp-admin',
  '/wp-login.php',
  '/xmlrpc.php',
];

/** @param {string} pathname */
export function normalisePath(pathname) {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    // Malformed escapes: keep the raw path.
  }
  const trimmed = decoded.replace(/\/+$/, '').toLowerCase();
  return trimmed === '' ? '/' : trimmed;
}

/** @param {string} pathname */
export function isLegacyPath(pathname) {
  const path = normalisePath(pathname);
  if (path === '/') return false;
  // Every real route on the site is ASCII. The old feed published Hindi, Russian,
  // Ukrainian, Arabic, Nepali … slugs, which are all gone.
  if (/[^\x00-\x7f]/.test(path)) return true;
  if (LEGACY_PREFIXES.some((p) => path === p || path.startsWith(p + '/'))) return true;
  return LEGACY_PATHS.has(path);
}

// Same rules as public/_redirects, which Cloudflare applies before the Worker
// runs; this is the fallback if a rule there is ever lost.
/** @param {string} pathname @returns {string | null} */
export function redirectTarget(pathname) {
  if (pathname === '/blog' || pathname.startsWith('/blog/') || pathname.startsWith('/category/')) return '/guides/';
  if (pathname === '/sitemap.xml') return '/sitemap-index.xml';
  return null;
}
