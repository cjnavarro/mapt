import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import ApiHandler from './api-handler';
import { loginFailure } from './reducers/api';
import { logout } from './reducers/index';
import { LOGIN_CALL } from './constants/ApiCalls';

//const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    {}, // Default state
    applyMiddleware(
      //loggerMiddleware,
      thunkMiddleware.withExtraArgument({
      apiFetch: ApiHandler((url) => {
        if(url === LOGIN_CALL) {
          store.dispatch(loginFailure());
        }
        else {
          store.dispatch(logout());
        }

        window.location.href = '/#/home';
      })
    }))
  );

export default store;
