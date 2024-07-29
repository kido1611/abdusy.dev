<template>
  <div class="*:block">
    <label class="text-sm" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      :value="modelValue"
      type="text"
      class="px-3 py-2 rounded border border-gray-300"
      @input="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
const inputId = useId()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

defineProps<{
  label: string
  modelValue: any
}>()

function handleChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style></style>
