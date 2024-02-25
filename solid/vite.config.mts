import { resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import typescript from '@rollup/plugin-typescript';

const resolvePath = (str: string) => resolve(__dirname, str);

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolvePath('src/lib/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: {
        globals: {
          'solid-js': 'SolidJS',
          'solid-js/jsx-runtime': 'solidJsxRuntime',
        },
      },
      plugins: [
        typescript({
          target: 'es2020',
          rootDir: resolvePath('src/lib'),
          outDir: resolvePath('dist'),
          declaration: true,
        }),
      ],
    },
  },
});
