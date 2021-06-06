import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/LSP',
    name: 'LSP',
    component: () => import(/* webpackChunkName: "LSP" */ '../views/LSP.vue')
  },
  {
    path: '/DIP',
    name: 'DIP',
    component: () => import(/* webpackChunkName: "DIP" */ '../views/DIP.vue')
  },
  {
    path: '/CARP',
    name: 'CARP',
    component: () => import(/* webpackChunkName: "CARP" */ '../views/CARP.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
