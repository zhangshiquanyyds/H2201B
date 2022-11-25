import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [{
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
      }, {
        path: '/user',
        name: 'user',
        component: () => import('../views/数据管理/User.vue'),
      }, {
        path: '/business',
        name: 'business',
        component: () => import('../views/数据管理/Business.vue'),
      }, {
        path: '/food',
        name: 'food',
        component: () => import('../views/数据管理/Food.vue'),
      }, {
        path: '/order',
        name: 'order',
        component: () => import('../views/数据管理/Order.vue'),
      }, {
        path: '/administrators',
        name: 'administrators',
        component: () => import('../views/数据管理/Administrators.vue'),
      },

      //数据管理
      {
        path: '/shops/:id',
        name: 'shops',
        component: () => import('../views/添加商品/Shops.vue'),
      }, {
        path: '/commodity',
        name: 'commodity',
        component: () => import('../views/添加商品/Commodity.vue'),
      },
      //添加数据
      {
        path: '/distribution',
        name: 'distribution',
        component: () => import('../views/图表/Distribution'),
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('../views/编辑/Edit'),
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/设置/Admin'),
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../views/说明/Explain'),
      },


    ]
  }
]

const router = new VueRouter({
  routes
})

export default router