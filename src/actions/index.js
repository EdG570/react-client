import axios from 'axios';

const rootUrl = 'http://localhost:3000';
const lists = '/lists';

const WEATHER_API_KEY = '65efb18293ede5bb078c2a9cd2ac3ea3';

export function logUserIn() {
  const city = 'Northumberland';
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;
  const request = axios.get(weatherUrl);

  return {
    type: 'FETCH_WEATHER',
    payload: request
  }
};

export function resetPassword() {

};

export function postNewUser() {

};