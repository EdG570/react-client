import axios from 'axios';

export default store => next => action => {
  if (action.meta && action.meta.remote) {
    let options = {};
    const state = store.getState();
    const request = action.meta.remote;

    if (state.app.token) {
      window.localStorage.set('token', state.app.token);
      options.headers = {
        authorization: `Bearer ${state.app.token}`
      }
    }
    
    axios(Object.assign(options, {
      method: request.method,
      url: request.url
      // data: action.payload
    }))
      .then((response) => {
        store.dispatch({ type: `${action.type}_SUCCESS`, payload: response.data});
      })
      .catch((err) => {
        store.dispatch({ type: `${action.type}_ERROR`, payload: err.data});
      });
  }
  
  return next(action);
};
