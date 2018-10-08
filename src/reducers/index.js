import { combineReducers } from 'redux';
import addItemReducer from './addItemReducer';
import getItemReducer from './getItemsReducer';

export default combineReducers({
  item: addItemReducer,
  listItems: getItemReducer
});