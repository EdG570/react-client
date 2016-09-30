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

export function getUserPosition() {
  return getPosition()
  .then((position) => {

    let userCoords = {
      type: actions.FETCH_USER_COORDINATES,
      payload: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    };

    // TODO: Return action that stores userCoords in State
    //return fetchCurrentWeatherAction(userCoords);
    return userCoords;
  })
  .catch((error) => {
    console.log(error);
  });
}

export function fetchCurrentWeather() {
  const rootURL = 'http://api.wunderground.com/api/';
  const WEATHER_API_KEY = '1c2ef46287ff1e67';
  const MAX_RETRIES = 3;
  let i = 0;

  return (dispatch, getState) => {
      const state = getState();
      const lat = state.app.coordinates.lat;
      const long = state.app.coordinates.long;
      if (i < MAX_RETRIES) {
        i++;
        if (!lat || !long) {
          return setTimeout(() => {dispatch(fetchCurrentWeather())}, 1000);
        }

       return dispatch({
          type: actions.FETCH_CURRENT_WEATHER,
          payload: {},
          meta: {
            remote: {
              url: `${rootURL}${WEATHER_API_KEY}/conditions/q/${lat},${long}.json`,
              method: 'GET'
            }
          }
        })
      } else {
        /* TODO: return type: FETCH CURRENT WEATHER ERROR. Handle with no coords.

         */
        return {};
      }
    };
}

export function fetchForecastWeather() {

  return getPosition()
  .then((position) => {

    let userCoords = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    };

    return fetchForecastWeatherAction(userCoords);
  })
  .catch((error) => {
    console.log(error);
  });
}

function fetchForecastWeatherAction(payload) {
  const rootURL = 'http://api.wunderground.com/api/';
  const WEATHER_API_KEY = '1c2ef46287ff1e67';
  const lat = payload.lat;
  const long = payload.long;

  return {
    type: actions.FETCH_FORECAST_WEATHER,
    payload,
    meta: {
      remote: {
        url: `${rootURL}${WEATHER_API_KEY}/forecast/q/${lat},${long}.json`,
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

export function showWeatherDetails(day) {
  console.log('DAY: ' + day);
  return {
    type: actions.SHOW_WEATHER_DETAILS,
    payload: day
  }
}



