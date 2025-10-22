<script lang="ts">
import { ButtonType } from '@/types'

const typeClasses: Record<ButtonType, string> = {
  [ButtonType.DANGER]: 'text-white bg-red-500 enabled:hover:bg-red-600 ',
  [ButtonType.PRIMARY]: 'text-white bg-purple-500 enabled:hover:bg-purple-600 ',
  [ButtonType.NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200 ',
  [ButtonType.SUCCESS]: 'text-white bg-green-500 enabled:hover:bg-green-600 ',
  [ButtonType.WARNING]: 'text-white bg-yellow-500 enabled:hover:bg-yellow-600 ',
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: ButtonType }>(), {
  type: ButtonType.PRIMARY,
})

const classes = `${typeClasses[props.type]}rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
