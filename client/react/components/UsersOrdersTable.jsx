import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  console.log(props);
  if (props) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Date</th>
            <th scope="col">Total</th>
            <th scope="col">Status Detail</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {props.orders.map(order => (
            <tr key={index}>
              <th scope="row">ordern</th>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>1000$</td>
              <td>{order.status}</td>
              <td>
                <button> Detail </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    <div />;
  }
};
