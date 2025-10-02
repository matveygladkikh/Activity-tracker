<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECOND,
} from '@/constants'
import { isTimelineItemValid } from '@/validators'
import { formatSeconds } from '@/functions'
import { ref, watch, watchEffect } from 'vue'
import { updateTimelineItem } from '@/timeline-items'
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
const isRunning = ref(false)

watchEffect(() => {
  if (props.timelineItem.hour !== now.value.getHours() && isRunning.value) {
    stop()
  }
})

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
  },
)

const temp = 120

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + temp,
    })

    seconds.value += temp
  }, MILLISECONDS_IN_SECOND)
}

function stop() {
  clearInterval(isRunning.value)

  isRunning.value = false
}

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
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop"
      ><BaseIcon :name="ICON_PAUSE"
    /></BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="timelineItem.hour !== now.getHours()"
      ><BaseIcon :name="ICON_PLAY"
    /></BaseButton>
  </div>
</template>
