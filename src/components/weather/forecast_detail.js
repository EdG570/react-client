import React from 'react';

const ForecastDetail = ({ forecastDetails }) => {

  return (
    <div className="forecast-details">
      <p>{ forecastDetails.day.fcttext }</p>
    </div>
  );

};

ForecastDetail.proptypes = {
  forecastDetails: React.PropTypes.object.isRequired
};

export default ForecastDetail;