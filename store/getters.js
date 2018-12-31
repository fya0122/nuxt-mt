const getters = {
  position: state => state.geo.position,
  menu: state => state.home.menu,
  hotPlace: state => state.geo.hotPlace
}
export default getters