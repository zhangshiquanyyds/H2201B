import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/home"
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/brother',
    name: 'Brother',
    component: () => import('../views/Brother.vue')
  }, {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router