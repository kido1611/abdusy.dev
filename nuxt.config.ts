import * as path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  content: {
    sources: {
      content: {
        driver: "fs",
        prefix: "/blogs", // All contents inside this source will be prefixed with `/docs`
        base: path.resolve(__dirname, "content"),
      },
    },
  },
});