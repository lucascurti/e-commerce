import React from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct.css';

export default ({ product, addProductToCart, user }) => (
  <div
    key={product.id}
    className="card mb-4"
    style={{ minWidth: '18rem', maxWidth: '18rem' }}
  >
    <div className="containerSP">
      <img
        className="card-img-top responsive"
        src={product.image}
        alt="Card image cap"
      />
      <button
        className="btnSp"
        onClick={() => addProductToCart(product, user.id)}
      >
        <a className="fa fa-plus" />
      </button>
    </div>
    <div className="card-body">
      <Link to={`/products/${product.id}`}>
        <h5 className="card-title">{product.name}</h5>
      </Link>
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
