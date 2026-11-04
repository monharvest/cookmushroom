// Appends a 301 to dist/_redirects for every built page, from the path
// without its trailing slash to the canonical one (/guides -> /guides/).
//
// Why: Workers static assets add the slash themselves (html_handling:
// "auto-trailing-slash") but with a 307, a temporary redirect, where Pages
// used a 308. _redirects runs first, so these rules keep it permanent.
// Exact rules, not a /:slug pattern, which would also catch /robots.txt.
import { readdirSync, statSync, existsSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;

const rules = [];
for (const name of readdirSync(dist).sort()) {
  const full = join(dist, name);
  if (statSync(full).isDirectory() && existsSync(join(full, 'index.html'))) rules.push(`/${name} /${name}/ 301`);
}

appendFileSync(join(dist, '_redirects'), `\n# Trailing slash, from scripts/write-slash-redirects.mjs\n${rules.join('\n')}\n`);
console.log(`[redirects] added ${rules.length} trailing-slash rules to dist/_redirects`);
