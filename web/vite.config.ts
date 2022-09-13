import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/giscus.ts',
      formats: ['es'],
      fileName: () => 'giscus.mjs',
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
