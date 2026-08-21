import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://arcabot.ai',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'next/image': fileURLToPath(new URL('./src/compat/NextImage.tsx', import.meta.url)),
        'next/link': fileURLToPath(new URL('./src/compat/NextLink.tsx', import.meta.url)),
      },
    },
  },
});
