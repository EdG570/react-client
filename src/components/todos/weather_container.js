import React, { Component } from 'react';

import WeatherDetails from './weather_detail';
import Collab from './collaborate';

export default class WeatherCont extends Component {
  render() {
    return (
      <div className="weather-container">
        <WeatherDetails />
        <Collab />
      </div>
    );
  }
}