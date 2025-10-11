<script setup>
import { computed } from 'vue'
import { calculateActivityCompletionPercentage } from '@/activities'
import { getColorProgressClass, formatSeconds } from '@/functions'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items'
import { isActivityValid } from '@/validators'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

const percentage = computed(() =>
  calculateActivityCompletionPercentage(
    props.activity,
    calculateTrackedActivitySeconds(timelineItems.value, props.activity),
  ),
)
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="getColorProgressClass(percentage)" :style="`width: ${percentage}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span
        >{{ formatSeconds(calculateTrackedActivitySeconds(timelineItems, activity)) }} /
        {{ formatSeconds(activity.secondsToComplete) }}</span
      >
    </div>
  </li>
</template>
