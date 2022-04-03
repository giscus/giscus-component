import { resolve } from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import typescript from '@rollup/plugin-typescript';

const resolvePath = (str: string) => resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: resolvePath('src/lib/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['preact', 'preact/compat', 'preact/jsx-runtime'],
      output: {
        globals: {
          preact: 'preact',
          'preact/compat': 'preactCompat',
          'preact/jsx-runtime': 'preactJsxRuntime',
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
