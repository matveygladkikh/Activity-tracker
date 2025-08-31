<script setup>
import { PAGE_TIMELINE } from '../constants'

const emit = defineEmits(['goToTimeline'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click.prevent="handleClick">
    <img src="../assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
