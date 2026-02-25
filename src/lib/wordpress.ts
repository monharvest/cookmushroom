/**
 * WordPress REST API Client
 * Connects to WordPress backend at wp.cookmushroom.com
 */

const WP_API_URL = import.meta.env.WP_API_URL || 'https://cookmushroom.page.gd/wp-json/wp/v2';

interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, {
      source_url: string;
      width: number;
      height: number;
    }>;
  };
}

/**
 * Fetch data from WordPress API with caching
 */
async function fetchWP<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T> {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  );
  
  const url = `${WP_API_URL}${endpoint}?${queryParams}`;
  
  try {
    // Use custom fetch options to handle SSL
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Astro/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from WordPress: ${url}`, error);
    
    // Return empty data structure to prevent crashes
    if (endpoint.includes('/posts')) {
      return [] as unknown as T;
    } else if (endpoint.includes('/categories') || endpoint.includes('/tags')) {
      return [] as unknown as T;
    } else if (endpoint.includes('/pages')) {
      return [] as unknown as T;
    }
    
    throw error;
  }
}

/**
 * Get all posts with pagination
 */
export async function getPosts(page = 1, perPage = 10) {
  return fetchWP<WPPost[]>('/posts', {
    page,
    per_page: perPage,
    _embed: 'wp:featuredmedia,wp:term'
  });
}

/**
 * Get single post by slug
 */
export async function getPostBySlug(slug: string) {
  const posts = await fetchWP<WPPost[]>('/posts', {
    slug,
    _embed: 'wp:featuredmedia,wp:term'
  });
  
  return posts[0] || null;
}

/**
 * Get all pages
 */
export async function getPages() {
  return fetchWP<WPPage[]>('/pages', {
    per_page: 100,
    _embed: 'wp:featuredmedia'
  });
}

/**
 * Get single page by slug
 */
export async function getPageBySlug(slug: string) {
  const pages = await fetchWP<WPPage[]>('/pages', {
    slug,
    _embed: 'wp:featuredmedia'
  });
  
  return pages[0] || null;
}

/**
 * Get all categories (only those with posts)
 */
export async function getCategories() {
  const categories = await fetchWP<WPCategory[]>('/categories', {
    per_page: 100,
    hide_empty: 1
  });
  return categories.filter(cat => cat.count > 0);
}

/**
 * Get all tags
 */
export async function getTags() {
  const tags = await fetchWP<WPCategory[]>('/tags', {
    per_page: 100,
    hide_empty: 1
  });
  return tags.filter(tag => tag.count > 0);
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(categoryId: number, page = 1, perPage = 10) {
  return fetchWP<WPPost[]>('/posts', {
    categories: categoryId,
    page,
    per_page: perPage,
    _embed: 'wp:featuredmedia,wp:term'
  });
}

/**
 * Get media by ID
 */
export async function getMedia(mediaId: number) {
  return fetchWP<WPMedia>(`/media/${mediaId}`, {});
}

/**
 * Get total number of posts (for pagination)
 */
export async function getTotalPosts(): Promise<number> {
  const response = await fetch(`${WP_API_URL}/posts?per_page=1`);
  const total = response.headers.get('X-WP-Total');
  return total ? parseInt(total, 10) : 0;
}

/**
 * Search posts
 */
export async function searchPosts(query: string, page = 1, perPage = 10) {
  return fetchWP<WPPost[]>('/posts', {
    search: query,
    page,
    per_page: perPage,
    _embed: 'wp:featuredmedia,wp:term'
  });
}

/**
 * Get all slugs for static path generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await fetchWP<WPPost[]>('/posts', {
    per_page: 100,
    _fields: 'slug'
  });
  
  // Filter out slugs with URL-encoded characters (emojis, special chars)
  return posts
    .map(post => post.slug)
    .filter(slug => {
      // Only allow slugs with alphanumeric, hyphens, and underscores
      return /^[a-z0-9-_]+$/i.test(slug);
    });
}

/**
 * Get all page slugs for static path generation
 */
export async function getAllPageSlugs(): Promise<string[]> {
  const pages = await fetchWP<WPPage[]>('/pages', {
    per_page: 100,
    _fields: 'slug'
  });
  
  return pages.map(page => page.slug);
}
