import { defineConfig } from 'astro/config';
// import bootstrap from '@types/bootstrap';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['@types/bootstrap'],
    }
  },
  site: 'https://melyhc.github.io',
  base: '/',
});