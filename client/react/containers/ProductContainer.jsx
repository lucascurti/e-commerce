import React from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';

class ProductContainers extends React.Component {
  render() {
    return <Product />;
  }
}

const mapStateToProps = state => ({
  product: state.product.select,
});

export default connect(mapStateToProps)(ProductContainers);
