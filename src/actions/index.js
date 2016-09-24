export const actions = {
  FETCH_WEATHER: 'FETCH_WEATHER',
  WEATHER_FETCH_ERROR: 'WEATHER_FETCH_ERROR',
  WEATHER_FETCH_SUCCESS: 'WEATHER_FETCH_SUCCESS'
};

const rootURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const WEATHER_API_KEY = '65efb18293ede5bb078c2a9cd2ac3ea3';

export function fetchWeather(city) {
  return fetchWeatherAction(city);
}

function fetchWeatherFailedAction(payload){
  return {
    type: actions.WEATHER_FETCHED_FAILED,
    payload
  };
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

