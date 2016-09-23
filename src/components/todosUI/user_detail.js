import React, { Component } from 'react';

export default class UserAvatar extends Component {
  render() {
    return (
      <div className="user-detail">
        <img src="src/assets/mock-user.jpg" alt="User profile image"/>
        <h3>Joe Battista</h3>
      </div>
    );
  }
}