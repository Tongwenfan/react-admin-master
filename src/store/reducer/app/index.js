import strategy from './strategy'

const data = {
  collapsed: false,
  menus: [],
  functions: []
}

export default (state = data, action) => (strategy[action.type]?.call(null, state, action) ?? state)
