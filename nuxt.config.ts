
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],
  apollo: {
    autoImports: true,
    tokenStorage: 'cookie',
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: "http://localhost:8080/v1/graphql",
      },
    },
  },
});
