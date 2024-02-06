<template>
  <div>Hello Name, {{ name }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { name } = route.params;
</script>

<style></style>
