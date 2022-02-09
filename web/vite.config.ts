import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/giscus.ts',
      name: 'giscus',
      fileName: (format) => {
        if (format === 'umd') return 'giscus.umd.cjs';
        return 'giscus.es.js';
      },
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
