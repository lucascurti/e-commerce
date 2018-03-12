import { combineReducers } from 'redux';
import cartreducer from './cart-reducer';
import productsreducer from './products-reducer';
import productReducer from './product-reducer';
import categoriesReducer from './categories-reducer';
import categoryReducer from './category-reducer';

export default combineReducers({
  cart: cartreducer,
  products: productsreducer,
  product: productReducer,
  categories: categoriesReducer,
  category: categoryReducer,
});
