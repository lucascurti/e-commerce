import axios from 'axios';
import { GET_PRODUCT } from '../constants';

export const getProduct = selectProduct => ({
  type: GET_PRODUCT,
  product: selectProduct,
});

export const fetchProduct = id => dispatch =>
  axios
    .get(`/api/product/${id}`)
    .then(res => res.data)
    .then(product => dispatch(getProduct(product)));
