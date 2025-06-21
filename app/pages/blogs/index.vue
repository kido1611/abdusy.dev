<script lang="ts" setup>
useSeoMeta({
  title: "Articles",
  description: "What was I writes...",
  ogTitle: "Articles",
  ogDescription: "What was I writes...",
});

useHead({
  htmlAttrs: {
    lang: "id",
  },
});

const route = useRoute();

const { data: articles, error } = await useAsyncData("blogs", () => {
  if (route.query.tags) {
    return queryCollection("blogs")
      .where("is_published", "=", "true")
      .where("tags", "LIKE", `%${route.query.tags}%`)
      .select("path", "title", "description", "author", "created_at")
      .order("created_at", "DESC")
      .all();
  }

  return queryCollection("blogs")
    .where("is_published", "=", "true")
    .select("path", "title", "description", "author", "created_at")
    .order("created_at", "DESC")
    .all();
});

prerenderRoutes(articles.value?.map((post) => `${post.path}`) ?? []);
</script>

<template>
  <div class="article-wrapper py-20">
    <main class="article-wrapper-content flex flex-col">
      <h1 class="mb-10 text-5xl font-light">Articles</h1>

      <template v-if="articles && articles.length > 0">
        <div class="flex flex-col gap-y-5">
          <div v-for="blog in articles" :key="blog.path" class="relative">
            <NuxtLink
              :to="blog.path"
              class="stretched-link hover:underline text-2xl"
            >
              {{ blog.title }}
            </NuxtLink>

            <p class="mt-1">{{ blog.description }}</p>
            <p class="text-neutral-300">
              <NuxtTime
                :datetime="blog.created_at"
                locale="id-ID"
                day="numeric"
                month="long"
                year="numeric"
              />
            </p>
          </div>
        </div>
      </template>

      <template v-if="articles && articles.length === 0">
        <div
          class="flex flex-col items-center justify-center gap-y-3 h-[50dvh] text-neutral-300"
        >
          <p class="text-2xl italic font-medium">There is no articles.</p>

          <p v-if="route.query.tags" class="text-sm">
            Search: tags <strong>"{{ route.query.tags }}"</strong>
          </p>
        </div>
      </template>

      <template v-if="error">
        <div
          class="flex flex-col items-center justify-center gap-y-3 h-[50dvh] text-neutral-300"
        >
          <p class="text-2xl italic font-medium">
            Error: {{ error?.message ?? "-" }} .
          </p>
        </div>
      </template>
    </main>
  </div>
</template>
