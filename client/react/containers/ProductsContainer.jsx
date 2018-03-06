import React from 'react';
import store from '../store';
import Products from '../components/Products';

export default class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <Products />;
  }
}
