import {
  GET_CART,
  CHANGE_AMOUNT,
  PRODUCT_TO_CART,
  PRODUCT_TO_ORDER_UNLOGED,
} from '../constants';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case CHANGE_AMOUNT:
      const prod = state.products.slice();
      const st = Object.assign({}, state, { products: prod });
      st.products[action.index].orderDetail.amount = action.value;
      return st;
    case PRODUCT_TO_CART:
      return Object.assign({}, state, {
        products: state.products.concat(action.product),
      });
    default:
      return state;
  }
};
