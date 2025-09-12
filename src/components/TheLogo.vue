<script setup>
import { PAGE_TIMELINE } from '../constants'

const emit = defineEmits(['goToTimeline'])

function handleClick() {
  emit('goToTimeline')
}
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click.prevent="handleClick">
    <img src="../assets/images/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
