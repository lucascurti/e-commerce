import { ADD_PRODUCT } from '../constants';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return Object.assign({}, state, {
        products: state.products.concat(action.product),
      });
    default:
      return state;
  }
};
