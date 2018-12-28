const geo = {
  state: {
  	position: {}
  },
  mutations: {
    setPosition: (state, val) => {
      state.position = val
    }
  },
  actions: {
    async nuxtServerInit({ commit }, { req, app }) {
      // 获取地理位置
      const res_pos = await app.$axios.get('/geo/getPosition')
      if (res_pos.status === 200) {
        commit('setPosition', res_pos.data)
      } else {
        commit('setPosition', {})
      }
    }
  }
}

export default geo