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
  }
}

export default home