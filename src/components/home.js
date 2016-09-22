import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './home/header';
import Nav from './home/nav';
import Features from './home/features';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Features />
      </div>
    );
  }
};



