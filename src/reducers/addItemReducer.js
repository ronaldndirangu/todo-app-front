import { ADD_ITEM_SUCCESSFULLY, ADD_ITEM_ERROR } from '../actions/types';

const initialState = {
  item: '',
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_SUCCESSFULLY:
      return {
        ...state,
        item: action.payload
      }
    case ADD_ITEM_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}