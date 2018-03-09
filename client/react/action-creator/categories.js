import axios from 'axios';
import { GET_PRODUCTS_CATEGORY } from '../constants';

export const getProductsCategory = products => {
  return {
    type: GET_PRODUCTS_CATEGORY,
    products,
  };
};

export const fetchProductsCategory = id => dispatch =>
  axios
    .get(`/api/categories/${id}`)
    .then(res => res.data)
    .then(products => {
      dispatch(getProduct(products));
    });
