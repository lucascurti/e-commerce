import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default ({ user, logoutUser }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link to="/products" className="navbar-brand">
      E-Commerce
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/products" className="nav-link">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        {user.rol === 'admin' && (
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admin
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Products
              </a>
              <a className="dropdown-item" href="#">
                Categories
              </a>
              <Link className="dropdown-item" to="/admin/users">
                Users
              </Link>
            </div>
          </li>
        )}
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-secondary my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
      <Link to="/cart">
        <span className="oi oi-cart mx-3" title="cart" aria-hidden="true" />
      </Link>
      {user.id ? (
        <div className="mx-3">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span className="navbar-text mr-3">
                ¡Bienvenido {user.firstName}!
              </span>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => logoutUser()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="mx-3">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <button type="button" className="btn btn-secondary btn-sm">
                  Register
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <button type="button" className="btn btn-secondary btn-sm">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  </nav>
);
