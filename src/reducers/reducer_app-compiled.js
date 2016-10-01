'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];


  switch (action.type) {
    case _types.actions.INITIALIZE_APPLICATION:
      return Object.assign({}, state, {
        token: window.localStorage.getItem('token')
      });

    case _types.actions.SIGNIN_SUCCESS:
      return Object.assign({}, state, {});
    case _types.actions.SIGNIN_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case _types.actions.SIGNUP_SUCCESS:
      window.localStorage.setItem('token', action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case _types.actions.SIGNUP_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case _types.actions.FETCH_USER_COORDINATES:
      return Object.assign({}, state, {
        coordinates: {
          lat: action.payload.latitude,
          long: action.payload.longitude
        }
      });
    case _types.actions.FETCH_USER_IP_SUCCESS:
      return Object.assign({}, state, {
        userIP: action.payload.ip
      });
    case _types.actions.FETCH_USER_IP_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case _types.actions.FETCH_USER_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        userCity: action.payload.city,
        userCC: action.payload.countryCode
      });
    case _types.actions.FETCH_USER_LOCATION_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

var _types = require('../actions/types');

var initialState = {
  token: null,
  coordinates: { lat: null, long: null },
  userIP: '',
  userCity: '',
  userCC: '',
  error: null
};

//# sourceMappingURL=reducer_app-compiled.js.map