import axios from 'axios';
import { GET_USERS, DELETE_USER } from '../constants';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
export function deleteUserAction(userId) {
  return {
    type: DELETE_USER,
    userId,
  };
}

export const fetchUsers = () => dispatch =>
  axios
    .get('/api/users')
    .then(res => res.data)
    .then(users => dispatch(getUsers(users)));

export const deleteUser = id => dispatch =>
  axios
    .delete(`/api/users/${id}`)
    .then(res => res.data)
    .then(user => dispatch(deleteUserAction(id)));
