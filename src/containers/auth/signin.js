import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      valid: false,
      errors: {}
    };

    this.updateState = this.updateState.bind(this);
    this.validate = this.validate.bind(this);
  }

  updateState() {
    const vals = document.querySelectorAll('input');
    const emailVal = vals[0].value;
    const passwordVal = vals[1].value;

    this.setState({ email: emailVal, password: passwordVal });
  }

  validate(e) {
    const inputErrors = {};

    if (!this.state.email) {
      inputErrors.email = 'Required: Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      inputErrors.email = 'Invalid email address';
    }
    if (!this.state.password) {
      inputErrors.password = 'Required: Please enter your password';
    } else if (this.state.password.length < 6) {
      inputErrors.password = 'Must be at least 6 characters in length'
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
        <img src="../src/assets/logo.svg" alt="Simplexity logo"/>
        <h1>Sign In</h1>

        { Object.keys(this.state.errors).length > 0 ? <p className="error-msg">{this.state.errors.email}</p> : null }
        { Object.keys(this.state.errors).length > 0 ? <p className="error-msg">{this.state.errors.password}</p> : null }
        <form>
          <div className="clearfix">
            <img src="../src/assets/envelope.svg" alt="Email icon"/>
            <input onChange={ this.updateState } placeholder="Email" type="text" name="email" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/locked.svg" alt="Password icon"/>
            <input onChange={ this.updateState } placeholder="Password" type="text" name="password" />
          </div>

          <div>
            <Link to="/todos">Fake Sign In</Link>
            <button onClick={this.validate} type="submit">Sign In</button>
            <Link to="/forgotpassword" className="password-reset">Forgot your password?</Link>
          </div>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    );
  }
}

function validate(values) {

}








