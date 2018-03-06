import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import HeaderContainer from '../containers/HeaderContainer';
import ProductsContainer from '../containers/ProductsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <main role="main" className="container-fluid mt-3">
          <Switch>
            <RouteHook exact path="/products" component={ProductsContainer} />
            <Redirect from="/" to="/products" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
