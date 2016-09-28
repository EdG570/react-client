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

    .then((response) => {
      store.dispatch({ type: `${action.type}_SUCCESS`, payload: response.data});
    })
    .catch((err) => {
      store.dispatch({ type: `${action.type}_ERROR`, payload: err.data});
    });
  }

  return next(action);

  let startPos = null;
  const geoOptions = {
    timeout: 10 * 1000
  };

  const geoSuccess = (position) => {
    startPos = position;
    console.log(startPos.coords.latitude);
    console.log(startPos.coords.longitude);
  };
  const geoError = (error) => {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};