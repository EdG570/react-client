import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Weather from './reducer_weather';

const rootReducer = combineReducers({
  form: formReducer,
  weather: Weather
});

export default rootReducer;