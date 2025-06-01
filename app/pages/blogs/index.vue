<template>
  <div>
    <h1>Blogs</h1>
    <div class="flex flex-col space-y-4 max-w-[70ch] mx-auto">
      <NuxtLink
        v-for="blog in blogs"
        :key="blog.path"
        :to="blog.path"
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
      status: {{ status }}
    </pre>
    <button type="button" @click="refreshBlogs">refresh</button>
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
  status,
  refresh,
} = await useAsyncData("blogs", () =>
  queryCollection("blogs")
    .order("created_at", "DESC")
    .select("path", "title", "description", "author", "created_at")
    .all(),
);

prerenderRoutes(blogs.value?.map((post) => `${post.path}`) ?? []);

function refreshBlogs() {
  refresh();
}
</script>

<style></style>
