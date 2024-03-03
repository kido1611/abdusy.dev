<template>
  <div class="p-6">
    <h2 class="font-bold text-2xl">
      {{ title }}
    </h2>
    <p class="mt-3">Counter: {{ count }} -- {{ doubleCount }}</p>
    <div class="mt-3 flex flex-row items-center space-x-4">
      <button
        class="px-4 py-3 rounded bg-red-200 text-red-900"
        type="button"
        @click="emit('decrement')"
      >
        Kurang
      </button>
      <button
        class="px-4 py-3 rounded bg-sky-200 text-sky-900"
        type="button"
        @click="emit('increment')"
      >
        Tambah
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  count: number
  doubleCount?: number
}>()

const emit = defineEmits<{
  (e: 'increment'): void
  (e: 'decrement'): void
}>()
</script>

<style></style>
