import React from 'react';
import store from '../store';
import Header from '../components/Header';

export default class HeaderContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <Header />;
  }
}
