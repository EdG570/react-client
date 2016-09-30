'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _types.actions.SHOW_WEATHER_DETAILS:
      if (action.payload.fcttext === state.day.fcttext) {
        return Object.assign({}, state, {
          day: { fcttext: 'Click on a day to see forecast details.' }
        });
      }

      return Object.assign({}, state, {
        day: action.payload
      });

    default:
      return state;
  }
};

var _types = require('../actions/types');

var initialState = {
  day: { fcttext: 'Click on a day to see forecast details.' }
};

//# sourceMappingURL=reducer_weather_details-compiled.js.map