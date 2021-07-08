import { defineConfig } from 'vite'
import { resolve } from 'path'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        react: resolve(__dirname, 'react/index.html')
      }
    }
  }
})
