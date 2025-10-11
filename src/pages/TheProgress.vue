<script setup>
import ProgressItem from '@/components/ProgressItem.vue'
import TheProgressEmptyState from '@/components/TheProgressEmptyState.vue'
import { trackedActivities } from '@/activities'
</script>

<template>
  <ul v-if="trackedActivities.length" class="divide-y divide-gray-400">
    <ProgressItem v-for="activity in trackedActivities" :key="activity.id" :activity="activity" />
  </ul>
  <TheProgressEmptyState v-else />
</template>
