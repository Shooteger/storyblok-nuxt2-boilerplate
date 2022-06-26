export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'storyblok-nuxt2-boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt 2 Storyblok Boilerplate Template' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components',
    '~/plugins/storyblok-rich-text-renderer.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    ["@storyblok/nuxt-2/module", { accessToken: process.env.STORYBLOK_API }],
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
