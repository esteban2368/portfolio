// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://estebandevs.tech',
  integrations: [alpinejs(), sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })],

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      cssCodeSplit: true,
    }
  },

  build: {
    format: 'file',
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bebas Neue',
      cssVariable: '--font-bebas-neue',
      subsets: ['latin']
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      subsets: ['latin'],
      weights: [400,500,600,700]
    }
  ],
});