import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxt/content", "@nuxt/icon"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
    database: {
      type: "libsql",
      url: process.env.NUXT_TURSO_URL ?? "",
      authToken: process.env.NUXT_TURSO_AUTH_TOKEN ?? "",
    },
  },
  runtimeConfig: {
    tursoUrl: "",
    tursoAuthToken: "",
    isLoggingEnabled: false,
    public: {
      availableForWork: true,
    },
  },
  routeRules: {
    "/": { prerender: true, static: true },
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
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
