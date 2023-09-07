export default defineNuxtConfig({
  telemetry: false,
  experimental: { typedPages: true },
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#4FE0B6' },
        { name: 'application-name', content: 'Atenea' },
        { name: 'apple-mobile-web-app-title', content: 'Atenea' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/apple-touch-icon-precomposed.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'mask-icon', color: '#5BBAD5', href: '/safari-pinned-tab.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        // { rel: 'apple-touch-startup-image', href: 'img/loading.png' },
      ],
    },
  },
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  css: ['@unocss/reset/tailwind.css', '@/assets/css/main.css'],
})
