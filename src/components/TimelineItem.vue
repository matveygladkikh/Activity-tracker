<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import { isTimelineItemValid, validateSelectOptions } from '@/validators'
import { ref } from 'vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})

const selectedActivityId = ref(0)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      :selected="selectedActivityId"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
