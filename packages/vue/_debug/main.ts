import { createApp } from 'vue'
import App from './App.vue'
import { plugin } from '../lib/index'

createApp(App).use(plugin).mount('#app')
