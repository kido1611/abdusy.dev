<template>
  <div>
    <p>Refresh halaman ini setelah tampil, maka akan keluar warning hydration mismatch.</p>
    <NuxtLink to="/examples/hydration-use-state"> Fix </NuxtLink>
    <ul>
      <li v-for="link in linkList" :key="link.url">
        <NuxtLink :to="link.url" :external="true" target="_blank">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Link } from '~/types'

const linkList = ref<Link[]>(generateRandomLinks())

function generateRandomLinks() {
  const links: Link[] = []
  for (let i = 0; i < 20; i++) {
    const link = generateRandomLink()
    links.push({
      name: 'data' + i,
      url: link
    })
  }
  return links
}

function generateRandomLink() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const length = 10
  let link = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    link += characters[randomIndex]
  }
  return `/hydrations/${link}`
}
</script>

<style></style>
