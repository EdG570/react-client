import axios from 'axios';
export default store => next => action => {
  if (action.meta && action.meta.remote) {
    const request = action.meta.remote;
    
    axios({
      method: request.method,
      url: request.url,
      data: action.payload
    })
      .then((response) => {
        store.dispatch({ type: `${action.type}_SUCCESS`, payload: response.data});
      })
      .catch((err) => {
        store.dispatch({ type: `${action.type}_ERROR`, payload: err.data});
      })
  }
  
  return next(action);
};
