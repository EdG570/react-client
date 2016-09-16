import React, { Component } from 'react';
import SearchBar from './search_bar';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <SearchBar></SearchBar>
      </header>
    );
  }
}

export default Header;
