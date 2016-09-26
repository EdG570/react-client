import { actions } from '../actions/index';

const initialState = {
  temp: '',
  description: '',
  iconID: '',
  location: '',
  errors: []
};

export default function(state = initialState, action) {

  switch(action.type) {
    case actions.FETCH_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        temp: action.payload.main.temp,
        description: action.payload.weather[0].description,
        iconID: action.payload.weather[0].icon,
        location: action.payload.name
      });

    //TODO: Add fetch failed action response
    default:
      return state;
  }
}