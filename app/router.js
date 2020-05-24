import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _44c27ce2 = () => interopDefault(import('..\\..\\pages\\About.vue' /* webpackChunkName: "pages_About" */))
const _2093a0b5 = () => interopDefault(import('..\\..\\pages\\Contact.vue' /* webpackChunkName: "pages_Contact" */))
const _7033085d = () => interopDefault(import('..\\..\\pages\\Formations.vue' /* webpackChunkName: "pages_Formations" */))
const _82526cce = () => interopDefault(import('..\\..\\pages\\Services.vue' /* webpackChunkName: "pages_Services" */))
const _1ad0999c = () => interopDefault(import('..\\..\\pages\\blog\\posts\\index.vue' /* webpackChunkName: "pages_blog_posts_index" */))
const _647415ae = () => interopDefault(import('..\\..\\pages\\blog\\posts\\_slug\\index.vue' /* webpackChunkName: "pages_blog_posts__slug_index" */))
const _25ef9072 = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _44c27ce2,
    name: "About"
  }, {
    path: "/Contact",
    component: _2093a0b5,
    name: "Contact"
  }, {
    path: "/Formations",
    component: _7033085d,
    name: "Formations"
  }, {
    path: "/Services",
    component: _82526cce,
    name: "Services"
  }, {
    path: "/blog/posts",
    component: _1ad0999c,
    name: "blog-posts"
  }, {
    path: "/blog/posts/:slug",
    component: _647415ae,
    name: "blog-posts-slug"
  }, {
    path: "/",
    component: _25ef9072,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
