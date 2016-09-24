import { WEATHER_FETCHED } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case WEATHER_FETCHED:
      return action.payload;
    default:
      return state;
  }
}