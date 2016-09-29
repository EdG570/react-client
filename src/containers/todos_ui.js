import React, { Component } from 'react';

import UserDetailsCont from './todos/user_details_container';
import WeatherContainer from './todos/weather/weather_container';

export default class TodosUI extends Component {
  render() {
    return (
      <div className="clearfix">
        <UserDetailsCont />
        <WeatherContainer />
      </div>
    );
  }
}