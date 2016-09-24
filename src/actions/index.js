import axios from 'axios';

export const actions = {
  WEATHER_FETCHED: 'WEATHER_FETCHED',
  WEATHER_FETCH_FAILED: 'WEATHER_FETCH_FAILED'
};

const rootURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const WEATHER_API_KEY = '65efb18293ede5bb078c2a9cd2ac3ea3';

export function fetchWeather(city) {

  return (dispatch) => {
    axios.get(`${rootURL}${city}&units=imperial&appid=${WEATHER_API_KEY}`)
        .then((res) => {
          return dispatch(fetchWeatherAction(res));
        })
        .catch((err) => {
          return dispatch(fetchWeatherFailedAction(err));
        });
  }
}

function fetchWeatherFailedAction(payload){
  return {
    type: actions.WEATHER_FETCHED_FAILED,
    payload
  };
}


function fetchWeatherAction(payload) {
  return {
    type: actions.WEATHER_FETCHED,
    payload
  };
}

