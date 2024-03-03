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
  typescript: {
    strict: true,
    typeCheck: true
  },
  runtimeConfig: {
    tursoUrl: '',
    tursoAuthToken: '',
    isLoggingEnabled: false
  }
})
