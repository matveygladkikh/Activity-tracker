<script setup>
import { isActivityValid, validateActivities } from '@/validators'
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({ createActivity: isActivityValid, deleteActivity: isActivityValid })
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

    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
