import { combineReducers } from 'redux';
import api from './api';
import gear from './gear';

const LOGOUT = 'index/LOGOUT';

const appReducer = combineReducers({
  api,
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
