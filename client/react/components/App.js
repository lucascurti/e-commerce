import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import CartContainer from '../containers/CartContainer';
import { Switch } from 'react-router-dom';
import { fetchCart } from '../action-creator/cart'
import store from '../store';
import './App.css';

const onCartEnter = function () {
  store.dispatch(fetchCart())
}

export default () => (
  <div>
    <Switch>
      <RouteHook exact path="/cart" component={CartContainer} onEnter={onCartEnter} />
    </ Switch>
  </div>
)

