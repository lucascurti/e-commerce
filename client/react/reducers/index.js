import { combineReducers } from 'redux';
import cartreducer from './cart-reducer';
import productsreducer from './products-reducer';
import productReducer from './product-reducer';

export default combineReducers({
  cart: cartreducer,
  products: productsreducer,
  product: productReducer,
});
