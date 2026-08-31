// Ingredient quantity scaling.
//
// The rule that makes this safe: only the head of a line — the text before the
// first comma — is ever touched. Prep notes live after it, so "sliced 1/4 inch
// thick" survives a x4 unscathed. Verified against every ingredient line on the
// site at 0.25x/0.5x/2x/3x/4x with no malformed output.
//
// Step text is deliberately NOT scaled: steps carry times, temperatures and pan
// sizes, and scaling those would be actively harmful. CookMode shows a notice
// instead.

const NUMBER = /(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)/g;
const COMMON: [number, number][] = [[1, 8], [1, 6], [1, 4], [1, 3], [3, 8], [1, 2], [5, 8], [2, 3], [3, 4], [5, 6], [7, 8]];

export const parseQty = (token: string): number => {
  const mixed = token.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) return Number(mixed[1]) + Number(mixed[2]) / Number(mixed[3]);
  const frac = token.match(/^(\d+)\/(\d+)$/);
  if (frac) return Number(frac[1]) / Number(frac[2]);
  return Number(token);
};

export const formatQty = (value: number): string => {
  if (!isFinite(value) || value <= 0) return '0';
  const whole = Math.floor(value + 1e-9);
  const rest = value - whole;
  if (rest < 0.02) return String(whole);
  let best: [number, number] = COMMON[0];
  let bestErr = Infinity;
  for (const [n, d] of COMMON) {
    const err = Math.abs(rest - n / d);
    if (err < bestErr) { bestErr = err; best = [n, d]; }
  }
  // No clean fraction nearby (e.g. 0.7): show a decimal rather than lie.
  if (bestErr > 0.03) return String(Math.round(value * 100) / 100);
  const frac = `${best[0]}/${best[1]}`;
  return whole ? `${whole} ${frac}` : frac;
};

// Metric amounts are decimal by convention: "7 1/2 ml" is wrong where
// "8 ml" is right. Imperial cooking measures keep vulgar fractions.
const METRIC = /^\s*(g|kg|mg|ml|cl|l)\b/;
const formatMetric = (value: number): string => {
  if (value >= 10) return String(Math.round(value));
  if (value >= 1) return String(Math.round(value * 10) / 10);
  return String(Math.round(value * 100) / 100);
};

// "1 garlic cloves" and "2 small shallot" both read as mistakes. Only the
// noun that ends the head is touched, and only when the quantity counts
// things directly (no unit after it). Mass and always-plural nouns are left
// alone, as is anything irregular — failing to inflect just leaves today's
// wording, which is the safe outcome.
const UNIT_AFTER = /^(tbsp|tsp|cups?|oz|lbs?|g|kg|mg|ml|cl|l|pinch|quarts?|pints?|inch|inches)\b/;
const UNCOUNTABLE = new Set(['nori', 'peel', 'pepper', 'noodles', 'salt', 'water', 'oil', 'butter', 'rice', 'pasta', 'parsley', 'thyme', 'kombu', 'mushrooms', 'mushroom']);
// "3 piece kombu" and "1 wide strips orange peel" count the measure word, not
// the trailing mass noun. Closed list, so an unknown phrasing just falls back
// to leaving the wording alone.
const MEASURE = new Set(['piece', 'pieces', 'sheet', 'sheets', 'strip', 'strips', 'portion', 'portions', 'sprig', 'sprigs', 'stalk', 'stalks', 'slice', 'slices', 'head', 'heads', 'bunch', 'bunches', 'package', 'packages', 'can', 'cans', 'stick', 'sticks', 'clove', 'cloves']);
const IRREGULAR = new Set(['leaves', 'halves', 'knives', 'loaves', 'leaf', 'half']);
const inflect = (word: string, plural: boolean): string => {
  const bare = word.toLowerCase();
  if (UNCOUNTABLE.has(bare) || IRREGULAR.has(bare)) return word;
  if (/(ss|us|is)$/.test(bare)) return word;
  const isPlural = /s$/.test(bare);
  if (plural && !isPlural) return `${word}s`;
  if (!plural && isPlural) return word.slice(0, -1);
  return word;
};

const applyInflection = (head: string, quantity: number): string => {
  const m = head.match(/^(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)\s+(.*)$/);
  if (!m || UNIT_AFTER.test(m[2])) return head;               // has a unit: not a count
  // Plural above one only: recipes write "1/2 shallot", not "1/2 shallots".
  // The noun is the last word before any parenthetical.
  const paren = head.indexOf('(');
  const upTo = paren === -1 ? head.length : paren;
  const segment = head.slice(0, upTo);
  const trimmed = segment.trimEnd();
  const gap = segment.slice(trimmed.length);   // whitespace before "(" — keep it
  const words = trimmed.split(/\s+/);
  let index = words.length - 1;
  // A trailing mass noun ("kombu", "peel") isn't what the number counts; fall
  // back to the nearest measure word before it.
  if (UNCOUNTABLE.has(words[index].toLowerCase())) {
    const measure = words.map((w) => w.toLowerCase()).lastIndexOf([...words].reverse().map((w) => w.toLowerCase()).find((w) => MEASURE.has(w)) ?? '');
    if (measure <= 0) return head;
    index = measure;
  }
  const noun = words[index];
  if (!/^[A-Za-z]+$/.test(noun)) return head;
  words[index] = inflect(noun, quantity > 1);
  return words.join(' ') + gap + head.slice(upTo);
};

export const scaleLine = (line: string, factor: number): string => {
  if (factor === 1) return line;
  const comma = line.indexOf(',');
  const head = comma === -1 ? line : line.slice(0, comma);
  const tail = comma === -1 ? '' : line.slice(comma);
  if (!/^\s*(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)/.test(head)) return line;
  const scaled = head.replace(NUMBER, (token, _g, offset) => {
    const value = parseQty(token) * factor;
    const following = head.slice(offset + token.length);
    return METRIC.test(following) ? formatMetric(value) : formatQty(value);
  });
  const leading = scaled.match(NUMBER);
  const quantity = leading ? parseQty(leading[0]) : NaN;
  return applyInflection(scaled, quantity) + tail;
};

// Yields have no prep clause, so every number in them is a quantity.
export const scaleYield = (text: string, factor: number): string => {
  if (factor === 1) return text;
  return text.replace(NUMBER, (token) => formatQty(parseQty(token) * factor));
};
