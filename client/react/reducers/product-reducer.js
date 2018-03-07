import { GET_PRODUCT } from '../constants';

const initialState = {
  select: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return Object.assign({}, state, {
        select: action.product,
      });
      return action.cart;
    default:
      return state;
  }
};
