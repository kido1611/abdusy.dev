<template>
  <div>
    <header>
      <div class="container px-4 py-3 mx-auto">
        <div class="flex flex-row justify-between items-center">
          <p>Header</p>

          <nav>
            <ol class="inline-flex flex-row items-center">
              <li>
                <NuxtLink class="px-4 py-2.5 rounded-md hover:bg-sky-200 block" to="/">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="px-4 py-2.5 rounded-md hover:bg-sky-200 block" to="/blogs">
                  Blogs
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="px-4 py-2.5 rounded-md hover:bg-sky-200 block" to="/examples">
                  Examples
                </NuxtLink>
              </li>
            </ol>
          </nav>
        </div>

        <CurrentRoute />
      </div>
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
