<template>
  <div>
    <header>
      <p>Header</p>
      <CurrentRoute />
      <ol>
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs"> Blogs </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/examples"> Examples </NuxtLink>
        </li>
      </ol>
    </header>
    <hr />
    <slot />

    <footer>
      <p>
        This site was created using
        <Icon name="vscode-icons:file-type-nuxt" size="28" />
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
