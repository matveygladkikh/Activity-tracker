<script setup>
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { BUTTON_TYPE_DANGER } from '@/constants'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { isActivityValid, isUndefined } from '@/validators'
import { inject } from 'vue'

const props = defineProps({
  activity: {
    require: true,
    type: Object,
    validator: isActivityValid,
  },
})

const emit = defineEmits({
  delete: isUndefined,
})

const setActivitySecondsToComplete = inject('setActivitySecondsToComplete')
const periodSelectOptions = inject('periodSelectOptions')
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ props.activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="grow font-mono"
        placeholder="hh:mm"
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        @select="setActivitySecondsToComplete(activity, $event || 0)"
      ></BaseSelect>

      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
