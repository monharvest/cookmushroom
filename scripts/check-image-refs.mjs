// Fails the build if any built page references an /images/ file that does not
// exist (publication gate rule 6: never publish broken image references).
//
// A page whose hero has not been made yet therefore cannot deploy by accident:
// Cloudflare Pages keeps serving the last good deployment when a build fails.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const missing = new Map();

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name.endsWith('.html')) {
      const html = readFileSync(full, 'utf8');
      for (const [, ref] of html.matchAll(/(?:https:\/\/cookmushroom\.com)?(\/images\/[A-Za-z0-9._\/-]+)/g)) {
        if (!existsSync(join(dist, ref))) {
          const page = full.slice(dist.length - 1).replace(/index\.html$/, '');
          if (!missing.has(ref)) missing.set(ref, new Set());
          missing.get(ref).add(page);
        }
      }
    }
  }
};
walk(dist);

if (missing.size) {
  for (const [ref, pages] of missing) console.error(`[images] missing ${ref} (used on ${[...pages].join(', ')})`);
  console.error('[images] build stopped: make the image(s) above or remove the reference before deploying.');
  process.exit(1);
}
console.log('[images] every /images/ reference in dist resolves');
