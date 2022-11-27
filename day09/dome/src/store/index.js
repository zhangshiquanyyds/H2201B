import Vue from 'vue'
import Vuex from 'vuex'
import pervue from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    newlist: [],
  },
  getters: {},
  mutations: {
    add(state, obj) {
      console.log(obj);
      state.list.push(obj)
      state.newlist = state.list
    },
    del(state, index) {
      state.list.splice(index, 1)
    },
    change(state, i) {
      if (i == 0) {
        state.list = state.newlist
      }
      if (i == 1) {
        state.list = state.newlist.filter(i => i.status == true)
      }
      if (i == 2) {
        state.list = state.newlist.filter(i => i.status == false)
      }
      if (i == 3) {
        state.list = state.list.filter(i => i.status == false)
        state.newlist = state.list
      }

    }

  },
  actions: {},
  modules: {},
  plugins: [pervue()]
})