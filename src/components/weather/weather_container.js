import React from 'react';

import Weather from '../../containers/weather/weather';

export default class WeatherContainer extends Component {
  render() {
    return (
      <div className="weather-container">
        <Weather />
      </div>
    );
  }
}