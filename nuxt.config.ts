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
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
