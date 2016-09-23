import React, { Component } from 'react';

export default class UserLists extends Component {
  render() {
    return (
      <div id="user-lists">
        <h2>Lists</h2>
        <ul>
          <li>Groceries</li>
          <li>Vacation</li>
          <li>Wedding</li>
          <li>Work</li>
        </ul>
        <a>+ List</a>
      </div>
    );
  }
}