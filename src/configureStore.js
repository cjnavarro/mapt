import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import ApiHandler from './api-handler';
import { logout } from './actions';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    {}, // Default state
    applyMiddleware(
      //loggerMiddleware,
      thunkMiddleware.withExtraArgument({
      apiFetch: ApiHandler(() => {
        store.dispatch(logout());
        window.location.href = '/#/login';
      })
    }))
  );

export default store;
