<template>
  <div>
    <h1>Blogs</h1>
    <div class="flex flex-col space-y-4 max-w-[70ch] mx-auto">
      <NuxtLink
        v-for="blog in blogs"
        :key="blog._path"
        :to="blog._path"
        class="block border border-gray-300 rounded p-4"
      >
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
        <p>{{ blog.author }}</p>
        <p>
          Time:
          <time :datetime="blog.created_at">{{ blog.created_at }}</time>
        </p>
      </NuxtLink>
    </div>
    <pre>
      error: {{ error }}
    </pre>
    <pre>
      pending: {{ pending }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Blogs",
  description: "Anything I have written",
  ogTitle: "Blogs",
  ogDescription: "Anything I have written",
});

useHead({
  htmlAttrs: {
    lang: "id",
  },
});

const {
  data: blogs,
  error,
  pending,
  refresh,
} = useAsyncData("blogs", () =>
  queryContent("blogs")
    .sort({ created_at: -1 })
    .only(["_path", "title", "description", "author", "created_at"])
    .find()
);
</script>

<style></style>
