import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import CartContainer from '../containers/CartContainer';
import { Switch } from 'react-router-dom';
import { fetchCart } from '../action-creator/cart'
import store from '../store';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import HeaderContainer from '../containers/HeaderContainer';
import ProductsContainer from '../containers/ProductsContainer';

const onCartEnter = function () {
  store.dispatch(fetchCart())
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <main role="main" className="container-fluid mt-3">
          <Switch>
            <RouteHook exact path="/products" component={ProductsContainer} />
            <RouteHook exact path="/cart" component={CartContainer} onEnter={onCartEnter} />
            <Redirect from="/" to="/products" />
          </Switch>
        </main>
      </div>
    );
  }
}