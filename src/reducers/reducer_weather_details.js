import { actions } from '../actions/types';

const initialState = {
  index: null,
  error: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.SHOW_WEATHER_DETAILS:
      console.log(action.payload);
      return Object.assign({}, state, {
        index: action.payload
      });

    default:
      return state;
  }
}