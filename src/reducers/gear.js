import {
  ADD_GEAR,
  DELETE_GEAR,
  EDIT_GEAR
} from '../constants/GearActions'

const initialState = {
    bike: {
      make: 'BMW',
      model: '800GS Adventure',
      year: 2017
    },
    jacket: 'Revit'
}

export default function gear(state = initialState, action) {
  switch (action.type) {
    case ADD_GEAR:
      return state

    case DELETE_GEAR:
      return {}

    case EDIT_GEAR:
      return { ...state, bike: action.bike, jacket: action.jacket }

    default:
      return state
  }
}
