import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import userReducer from './user-reducer';
import productsreducer from './products-reducer';
import productReducer from './product-reducer';

export default combineReducers({

  cart: cartreducer,
  user: userProfilereducer,

  cart: cartReducer,
  user: userReducer,

  products: productsreducer,
  product: productReducer,
});
