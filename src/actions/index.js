import * as routeActions from '../constants/RouteActions'

export const addRoute = (from, to) => ({ type: routeActions.ADD_ROUTE, from, to })
export const deleteRoute = id => ({ type: routeActions.DELETE_ROUTE, id })
