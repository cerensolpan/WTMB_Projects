import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artist',
    name: 'Artist',
    component: () => import('../views/Artist.vue')
  },

  {
    path: '/artist/release',
    name: 'Release',
    component: () => import('../views/Release.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router