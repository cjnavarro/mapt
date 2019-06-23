import { LOGIN_CALL } from '../constants/ApiCalls';

const REQUEST_CALL = 'api/REQUEST_CALL';
const RECIEVE_CALL = 'api/RECIEVE_CALL';

const LOGIN = 'api/LOGIN';
const LOGIN_FAILURE = 'api/LOGIN_FAILURE';

// Recieve strategies
export const RECIEVE_USER = 'api/RECIEVE_USER';

const initialState = {
  token: '',
  message: '',
  loggedIn : false,
  apiPath: '',
  user: {},
  receivedAt: Date.now()
};

export default function api(state = initialState, action) {
  const apiPath = action.apiPath;

  switch (action.type) {
    // Fallthrough
    case REQUEST_CALL:
      console.log(apiPath + " " + state.loggedIn);
      return { ...state, apiPath };
    case RECIEVE_CALL:
      return state;
    case RECIEVE_USER:
      return {
        ...state,
        user: action.response,
        apiPath,
        receivedAt: Date.now()}
    case LOGIN:
      return {
        ...state,
        token: action.token,
        apiPath,
        receivedAt: Date.now(),
        message: '',
        loggedIn: true,
        user: {}
      };
    case LOGIN_FAILURE:
      return {
        token: '',
        apiPath,
        receivedAt: Date.now(),
        message: 'Authentication Failed',
        loggedIn: false,
        user: {}
      };
    default:
      return state;
  }
};

export const sendGet = (apiPath, token, receiveAction=RECIEVE_CALL) => {
  return (dispatch, getState, {apiFetch}) => {
      dispatch(requestGet(apiPath));
      return apiFetch(apiPath, {}, token)
        .then(response => dispatch(receiveGet(apiPath, response, receiveAction)))
    };
};

const requestGet = (apiPath) => ({ type: REQUEST_CALL, apiPath });

const receiveGet = (apiPath, response, receiveAction) => ({
    type: receiveAction,
    apiPath,
    response,
    receivedAt: Date.now()
});

export const login = (user, password) => {
  return (dispatch, getState, {apiFetch}) => {
      let token = btoa(user + ':' + password)
      dispatch(requestGet({apiPath: LOGIN_CALL}));
      return apiFetch(LOGIN_CALL, {}, token)
        .then(response => dispatch(loginSuccess(token)))
        .catch(err => console.warn('Failed Login'));
    };
};

export const loginSuccess = (token) => ({ type: LOGIN, token});

export const loginFailure = () => ({ type: LOGIN_FAILURE});
