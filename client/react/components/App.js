import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import CartContainer from '../containers/CartContainer';
import { fetchCart } from '../action-creator/cart';
import { fetchProducts } from '../action-creator/products';
import { fetchProduct } from '../action-creator/product';
import {
  fetchProductsCategory,
  fetchCategories,
} from '../action-creator/categories';
import { fetchAddProduct } from '../action-creator/addProduct';
import store from '../store';
import './App.css';
import Product from './Product';
import { Route, Redirect, Switch } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import ProductsContainer from '../containers/ProductsContainer';
import ProductContainer from '../containers/ProductContainer';
import AddProduct from './AddProduct';
import AddProductContainer from '../containers/AddProductContainer';

const onCartEnter = function() {
  store.dispatch(fetchCart());
};
const onProductsEnter = function() {
  store.dispatch(fetchProducts());
  store.dispatch(fetchCategories());
};
const onProductEnter = function(props) {
  store.dispatch(fetchProduct(props.match.params.id));
};

const onCategoryEnter = function(props) {
  store.dispatch(fetchProductsCategory(props.match.params.id));
  store.dispatch(fetchCategories());
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <main role="main" className="container-fluid mt-3">
          <Switch>
            <RouteHook
              exact
              path="/products"
              component={ProductsContainer}
              onEnter={onProductsEnter}
            />
            <RouteHook
              exact
              path="/products/add"
              component={AddProductContainer}
            />
            <RouteHook
              exact
              path="/cart"
              component={CartContainer}
              onEnter={onCartEnter}
            />
            <RouteHook
              exact
              path="/products/:id"
              component={ProductContainer}
              onEnter={onProductEnter}
            />
            <RouteHook
              exact
              path="/category/:id"
              component={ProductsContainer}
              onEnter={onCategoryEnter}
            />
            <Redirect from="/" to="/products" />
          </Switch>
        </main>
      </div>
    );
  }
}
