import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles.css'

createApp(App).mount('#app')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
