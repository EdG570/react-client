import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './home/header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>Hello from Home!</div>
        <Link to="signin">SignIn</Link>

        <Header />
      </div>
    );
  }
};



