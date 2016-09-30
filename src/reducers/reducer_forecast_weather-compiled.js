'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _types.actions.FETCH_FORECAST_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        days: action.payload.forecast.txt_forecast.forecastday.filter(function (day) {
          if (day.period > 0 && day.period % 2 === 0) {
            return day;
          }
        }),
        isFetching: false
      });
    case _types.actions.FETCH_FORECAST_WEATHER_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
};

var _types = require('../actions/types');

var initialState = {
  days: [],
  isFetching: true,
  error: ''
};

//# sourceMappingURL=reducer_forecast_weather-compiled.js.map