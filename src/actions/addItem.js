import { ADD_ITEM_SUCCESSFULLY, ADD_ITEM_ERROR } from '../actions/types';
import axios from 'axios';

const addItemSuccessfully = (data) => ({
  type: ADD_ITEM_SUCCESSFULLY,
  payload: data,
});

const addItemError = (data) => ({
  type: ADD_ITEM_ERROR,
  payload: data,
});

const addItemAction = (itemData) => dispatch => {
  axios.post('http://127.0.0.1:5000/api/todo', itemData)
    .then(res => {
      console.log(res)
      dispatch(addItemSuccessfully(res))
    })
    .catch(err => {
      console.log(err)
      dispatch(addItemError(err))
    })
}

export default addItemAction;
