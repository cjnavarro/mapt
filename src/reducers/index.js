import { combineReducers } from 'redux'
import routes from './routes'
import gear from './gear'

const rootReducer = combineReducers({
  routes,
  gear
})

export default rootReducer
