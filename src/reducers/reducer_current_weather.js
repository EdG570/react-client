import { actions } from '../actions/types';

const initialState = {
  temp: '',
  description: '',
  iconID: '',
  location: '',
  isFetching: true,
  error: ''
};

export default function(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case actions.FETCH_CURRENT_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        temp: action.payload.current_observation.temp_f,
        description: action.payload.current_observation.weather,
        iconID: action.payload.current_observation.icon,
        location: action.payload.current_observation.display_location.full,
        isFetching: false
      });
    case actions.FETCH_CURRENT_WEATHER_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}