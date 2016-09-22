import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { postNewUser } from '../actions/index';

class SignUp extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    const email = this.props.fields.email;
    const password = this.props.fields.password;
    const passwordConfirm = this.props.fields.passwordConfirm;
    const name = this.props.fields.name;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div>
            <Field placeholder="Name" component="input" type="text" name="name" {...name}/>
          </div>

          <div>
            <Field placeholder="email" component="input" type="text" name="email" {...email} />
          </div>

          <div>
            <Field placeholder="Password" component="input" type="text" name="password" {...password}/>
          </div>

          <div>
            <Field placeholder="Confirm password" component="input" type="text" name="passwordConfirm" {...passwordConfirm}/>
          </div>

          <button type="submit">Sign Up</button>
          <Link to="/forgotpassword" className="password-reset">Forgot your password?</Link>
        </form>
        <p>Already have an account? <Link to="/">Sign In</Link></p>
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

export default reduxForm({
  form: 'SignUp',
  fields: ['name', 'email', 'password', 'passwordConfirm'],
  validate
}, null, { postNewUser })(SignUp);

