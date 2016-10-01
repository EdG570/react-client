import React, { Component } from 'react';

import UserDetailsCont from './user_details_container';
import WeatherContainer from './todos/weather/weather_container';

const TodosMain = () => {
    return (
      <div className="clearfix">
        <UserDetailsCont />
        <WeatherContainer />
      </div>
    );
};

export default TodosMain;