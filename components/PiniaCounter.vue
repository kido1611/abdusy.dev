<template>
  <Counter
    title="Pinia Counter"
    :count="counter.count"
    :double-count="counter.doubleCount"
    @increment="counter.increment"
    @decrement="counter.decrement"
  />
</template>

<script lang="ts" setup>
const counter = useCounterStore();
</script>

<style></style>
