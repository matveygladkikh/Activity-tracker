<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'
import { isActivityValid, isNumber, validateActivities } from '@/validators'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({
  createActivity: isActivityValid,
  deleteActivity: isActivityValid,
  setActivitySecondsToComplete(activity, secondsToComplete) {
    return [isActivityValid(activity), isNumber(secondsToComplete)].every(Boolean)
  },
})

function setSecondsToComplete(activity, secondsToComplete) {
  emit('setActivitySecondsToComplete', activity, secondsToComplete)
}
</script>

<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length > 0" class="grow divide-y divide-gray-300">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>

    <TheActivitiesEmptyState v-else />

    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
