import React from 'react';


const CurrentHeader = ({ weather }) => {

  const currentDescription = weather.description.toUpperCase();
  const city = weather.location.toUpperCase();

  return (
    <p className="clearfix"><span>{city}</span><span>{currentDescription}</span></p>
  );

};

CurrentHeader.propTypes = {
  weather: React.PropTypes.object.isRequired
};

export default CurrentHeader;