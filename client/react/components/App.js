import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import CartContainer from '../containers/CartContainer';
import { fetchCart } from '../action-creator/cart';
import { fetchProducts } from '../action-creator/products';
import { fetchProduct } from '../action-creator/product';
import {
  fetchProductsCategory,
  fetchCategories,
  fetchAddCategory,
  fetchCategory,
} from '../action-creator/categories';
import { fetchReviews } from '../action-creator/review';
import { fetchAddProduct } from '../action-creator/addProduct';
import store from '../store';
import './App.css';
import Product from './Product';
import { Route, Redirect, Switch } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import ProductsContainer from '../containers/ProductsContainer';

import UserProfile from '../containers/UserProfileContainer';
import { fetchUser } from '../action-creator/userProfile';
import { fetchUsers, showUsersOrders } from '../action-creator/users';

import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';

import ProductContainer from '../containers/ProductContainer';
import AddProduct from './AddProduct';
import AddProductContainer from '../containers/AddProductContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import UsersContainer from '../containers/UsersContainer';
import EditProduct from './EditProduct';
import EditProductContainer from '../containers/EditProductContainer';
import AddReviewContainer from '../containers/AddReviewContainer';
import ProductsTableContainer from '../containers/ProductsTableContainer';
import AddCategoryContainer from '../containers/AddCategoryContainer';
import EditCategoryContainer from '../containers/EditCategoryContainer';
import UsersOrdersTableContainer from '../containers/UsersOrdersTableContainer';

const onCartEnter = function() {
  const userid = store.getState().user.id;
  store.dispatch(fetchCart(userid));
};

const onUserProfileEnter = function() {
  store.dispatch(fetchUser());
};

const onProductsEnter = function() {
  store.dispatch(fetchProducts());
  store.dispatch(fetchCategories());
  const userid = store.getState().user.id;
  store.dispatch(fetchCart(userid));
};

const onProductEnter = function(props) {
  store.dispatch(fetchProduct(props.match.params.id));
  store.dispatch(fetchReviews(props.match.params.id));
};

const onUsersEnter = function() {
  store.dispatch(fetchUsers());
};

const onCategoryEnter = function(props) {
  store.dispatch(fetchProductsCategory(props.match.params.id));
  store.dispatch(fetchCategories());
};

const onAddProductEnter = function(props) {
  store.dispatch(fetchCategories());
};

const onEditCategoryEnter = function(props) {
  store.dispatch(fetchCategory(props.match.params.id));
};

const onUsersOrdersEnter = function(props) {
  store.dispatch(showUsersOrders(props.match.params.id));
};

const onCategoriesEnter = function() {
  store.dispatch(fetchCategories());
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <main role="main" className="container-fluid mt-3">
          <Switch>
            <RouteHook exact path="/register" component={RegisterContainer} />
            <RouteHook exact path="/login" component={LoginContainer} />
            <RouteHook
              exact
              path="/users"
              component={UserProfile}
              onEnter={onUserProfileEnter}
            />
            <RouteHook
              path="/orders/:id/users"
              component={UsersOrdersTableContainer}
              onEnter={onUsersOrdersEnter}
            />
            <RouteHook
              exact
              path="/products"
              component={ProductsContainer}
              onEnter={onProductsEnter}
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
              onChange={onProductEnter}
            />
            <RouteHook
              exact
              path="/admin/products/"
              component={ProductsTableContainer}
              onEnter={onProductsEnter}
            />
            <RouteHook
              exact
              path="/admin/products/add"
              component={AddProductContainer}
              onEnter={onAddProductEnter}
            />
            <RouteHook
              exact
              path="/admin/products/edit/:id"
              component={EditProductContainer}
              onEnter={onProductEnter}
            />
            <RouteHook
              exact
              path="/products/:id/addreview"
              component={AddReviewContainer}
            />
            <RouteHook
              exact
              path="/admin/categories/add"
              component={AddCategoryContainer}
            />
            <RouteHook
              exact
              path="/admin/categories"
              component={CategoriesContainer}
              onEnter={onCategoriesEnter}
            />
            <RouteHook
              exact
              path="/admin/categories/edit/:id"
              component={EditCategoryContainer}
              onEnter={onEditCategoryEnter}
            />
            <RouteHook
              exact
              path="/category/:id"
              component={ProductsContainer}
              onEnter={onCategoryEnter}
            />
            <RouteHook
              exact
              path="/admin/users"
              component={UsersContainer}
              onEnter={onUsersEnter}
            />
            <Redirect from="/" to="/products" />
          </Switch>
        </main>
      </div>
    );
  }
}
