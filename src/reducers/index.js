import { combineReducers } from 'redux'
import routes from './routes'
import gear from './gear'
import ui from './ui'

const rootReducer = combineReducers({
  routes,
  gear,
  ui
})

export default rootReducer
