import App from './App.vue'
import './assets/styles.css'
import { createApp } from 'vue'
import { syncState } from './storage'
import { startCurrentDateTimer } from './time'

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', (): void => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
