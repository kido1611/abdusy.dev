<script setup lang="ts">
const route = useRoute();

const { data, error, pending, refresh } = await useAsyncData(
  `blogs-${route.path}`,
  () => queryContent().where({ _path: route.path }).findOne()
);
if (data.value) {
  useContentHead(data.value);
}
</script>

<template>
  <main class="p-4 md:p-6 grid grid-cols-1 gap-6 content-blog">
    <section v-if="data" id="toc" class="bg-gray-800 p-4 rounded-md">
      <label
        for="toc-list"
        class="text-xs text-gray-200 font-medium tracking-wide"
        >Daftar Isi</label
      >
      <nav id="toc-list" name="Daftar Isi" class="mt-2">
        <ul class="space-y-1 *:text-sm *:text-white hover:*:underline">
          <li v-for="toc in data?.body?.toc?.links" :key="toc.id">
            <NuxtLink :to="`#${toc.id}`">{{ toc.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
    <ContentRenderer :value="(data as any)" tag="article" class="prose mx-auto">
      <template #empty> error </template>
    </ContentRenderer>

    <pre>
      error: {{ error }}
    </pre>
    <pre>
      pending: {{ pending }}
    </pre>
  </main>
</template>
