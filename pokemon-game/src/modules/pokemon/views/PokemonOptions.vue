<template>
  <section class="mt-5">
    <button
      v-for="{ name, id } in options"
      :key="id"
      :class="!blockSelection ? 'capitalize btn btn-blue btn-blue:hover w-full' : 'capitalize btn btn-gray w-full'"
      @click="$emit('selectedOption', id)"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces'

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
}

const { options } = defineProps<Props>()

defineEmits<{
  selectedOption: [id: number]
}>()
</script>

<style lang="css" scoped>
.btn {
  @apply py-2 px-4 my-2 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-gray {
  @apply bg-gray-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
