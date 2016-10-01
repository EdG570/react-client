import React from 'react';

import CurrentHeader from './current_header';
import CurrentDetails from './current_detail';

const CurrentWeather = ({ weather }) => {
    return (
      <div>
        <CurrentHeader weather={ weather }/>
        <CurrentDetails weather={ weather }/>
      </div>
    );
};

CurrentWeather.propTypes = {
  weather: React.PropTypes.object.isRequired
};

export default CurrentWeather;

