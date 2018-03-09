import React, { Component } from 'react';
import Login from '../components/Login';
import axios from 'axios';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validForm: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const element = event.target;
    const form = element.parentElement;

    this.setState({
      [element.name]: element.value,
      validForm: form.checkValidity(),
    });

    if (element.validity.valid) {
      element.classList.add('is-valid');
      element.classList.remove('is-invalid');
    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
    }
  }

  onSubmit(e) {
    e.preventDefault();
    delete this.state.error;
    this.setState(this.state);

    axios
      .post('/api/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => response.data)
      .then(data => {
        console.log(data);
        if (!data.success) {
          this.setState({ error: data.info.message });
        }
        // this.props.history.push('/products');
      });
  }

  render() {
    return (
      <Login
        onChange={this.onChange}
        state={this.state}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default LoginContainer;
