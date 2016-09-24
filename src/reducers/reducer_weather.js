import { WEATHER_FETCHED } from '../actions/index';

const initialState = {
  temp: '',
  description: '',
  iconID: '',
  location: ''
};

export default function(state = initialState, action) {

  switch(action.type) {
    case WEATHER_FETCHED:
      return Object.assign({}, state, {
        temp: action.payload.data.main.temp,
        description: action.payload.data.weather[0].description,
        iconID: action.payload.data.weather[0].icon,
        location: action.payload.data.name
      });
    default:
      return state;
  }
}