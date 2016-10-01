import { actions } from '../actions/types';

const initialState = {
  token: null,
  coordinates: { lat: null, long: null },
  userIP: '',
  userCity: '',
  userCC: '',
  error: null
};

export default function(state = initialState, action) {

  switch(action.type) {
    case actions.INITIALIZE_APPLICATION:
      return Object.assign({}, state, {
        token: window.localStorage.getItem('token')
      });

    case actions.SIGNIN_SUCCESS:
      return Object.assign({}, state, {

      });
    case actions.SIGNIN_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case actions.SIGNUP_SUCCESS:
      window.localStorage.setItem('token', action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case actions.SIGNUP_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case actions.FETCH_USER_COORDINATES:
      return Object.assign({}, state, {
        coordinates: {
          lat: action.payload.latitude,
          long: action.payload.longitude
        }
      });
      case actions.FETCH_USER_IP_SUCCESS:
        return Object.assign({}, state, {
          userIP: action.payload.ip
        });
      case actions.FETCH_USER_IP_ERROR:
        return Object.assign({}, state, {
          error: action.payload
        });
      case actions.FETCH_USER_LOCATION_SUCCESS:
        return Object.assign({}, state, {
          userCity: action.payload.city,
          userCC: action.payload.countryCode
        });
      case actions.FETCH_USER_LOCATION_ERROR:
        return Object.assign({}, state, {
          error: action.payload
        });

    default:
      return state;
  }
}