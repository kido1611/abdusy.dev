<script lang="ts" setup>
const counter = useComposableCounter();
</script>

<template>
  <CounterItem
    title="Composable Counter"
    :count="counter.count.value"
    :double-count="counter.doubleCount.value"
    @increment="counter.increment"
    @decrement="counter.decrement"
  />
</template>
