import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [{
      path: '/child',
      name: 'child',
      component: () => import('../views/Child.vue'),
      children: [{
        path: '/childchild',
        name: 'childchild',
        component: () => import('../views/Childchild.vue'),
      }]
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router