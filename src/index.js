import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import api from './middleware/api';
import auth from './middleware/auth';
import routes from './routes';


const middleware = [promise, api, auth, thunk, logger({collapsed: true})];

let store = createStore(reducers, {}, compose(applyMiddleware(...middleware)));

store.dispatch({type: 'INITIALIZE_APPLICATION'});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);