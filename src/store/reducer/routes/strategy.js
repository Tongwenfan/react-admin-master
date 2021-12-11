export default {
  ADD_ROUTE(state, action) {
    const copyState = JSON.parse(JSON.stringify(state))

    copyState.list.push(action.path)
    return copyState
  },
  REPLACE_ROUTE(state, action) {
    const copyState = JSON.parse(JSON.stringify(state))

    copyState.list = [ action.path ]
    return copyState
  }
}
