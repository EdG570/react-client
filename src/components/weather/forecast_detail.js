import React, { Component } from 'react';

const ForecastDetail = ({ forecastDetails }) => {

  return (
    <div className="forecast-details">
      <p>{ forecastDetails.day.fcttext }</p>
    </div>
  );

};

export default ForecastDetail;