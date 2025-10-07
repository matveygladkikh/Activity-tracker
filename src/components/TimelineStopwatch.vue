<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '@/constants'
import { isTimelineItemValid } from '@/validators'
import { formatSeconds } from '@/functions'
import { ref, watch } from 'vue'
import { startTimelineItemTimer, stopTimelineItemTimer, updateTimelineItem } from '@/timeline-items'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons'
import { now } from '@/time'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const seconds = ref(props.timelineItem.activitySeconds)

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
  },
)

function reset() {
  stop()

  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value,
  })

  seconds.value = 0
}
</script>

<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" :disabled="!seconds" @click="reset"
      ><BaseIcon :name="ICON_ARROW_PATH"
    /></BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton
      v-if="timelineItemTimer && timelineItemTimer.hour === now.getHours()"
      :type="BUTTON_TYPE_WARNING"
      @click="($event) => stopTimelineItemTimer(props.timelineItem)"
      ><BaseIcon :name="ICON_PAUSE"
    /></BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="($event) => startTimelineItemTimer(props.timelineItem)"
      :disabled="timelineItem.hour !== now.getHours()"
      ><BaseIcon :name="ICON_PLAY"
    /></BaseButton>
  </div>
</template>
