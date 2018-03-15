import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { changeAmountInDB } from '../action-creator/cart';
import Cart from '../components/Cart';

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeAmount: function(e, index, orderId, userId, product) {
      dispatch(changeAmountInDB(e, index, orderId, userId, product));
    },
  };
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
