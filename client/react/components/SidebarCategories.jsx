import React from 'react';
import { Link } from 'react-router-dom';

export default ({ categories }) => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky text-left">
      <h5>Categorias</h5>
      <ul className="nav flex-column">
        {categories.map(category => (
          <li className="nav-item" key={category.id}>
            <a className="nav-link active" href="#">
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
