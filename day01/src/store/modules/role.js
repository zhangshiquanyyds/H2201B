import {
	rolelist,
	rolepermission
} from '@/api/company/role'
const state = {
	tableData: [],
	total: 0,
	addoreditId: -1, //判断模态框标题
	distributionlist: [],
	jurisdictionId: -1,
}
const mutations = {
	getlist(state, obj) {
		// console.log(obj);
		state.tableData = obj.rows
		state.total = obj.total
	},
	getdistribution(state, obj) {
		// console.log(obj);
		obj.forEach((item) => {
			if (item.pid == '') {
				state.distributionlist.push(item)
				state.distributionlist.forEach((item) => {
					item.children = []
					obj.forEach((ele) => {
						if (item.id == ele.pid) {
							item.children.push(ele)
						}
					})
				})
			}
		})
		// console.log(state.distributionlist);
	},
}
const actions = {
	/**列表数据请求*/
	list(ctx, obj) {
		rolelist(obj).then(res => {
			console.log(res);
			ctx.commit('getlist', res.data.data)
		})
	},
	/**分配权限数据请求*/
	distribution(ctx) {
		rolepermission().then(res => {
			console.log(res);
			ctx.commit('getdistribution', res.data.data)
		})
	}

}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
