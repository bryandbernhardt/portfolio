// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/robots',
    'nuxt-booster',
    '@nuxt/content',
    '@nuxtjs/fontaine',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/scss/reset.scss','~/assets/scss/theme.scss'],
  site: {
    url: 'https://bryanbernhardt.com',
  },

  app: {
    // Global page headers
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Bryan Dietrich Bernhardt - Full Stack Developer',
    },
  },

  i18n: {
    vueI18n: './i18n/nuxt-i18n.js', // custom path example
    locales: ['en', 'es', 'pt'], // used in URL path prefix
    defaultLocale: 'en' // default locale of your project for Nuxt pages and routings
  },

  // nuxt-booster configuration to performance and browser support
  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true,
    },
    optimizeSSR: {
      cleanPreloads: true,
      cleanPrefetches: true,
      inlineStyles: true
    }
  },

  nitro: {
    // compress public assets
    compressPublicAssets:  {
      brotli: true,
      gzip: true,
    },
    // prerender index and robots.txt
    prerender: {
      crawlLinks: true,
      routes: ['/robots.txt', '/'],
    },
  },

  routeRules: {
    "/": { 
      isr: true, // Enable Incremental Static Regeneration
      robots: true // Enable robots.txt
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
})