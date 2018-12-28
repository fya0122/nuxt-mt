const home = {
  state: {
    menu: [],
    hotPlace: []
  },
  mutations: {
    setMenu: (state, val) => {
      state.menu = val
    },
    setHotPlace: (state, val) => {
      state.hotPlace = val
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