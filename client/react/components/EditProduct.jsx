import React from 'react';
import './EditProduct.css';

export default props => {
  if (props) {
    return (
      <div className="container EditProduct-margin">
        <h1>Edit Product</h1>
        <form onSubmit={props.submitForm}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Product Name</label>
            <input
              name="name"
              value={props.name}
              type="text"
              onChange={props.handleChange}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Product Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Description</label>
            <input
              name="description"
              value={props.description}
              type="text"
              onChange={props.handleChange}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Quantify</label>
            <input
              name="stock"
              value={props.stock}
              type="number"
              onChange={props.handleChange}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Quantify"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Price</label>
            <input
              name="price"
              value={props.price}
              type="number"
              onChange={props.handleChange}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Price"
            />
          </div>
          <img
            src="data:image/png;base64,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"
            className="rounded mx-auto d-block"
            alt="..."
          />
          <button type="submit" className="btn btn-secondary btn-lg">
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return <div />;
  }
};
