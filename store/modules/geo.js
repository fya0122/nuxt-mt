const geo = {
  state: {
  	position: {},
    hotPlace: []
  },
  mutations: {
    setPosition: (state, val) => {
      state.position = val
    },
    setHotPlace: (state, val) => {
      state.hotPlace = val
    }
  },
  actions: {
    async nuxtServerInit({ commit }, { req, app }) {
      // 获取地理位置
      const res_pos = await app.$axios.get('/geo/getPosition')
      if (res_pos.status === 200) {
        console.log(res_pos.data)
        commit('setPosition', res_pos.data)
      } else {
        commit('setPosition', {})
      }

      // 获取热门，search/hotPlace
      let myCity = ''
      myCity = res_pos.data.city.replace('市', '')
      const res_hot_place = await app.$axios.get('/search/hotPlace', {
        params: {
          city: myCity
        }
      })
      if (res_hot_place.status === 200) {
        commit('setHotPlace', res_hot_place.data.result)
      } else {
        commit('setHotPlace', [])
      }
    }
  }
}

export default geo