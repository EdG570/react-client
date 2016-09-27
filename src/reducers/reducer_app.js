import { actions } from '../actions/index';

const initialState = {

};

export default function(state = initialState, action) {

    switch(action.type) {
        case actions.INITIALIZE_APPLICATION:
            return Object.assign({}, state, {
                token: window.localStorage.getItem('token')
            });

        case actions.LOGIN_SUCCESS:
        case actions.SIGNUP_SUCCESS:
            window.localStorage.setItem('token', action.payload);
            return Object.assign({}, state, {
                token: action.payload
            });

        //TODO: Add fetch failed action response
        default:
            return state;
    }
}