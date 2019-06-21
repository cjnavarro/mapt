import * as routeActions from '../constants/RouteActions';
import * as gearActions from '../constants/GearActions';
import * as uiActions from '../constants/UIActions';
import * as apiActions from '../constants/ApiActions';

// RouteActions
export const addRoute = (from, to) => ({ type: routeActions.ADD_ROUTE, from, to });
export const deleteRoute = id => ({ type: routeActions.DELETE_ROUTE, id });

// GearActions
export const addGear = gear => ({ type: gearActions.ADD_GEAR, gear });
export const deleteGear = () => ({ type: gearActions.DELETE_GEAR });
export const editGear = (bike, jacket) => ({ type: gearActions.EDIT_GEAR, bike, jacket });

// UIActions
export const openDrawer = () => ({ type: uiActions.OPEN_DRAWER });
export const closeDrawer = () => ({ type: uiActions.CLOSE_DRAWER });

// API actions
export const exampleGet = (apiPath, token) => {
  return (dispatch, getState, {apiFetch}) => {
      dispatch(requestPosts(apiPath));
      return apiFetch(apiPath, {}, token)
        .then(response => dispatch(receivePosts(apiPath, response)))
    };
};

const requestPosts = (action) => ({ type: apiActions.REQUEST_CALL, action });

const receivePosts = (apiPath, response) => ({
    type: apiActions.RECIEVE_CALL,
    apiPath,
    response,
    receivedAt: Date.now()
});

export const login = (user, password) => {
  return (dispatch, getState, {apiFetch}) => {
      let token = btoa(user + ':' + password)
      dispatch(requestPosts({apiPath: 'user/auth'}));
      return apiFetch('user/auth', {}, token)
        .then(response => dispatch(loginSuccess(token)))
        .catch(err => console.warn('Failed Login'));
    };
};
export const loginSuccess = (token) => ({ type: apiActions.LOGIN, token});
export const loginFailure = () => ({ type: apiActions.LOGIN_FAILURE});

export const logout = () => ({ type: apiActions.LOGOUT});
