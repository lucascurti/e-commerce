import axios from 'axios';
import { GET_PRODUCT } from '../constants';

export const getProduct = product => {
  return {
    type: GET_PRODUCT,
    product,
  };
};

export const fetchProduct = id => dispatch =>
  axios
    .get(`/api/products/${id}`)
    .then(res => res.data)
    .then(product => {
      dispatch(getProduct(product));
    });
