import { combineReducers } from 'redux';
import cartreducer from './cart-reducer';
import productReducer from './product-reducer';

export default combineReducers({
  cart: cartreducer,
  product: productReducer,
});
