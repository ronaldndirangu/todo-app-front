import { GET_ITEMS_SUCCESSFULLY, GET_ITEMS_ERROR } from './types';
import axios from 'axios';

const getItemsSuccessfully = (data) => ({
  type: GET_ITEMS_SUCCESSFULLY,
  payload: data
});

const getItemsError = (error) => ({
  type: GET_ITEMS_ERROR,
  payload: error
});

const getItems = () => dispatch => {
  axios.get('http://127.0.0.1:5000/api/todo')
    .then(res => dispatch(getItemsSuccessfully(res.data)))
    .catch(err => dispatch(getItemsError(err)))
}

export default getItems;
