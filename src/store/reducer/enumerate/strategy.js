export default {
  ADD_ENUM(state, action) {
    const copyState = JSON.parse(JSON.stringify(state))

    copyState.list.push(...action.data)
    return copyState
  },
}
