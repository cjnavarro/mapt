import * as routeActions from '../constants/RouteActions'
import * as gearActions from '../constants/GearActions'
import * as uiActions from '../constants/UIActions'

// RouteActions
export const addRoute = (from, to) => ({ type: routeActions.ADD_ROUTE, from, to })
export const deleteRoute = id => ({ type: routeActions.DELETE_ROUTE, id })

// GearActions
export const addGear = gear => ({ type: gearActions.ADD_GEAR, gear })
export const deleteGear = () => ({ type: gearActions.DELETE_GEAR })
export const editGear = (bike, jacket) => ({ type: gearActions.EDIT_GEAR, bike, jacket })

// UIActions
export const openDrawer = () => ({ type: uiActions.OPEN_DRAWER })
export const closeDrawer = () => ({ type: uiActions.CLOSE_DRAWER })
