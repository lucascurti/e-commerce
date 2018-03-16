import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import userReducer from './user-reducer';
import usersReducer from './users-reducer';
import productsreducer from './products-reducer';
import productReducer from './product-reducer';
import categoriesReducer from './categories-reducer';
import categoryReducer from './category-reducer';
import reviewReducer from './addReview-reducer';
import reviewsReducer from './getReviews-reducer';
import { userProfilereducer } from './user-reducer';
import ordersReducer from './orders-reducer';

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
  users: usersReducer,
  products: productsreducer,
  product: productReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  review: reviewReducer,
  reviews: reviewsReducer,
  orders: ordersReducer,
});
