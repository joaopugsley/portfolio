// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', "@nuxtjs/tailwindcss", 'nuxt-icon', 'nuxt-particles'],
  googleFonts: {
    preload: true,
    families: {
      "Hanken Grotesk": true
    }
  }
})