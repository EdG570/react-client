import { actions } from '../actions/types';

const initialState = {
  token: null,
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

      });
    case actions.SIGNUP_SUCCESS:
      window.localStorage.setItem('token', action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case actions.SIGNUP_ERROR:
      return Object.assign({}, state, {

      });
    default:
      return state;
  }
}