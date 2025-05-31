import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },
  runtimeConfig: {
    tursoUrl: "",
    tursoAuthToken: "",
    isLoggingEnabled: false,
  },
  routeRules: {
    "/": { prerender: true },
    "/blogs/**": { prerender: true, static: true },
    "/api/**": { cors: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-07-29",
  vite: {
    plugins: [tailwindcss()],
  },
});
