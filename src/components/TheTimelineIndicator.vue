<script setup lang="ts">
import { ref, computed } from 'vue'
import { secondsSinceMidnightInPercentage } from '@/time'
import { HUNDRED_PERCENT } from '@/constants'

const indicatorRef = ref<HTMLHRElement | null>(null)

const topOffset = computed(
  (): number => (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT,
)

function getTimelineHeight(): number {
  return indicatorRef.value?.parentElement?.getBoundingClientRect().height ?? 0
}
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-event-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>
