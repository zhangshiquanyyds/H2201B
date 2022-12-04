import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {},
  mutations: {
    add(state, obj) {
      state.list.push({
        ...obj
      })
    },
    // 修改
    xgadd(state, obj) {
      state.list[obj.index].title = obj.title
      state.list[obj.index].status = obj.status
      state.list[obj.index].datevalue = obj.datevalue
    }
  },
  actions: {},
  modules: {}
})