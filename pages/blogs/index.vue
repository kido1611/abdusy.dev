<template>
  <div>
    <h1>Blogs</h1>
    <ContentList path="/blogs" v-slot="{ list }">
      <div v-for="blog in list" :key="blog._path">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
        <NuxtLink :to="blog._path">Open</NuxtLink>
      </div>
    </ContentList>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
