<script setup>
import { isActivityValid, validateActivities } from '@/validators'
import ActivityItem from '@/components/ActivityItem.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({ deleteActivity: isActivityValid })
</script>

<template>
  <div>
    <ul class="divide-y divide-gray-300">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
  </div>
</template>
