import axios from 'axios';
import { GET_PRODUCTS_CATEGORY } from '../constants';
import { ADD_REVIEW } from '../constants';

export const addReview = category => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

export const setReview = (id, review) => dispatch => {
  axios
    .post(`/api/review/${id}`, review)
    .then(res => res.data)
    .then(newReview => {
      dispatch(addReview(newReview));
    });
};
