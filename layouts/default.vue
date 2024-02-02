<template>
  <div>
    <header>
      <p>Header</p>
      <CurrentRoute />
      <ol>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/blogs">Blogs</NuxtLink></li>
        <li><NuxtLink to="/counter">Counter</NuxtLink></li>
        <li><NuxtLink to="/model">Model</NuxtLink></li>
      </ol>
    </header>
    <hr />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
