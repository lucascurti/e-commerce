import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import HeaderContainer from '../containers/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <main role="main" className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">
              Use this document as a way to quickly start any new project.<br />{' '}
              All you get is this text and a mostly barebones HTML document. All
              you get is this text and a mostly barebones HTML document. All you
              get is this text and a mostly barebones HTML document. All you get
              is this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document. All you get is
              this text and a mostly barebones HTML document.
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
