import { LOGIN_USER, LOGOUT_USER } from '../constants';
// import store from '../store';
import axios from 'axios';

export const loginUserAction = user => ({
  type: LOGIN_USER,
  user,
});

export const logoutUserAction = user => ({
  type: LOGOUT_USER,
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

export const logoutUser = () => dispatch => {
  axios.get('/api/users/logout').then(res => {
    dispatch(logoutUserAction());
  });
};

export const checkUserSession = () => dispatch => {
  axios.get('/api/users/checkauth').then(res => {
    console.log(res);
    if (res.data.user) {
      dispatch(loginUserAction(res.data.user));
    }
  });
};
