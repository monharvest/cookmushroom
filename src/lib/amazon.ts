// Amazon Associates links.
//
// One tracking ID for this site. The Associates account is shared with another
// site, so never paste a tag in by hand — every link goes through this file.
export const AMAZON_TAG = 'cookmushroom09-20';

// A link to Amazon's search results for a kind of tool, not to one product.
// This is the default: nothing goes stale when a listing changes or sells out,
// and the reader picks the product.
export const amazonSearchUrl = (search: string): string =>
  `https://www.amazon.com/s?k=${encodeURIComponent(search)}&tag=${AMAZON_TAG}`;

// A link to one specific product page by ASIN. Only for a widely used,
// clearly relevant tool whose ASIN was checked against a live amazon.com
// product page (record the check date in the commit). A product link can go
// stale, so every product link keeps a search link beside it as the fallback.
const ASIN_PATTERN = /^[A-Z0-9]{10}$/;
export const amazonProductUrl = (asin: string): string => {
  if (!ASIN_PATTERN.test(asin)) throw new Error(`Not an ASIN: ${asin}`);
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
};

// The rel every Amazon link carries.
export const AMAZON_REL = 'sponsored nofollow noopener';
