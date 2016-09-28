import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postNewUser } from '../../actions/index';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      pwConfirm: '',
      valid: false,
      errors: {}
    };

    this.updateState = this.updateState.bind(this);
    this.validate = this.validate.bind(this);
  }

  updateState() {
    const nameVal = document.querySelector('#name').value;
    const emailVal = document.querySelector('#email').value;
    const passwordVal = document.querySelector('#password').value;
    const pwConfirmVal = document.querySelector('#pwconfirm').value;

    this.setState({ name: nameVal, email: emailVal, password: passwordVal, pwConfirm: pwConfirmVal });

    console.log(this.state);
  }

  validate(e) {
    const inputErrors = {};

    if (!this.state.name) {
      inputErrors.name = 'Required: Please enter your name';
    } else if (!/^[A-Za-z ]{3,20}$/.test(this.state.name)) {
      inputErrors.name = 'Invalid name: Only letters and spaces allowed';
    }

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

    if(!this.state.pwConfirm) {
      inputErrors.pwConfirm = 'Required: Please confirm your password';
    } else if (this.state.pwConfirm !== this.state.password) {
      inputErrors.pwConfirm = 'Passwords must match';
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
        <h1>Get Simplexity for free</h1>

        { Object.keys(this.state.errors).length > 0 ? <p className="error-msg">{this.state.errors.name}</p> : null }
        { Object.keys(this.state.errors).length > 0 ? <p className="error-msg">{this.state.errors.email}</p> : null }
        { Object.keys(this.state.errors).length > 0 ? <p className="error-msg">{this.state.errors.password}</p> : null }
        { Object.keys(this.state.errors).length > 0 ? <p className="error-msg">{this.state.errors.pwConfirm}</p> : null }
        <form>
          <div className="clearfix">
            <img src="../src/assets/avatar.svg" alt="Name icon"/>
            <input onChange={this.updateState} id="name" placeholder="Name" type="text" name="name" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/envelope.svg" alt="Email icon"/>
            <input onChange={this.updateState} id="email" placeholder="email" type="text" name="email" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/locked.svg" alt="Password icon"/>
            <input onChange={this.updateState} id="password" placeholder="Password" type="text" name="password" />
          </div>

          <div className="clearfix">
            <img src="../src/assets/confirm.svg" alt="Confirm password icon"/>
            <input onChange={this.updateState} id="pwconfirm" placeholder="Confirm password" type="text" name="passwordConfirm"/>
          </div>

          <div>
            <button onClick={this.validate} type="submit">Sign Up</button>
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



