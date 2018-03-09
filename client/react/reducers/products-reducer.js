import { GET_PRODUCTS, GET_PRODUCTS_CATEGORY } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
  }
  switch (action.type) {
    case GET_PRODUCTS_CATEGORY:
      return action.products;
    default:
      return state;
  }
};
