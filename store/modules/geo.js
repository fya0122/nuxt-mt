const geo = {
  state: {
  	position: {}
  },
  mutations: {
    setPosition: (state, val) => {
      state.position = val
    }
  }
  // actions: {
  //   setPosition({ commit }, position) {
  //     commit('setPosition', position)
  //   }
  // }
}

export default geo