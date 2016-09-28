import { actions } from './types';

function fetchCoords() {
  var startPos;
  var geoOptions = {
    timeout: 10 * 1000
  };

  var geoSuccess = function(position) {
    startPos = position;
    console.log(startPos.coords.latitude);
    console.log(startPos.coords.longitude);
  };
  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);

}

export function fetchWeather() {
  const userCoords = fetchCoords();
  return fetchWeatherAction(userCoords);
}

function fetchWeatherAction(payload) {
  const rootURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const WEATHER_API_KEY = '65efb18293ede5bb078c2a9cd2ac3ea3';

  return {
    type: actions.FETCH_WEATHER,
    payload,
    meta: {
      remote: {
        url: `${rootURL}${payload}&units=imperial&appid=${WEATHER_API_KEY}`,
        method: 'GET'
      }
    }
  };
}

export function Signin({ email, password }) {
  return SigninAction({ email, password });
}

function SigninAction(payload) {
  const rootURL = 'http://localhost:3000/signin';

  return {
    type: actions.SIGNIN,
    payload,
    meta: {
      remote: {
        url: `${rootURL}`,
        method: 'POST'
      }
    }
  }
}

export function Signup({ email, password }) {
  return SignupAction({ email, password });
}

function SignupAction(payload) {
  const rootURL = 'http://localhost:3000/signup';

  return {
    type: actions.SIGNUP,
    payload,
    meta: {
      remote: {
        url: `${rootURL}`,
        method: 'POST'
      }
    }
  }
}

