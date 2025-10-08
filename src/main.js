import App from './App.vue'
import './assets/styles.css'
import { createApp } from 'vue'
import { syncState } from './storage'

syncState()

document.addEventListener('visibilitychange', () => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
