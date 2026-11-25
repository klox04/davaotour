import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', 'lenis/nuxt'],
  css: ['lenis/dist/lenis.css', '~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger', 'lenis', 'lenis/vue'],
    },
    server: {
      // Browser calls during `nuxt dev` hit Vite first; forward /api to Laravel.
      proxy: {
        '/api': {
          target: process.env.NUXT_API_PROXY_TARGET || 'http://127.0.0.1:50503',
          changeOrigin: true,
        },
      },
    },
  },

  app: {
    head: {
      title: 'Davao City Tourism Office',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content: 'Discover Davao City, where nature, culture, adventure, and warm hospitality come together.',
        },
        { name: 'theme-color', content: '#164B35' },
        { property: 'og:site_name', content: 'Davao City Tourism Office' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_PH' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/davaoicon.png' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    // Used by the Nuxt dev proxy so /api/* reaches Laravel during `nuxt dev`.
    apiProxyTarget: process.env.NUXT_API_PROXY_TARGET || 'http://127.0.0.1:50503',
    public: {
      // Prefer a same-origin path (`/api/v1`) so session cookies work with the
      // Laradock nginx vhost, or with the Nitro dev proxy below.
      apiBase: '/api/v1',
    },
  },
  routeRules: {
    '/experiences': { redirect: { to: '/things-to-do', statusCode: 301 } },
    '/experiences/**': { redirect: { to: '/things-to-do', statusCode: 301 } },
    '/culture': { redirect: { to: '/events-festivals', statusCode: 301 } },
  },


  nitro: {
    devProxy: {
      '/api': {
        target: process.env.NUXT_API_PROXY_TARGET || 'http://127.0.0.1:50503',
        changeOrigin: true,
      },
    },
  },

  icon: {
    mode: 'svg',
  },
})

