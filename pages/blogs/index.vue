<template>
  <div>
    <h1>Blogs</h1>
    <div class="flex flex-col space-y-4 max-w-[70ch] mx-auto">
      <ContentList :query="query" v-slot="{ list }">
        <NuxtLink
          :to="blog._path"
          v-for="blog in list"
          :key="blog._path"
          class="border border-gray-300 rounded p-4"
        >
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.description }}</p>
        </NuxtLink>
      </ContentList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/types";
const query: QueryBuilderParams = {
  sort: [
    {
      created_at: -1,
    },
  ],
};
</script>

<style></style>
