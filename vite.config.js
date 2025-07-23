import { defineConfig } from 'vite';

export default defineConfig({
  root: '3d-model-tour',
  build: {
    outDir: '../dist',       // Put output at /dist in root
    emptyOutDir: true,
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu']
    }
  }
});
