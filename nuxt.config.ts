// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    "@nuxt/image"
  ],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  runtimeConfig: {
    tursoUrl: '',
    tursoAuthToken: '',
    isLoggingEnabled: false
  },
  routeRules: {
    '/': { prerender: true },
    '/blogs/**': { prerender: true, static: true },
    '/api/**': { cors: true }
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-07-29'
})