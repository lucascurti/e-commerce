import React from 'react';
import store from '../store';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { logoutUser } from '../action-creator/user';

const mapStateToProps = function(state, ownProps) {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    },
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
