import React from 'react';
import store from '../store';
import Products from '../components/Products';
import { connect } from 'react-redux';
import { addProductToCart } from '../action-creator/cart';

function mapStateToProps(state) {
  return {
    products: state.products,
    categories: state.categories,
    user: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: (productId, userId) =>
      dispatch(addProductToCart(productId, userId)),
  };
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Products,
);

export default ProductsContainer;
