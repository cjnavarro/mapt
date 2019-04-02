import {
  OPEN_DRAWER,
  CLOSE_DRAWER
} from '../constants/UIActions'

const initialState = {
    navigation: {
      drawerOpen: false
    }
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
                ...state,
                navigation: {
                  ...(state.navigation),
                  drawerOpen: true
                }
              }

    case CLOSE_DRAWER:
      return {
                ...state,
                navigation: {
                  ...(state.navigation),
                  drawerOpen: false
                }
              }

    default:
      return state
  }
}
