import React, { Component } from 'react';

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

export default CurrentWeather;

