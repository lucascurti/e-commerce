import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import CartContainer from '../containers/CartContainer';
import { fetchCart } from '../action-creator/cart';
import { fetchProduct } from '../action-creator/product';
import store from '../store';
import './App.css';
import Product from './Product';
import { Route, Redirect, Switch } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import ProductsContainer from '../containers/ProductsContainer';
import ProductContainer from '../containers/ProductContainer';

const onCartEnter = function () {
  store.dispatch(fetchCart());
};
const onProductEnter = function(props) {
  store.dispatch(fetchProduct(props.match.params.id));
};
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <main role="main" className="container-fluid mt-3">
          <Switch>
            <RouteHook exact path="/products" component={ProductsContainer} />
            <RouteHook
              exact
              path="/cart"
              component={CartContainer}
              onEnter={onCartEnter}
            />
<<<<<<< HEAD
            <RouteHook
              exact
              path="/products/:id"
              component={ProductContainer}
              onEnter={onProductEnter}
            />
=======
            <RouteHook exact path="/product" Component={Product} />
>>>>>>> fb000a5d3229075dd0601322cadb8aaac40a5898
            <Redirect from="/" to="/products" />
          </Switch>
        </main>
      </div>
    );
  }
}
