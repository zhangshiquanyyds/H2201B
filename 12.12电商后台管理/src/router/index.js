import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const routes = [{
		path: "/",
		redirect: '/login'
	},
	{
		path: '/login',
		name: "/Login",
		component: () => import("../views/Shares/LoginView.vue")
	},

	{
		path: '/index',
		name: "/Index",
		component: () => import("../views/Shares/Index.vue"),
		children: [
			//首页
			{
				path: '/welcome',
				name: "/Welcome",
				component: () => import("../views/Shares/Welcome.vue")
			},
			//用户管理
			{
				path: '/users',
				name: "/User",
				component: () => import("../views//User/User.vue"),
				meta: ['用户管理', '用户列表'],
			},
			//权限管理
			{
				path: '/roles',
				name: "/Roles",
				component: () => import("../views/Jurisdiction/Roles.vue"),
				meta: ['权限管理', '角色列表'],
			},
			{
				path: '/rights',
				name: "/rights",
				component: () => import("../views/Jurisdiction/Rights.vue"),
				meta: ['权限管理', '权限列表'],
			},
			// 商品管理
			{
				path: '/goods',
				name: "/ShopList",
				component: () => import("../views/Shop/ShopList.vue"),
				meta: ['商品管理', '商品列表'],
			},
			{
				path: '/shopadd',
				name: "/Shopadd",
				component: () => import("../views/Shop/Shopadd.vue"),
				meta: ['商品管理', '添加商品'],
			},
			{
				path: '/params',
				name: "/ClassParameter",
				component: () => import("../views/Shop/ClassParameter.vue"),
				meta: ['商品管理', '分类列表'],
			},
			{
				path: '/categories',
				name: "/ShopClass",
				component: () => import("../views/Shop/ShopClass.vue"),
				meta: ['商品管理', '商品分类'],
			},
			//订单管理
			{
				path: '/orders',
				name: "/Orders",
				component: () => import("../views/Orders.vue"),
				meta: ['订单管理', '订单列表'],
			},
			// 数据统计
			{
				path: '/reports',
				name: "/Reports",
				component: () => import("../views/Reports.vue")
			},
		]
	}
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})

export default router
