import React from 'react';
import ProductsTable from '../components/ProductsTable';
import { connect } from 'react-redux';

class ProductsTableContainer extends React.Component {
  render() {
    return <ProductsTable />;
  }
}

const mapStateToProps = (state, Props) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductsTable);
