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
  getters
})

export default store