import { combineReducers } from 'redux';

import Weather from './reducer_weather';
import App from './reducer_app';

const rootReducer = combineReducers({
  weather: Weather,
  app: App
})

export default rootReducer;