<script setup lang="ts">
import type { TocLink } from "@nuxt/content";

const { links } = defineProps<{
  links: TocLink[];
}>();

const lastActiveHeading = ref<string>("");
const activeTocIds = ref<Set<string>>(new Set());

const observeLinks = () => {
  console.log("Observe links");
  const options = {
    root: null,
    rootMargin: "0px 0px -80% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  };

  const callback: IntersectionObserverCallback = async (
    entries: IntersectionObserverEntry[],
  ): Promise<void> => {
    entries.forEach((entry) => {
      const id: string = entry.target.id;
      if (entry.isIntersecting) {
        lastActiveHeading.value = id;
        activeTocIds.value.add(id);
      } else {
        activeTocIds.value.delete(id);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  links.forEach((val) => {
    const el = document.querySelector(`#${val.id}`);
    if (el) {
      observer.observe(el);
    }

    val.children?.forEach((val) => {
      const el = document.querySelector(`#${val.id}`);
      if (el) {
        observer.observe(el);
      }
    });
  });

  onBeforeUnmount(() => {
    links.forEach((val) => {
      const el = document.querySelector(`#${val.id}`);
      if (el) {
        observer.unobserve(el);
      }

      val.children?.forEach((val) => {
        const el = document.querySelector(`#${val.id}`);
        if (el) {
          observer.unobserve(el);
        }
      });
    });
  });
};

onMounted(() => {
  observeLinks();
});
</script>

<template>
  <nav name="Daftar Isi" class="text-xs">
    <ul class="flex flex-col gap-y-1.5">
      <li v-for="toc in links" :key="toc.id">
        <NuxtLink
          :to="`#${toc.id}`"
          :data-active="
            activeTocIds.has(toc.id) || toc.id === lastActiveHeading
          "
          class="text-neutral-400 hover:text-white data-[active=true]:text-white"
        >
          {{ toc.text }}
        </NuxtLink>

        <ul
          v-if="toc.children && toc.children.length > 0"
          class="mt-1 flex flex-col gap-y-1.5 list-disc list-outside"
        >
          <li
            v-for="tocc in toc.children"
            :key="tocc.id"
            :data-active="
              activeTocIds.has(tocc.id) || tocc.id === lastActiveHeading
            "
            class="ml-6 marker:text-neutral-400 data-[active=true]:marker:text-green-400 data-[active=false]:marker:text-neutral-400"
          >
            <NuxtLink
              :to="`#${tocc.id}`"
              :data-active="
                activeTocIds.has(tocc.id) || tocc.id === lastActiveHeading
              "
              class="text-neutral-400 hover:text-white data-[active=true]:text-white"
            >
              {{ tocc.text }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
