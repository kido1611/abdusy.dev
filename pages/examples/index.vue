<template>
  <div>
    <ol>
      <li><NuxtLink to="/examples/counter">Counter</NuxtLink></li>
      <li><NuxtLink to="/examples/model">Model</NuxtLink></li>
      <li><NuxtLink to="/examples/shallow-ref">Shallow Ref</NuxtLink></li>
      <li>
        <NuxtLink to="/examples/hydration-ref"
          >Hidration Mismatch - ref</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/examples/hydration-use-state"
          >Hidration Mismatch - useState</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/examples/grid-container">Grid Container</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
