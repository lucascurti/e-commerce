import axios from 'axios';
import { GET_PRODUCTS_CATEGORY } from '../constants';
import { ADD_REVIEW } from '../constants';

export const addReview = review => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

export const setReview = (productId, review) => dispatch => {
  console.log(review);
  axios
    .post(`/api/reviews/${productId}`, review)
    .then(res => res.data)
    .then(newReview => {
      dispatch(addReview(newReview));
    })
    .catch(err => console.log(err));
};
