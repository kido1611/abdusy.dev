<template>
  <div>
    <ol>
      <li v-for="link in links" :key="link.url">
        <NuxtLink :to="link.url">
          {{ link.name }}
        </NuxtLink>
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
    url: "/examples/hydration/ref",
  },
  {
    name: "Hydration Mismatch - useState",
    url: "/examples/hydration/use-state",
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
  {
    name: "URL as State",
    url: "/examples/url-state",
  },
  {
    name: "Fetch - With Await",
    url: "/examples/fetch/await",
  },
  {
    name: "Fetch - Without Await",
    url: "/examples/fetch/no-await",
  },
  {
    name: "Fetch - With Await and With Lazy",
    url: "/examples/fetch/lazy",
  },
  {
    name: "Fetch - With Await and Without Lazy",
    url: "/examples/fetch/no-lazy",
  },
  {
    name: "Fetch - With Await and With Server",
    url: "/examples/fetch/await-server",
  },
  {
    name: "Fetch - Without Await and With Server",
    url: "/examples/fetch/no-await-server",
  },
  {
    name: "Fetch - With Await and Without Server",
    url: "/examples/fetch/await-no-server",
  },
  {
    name: "Fetch - Without Await and Without Server",
    url: "/examples/fetch/no-await-no-server",
  },
  {
    name: "AsyncData - With Await",
    url: "/examples/async-data/await",
  },
  {
    name: "AsyncData - Without Await",
    url: "/examples/async-data/no-await",
  },
];
</script>

<style></style>
