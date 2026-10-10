// Sanity check for the 410 rules: no real page may match, known legacy URLs must.
// Run after a build: `node legacy/check-legacy-paths.mjs` (exits 1 on failure).
import { readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { isLegacyPath } from './is-legacy-path.js';

const dist = new URL('../dist/', import.meta.url).pathname;
const real = ['/'];
for (const name of readdirSync(dist)) {
  const full = join(dist, name);
  if (statSync(full).isDirectory() && existsSync(join(full, 'index.html'))) real.push(`/${name}/`, `/${name}`);
}
const wronglyGone = real.filter(isLegacyPath);

const mustBeGone = [
  '/100-organic-with-6-types-of-mushrooms-shortvideos-trending-shorts-tiktok-reels-instagram-fyp/',
  '/mushroom-risotto-10/',
  '/%D1%80%D0%B8%D0%B7%D0%BE%D1%82%D1%82%D0%BE-%D1%81-%D0%BB%D0%B8%D1%81%D0%B8%D1%87%D0%BA%D0%B0%D0%BC%D0%B8/',
  '/tag/anything/',
  '/author/12355a8e5052307d09c5dc58c2137989/',
  '/wp-content/uploads/2025/01/1737178647_maxresdefault-930x620.jpg',
  '/page/2/',
  '/xmlrpc.php',
];
const notGone = mustBeGone.filter((p) => !isLegacyPath(p));
const mustStay404 = ['/stuffed-mushrooms/', '/mushroom-gravy/', '/tagine/', '/pages/', '/some-typo/'];
const wrongly410 = mustStay404.filter(isLegacyPath);

console.log(`real routes checked: ${real.length}`);
if (wronglyGone.length || notGone.length || wrongly410.length) {
  console.error({ wronglyGone, notGone, wrongly410 });
  process.exit(1);
}
console.log('ok: no real route matches; legacy samples match; unknown paths stay 404');
