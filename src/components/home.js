import React, { Component } from 'react';

import Header from './home/header';
import Nav from './home/nav';
import Features from './home/features';
import Footer from './home/footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Features />
        <Footer />
      </div>
    );
  }
};



