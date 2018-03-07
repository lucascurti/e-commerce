import React from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';

export default class ProductContainers {
  render() {
    return <Product />;
  }
}

const mapStateToProps = state => ({
  value: state,
});
const mapDispatchToProps = dispatch => ({
  addProduct: () => dispatch(addProduct()),
  deletProduct: () => dispatch(deletProduct()),
  setProduct: () => dispatch(setProduct()),
});
const ProductContainers = connect(mapStateToProps, mapDispatchToProps)(
  ProductContainers,
);
