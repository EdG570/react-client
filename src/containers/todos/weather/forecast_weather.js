import React, { Component } from 'react';

import ForecastList from './forecast_list';
import ForecastDetail from './forecast_detail';


const ForecastWeather = () => {

    return (
      <div>
        <ForecastList />
        <ForecastDetail />
      </div>
    );

};

export default ForecastWeather;
