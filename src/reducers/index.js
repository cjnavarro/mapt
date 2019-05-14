import { combineReducers } from 'redux'
import api from './api'
import routes from './routes'
import gear from './gear'
import ui from './ui'

const rootReducer = combineReducers({
  api,
  routes,
  gear,
  ui
})

export default rootReducer
