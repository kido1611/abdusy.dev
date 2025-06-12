<script setup lang="ts">
import experiences from "~~/data/experiences.json";
import projects from "~~/data/projects.json";

useHead({
  title: "Muhammad Abdusy Syukur",
  meta: [{ name: "robots", content: "noindex,nofollow" }],
});

const runtimeConfig = useRuntimeConfig();

const contacts = [
  {
    icon: "tabler:at",
    value: "hi[at]abdusy.dev",
  },
  {
    icon: "tabler:brand-github",
    value: "https://github.com/kido1611",
    link: "https://github.com/kido1611",
  },
  {
    icon: "tabler:brand-linkedin",
    value: "https://www.linkedin.com/in/abd-uzzy/",
    link: "https://www.linkedin.com/in/abd-uzzy/",
  },
  {
    icon: "tabler:brand-x",
    value: "https://x.com/abd_uzzy",
    link: "https://x.com/abd_uzzy",
  },
];
</script>

<template>
  <main
    class="max-w-[90ch] w-full mx-auto border-x border-neutral-800 px-6 lg:px-12 min-h-[100dvh] flex flex-col *:py-20"
  >
    <div class="max-w-lg !py-36">
      <h1 class="text-6xl font-light">Hello There,</h1>
      <p class="text-xl mt-6 text-neutral-100">I'm Muhammad Abdusy Syukur,</p>
      <p class="text-xl mt-2 text-neutral-100">
        Software Developer with experience creating Web Applications, Android
        applications, and Embedded Systems.
      </p>
      <div class="mt-12">
        <div
          v-if="runtimeConfig.public.availableForWork"
          class="text-green-400 rounded-full flex flex-row items-center gap-x-2 mx-2"
        >
          <span class="relative inline-flex size-2 -mt-0.5">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex size-2 rounded-full bg-green-500"
            ></span>
          </span>

          <span class="text-sm font-semibold">
            Available for new projects
          </span>
        </div>
        <!-- TODO: button bio/contact/github // available for projects -->
      </div>
    </div>

    <section class="flex flex-col gap-y-6">
      <h2 class="text-3xl font-medium">Experiences</h2>
      <div class="flex flex-col gap-y-4 max-w-2xl">
        <div v-for="experience in experiences" class="flex flex-col">
          <p class="font-semibold text-xl">
            {{
              `${experience.position}, ${experience.date.start}-${experience.date.end ?? "now"}`
            }}
          </p>
          <template v-if="experience.company.name">
            <p class="mt-1">
              {{
                `${experience.company.name} - ${experience.company.location}`
              }}
            </p>
          </template>

          <div class="mt-1" v-if="experience.jobs.length > 0">
            <p class="text-sm text-neutral-200">Jobs:</p>
            <ul class="mt-1 list-disc list-outside">
              <li v-for="job in experience.jobs" class="ml-8">
                {{ job }}
              </li>
            </ul>
          </div>
          <div class="mt-1">
            <p class="text-sm text-neutral-200">Used stacks:</p>
            <ul class="flex flex-row flex-wrap gap-x-2 gap-y-1">
              <li
                v-for="stack in experience.stacks"
                class="px-2 py-1 font-medium text-sm"
              >
                {{ stack }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-y-6">
      <h2 class="text-3xl font-medium">Projects</h2>
      <div class="flex flex-col gap-y-4 max-w-2xl">
        <div v-for="project in projects">
          <div class="flex flex-row">
            <p class="font-semibold text-xl flex-none">
              {{ project.name }}
            </p>

            <div class="inline-flex flex-row gap-x-2 ml-2 mt-0.5">
              <Badge
                v-if="project.is_wip"
                color="warning"
                title="Work In Progress"
                >WIP</Badge
              >
              <Badge v-if="project.is_archved" title="Archived">ARCHIVED</Badge>
            </div>
          </div>
          <p class="mt-1">{{ project.description }}</p>
          <div class="mt-1" v-if="project.link">
            <NuxtLink
              :to="project.link"
              target="_blank"
              class="text-sm relative before:bg-neutral-500/50 before:w-full before:absolute before:inset-x-0 before:bottom-0 before:h-1 focus-within:before:bg-transparent hover:before:bg-transparent hover:bg-blue-600 focus-within:bg-blue-600"
              >{{ project.link }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-y-6">
      <h2 class="text-3xl font-medium">Contacts</h2>
      <div class="flex flex-col gap-y-4 max-w-2xl">
        <div
          class="self-start inline-flex flex-row items-center text-sm relative"
          v-for="contact in contacts"
        >
          <Icon :name="contact.icon" size="1.5rem" class="flex-none" />
          <NuxtLink
            v-if="contact.link"
            :to="contact.link"
            target="_blank"
            class="ml-2 hover:underline stretched-link"
            >{{ contact.value }}</NuxtLink
          >
          <span v-else class="ml-2">{{ contact.value }}</span>
        </div>
      </div>
    </section>

    <div class="-mx-6 lg:-mx-12 !py-0">
      <footer class="bg-stripes h-20 flex items-center justify-center">
        <NuxtLink to="https://github.com/kido1611/abdusy.dev" target="_blank">
          <div class="inline-flex items-center gap-x-2">
            <span class="text-sm text-neutral-200">
              This site is created using
            </span>
            <Icon
              name="vscode-icons:file-type-nuxt"
              size="1.5rem"
              class="mt-1"
            />
          </div>
        </NuxtLink>
      </footer>
    </div>
  </main>
</template>
