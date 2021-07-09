import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { peerDependencies } from './package.json'
import jsx from '@vitejs/plugin-vue-jsx'

const external = Object.keys(peerDependencies)

export default defineConfig({
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '..', '..')
    }
  },
  plugins: [jsx(), vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib', 'index.ts'),
      formats: ['cjs', 'es'],
      fileName: 'index'
    },
    rollupOptions: {
      external,
      output: {
        format: 'cjs'
      }
    }
  }
})
