// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    '@nuxtjs/eslint-module'
  ],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  // typescript: {
  //   strict: true,
  //   typeCheck: true
  // },
  runtimeConfig: {
    tursoUrl: '',
    tursoAuthToken: '',
    isLoggingEnabled: false
  },
  routeRules: {
    '/': { prerender: true },
    '/blogs': { prerender: true },
    '/blogs/**': { prerender: true },
    '/api/**': { cors: true }
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-29',
})
