import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import ApiHandler from './api-handler';
import { logout, loginFailure } from './actions';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    {}, // Default state
    applyMiddleware(
      //loggerMiddleware,
      thunkMiddleware.withExtraArgument({
      apiFetch: ApiHandler((url) => {
        if(url === 'user/auth') {
          store.dispatch(loginFailure());
        }
        else {
          store.dispatch(logout());
          window.location.href = '/#/login';
        }
      })
    }))
  );

export default store;
