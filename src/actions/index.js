export const actions = {
  FETCH_WEATHER: 'FETCH_WEATHER',
  FETCH_WEATHER_ERROR: 'FETCH_WEATHER_ERROR',
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  INITIALIZE_APPLICATION: 'INITIALIZE_APPLICATION',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  SIGNUP: 'SIGNUP',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',
};

const rootURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const WEATHER_API_KEY = '65efb18293ede5bb078c2a9cd2ac3ea3';

export function fetchWeather(city) {
  return fetchWeatherAction(city);
}

function fetchWeatherAction(payload) {
  return {
    type: actions.FETCH_WEATHER,
    payload,
    meta: {
      remote: {
        url: `${rootURL}${payload}&units=imperial&appid=${WEATHER_API_KEY}`,
        method: 'get'
      }
    }
  };
}

