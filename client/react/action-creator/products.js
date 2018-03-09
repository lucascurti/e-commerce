import axios from 'axios';
import { GET_PRODUCTS } from '../constants';

export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products,
  };
}

export const fetchProducts = () => dispatch =>
  axios
    .get('/api/products')
    .then(res => res.data)
    .then(products => dispatch(getProducts(products)));
