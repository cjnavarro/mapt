import {
  ADD_ROUTE,
  DELETE_ROUTE
} from '../constants/RouteActions'

const initialState = [
  {
    from: [0,0],
    to: [1,1],
    timestamp: new Date(),
    id: 0
  }
]

export default function routes(state = initialState, action) {
  switch (action.type) {
    case ADD_ROUTE:
      return [
        ...state,
        {
          from: action.from,
          to: action.to,
          timestamp: new Date(),
          id: state.reduce((maxId, route) => Math.max(route.id, maxId), -1) + 1
        }
      ]

    case DELETE_ROUTE:
      return state.filter(route =>
        route.id !== action.id
      )

    default:
      return state
  }
}
