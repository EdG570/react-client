import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postNewUser } from '../actions/index';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  }

  updateState() {

  }

  render() {

    return (
      <div className="login-section">
        <img src="../src/assets/logo.svg" alt="Simplexity logo"/>
        <h1>Get Simplexity for free</h1>

        <form>
          <div className="clearfix">
            <img src="../src/assets/avatar.svg" alt="Name icon"/>
            <input placeholder="Name" type="text" name="name" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/envelope.svg" alt="Email icon"/>
            <input placeholder="email" type="text" name="email" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/locked.svg" alt="Password icon"/>
            <input placeholder="Password" type="text" name="password" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/confirm.svg" alt="Confirm password icon"/>
            <input placeholder="Confirm password" type="text" name="passwordConfirm"/>
          </div>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required: Please enter your name';
  }

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

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required: Please enter your password';
  } else if (values.passwordConfirm.length < 6) {
    errors.passwordConfirm = 'Must be at least 6 characters in length'
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = 'Passwords do not match';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postNewUser }, dispatch);
}

export default connect (null, mapDispatchToProps)(SignUp);



