import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  console.log(props);
  if (props) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Orders</th>
            <th scope="col">Order Detail</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.orders.map(order => order.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    <div />;
  }
};
