<script setup lang="ts"></script>

<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <ContentRenderer :value="doc" />
        <hr />
        <section id="toc">
          <ul>
            <li v-for="toc in doc.body?.toc?.links" :key="toc.id">
              <NuxtLink :to="`#${toc.id}`">{{ toc.text }}</NuxtLink>
            </li>
          </ul>
        </section>
      </template>
    </ContentDoc>
  </main>
</template>
