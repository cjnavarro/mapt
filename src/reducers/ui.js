import {
  TOGGLE_DRAWER
} from '../constants/UIActions'

const initialState = {
    navigation: {
      drawerOpen: false
    }
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
                ...state, 
                navigation: {
                  ...(state.navigation),
                  drawerOpen: !state.navigation.drawerOpen
                }
              }

    default:
      return state
  }
}
