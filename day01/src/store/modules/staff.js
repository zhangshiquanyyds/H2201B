import {
	stafflist,
	staffdetails
} from '@/api/staff'
const state = {
	tableData: [],
	total: 0,
	staffdetailslist: {}
}
const mutations = {
	getlist(state, obj) {
		// console.log(obj);
		state.tableData = obj.rows
		state.total = obj.total
	},
	getdetails(state, id) {
		console.log(id);
		staffdetails(id).then(res => {
			console.log(res);
			state.staffdetailslist = res.data.data
		})
	},
}
const actions = {
	list(ctx, obj) {
		stafflist(obj).then(res => {
			console.log(res);
			ctx.commit('getlist', res.data.data)
		})
	},

}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
