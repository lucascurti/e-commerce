import React from 'react';
import store from '../store';
import Products from '../components/Products';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { products: state.products, categories: state.categories };
}
function mapDispatchToProps(dispatch) {
  return {};
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Products,
);

export default ProductsContainer;
