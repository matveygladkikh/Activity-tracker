<script setup>
import { ref, computed, onActivated, onDeactivated } from 'vue'
import { startTimer, stopTimer, secondsSinceMidnightInPercentage } from '@/time'
import { HUNDRED_PERCENT } from '@/constants'

const indicatorRef = ref()

const topOffset = computed(
  () => (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT,
)

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}

onActivated(startTimer)
onDeactivated(stopTimer)
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-event-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>
