import axios from 'axios';
import { GET_PRODUCTS_CATEGORY } from '../constants';
import { GET_CATEGORIES } from '../constants';

export const getProductsCategory = products => {
  return {
    type: GET_PRODUCTS_CATEGORY,
    products,
  };
};

export const getCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories,
  };
};

export const fetchProductsCategory = id => dispatch =>
  axios
    .get(`/api/categories/${id}`)
    .then(res => res.data)
    .then(products => {
      dispatch(getProductsCategory(products));
    });

export const fetchCategories = () => dispatch =>
  axios
    .get('/api/categories')
    .then(res => res.data)
    .then(categories => {
      console.log(categories);
      dispatch(getCategories(categories));
    });
