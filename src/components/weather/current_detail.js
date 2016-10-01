import React from 'react';

const CurrentDetails = ({ weather }) => {
  const currentTemp = roundTemp(weather.temp);
  const currentIconID = weather.iconID;

  return (
    <div>
      <div className="clearfix current-weather">
        <img src={`http://icons.wxug.com/i/c/a/${currentIconID}.gif`} alt="Weather image"/>
        <h2>{currentTemp}°F</h2>
      </div>
    </div>
  );
};

const roundTemp = (temp) => {
  return Math.round(temp);
};

CurrentDetails.propTypes = {
  weather: React.PropTypes.object.isRequired
};

export default CurrentDetails;
