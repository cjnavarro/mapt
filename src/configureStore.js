import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import ApiHandler from './api-handler';

//const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware.withExtraArgument({
      apiFetch: ApiHandler(() => {
        // here we have access to the store instance!
        console.log('LOGOUT');
        //this.dispatch(doLogout())
      })
    }))
  )
}
