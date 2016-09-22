import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { resetPassword } from '../actions/index';

class PasswordReset extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    const email = this.props.fields.email;

    return (
      <div className="login-section">
        <img src="../src/assets/logo.svg" id="pw-logo" alt="Simplexity logo"/>

        <form onSubmit={handleSubmit}>
          <div>
            <h3>Forgot your password?</h3>
            <p>No worries. Just enter your email address below and we'll send you instructions
            on how to reset your password.</p>
          </div>

          <div className="clearfix">
            <img src="../src/assets/envelope.svg" alt="Email icon"/>
            <Field placeholder="email" component="input" type="text" name="email" {...email} />
          </div>

          <div>
            <button type="submit">Reset Password</button>
          </div>
        </form>

        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
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

  return errors;
}

export default reduxForm({
  form: 'PasswordReset',
  fields: ['email'],
  validate
}, null, { resetPassword })(PasswordReset);
