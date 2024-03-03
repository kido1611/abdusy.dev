<template>
  <div class="*:block">
    <label class="text-sm" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      v-model="modelValue"
      type="text"
      class="px-3 py-2 rounded border border-gray-300"
    />
  </div>
</template>

<script lang="ts" setup>
const inputId = useId()

const modelValue = defineModel<string>()

defineProps<{
  label: string
}>()
</script>

<style></style>
