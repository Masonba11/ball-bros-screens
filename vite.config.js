import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { generatePublicSeoFiles } from './scripts/generate-sitemap.js';

const root = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(root, 'public');

function seoFilesPlugin() {
  return {
    name: 'generate-public-seo-files',
    buildStart() {
      generatePublicSeoFiles(publicDir);
    },
    configureServer() {
      generatePublicSeoFiles(publicDir);
    },
  };
}

export default defineConfig({
  plugins: [react(), seoFilesPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet-async'],
        },
      },
    },
  },
});
