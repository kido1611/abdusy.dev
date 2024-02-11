<template>
  <div>
    <p>
      Coba refresh halaman ini, maka tidak akan muncul warning hydration
      missmatch.
    </p>
    <ul>
      <li v-for="link in linkList" :key="link.url">
        <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Link } from "~/types";
const linkList = useState<Link[]>("random-links", () => generateRandomLinks());

function generateRandomLinks() {
  const links: Link[] = [];
  for (let i = 0; i < 20; i++) {
    const link = generateRandomLink();
    links.push({
      name: "data" + i,
      url: link,
    });
  }
  return links;
}

function generateRandomLink() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 10;
  let link = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    link += characters[randomIndex];
  }
  return `/examples/hydrations/${link}`;
}
</script>

<style></style>
