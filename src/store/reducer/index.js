import { combineReducers } from 'redux'

import routes from './routes'
import enumerate from './enumerate'
import app from './app'

export default combineReducers({
  app,
  routes,
  enumerate
})
