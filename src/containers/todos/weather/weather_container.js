import React, { Component } from 'react';

import Weather from './weather';

export default class WeatherContainer extends Component {
  render() {
    return (
      <div className="weather-container">
        <Weather />
      </div>
    );
  }
}