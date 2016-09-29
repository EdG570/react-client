import { combineReducers } from 'redux';

import CurrentWeather from './reducer_current_weather';
import ForecastWeather from './reducer_forecast_weather';
import WeatherDetails from './reducer_weather_details';
import App from './reducer_app';

const rootReducer = combineReducers({
  currentWeather: CurrentWeather,
  forecastWeather: ForecastWeather,
  weatherDetails: WeatherDetails,
  app: App
});

export default rootReducer;