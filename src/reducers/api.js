import {
  REQUEST_CALL,
  RECIEVE_CALL,
  LOGIN,
  LOGIN_FAILURE
} from '../constants/ApiActions'

const initialState = {
  token: '',
  message: '',
  loggedIn : false,
  receivedAt: Date.now()
}

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
}
