import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'


const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

// const enhancer = composeEnhancers(
//   thunk,
// )

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.(),
  // enhancer
  // compose(thunk)
)

export default store
