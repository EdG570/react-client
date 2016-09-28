import { actions } from './types';

export function fetchWeather(city) {
  return fetchWeatherAction(city);
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

