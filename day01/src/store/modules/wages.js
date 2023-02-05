import {
	wageslist
} from '@/api/Wages/wages'
const state = {
	wageslist: [],
	total: 0,
}
const mutations = {
	getlist(state, obj) {
		// console.log(obj);
		state.wageslist = obj.rows
		state.total = obj.total
	}
}
const actions = {
	wageslist(ctx, obj) {
		wageslist(obj).then(res => {
			console.log(res);
			ctx.commit('getlist', res.data.data)
		})
	}
}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
