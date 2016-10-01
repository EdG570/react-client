import React, { Component } from 'react';

import ForecastList from '../../containers/weather/forecast_list';
import ForecastDetail from './forecast_detail';

const ForecastWeather = ({ weather, forecastDetails }) => {

  return (
    <div>
      <ForecastList weather={weather} />
      <ForecastDetail forecastDetails={forecastDetails}/>
    </div>
  );

};

ForecastWeather.propTypes = {
  weather: React.PropTypes.object.isRequired,
  forecastDetails: React.PropTypes.object.isRequired

};

export default ForecastWeather;
