// Tells IndexNow (Bing, Yandex, Seznam, Naver …; not Google) that URLs changed:
// new pages, updated pages, or dead ones. Engines recrawl what we list and drop
// URLs that now answer 404/410.
//
//   node scripts/indexnow.mjs /stuffed-mushrooms/ /how-to-store-mushrooms/
//   node scripts/indexnow.mjs --legacy          # every slug in legacy/legacy-410-paths.js
//   node scripts/indexnow.mjs --legacy --dry-run
//
// The key is the 32-hex-char file in public/ (served at /<key>.txt, which proves we
// own the host). The script refuses to submit until that file is live, because
// IndexNow rejects a batch whose key it cannot fetch.
import { readdirSync, readFileSync } from 'node:fs';
import { LEGACY_PATHS } from '../legacy/legacy-410-paths.js';

const HOST = 'cookmushroom.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH = 10_000; // IndexNow's per-request limit

const publicDir = new URL('../public/', import.meta.url).pathname;
const keyFile = readdirSync(publicDir).find((n) => /^[0-9a-f]{32}\.txt$/.test(n));
if (!keyFile) throw new Error('[indexnow] no <32-hex>.txt key file in public/');
const key = readFileSync(publicDir + keyFile, 'utf8').trim();
const keyLocation = `https://${HOST}/${keyFile}`;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const paths = args.filter((a) => !a.startsWith('--'));
// Legacy entries are normalised without a trailing slash; the old WordPress URLs
// (the ones search engines hold) had one.
if (args.includes('--legacy')) paths.push(...[...LEGACY_PATHS].map((p) => `${p}/`));

const urlList = [...new Set(paths)].map((p) => {
  const url = new URL(p, `https://${HOST}/`);
  if (url.host !== HOST) throw new Error(`[indexnow] not a ${HOST} URL: ${p}`);
  return url.href;
});
if (urlList.length === 0) {
  console.error('usage: node scripts/indexnow.mjs [--legacy] [--dry-run] [/path/ …]');
  process.exit(1);
}

if (dryRun) {
  console.log(urlList.join('\n'));
  console.log(`[indexnow] dry run: ${urlList.length} URLs, key ${keyLocation}`);
} else {
  await submit();
}

async function submit() {
  const live = await fetch(keyLocation).then((r) => (r.ok ? r.text() : ''));
  if (live.trim() !== key) throw new Error(`[indexnow] ${keyLocation} is not live yet — deploy first`);

  for (let i = 0; i < urlList.length; i += BATCH) {
    const batch = urlList.slice(i, i + BATCH);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key, keyLocation, urlList: batch }),
    });
    // 200 = accepted, 202 = accepted, key validation pending.
    console.log(`[indexnow] ${batch.length} URLs → HTTP ${res.status} ${await res.text()}`);
    if (!res.ok) process.exitCode = 1;
  }
}
