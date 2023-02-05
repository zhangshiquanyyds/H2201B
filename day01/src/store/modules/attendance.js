import {
	attendanceslist
} from '@/api/Attendance/attendance'
const state = {
	attendanceslist: [],
	total: 0,
}
const mutations = {
	getlist(state, obj) {
		console.log(obj);
		state.attendanceslist = obj
	}
}
const actions = {
	attendanceslist(ctx, obj) {
		console.log(obj);
		attendanceslist(obj).then(res => {
			console.log(res);
			ctx.commit('getlist', res.data.data.data.rows)
		})
	}
}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
