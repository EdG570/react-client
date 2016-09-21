import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { logUserIn } from '../actions/index';

class UserLogin extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    const email = this.props.fields.email;
    const password = this.props.fields.password;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign In or Create a New Account</h3>

        <div>
          <label>Email</label>
          <Field component="input" type="text" name="email" {...email} />
        </div>

        <div>
          <label>Password</label>
          <Field component="input" type="text" className="form-control" name="password" {...password}/>
        </div>

        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) errors.email = 'Enter your email';
  if (!values.password) errors.password = 'Enter your password';

  return errors;
}

export default reduxForm({
  form: 'UserLogin',
  fields: ['email', 'password'],
  validate
}, null, { logUserIn })(UserLogin);

