const home = {
  state: {
    menu: []
  },
  mutations: {
    setMenu: (state, val) => {
      state.menu = val
    }
  },
  actions: {
    async nuxtServerInit({ commit }, { req, app }) {
      // 左侧菜单
      const res_menu = await app.$axios.get('/geo/menu')
      if (res_menu.status === 200) {
        commit('setMenu', res_menu.data.menu)
      } else {
        commit('setMenu', [])
      }
    }
  }
}

export default home