import { resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import typescript from '@rollup/plugin-typescript';

const resolvePath = (str: string) => resolve(__dirname, str);

function wrapper() {
  return {
    name: 'wrapper',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'wrapper.mjs',
        source: `import module from './index.js';\n\nexport default module;`,
      });
    },
  };
}

export default defineConfig({
  plugins: [solidPlugin(), wrapper()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolvePath('src/lib/index.ts'),
      formats: ['cjs'],
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
