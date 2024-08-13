<script setup lang="ts">
const { data, status } = await useFetch('/api/post', {
  server: true,
})
</script>

<template>
  <div>
    <h1>Fetch with await and with server</h1>
    <p>{{ status }}</p>
    <div>
      {{ data }}
    </div>
  </div>
</template>
