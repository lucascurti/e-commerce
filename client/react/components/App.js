import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import CartContainer from '../containers/CartContainer';
import { fetchCart } from '../action-creator/cart';
import store from '../store';
import './App.css';
import Product from './Product';
import { Route, Redirect, Switch } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import ProductsContainer from '../containers/ProductsContainer';
import ProductContainer from '../containers/ProductContainer';

const onCartEnter = function() {
  store.dispatch(fetchCart());
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
            <RouteHook exact path="/product" component={ProductContainer} />
            <Redirect from="/" to="/products" />
          </Switch>
        </main>
      </div>
    );
  }
}
