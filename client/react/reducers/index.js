import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import userReducer from './user-reducer';
import productsreducer from './products-reducer';
import productReducer from './product-reducer';
import categoriesReducer from './categories-reducer';
import { userProfilereducer } from './user-reducer';
import addProductReducer from './addProduct-reducer';

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productsreducer,
  product: productReducer,
  categories: categoriesReducer,
});
