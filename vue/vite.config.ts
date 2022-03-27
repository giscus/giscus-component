import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';

const resolvePath = (str: string) => resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolvePath('src/lib/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `giscus.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      plugins: [
        typescript({
          target: 'es2020',
          rootDir: resolvePath('src/lib'),
          declaration: true,
          declarationDir: resolvePath('dist'),
        }),
      ],
    },
  },
});
