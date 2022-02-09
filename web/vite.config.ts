import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/giscus.ts',
      name: 'giscus',
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
