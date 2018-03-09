import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';

function mapStateToProps(state, ownProps) {
  return {
    user: state.userProfile,
  };
}

const UserProfileContainer = connect(mapStateToProps)(UserProfile);

export default UserProfileContainer;
