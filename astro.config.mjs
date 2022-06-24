import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  adapter: node(),
  integrations: [
    react(),
    tailwind({
      config: { path: './tailwind.config.js' },
    }),
  ],
});
