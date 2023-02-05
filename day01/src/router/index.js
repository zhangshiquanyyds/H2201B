import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: "/login"
	},
	{
		path: '/staffdetails/:id',
		redirect: "/loginaccount"
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
			}, {
				path: '/staff',
				name: 'Staff',
				component: () => import('../views/Staff/staff.vue')
			},
			{
				path: '/excel',
				name: 'excel',
				component: () => import('../views/Staff/excel.vue')
			},
			{
				path: '/staffdetails/:id',
				name: 'StaffDetails',
				component: () => import('../views/Staff/StaffDetails.vue'),
				children: [{
						path: '/loginaccount/:id',
						name: 'LoginacCount',
						component: () => import('../views/Staff/Details/LoginacCount.vue')
					},
					{
						path: '/personaldetails',
						name: 'PersonalDetails',
						component: () => import('../views/Staff/Details/PersonalDetails.vue')
					},
					{
						path: '/positioninfo',
						name: 'PositionInfo',
						component: () => import('../views/Staff/Details/PositionInfo.vue')
					},
				]
			},
			{
				path: '/company',
				name: 'Company',
				component: () => import('../views/CompanySettings/Company.vue'),
				children: [{
					path: '/role',
					name: 'Role',
					component: () => import('../views/CompanySettings/Rolemanagement/Role.vue')
				}, {
					path: '/information',
					name: 'Information',
					component: () => import('../views/CompanySettings/Information.vue')
				}, ]
			},

			{
				path: '/jurisdiction',
				name: 'Jurisdiction',
				component: () => import('../views/Permissionmanagement/jurisdiction.vue')
			},
			{
				path: '/SocialSecurity',
				name: 'SocialSecurity',
				component: () => import('../views/SocialSecurity/index.vue')
			},
			{
				path: '/approval',
				name: 'Approval',
				component: () => import('../views/Approval/index.vue')
			},

			{
				path: '/attendances',
				name: 'attendances',
				component: () => import('../views/Attendances/index.vue')
			},
			{
				path: '/wages',
				name: 'Wages',
				component: () => import('../views/Wages/index.vue')
			},
			{
				path: '/setting',
				name: 'Setting',
				component: () => import('../views/Wages/Setting.vue'),
				children: [{
						path: '/payroll',
						name: 'Payroll',
						component: () => import('../views/Wages/Payroll.vue')
					},
					{
						path: '/allowance',
						name: 'Allowance',
						component: () => import('../views/Wages/Allowance.vue')
					},
				]
			},

		]
	},
]

const router = new VueRouter({
	routes
})

export default router
