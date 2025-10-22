import { computed } from 'vue'
import { getColorProgressClass } from '../functions'
import { calculateActivityCompletionPercentage } from '../activities'
import { timelineItems, calculateTrackedActivitySeconds } from '../timeline-items'
import { Activity, ProgressColorClass } from '../types'
import { type ComputedRef } from 'vue'

export function useProgress(activity: Activity): {
  colorClass: ComputedRef<ProgressColorClass>
  percentage: ComputedRef<number>
  trackedActivitySeconds: ComputedRef<number>
} {
  const colorClass = computed((): ProgressColorClass => getColorProgressClass(percentage.value))

  const percentage = computed((): number =>
    calculateActivityCompletionPercentage(activity, trackedActivitySeconds.value),
  )

  const trackedActivitySeconds = computed((): number =>
    calculateTrackedActivitySeconds(timelineItems.value, activity),
  )

  return {
    colorClass,
    percentage,
    trackedActivitySeconds,
  }
}
