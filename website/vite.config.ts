import { defineConfig } from 'vite'
import { resolve } from 'path'
import preact from '@preact/preset-vite'
import vue from '@vitejs/plugin-vue'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [preact(), vue(), svelte()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        react: resolve(__dirname, 'react/index.html'),
        vue: resolve(__dirname, 'vue/index.html'),
        svelte: resolve(__dirname, 'svelte/index.html')
      }
    }
  }
})
