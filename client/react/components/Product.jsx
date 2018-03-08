import React from 'react';
import './Product.css';

export default ({ product }) => {
  if (product) {
    return (
      <div className="container product-container">
        <div className="row">
          <div className="col-md-5 col-xs-11 product-margin">
            <img
              src="https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwfc263f3f/zoom/BS8405_01.jpg?sw=230&sfrm=jpg"
              alt=""
              className="product-img"
            />
          </div>
          <div className="col-md-5 col-xs-11 product-margin">
            <h4>Rate: {product.rate}</h4>
            <h3>{product.description}</h3>
            <p> Price and free tax : {product.price}</p>
            <p>{product.stock} </p>
            <button className="btn-lg">Add to Cart</button>
          </div>
        </div>
        <div className="card text-center product-foodText">
          <div className="card-header">{product.name}</div>
          <div className="card-block">
            <p className="card-text">{product.description}</p>
            <button className="btn-sm">Edit</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};
