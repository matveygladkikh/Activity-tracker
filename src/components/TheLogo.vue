<script setup>
import { PAGE_TIMELINE } from '../constants'
import { navigate } from '@/router'

const emit = defineEmits(['goToTimeline'])

function handleClick() {
  emit('goToTimeline')
}
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click.prevent="handleClick" @click="navigate(PAGE_TIMELINE)">
    <img src="../assets/images/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
