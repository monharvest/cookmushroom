// Amazon Associates links.
//
// One tracking ID for this site. The Associates account is shared with another
// site, so never paste a tag in by hand — every link goes through this file.
export const AMAZON_TAG = 'cookmushroom09-20';

// A link to Amazon's search results for a kind of tool, not to one product.
// A product link goes stale when the listing changes or sells out, and naming
// one product would be a recommendation this site has not earned by testing.
// The page says which tool the method needs; the reader picks the product.
export const amazonSearchUrl = (search: string): string =>
  `https://www.amazon.com/s?k=${encodeURIComponent(search)}&tag=${AMAZON_TAG}`;
