import { combineReducers } from 'redux';
import api from './api';
import routes from './routes';
import gear from './gear';
import ui from './ui';
import * as apiActions from '../constants/ApiActions'

const appReducer = combineReducers({
  api,
  routes,
  gear,
  ui
});

const rootReducer = (state, action) => {
  if (action.type === apiActions.LOGOUT) {
    console.log('LOGOUT');
    state = undefined;
  }

  return appReducer(state, action)
};

export default rootReducer;
