<script lang="ts" setup></script>

<template>
  <ClientOnly>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <ComposableCounter />
      <ComposableCounter />

      <PiniaCounter />
      <PiniaCounter />

      <LazyPiniaStorageCounter />
      <LazyPiniaStorageCounter />
    </div>
  </ClientOnly>
</template>
