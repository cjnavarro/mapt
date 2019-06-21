import {
  REQUEST_CALL,
  RECIEVE_CALL,
  LOGIN
} from '../constants/ApiActions'

const initialState = {
  token: '',
  receivedAt: Date.now()
}

export default function api(state = initialState, action) {
  switch (action.type) {
    // Fallthrough
    case REQUEST_CALL:
    case RECIEVE_CALL:
      return state;
    case LOGIN:
      return {token: 'Basic ' + action.token, receivedAt: Date.now()};
    default:
      return state;
  }
}
