// Prints a paste-ready "duplicate guard" block for the Grok recipe prompt.
// Usage: npm run grok  (see docs/grok-recipe-prompt.md)
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/data/guides.ts', import.meta.url), 'utf8');

// Each guide object starts with `slug: '...'`; inspect the chunk up to the next slug.
const chunks = source.split(/(?=slug: ')/).slice(1);
const guides = chunks.map((chunk) => ({
  slug: chunk.match(/^slug: '([^']+)'/)[1],
  title: chunk.match(/title: (?:'([^']+)'|"([^"]+)")/)?.slice(1).find(Boolean) ?? '',
  recipeName: chunk.match(/recipeName: (?:'([^']+)'|"([^"]+)")/)?.slice(1).find(Boolean),
  hasTemplate: chunk.includes('ingredients:'),
}));

const recipeNames = [...source.matchAll(/name: '([^']+)'/g)].map((m) => m[1]);
const done = guides.filter((g) => g.hasTemplate);
const todo = guides.filter((g) => !g.hasTemplate);

console.log('── Paste this block ABOVE the master prompt ──────────────────────');
console.log('');
console.log('Context: these pages and dish names already exist on cookmushroom.com.');
console.log('Do NOT duplicate any of these topics, titles, or recipe names:');
console.log('');
console.log('Existing page slugs:');
for (const g of guides) console.log(`- ${g.slug}`);
console.log('');
console.log('Existing dish/recipe names:');
for (const name of [...new Set([...recipeNames, ...done.map((g) => g.recipeName).filter(Boolean)])]) console.log(`- ${name}`);
console.log('');
console.log('───────────────────────────────────────────────────────────────────');
console.log('');
console.log(`Guides already on the full recipe template (${done.length}): ${done.map((g) => g.slug).join(', ') || 'none'}`);
console.log('');
console.log(`NEXT UP — guides still missing the full template (${todo.length}), pick the top one:`);
for (const g of todo) console.log(`- ${g.slug}  (${g.title})`);
