import React from 'react';
import './AddProduct.css';

export default props => {
  console.log(props);
  return (
    <div className="container addProduct-margin">
      <form onSubmit={props.submitForm}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">{props.type} Review</label>
          <input
            name="title"
            value={props.title}
            type="text"
            onChange={props.handleChange}
            className="form-control"
            id="formGroupExampleInput"
            placeholder={props.category}
          />
          <textarea
            name="description"
            value={props.description}
            onChange={props.handleChange}
          />
          <select value={props.star} onChange={props.handleChange} name="star">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </div>
        <button type="submit" className="btn btn-secondary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
