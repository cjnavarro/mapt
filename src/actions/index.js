import fetch from 'cross-fetch'

import * as routeActions from '../constants/RouteActions'
import * as gearActions from '../constants/GearActions'
import * as uiActions from '../constants/UIActions'
import * as apiActions from '../constants/ApiActions'

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

// API actions
export const exampleGet = (subreddit) => {
  return dispatch => {
      dispatch(requestPosts(subreddit))
      return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
    }
}

const requestPosts = (action) => ({ type: apiActions.REQUEST_CALL, action })

const receivePosts = (subreddit, json) => ({
    type: apiActions.RECIEVE_CALL,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})
