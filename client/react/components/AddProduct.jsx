import React from 'react';

export default () => {
  return (
    <div className="container">
      <form action="POST">
        <div className="row form-group">
          <div className="col-md-5">
            <label htmlFor="name">Name</label>
            <input value="name" type="text" id="name" />
          </div>
          <div className="col-md-5">
            <img src="" alt="" />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-12">
            <label htmlFor="description">Description</label>
            <input value="Description" type="text" id="description" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="quantity">Quantity</label>
          <input value="quantity" type="text" id="quantity" />
          <label htmlFor="price">Price</label>
          <input value="price" type="text" id="price" /> <br />
          <input type="button" value="Add Product" />
        </div>
      </form>
    </div>
  );
};
