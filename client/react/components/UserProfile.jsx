import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

export default props => (
  <div id="profile">
    <h3>Account Info</h3>
    <ul>
      <li className="list-group-item justify-content-between">
        <strong>Name</strong>
        <span>Name</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong> Last Name</strong> <span>Last Name</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong>Email</strong> <span>Email</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong> User Name</strong> <span>User Name</span>
      </li>
      <li className="list-group-item justify-content-between">
        <strong> Password </strong> <span>Password</span>
      </li>
    </ul>
  </div>
);
