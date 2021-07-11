import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { peerDependencies } from './package.json'

const external = Object.keys(peerDependencies)

export default defineConfig({
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '..', '@shared')
    }
  },
  plugins: [reactRefresh()],
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
