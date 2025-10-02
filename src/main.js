import App from './App.vue'
import './assets/styles.css'
import * as storage from '@/storage'
import { createApp } from 'vue'
import { timelineItems } from './timeline-items'
import { activities } from './activities'

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    saveState()
  }
})

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value,
  })
}

createApp(App).mount('#app')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
