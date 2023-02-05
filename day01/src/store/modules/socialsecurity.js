import {
	citylist,
	socialsecurityslist
} from '@/api/socialsecurity'
import {
	departmentlist
} from '@/api/department/department'
const state = {
	citylist: [], //公积金城市
	departmentlist: [], //部门
	socialsecurityslist: [] /**列表数据*/
}
const mutations = {
	getcitylist(state, obj) {
		// console.log(obj);
		state.citylist = obj
	},
	getdepartmentlist(state, obj) {
		// console.log(obj);
		state.departmentlist = obj
	},
	getsocialsecurityslist(state, obj) {
		// console.log(obj);
		state.socialsecurityslist = obj
	},

}
const actions = {
	citylist(ctx) {
		citylist().then(res => {
			console.log(res);
			ctx.commit('getcitylist', res.data.data)
		})
	},
	departmentlist(ctx) {
		departmentlist().then(res => {
			console.log(res);
			ctx.commit('getdepartmentlist', res.data.data)
		})
	},
	/**列表数据请求*/
	socialsecurityslist(ctx, obj) {
		socialsecurityslist(obj).then(res => {
			console.log(res);
			ctx.commit('getsocialsecurityslist', res.data.data.rows)
		})
	}
}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
