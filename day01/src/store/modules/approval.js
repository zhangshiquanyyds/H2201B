import {
	Approvallist
} from '@/api/Approval/approval'
const state = {
	Approvallist: [],
	total: 0,
}
const mutations = {
	getlist(state, obj) {
		// console.log(obj);
		state.Approvallist = obj
	}
}
const actions = {
	Approvallist(ctx, obj) {
		Approvallist(obj).then(res => {
			console.log(res);
			ctx.commit('getlist', res.data.data.rows)
		})
	}
}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
