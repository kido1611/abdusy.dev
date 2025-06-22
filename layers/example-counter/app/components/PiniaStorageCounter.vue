<template>
  <CounterItem
    title="Pinia Storage Counter"
    :count="counter.count"
    :double-count="counter.doubleCount"
    @increment="counter.increment"
    @decrement="counter.decrement"
  />
</template>

<script lang="ts" setup>
const counter = useCounterStorageStore();
</script>

<style></style>
