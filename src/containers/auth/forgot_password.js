import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      valid: false,
      errors: {}
    };

    this.updateState = this.updateState.bind(this);
    this.validate = this.validate.bind(this);
  }

  updateState() {
    const inputVal = document.querySelector('input');

    this.setState({ email: inputVal.value });
  }

  validate(e) {
    const inputErrors = {};

    if (!this.state.email) {
      inputErrors.email = 'Required: Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      inputErrors.email = 'Invalid email address';
    }

    if (Object.keys(inputErrors).length === 0) {
      this.setState({valid: true, errors: inputErrors});
    } else {
      this.setState({valid: false, errors: inputErrors});
      e.preventDefault();
    }

    return inputErrors;

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
            { Object.keys(this.state.errors).length > 0 ? <p className="error-msg">{this.state.errors.email}</p> : null }
          </div>

          <div className="clearfix">
            <img src="../src/assets/envelope.svg" alt="Email icon"/>
            <input onChange={this.updateState} placeholder="email" type="text" name="email" />
          </div>

          <div>
            <button onClick={this.validate} type="submit">Reset Password</button>
          </div>
        </form>

        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    );
  }
}



