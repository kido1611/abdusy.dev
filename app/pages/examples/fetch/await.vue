<script setup lang="ts">
const { data, status } = await useFetch('/api/post')
</script>

<template>
  <div>
    <h1>Fetch with await</h1>
    <p>{{ status }}</p>
    <div>
      {{ data }}
    </div>
  </div>
</template>
