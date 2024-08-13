<script setup lang="ts">
const { data, status } = await useFetch("/api/post", {
  lazy: false,
})
</script>

<template>
  <div>
    <h1>Fetch with await and without lazy</h1>
    <p>{{ status }}</p>
    <div>
      {{ data }}
    </div>
  </div>
</template>
