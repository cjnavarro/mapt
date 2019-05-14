import {
  REQUEST_CALL,
  RECIEVE_CALL
} from '../constants/ApiActions'

const initialState = {
    subreddit: 'reactjs'
}

export default function gear(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CALL:
    case RECIEVE_CALL:
      return state
    default:
      return state
  }
}
