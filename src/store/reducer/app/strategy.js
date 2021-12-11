export default {
  TOGGLE_COLLAPSED(state, action) {
    // const data = JSON.parse(JSON.stringify(state))
    const data = { ...state }
    data.collapsed = !data.collapsed
    return data
  },

  SET_MENUS(state, action) {
    // const data = JSON.parse(JSON.stringify(state))
    const data = { ...state }
    data.menus = action.data
    return data
  },

  SET_FUNCTIONS(state, action) {
    // const data = JSON.parse(JSON.stringify(state))
    const data = { ...state }
    data.functions = action.data
    return data
  }
}
