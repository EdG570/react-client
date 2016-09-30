'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  console.log(action);
  switch (action.type) {
    case _types.actions.FETCH_CURRENT_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        temp: action.payload.current_observation.temp_f,
        description: action.payload.current_observation.weather,
        iconID: action.payload.current_observation.icon,
        location: action.payload.current_observation.display_location.full,
        isFetching: false
      });
    case _types.actions.FETCH_CURRENT_WEATHER_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
};

var _types = require('../actions/types');

var initialState = {
  temp: '',
  description: '',
  iconID: '',
  location: '',
  isFetching: true,
  error: ''
};

//# sourceMappingURL=reducer_current_weather-compiled.js.map