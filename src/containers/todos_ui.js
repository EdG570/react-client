import React, { Component } from 'react';

import UserDetailsCont from './todos/user_details_container';
import WeatherCont from './todos/weather_container';

export default class TodosUI extends Component {
  render() {
    return (
      <div className="clearfix">
        <UserDetailsCont />
        <WeatherCont />
      </div>
    );
  }
}