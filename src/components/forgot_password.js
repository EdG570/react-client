import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetPassword } from '../actions/index';

class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    const inputVal = document.querySelector('input');

    this.setState({ email: inputVal.value });
  }

  render() {
    return (
      <div className="login-section">
        <img src="../src/assets/logo.svg" id="pw-logo" alt="Simplexity logo"/>

        <form>
          <div>
            <h3>Forgot your password?</h3>
            <p>No worries. Just enter your email address below and we'll send you instructions
            on how to reset your password.</p>
          </div>

          <div className="clearfix">
            <img src="../src/assets/envelope.svg" alt="Email icon"/>
            <input onChange={this.updateState} placeholder="email" type="text" name="email" />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetPassword }, dispatch);
}

export default connect (null, mapDispatchToProps)(PasswordReset);

