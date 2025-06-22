<script setup lang="ts">
const { data, status } = useFetch('/api/post', {
  server: true,
})
</script>

<template>
  <div>
    <h1>Fetch without await and with server</h1>
    <p>{{ status }}</p>
    <div>
      {{ data }}
    </div>
  </div>
</template>
