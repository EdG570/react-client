import { actions } from '../actions/types';

const initialState = {
  days: [],
  error: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.FETCH_FORECAST_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        days: action.payload.forecast.txt_forecast.forecastday.filter((day) => {
          if (day.period > 0 && day.period % 2 === 0) {
            return day;
          }
        })
      });
    case actions.FETCH_FORECAST_WEATHER_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}