// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
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
  site: 'https://portfolio-mauve-delta-20.vercel.app',
  integrations: [alpinejs(), sitemap()]
});