import React from 'react';
import './UserForms.css';

export default ({ onChange, state, onSubmit }) => {
  return (
    <div className="text-center auth-form mx-auto">
      <form className="form-signin" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          className="form-control"
          placeholder="Email address"
          required
          onChange={onChange}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={onChange}
        />
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled={!state.validForm}
        >
          Login
        </button>
      </form>
    </div>
  );
};
