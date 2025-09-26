<script setup>
import BaseIcon from './BaseIcon.vue'
import { PAGE_PROGRESS } from '@/constants'
import { navigate } from '@/router'
import { ICON_CHECK_CIRCLE } from '@/icons'

const emit = defineEmits(['goToProgress'])

function handleClick() {
  emit('goToProgress')
}
</script>

<template>
  <a
    :href="`#${PAGE_PROGRESS}`"
    class="text-sm"
    @click.prevent="handleClick"
    @click="navigate(PAGE_PROGRESS)"
  >
    <div v-if="false" class="flex items-center gap-1">
      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
      <div>Day complete!</div>
    </div>

    <div v-else class="flex items-center gap-1">
      <div>Progress: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>
