import { computed } from 'vue'
import { getColorProgressClass } from '../functions'
import { calculateActivityCompletionPercentage } from '../activities'
import { timelineItems, calculateTrackedActivitySeconds } from '../timeline-items'

export function useProgress(activity) {
  const colorClass = computed(() => getColorProgressClass(percentage.value))

  const percentage = computed(() =>
    calculateActivityCompletionPercentage(activity, trackedActivitySeconds.value),
  )

  const trackedActivitySeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity),
  )

  return {
    colorClass,
    percentage,
    trackedActivitySeconds,
  }
}
