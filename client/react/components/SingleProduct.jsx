import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

export default ({ product }) => (
  <div
    key={product.id}
    className="card mb-4"
    style={{ minWidth: '18rem', maxWidth: '18rem' }}
  >
    <img
      className="card-img-top responsive"
      src={product.image}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">
        <span className="float-left">
          <strong>Price: $ {product.price}</strong>
        </span>
        <span className="float-right">Rating: {product.rating}</span>
      </p>
    </div>
  </div>
);
