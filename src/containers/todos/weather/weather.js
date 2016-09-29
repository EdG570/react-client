import React from 'react';

import CurrentWeather from './current_weather';
import CurrentDay from './current_day';
import ForecastWeather from './forecast_weather';

const Weather = () => {
    return (
      <div className="weather-box">
        <CurrentDay />
        <CurrentWeather />
        <ForecastWeather />
      </div>
    );
};

export default Weather;