import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


const routes = [{
		path: "/",
		redirect: '/login'
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue")
	},
	{
		path: '/login',
		name: "/Login",
		component: () => import("../views/LoginView.vue")
	}
]

const router = new VueRouter({
	// mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
