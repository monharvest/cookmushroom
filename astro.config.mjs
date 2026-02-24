import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cookmushroom.com',
  output: 'static', // Change to 'server' for SSR
  
  integrations: [
    // Sitemap temporarily disabled during build
  ],

  // If you need SSR later, uncomment:
  // adapter: node({
  //   mode: 'standalone'
  // }),

  vite: {
    define: {
      'process.env.WP_API_URL': JSON.stringify(process.env.WP_API_URL || 'https://cookmushroom.page.gd/wp-json/wp/v2')
    }
  }
});
