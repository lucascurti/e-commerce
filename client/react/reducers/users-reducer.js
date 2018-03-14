import { GET_USERS, DELETE_USER } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users.slice();
    case DELETE_USER:
      let newUsers = state.slice();
      return newUsers.filter(user => user.id !== action.userId);
    default:
      return state;
  }
};
