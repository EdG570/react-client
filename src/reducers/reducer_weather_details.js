import { actions } from '../actions/types';

const initialState = {
  day: { fcttext: 'Click on a day to see forecast details.'}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.SHOW_WEATHER_DETAILS:
      if (action.payload.fcttext === state.day.fcttext) {
        return Object.assign({}, state, {
          day: { fcttext: 'Click on a day to see forecast details.'}
        });
      }

      return Object.assign({}, state, {
        day: action.payload
      });

    default:
      return state;
  }
}