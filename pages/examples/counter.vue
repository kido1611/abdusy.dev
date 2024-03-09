<template>
  <ClientOnly>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <ComposableCounter />
      <ComposableCounter />
      <PiniaCounter />
      <PiniaCounter />
      <PiniaStorageCounter />
      <PiniaStorageCounter />
    </div>

    <template #fallback>
      <p>Loading...</p>
    </template>
  </ClientOnly>
</template>

<script lang="ts" setup></script>

<style></style>
