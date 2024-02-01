<template>
  <Counter
    title="Composable Counter"
    :count="counter.count.value"
    :double-count="counter.doubleCount.value"
    @increment="counter.increment"
    @decrement="counter.decrement"
  />
</template>

<script lang="ts" setup>
const counter = useCounter();
</script>

<style></style>
