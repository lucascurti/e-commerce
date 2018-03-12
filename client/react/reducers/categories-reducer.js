import { GET_CATEGORIES } from '../constants';
import { ADD_CATEGORY } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    case ADD_CATEGORY:
      return state.slice().concat(action.category);
    default:
      return state;
  }
};
