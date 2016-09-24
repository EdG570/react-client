import React, { Component } from 'react';

import UserDetails from './user_detail';
import UserLists from './user_lists';

export default class UserDetailsCont extends Component {
  render() {
    return (
      <div id="user-container">
        <UserDetails />
        <UserLists />
      </div>
    );
  }
};