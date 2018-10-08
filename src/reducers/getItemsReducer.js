import { GET_ITEMS_SUCCESSFULLY, GET_ITEMS_ERROR } from '../actions/types';

const initialState = {
  items: [],
  error: {}
}

export default function(state=initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESSFULLY:
      return {
        ...state,
        items: action.payload
      }
    case GET_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
