import { combineReducers } from 'redux';
import cartreducer from './cart-reducer';

export default combineReducers({
  cart: cartreducer,
  user: userProfilereducer,
});
