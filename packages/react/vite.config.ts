import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { peerDependencies } from './package.json'

const external = Object.keys(peerDependencies)

export default defineConfig({
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '..', '@shared')
    }
  },
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
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
