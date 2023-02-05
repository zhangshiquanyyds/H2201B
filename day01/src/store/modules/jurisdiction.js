import {
	jurisdictionlist
} from '@/api/jurisdiction'
const state = {
	jurisdictionlist: [],
	jurisdictionlists: [],
	addorupdataId: -1,
}
const mutations = {
	getlist(state, obj) {
		state.jurisdictionlists = []
		state.jurisdictionlist = obj
		obj.forEach(item => {
			if (item.pid == "0") {
				state.jurisdictionlists.push(item)
				state.jurisdictionlists.forEach(item => {
					item.children = []
					state.jurisdictionlist.forEach(ele => {
						if (item.id == ele.pid) {
							item.children.push(ele)
						}
					})
				})
			}
		});
	}

}
const actions = {
	jurisdictionlist(ctx) {
		jurisdictionlist().then(res => {
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
