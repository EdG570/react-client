import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { logUserIn } from '../actions/index';

class UserLogin extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    const email = this.props.fields.email;
    const password = this.props.fields.password;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Sign In or Create a New Account</h3>

          <div>
            <Field placeholder="email" component="input" type="text" name="email" {...email} />
          </div>

          <div>
            <Field placeholder="Password" component="input" type="text" name="password" {...password}/>
          </div>

          <button type="submit">Sign In</button>
          <Link to="/forgotpassword" className="password-reset">Forgot your password?</Link>
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

export default reduxForm({
  form: 'UserLogin',
  fields: ['email', 'password'],
  validate
}, null, { logUserIn })(UserLogin);
