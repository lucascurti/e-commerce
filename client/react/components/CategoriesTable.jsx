import React from 'react';
import './ProductsTable.css';
import { Link } from 'react-router-dom';
export default props => {
  if (props) {
    console.log('props', props);
    return (
      <div className="container productTable-margin">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.categories.map(category => (
              <tr key={category.id}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                <td>
                  <button className="btn btn-secondary btn-sm">
                    <Link
                      to={`/admin/categories/edit/${category.id}`}
                      id="editProduct-color"
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => props.removeCategory(category.id)}
                    className="btn btn-secondary btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div />;
  }
};
