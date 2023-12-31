// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {

    head: {
      title:'Nuxt products app!',
      meta: [
        {name: 'Description', content: 'Everything about Nuxt 3 js',}
      ],
      link:[
        {
          rel:'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'        }
      ]
    }
  }
})
