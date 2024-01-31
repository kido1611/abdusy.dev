<template>
  <p>Current route: {{ route.path }}</p>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style></style>
