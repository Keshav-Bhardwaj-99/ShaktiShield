import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Serve from the frontend folder
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
