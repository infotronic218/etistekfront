//const webpack = require("webpack");
export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'EtisTeck Faso Une équipe au service de l\'innovation pourmieux répondre à vos besoins',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'EtisTeck Burkina Faso une entreprise spécialisé dans plusieurs domaines de l\'ingénierie. Une équipe qualifiée dans les divers discipline est la pour vous accompagner pour la réussites de vos projets.' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.js', integrity:'sha256-BTlTdQO9/fascB1drekrDVkaKd9PkwBymMlHOiG+qLI=', crossorigin:'anonymous' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' },
      {src:'https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.4.0/bootbox.min.js'},

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/@fortawesome/fontawesome-free/css/all.css",
    "~/node_modules/prismjs/themes/prism-okaidia.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins:  [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
  },
  env: {
    apiRoot: process.env.NODE_ENV=='development'?'https://etistekapi.herokuapp.com': 'https://etistekapi.herokuapp.com',
   // apiRoot: 'http://localhost:8000',

  },
  proxy: {
  // '/api/': 'https://etistekapi.herokuapp.com',
  '/api/': 'http://localhost:8000',

  },
  /*
  ** Build configuration
  */
  buildDir: process.env.NODE_ENV=='development'?'.nuxt/': 'functions/app',
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: process.env.NODE_ENV=='development'?'':"/app",
    extractCSS:process.env.NODE_ENV=='development'?false:true,
    extend (config, ctx) {
    }
  }
}
