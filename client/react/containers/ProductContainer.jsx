import React from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';

class ProductContainers extends React.Component {
  render() {
    return <Product />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.product.selectedProduct,
});

export default connect(mapStateToProps)(Product);
