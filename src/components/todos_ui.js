import React, { Component } from 'react';

import UserDetailsCont from './todosUI/user_details_container';

export default class TodosUI extends Component {
  render() {
    return (
      <div>
        <UserDetailsCont />
      </div>
    );
  }
}