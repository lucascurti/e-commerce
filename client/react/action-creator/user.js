import { LOGIN_USER } from '../constants';
// import store from '../store';
import axios from 'axios';

export const loginUserAction = user => ({
  type: LOGIN_USER,
  user,
});

export const loginUser = (email, password) => dispatch =>
  axios
    .post('/api/users/login', {
      email,
      password,
    })
    .then(response => response.data)
    .then(data => {
      if (data.success) dispatch(loginUserAction(data.user));
      return data;
    });
