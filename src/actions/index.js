import { actions } from './types';

export function getPosition() {

  return new Promise(function(resolve, reject) {

    navigator.geolocation.getCurrentPosition(

      function(position) {
        resolve(position);
      },

      function(error) {
        reject(error);
      }

    );

  });

}

export function fetchWeather() {

  return getPosition()
    .then((position) => {
      console.log(position);

      let userCoords = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };

      return fetchWeatherAction(userCoords);
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchWeatherAction(payload) {
  const rootURL = 'http://api.wunderground.com/api/';
  const WEATHER_API_KEY = '1c2ef46287ff1e67';
  const lat = payload.lat;
  const long = payload.long;

  return {
    type: actions.FETCH_WEATHER,
    payload,
    meta: {
      remote: {
        url: `${rootURL}${WEATHER_API_KEY}/conditions/q/${lat},${long}.json`,
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

