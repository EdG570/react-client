import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {

    return (
      <div className="login-section">
        <img src="../src/assets/logo.svg" alt="Simplexity logo"/>
        <h1>Sign In</h1>

        <form>
          <div className="clearfix">
            <img src="../src/assets/envelope.svg" alt="Email icon"/>
            <input placeholder="Email" type="text" name="email" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/locked.svg" alt="Password icon"/>
            <input placeholder="Password" type="text" name="password" />
          </div>

          <div>
            <Link to="/todos">Fake Sign In</Link>
            <button type="submit">Sign In</button>
            <Link to="/forgotpassword" className="password-reset">Forgot your password?</Link>
          </div>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required: Please enter your email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required: Please enter your password';
  } else if (values.password.length < 6) {
    errors.password = 'Must be at least 6 characters in length'
  }

  return errors;
}








