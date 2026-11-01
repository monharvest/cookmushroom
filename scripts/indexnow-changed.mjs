// Compares two builds and prints the page paths IndexNow should hear about: pages
// that are new, whose HTML changed, or that were removed. Used by
// .github/workflows/indexnow.yml; output feeds scripts/indexnow.mjs.
//
//   node scripts/indexnow-changed.mjs <old-dist> <new-dist>
//
// Asset filenames (/_astro/Layout.<hash>.css) are blanked before comparing, so a
// CSS or script change alone does not mark every page as updated. Prefixes the
// lines with "new", "changed" or "removed" so the workflow can wait for new pages.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const [oldDist, newDist] = process.argv.slice(2);
if (!oldDist || !newDist) {
  console.error('usage: node scripts/indexnow-changed.mjs <old-dist> <new-dist>');
  process.exit(1);
}

// Same exclusion as the sitemap: /search/ is noindex.
const SKIP = new Set(['/search/']);

/** @param {string} dist @returns {Map<string, string>} page path → normalised HTML */
function pages(dist) {
  const out = new Map();
  const walk = (dir, path) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (name === 'index.html') {
        if (!SKIP.has(path)) out.set(path, readFileSync(full, 'utf8').replace(/\/_astro\/[^"'\s)]+/g, '/_astro/*'));
      } else if (statSync(full).isDirectory() && !name.startsWith('_') && name !== 'images') {
        walk(full, `${path}${name}/`);
      }
    }
  };
  if (existsSync(dist)) walk(dist, '/');
  return out;
}

const before = pages(oldDist);
const after = pages(newDist);
for (const [path, html] of after) {
  if (!before.has(path)) console.log(`new ${path}`);
  else if (before.get(path) !== html) console.log(`changed ${path}`);
}
for (const path of before.keys()) if (!after.has(path)) console.log(`removed ${path}`);
