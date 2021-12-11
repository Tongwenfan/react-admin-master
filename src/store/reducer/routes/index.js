import strategy from './strategy'

const data = {
  list: []
}

export default (state = data, action) => (strategy[action.type]?.call(null, state, action) ?? state)
