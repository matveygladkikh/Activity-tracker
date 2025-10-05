import { APP_NAME } from './constants'
import { today } from './time'
import { timelineItems } from './timeline-items'
import { activities } from './activities'
import { isToday } from './time'

export function loadState() {
  // const state = storage.load()
  const serializeState = localStorage.getItem(APP_NAME)

  const state = serializeState ? JSON.parse(serializeState) : {}

  timelineItems.value = isToday(new Date(state.date)) ? state.timelineItems : timelineItems.value
  activities.value = state.activities || activities.value
}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      date: today(),
    }),
  )
}
