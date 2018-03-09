import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default ({ user, logoutUser }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      E-Commerce
    </a>
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
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
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
      <a className="" href="#">
        <span className="oi oi-cart mx-3" title="cart" aria-hidden="true" />
      </a>
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
