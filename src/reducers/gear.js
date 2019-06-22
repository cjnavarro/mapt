const ADD_GEAR = 'ADD_GEAR';
const DELETE_GEAR = 'DELETE_GEAR';
const EDIT_GEAR = 'EDIT_GEAR';

const initialState = {
    bike: {
      make: 'BMW',
      model: '800GS Adventure',
      year: 2017
    },
    jacket: 'Revit'
};

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
};

export const addGear = gear => ({ type: ADD_GEAR, gear });

export const deleteGear = () => ({ type: DELETE_GEAR });

export const editGear = (bike, jacket) => ({ type: EDIT_GEAR, bike, jacket });
