import { combineReducers } from 'redux';
import api from './api';
import routes from './routes';
import gear from './gear';

const LOGOUT = 'index/LOGOUT';

const appReducer = combineReducers({
  api,
  routes,
  gear
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action)
};

export const logout = () => ({ type: LOGOUT});

export default rootReducer;
