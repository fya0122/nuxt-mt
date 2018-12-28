import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo.js'
import home from './modules/home.js'
import getters from './getters.js'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  getters,
  actions: {
  	async nuxtServerInit({ commit }, { req, app }) {
      // 获取地理位置
      const res_pos = await app.$axios.get('/geo/getPosition')
      if (res_pos.status === 200) {
        commit('setPosition', res_pos.data)
      } else {
        commit('setPosition', {})
      }
      // 左侧菜单
      const res_menu = await app.$axios.get('/geo/menu')
      if (res_menu.status === 200) {
        commit('setMenu', res_menu.data.menu)
      } else {
        commit('setMenu', [])
      }
  	}
  }
})

export default store