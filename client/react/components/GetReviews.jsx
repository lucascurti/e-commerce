import React from 'react';
import './ProductsTable.css';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.star}</div>
    </div>
  );
};
