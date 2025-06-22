// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-06-22",
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  pinia: {
    storesDirs: ["./layers/example-counter/app/stores/"],
  },
  css: ["./app/assets/css/main.css"],
});
