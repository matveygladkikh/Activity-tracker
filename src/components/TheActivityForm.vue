<script setup>
import { ref } from 'vue'
import { isActivityValid } from '@/validators'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'

const emit = defineEmits({
  submit: isActivityValid,
})

const activity = ref('')

function submit() {
  emit('submit', activity.value)

  activity.value = ''
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      type="text"
      v-model="activity"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8"></PlusIcon>
    </BaseButton>
  </form>
</template>
