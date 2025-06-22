<script setup lang="ts">
const { data, status } = useFetch('/api/post', {
  server: false,
})
</script>

<template>
  <div>
    <h1>Fetch without await and without server</h1>
    <p>{{ status }}</p>
    <div>
      {{ data }}
    </div>
  </div>
</template>
