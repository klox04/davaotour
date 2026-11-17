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
  },
  app: {
    head: {
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
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  icon: {
    mode: 'svg',
  },
})
