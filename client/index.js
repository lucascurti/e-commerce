import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './react/store';
import { Provider } from 'react-redux';
import '../public/js/bootstrap.min.js';

// import './styles/index.css';
import App from './react/components/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
