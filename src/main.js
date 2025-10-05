import App from './App.vue'
import './assets/styles.css'
import { loadState, saveState } from './storage'
import { createApp } from 'vue'
import { findActiveTimelineItem, startTimelineItemTimer } from './timeline-items'

loadState()

const activeTimelineItem = findActiveTimelineItem()

if (activeTimelineItem) {
  startTimelineItemTimer(activeTimelineItem)
}

document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

createApp(App).mount('#app')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
