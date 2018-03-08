import React from 'react';
import store from '../store';
import UserProfile from '../components/UserProfile';

export default class UserProfileContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <UserProfile />;
  }
}
