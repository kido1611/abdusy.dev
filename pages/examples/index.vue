<template>
  <div>
    <ol>
      <li v-for="link in links" :key="link.url">
        <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import type { Link } from "~/types";
const links: Link[] = [
  {
    name: "Counter",
    url: "/examples/counter",
  },
  {
    name: "Model",
    url: "/examples/model",
  },
  {
    name: "Shallow Ref",
    url: "/examples/shallow-ref",
  },
  {
    name: "Hydration Mismatch - ref",
    url: "/examples/hydration-ref",
  },
  {
    name: "Hydration Mismatch - useState",
    url: "/examples/hydration-use-state",
  },
  {
    name: "Grid Container",
    url: "/examples/grid-container",
  },
  {
    name: "Prop Event",
    url: "/examples/prop-event",
  },
  {
    name: "Provide Inject",
    url: "/examples/provide-inject",
  },
];
</script>

<style></style>
