import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxt/icon"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
        toc: {
          depth: 3,
        },
      },
    },
    database: {
      type: "libsql",
      url: process.env.NUXT_TURSO_URL ?? "",
      authToken: process.env.NUXT_TURSO_AUTH_TOKEN ?? "",
    },
    experimental: {
      sqliteConnector: "native",
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
    "/articles/**": { prerender: true, static: true },
    "/api/**": { cors: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-06-22",
  vite: {
    plugins: [tailwindcss()],
    // experimental: {
    //   enableNativePlugin: true,
    // },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
