// Writes dist/_routes.json after `astro build`, so the 410 function in
// functions/[[path]].js only runs for paths that are not real pages or assets.
//
// Why: once a Pages project has Functions, every request invokes them unless excluded
// (and counts against the Functions request quota), and Pages skips _redirects for
// any path a Function handles. Excluding every built page, the asset folders and the
// _redirects sources keeps all of that exactly as it is today.
//
// Pages allows 100 include/exclude rules in total. If the site outgrows that, the
// per-page excludes are dropped (the function is still safe: it never touches a
// response that is not a 404), and a warning is printed.
import { readdirSync, statSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const MAX_RULES = 100;

// Paths handled by public/_redirects must never reach the function.
const redirectSources = ['/blog', '/blog/*', '/category/*', '/sitemap.xml'];

const fixed = ['/'];
const pages = [];
for (const name of readdirSync(dist).sort()) {
  const full = join(dist, name);
  if (statSync(full).isDirectory()) {
    if (existsSync(join(full, 'index.html'))) pages.push(`/${name}/`);
    else fixed.push(`/${name}/*`); // asset folders: _astro, images
  } else if (!name.startsWith('_') && name !== '404.html' && name !== 'index.html') {
    fixed.push(`/${name}`); // robots.txt, sitemaps, favicon, og images
  }
}

let exclude = [...fixed, ...redirectSources, ...pages];
if (1 + exclude.length > MAX_RULES) {
  console.warn(
    `[routes] ${1 + exclude.length} rules exceeds Pages' limit of ${MAX_RULES}; ` +
      'dropping per-page excludes (real pages will invoke the 410 function, which passes them through).',
  );
  exclude = [...fixed, ...redirectSources];
}
if (1 + exclude.length > MAX_RULES) throw new Error('[routes] too many fixed exclude rules');

writeFileSync(join(dist, '_routes.json'), JSON.stringify({ version: 1, include: ['/*'], exclude }, null, 2) + '\n');
console.log(`[routes] wrote dist/_routes.json: ${exclude.length} excludes (${pages.length} pages)`);
