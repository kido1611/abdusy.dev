<script setup lang="ts">
const { data, status } = useAsyncData('no-await', () => {
  return $fetch('/api/post')
})
</script>

<template>
  <div>
    <h1>Fetch without await</h1>
    <p>{{ status }}</p>
    <div>
      {{ data }}
    </div>
  </div>
</template>
