import { GET_PRODUCT } from '../constants';

const initialState = {
  select: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return Object.assign({}, state, {
        selectedProduct: action.product,
      });
    default:
      return state;
  }
};
