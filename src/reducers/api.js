const REQUEST_CALL = 'api/REQUEST_CALL';
const RECIEVE_CALL = 'api/RECIEVE_CALL';
const LOGIN = 'api/LOGIN';
const LOGIN_FAILURE = 'api/LOGIN_FAILURE';

const initialState = {
  token: '',
  message: '',
  loggedIn : false,
  receivedAt: Date.now()
};

export default function api(state = initialState, action) {
  switch (action.type) {
    // Fallthrough
    case REQUEST_CALL:
    case RECIEVE_CALL:
      return state;
    case LOGIN:
      return {token: action.token, receivedAt: Date.now(), message: '', loggedIn: true};
    case LOGIN_FAILURE:
      return {token: '', receivedAt: Date.now(), message: 'Authentication Failed', loggedIn: false};
    default:
      return state;
  }
};

export const exampleGet = (apiPath, token) => {
  return (dispatch, getState, {apiFetch}) => {
      dispatch(requestPosts(apiPath));
      return apiFetch(apiPath, {}, token)
        .then(response => dispatch(receivePosts(apiPath, response)))
    };
};

const requestPosts = (action) => ({ type: REQUEST_CALL, action });

const receivePosts = (apiPath, response) => ({
    type: RECIEVE_CALL,
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

export const loginSuccess = (token) => ({ type: LOGIN, token});

export const loginFailure = () => ({ type: LOGIN_FAILURE});
