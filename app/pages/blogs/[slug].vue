<script setup lang="ts">
const route = useRoute()

const { data, error, status } = await useAsyncData(`blogs-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne(),
)
if (data.value) {
  useContentHead(data.value)
}
</script>

<template>
  <main class="blog-content py-10">
    <section
      v-if="data"
      id="toc"
      class="bg-gray-800 md:rounded-md col-[full] xl:col-[left-side] py-6 xl:px-6 xl:self-start xl:sticky xl:top-6 md:col-[breakout] blog-content *:col-[content] xl:mt-4 xl:!block"
    >
      <label
        for="toc-list"
        class="text-xs text-gray-200 font-medium tracking-wide"
      >Daftar Isi</label>
      <nav
        id="toc-list"
        name="Daftar Isi"
        class="mt-2"
      >
        <ul class="space-y-1 *:text-sm *:text-white hover:*:underline">
          <li
            v-for="toc in data?.body?.toc?.links"
            :key="toc.id"
          >
            <NuxtLink :to="`#${toc.id}`">
              {{ toc.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
    <ContentRenderer
      :value="data as any"
      tag="article"
      class="mt-10 xl:mt-0 prose mx-auto w-full col-[content]"
    >
      <template #empty>
        error
      </template>
    </ContentRenderer>

    <div class="col-[content] mt-10">
      <pre>
      error: {{ error }}
    </pre>
      <pre>
      status: {{ status }}
    </pre>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.blog-content {
  --padding-inline: 1rem;
  --content-max-width: 65ch;
  --breakout-inline: 2rem;
  --side-width: 250px;

  --full-size: minmax(var(--padding-inline), 1fr);
  --side-size: minmax(0, var(--side-width));
  --breakout-size: minmax(0, var(--breakout-inline));
  --content-size: min(100% - (var(--padding-inline) * 2), var(--content-max-width));

  @apply grid;
  @apply grid-cols-[[full-start]_var(--full-size)_[breakout-start]_var(--breakout-size)_[content-start]_var(--content-size)_[content-end]_var(--breakout-size)_[breakout-end]_var(--full-size)_[full-end]];
  @apply xl:grid-cols-[[full-start]_1fr_[left-side-start]_var(--side-size)_[left-side-end]_var(--breakout-inline)_[content-start]_var(--content-size)_[content-end]_var(--breakout-inline)_[right-side-start]_var(--side-size)_[right-side-end]_1fr_[full-end]];
}
</style>
