// Site search: the matcher the /search/ page runs in the browser, and the
// normaliser it shares with the build-time index (src/pages/search-index.json.ts)
// so a query and a document are always folded the same way. Keep this file free
// of data imports — it is bundled for the browser.
//
// No search library: ~40 documents fit in one small JSON file, and a scored
// substring match over it is instant. Revisit if the site passes a few hundred pages.
export type SearchDoc = {
  slug: string;
  type: 'guide' | 'recipe';
  title: string;
  // Every field below is already normalised (see `normalize`).
  t: string; // title
  k: string; // keywords: label, species, pairings, recipe keywords
  d: string; // description
  h: string; // section headings + FAQ questions
  b: string; // everything else on the page
};

// Lowercase, strip accents ("sautéed" → "sauteed"), and reduce punctuation to
// spaces so "air-fryer" and "air fryer" match each other.
export const normalize = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

// Words that appear in nearly every title ("How to Cook … Mushrooms") and so
// say nothing about which page the reader wants.
const STOP = new Set(['a', 'an', 'and', 'the', 'to', 'of', 'in', 'for', 'with', 'how', 'do', 'i', 'you', 'can', 'is', 'my']);

// "mushrooms" → "mushroom", "berries" → "berr": crude, but it only has to make
// a plural query find a singular page, and matching is by word prefix anyway.
const stem = (term: string): string =>
  term.length > 4 && term.endsWith('ies') ? term.slice(0, -3)
    : term.length > 3 && term.endsWith('s') && !term.endsWith('ss') ? term.slice(0, -1)
      : term;

export const queryTerms = (query: string): string[] => {
  const words = normalize(query).split(' ').filter(Boolean);
  const useful = words.filter((word) => !STOP.has(word));
  // A query made only of stop words ("how to") is still a query.
  return [...new Set((useful.length ? useful : words).map(stem))];
};

const WEIGHTS: [keyof Pick<SearchDoc, 't' | 'k' | 'd' | 'h' | 'b'>, number][] = [['t', 12], ['k', 7], ['d', 5], ['h', 4], ['b', 1]];

// A term counts only at the start of a word: "pan" finds "pan" and "panko",
// not "japanese".
const hasTerm = (text: string, term: string): boolean => text.startsWith(term) || text.includes(` ${term}`);

export type SearchHit = { doc: SearchDoc; score: number };

// Every term must appear somewhere in the document. `partial` is the fallback
// when nothing satisfies that: documents matching at least one term.
export const search = (docs: SearchDoc[], query: string): { hits: SearchHit[]; partial: boolean; terms: string[] } => {
  const terms = queryTerms(query);
  if (!terms.length) return { hits: [], partial: false, terms };
  const phrase = normalize(query);

  const scored = docs.map((doc) => {
    let score = 0;
    let matched = 0;
    for (const term of terms) {
      // The strongest field decides the score; each further field the term
      // appears in adds a little, so a page about the term outranks a page
      // that only names it in the title.
      let best = 0;
      let rest = 0;
      for (const [key, weight] of WEIGHTS) {
        if (!hasTerm(doc[key], term)) continue;
        if (best) rest += weight; else best = weight;
      }
      if (best) matched += 1;
      score += best + rest / 10;
    }
    // The words in the order typed beat the same words scattered.
    if (terms.length > 1 && doc.t.includes(phrase)) score += 10;
    return { doc, score, matched };
  });

  const byScore = (a: SearchHit, b: SearchHit) => b.score - a.score || a.doc.title.localeCompare(b.doc.title);
  const all = scored.filter((hit) => hit.matched === terms.length).sort(byScore);
  if (all.length || terms.length === 1) return { hits: all, partial: false, terms };
  return { hits: scored.filter((hit) => hit.matched > 0).sort((a, b) => b.matched - a.matched || byScore(a, b)), partial: true, terms };
};
