import Vue from 'vue'
import Vuex from 'vuex'
import staff from './modules/staff'
import role from './modules/role.js'
import jurisdiction from './modules/jurisdiction.js'
import socialsecurity from './modules/socialsecurity.js'
import approval from './modules/approval.js'
import attendance from './modules/attendance.js'
import wages from './modules/wages.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: []
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		staff,
		role,
		jurisdiction,
		socialsecurity,
		approval,
		attendance,
		wages
	},
})
