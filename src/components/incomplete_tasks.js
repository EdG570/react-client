import React, { Component } from 'react';

class IncompleteTasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.todos) return (<div>Loading...</div>);

    return (
      <div>
        <ul>
          <li>
               
          </li>
        </ul>
      </div>
    );
  }
}

export default IncompleteTasks;