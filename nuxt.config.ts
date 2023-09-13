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
  image: {
    dir: 'assets/images',
    quality: 85,
    format: ['webp'],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          fit: 'contain',
          background: 'transparent',
          quality: 70,
          width: 60,
          height: 60,
        },
      },
      hero: {
        modifiers: {
          format: 'webp',
          fit: 'contain',
          background: 'transparent',
          quality: 85,
          width: 480,
          height: 480,
        },
      },
    },
  },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/image'],
  css: ['@unocss/reset/tailwind.css'],
})
