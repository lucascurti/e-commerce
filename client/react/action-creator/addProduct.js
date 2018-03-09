import axios from 'axios';
import { ADD_PRODUCT, EDIT_PRODUCT } from '../constants';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const editProduct = product => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const fetchAddProduct = product => dispatch => {
  axios
    .post(`/api/products`, product)
    .then(res => res.data)
    .then(newProduct => {
      dispatch(addProduct(newProduct));
    });
};

export const fetchEditProduct = (product, id) => dispatch => {
  axios
    .put(`/api/products/${id}`, product)
    .then(res => res.data)
    .then(editedProduct => {
      dispatch(editProduct(editedProduct));
    });
};
