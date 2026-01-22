import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cookmushroom.com',
  output: 'static', // Change to 'server' for SSR
  
  integrations: [
    sitemap()
  ],

  // If you need SSR later, uncomment:
  // adapter: node({
  //   mode: 'standalone'
  // }),

  vite: {
    define: {
      'process.env.WP_API_URL': JSON.stringify(process.env.WP_API_URL || 'https://cookmushroom.com/wp-json/wp/v2')
    }
  }
});
