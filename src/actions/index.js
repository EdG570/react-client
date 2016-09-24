import axios from 'axios';

export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const rootURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const WEATHER_API_KEY = '65efb18293ede5bb078c2a9cd2ac3ea3';

export function fetchWeather(city) {
  const request = axios.get(`${rootURL}${city}&units=imperial&appid=${WEATHER_API_KEY}`);

  return {
    type: WEATHER_FETCHED,
    payload: request
  };
}

