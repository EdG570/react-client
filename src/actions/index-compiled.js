'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosition = getPosition;
exports.fetchUserLocation = fetchUserLocation;
exports.fetchUserIP = fetchUserIP;
exports.getUserPosition = getUserPosition;
exports.fetchCurrentWeather = fetchCurrentWeather;
exports.fetchForecastWeather = fetchForecastWeather;
exports.Signin = Signin;
exports.Signup = Signup;
exports.showWeatherDetails = showWeatherDetails;

var _types = require('./types');

function getPosition() {

  return new Promise(function (resolve, reject) {

    navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position);
    }, function (error) {
      reject(error);
    });
  });
}

function fetchUserIPAction() {
  var rootURL = 'https://api.ipify.org?format=json';

  return {
    type: _types.actions.FETCH_USER_IP,
    meta: {
      remote: {
        url: rootURL,
        method: 'GET'
      }
    }
  };
}

function fetchUserLocation(ip) {
  return fetchUserLocationAction(ip);
}

function fetchUserLocationAction(ip) {
  var rootURL = 'http://ip-api.com/json';

  return {
    type: _types.actions.FETCH_USER_LOCATION,
    meta: {
      remote: {
        url: rootURL + '/' + ip,
        method: 'GET'
      }
    }
  };
}

function fetchUserIP() {
  return fetchUserIPAction();
}

function getUserPosition() {
  return getPosition().then(function (position) {

    var userCoords = {
      type: _types.actions.FETCH_USER_COORDINATES,
      payload: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    };

    // TODO: Return action that stores userCoords in State
    //return fetchCurrentWeatherAction(userCoords);
    return userCoords;
  }).catch(function (error) {
    console.log(error);
  });
}

function fetchCurrentWeather() {
  var rootURL = 'http://api.wunderground.com/api/';
  var WEATHER_API_KEY = '1c2ef46287ff1e67';
  var MAX_RETRIES = 3;
  var i = 0;

  return function (dispatch, getState) {
    var state = getState();
    var lat = state.app.coordinates.lat;
    var long = state.app.coordinates.long;
    if (i < MAX_RETRIES) {
      i++;
      if (!lat || !long) {
        return setTimeout(function () {
          dispatch(fetchCurrentWeather());
        }, 1000);
      }

      return dispatch({
        type: _types.actions.FETCH_CURRENT_WEATHER,
        payload: {},
        meta: {
          remote: {
            url: '' + rootURL + WEATHER_API_KEY + '/conditions/q/' + lat + ',' + long + '.json',
            method: 'GET'
          }
        }
      });
    } else {

      /* TODO: return type: FETCH CURRENT WEATHER ERROR. Handle with no coords.
        */
      return {};
    }
  };
}

function fetchForecastWeather() {

  return getPosition().then(function (position) {

    var userCoords = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    };

    return fetchForecastWeatherAction(userCoords);
  }).catch(function (error) {
    console.log(error);
  });
}

function fetchForecastWeatherAction(payload) {
  var rootURL = 'http://api.wunderground.com/api/';
  var WEATHER_API_KEY = '1c2ef46287ff1e67';
  var lat = payload.lat;
  var long = payload.long;

  return {
    type: _types.actions.FETCH_FORECAST_WEATHER,
    payload: payload,
    meta: {
      remote: {
        url: '' + rootURL + WEATHER_API_KEY + '/forecast/q/' + lat + ',' + long + '.json',
        method: 'GET'
      }
    }
  };
}

function Signin(_ref) {
  var email = _ref.email;
  var password = _ref.password;

  return SigninAction({ email: email, password: password });
}

function SigninAction(payload) {
  var rootURL = 'http://localhost:3000/signin';

  return {
    type: _types.actions.SIGNIN,
    payload: payload,
    meta: {
      remote: {
        url: '' + rootURL,
        method: 'POST'
      }
    }
  };
}

function Signup(_ref2) {
  var email = _ref2.email;
  var password = _ref2.password;

  return SignupAction({ email: email, password: password });
}

function SignupAction(payload) {
  var rootURL = 'http://localhost:3000/signup';

  return {
    type: _types.actions.SIGNUP,
    payload: payload,
    meta: {
      remote: {
        url: '' + rootURL,
        method: 'POST'
      }
    }
  };
}

function showWeatherDetails(day) {
  console.log('DAY: ' + day);
  return {
    type: _types.actions.SHOW_WEATHER_DETAILS,
    payload: day
  };
}

//# sourceMappingURL=index-compiled.js.map