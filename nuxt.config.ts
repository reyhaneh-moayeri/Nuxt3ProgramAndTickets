// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
  },

  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "@nuxt/test-utils/module",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_fonts.scss";
            @import "@/assets/styles/_mixins.scss";`,
        },
      },
    },
  },
});
