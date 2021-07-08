import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['cjs', 'es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['svelte/internal', 'svelte'],
      output: {
        format: 'cjs'
      }
    }
  }
})
