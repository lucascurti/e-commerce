import React from 'react';
import ProductsTable from '../components/ProductsTable';
import { connect } from 'react-redux';

export default class ProductsTableContainer extends React.Component {
  render() {
    return <ProductsTable />;
  }
}
