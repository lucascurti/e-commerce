import React from 'react';
import store from '../store';
import Products from '../components/Products';
import { connect } from 'react-redux';
import { addProductToCart } from '../action-creator/cart';
import { withRouter } from 'react-router';

function mapStateToProps(state, ownProps) {
  const search = ownProps.location.search;
  const queryParams = new URLSearchParams(search);
  const selectedCategory = queryParams.get('category');

  return {
    products: state.products,
    categories: state.categories,
    user: state.user,
    selectedCategory,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: (productId, userId) =>
      dispatch(addProductToCart(productId, userId)),
  };
}

const ProductsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Products),
);

export default ProductsContainer;
