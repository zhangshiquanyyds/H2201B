import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: "/login"
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/PublicPage/Login.vue')
	},
	{
		path: '/index',
		name: 'Index',
		component: () => import('../views/PublicPage/Index.vue'),
		children: [{
			path: '/home',
			name: 'Home',
			component: () => import('../views/Home.vue')
		}, {
			path: '/organizationals',
			name: 'Organizationa',
			component: () => import('../views/Organizational/organizationals.vue')
		}, ]
	},
]

const router = new VueRouter({
	routes
})

export default router
