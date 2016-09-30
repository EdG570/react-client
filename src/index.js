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
import routes from './routes';

import { actions } from './actions/types';
import { getUserPosition } from './actions';

const middleware = [promise, api, thunk, logger({collapsed: true})];

let store = createStore(reducers, {}, compose(applyMiddleware(...middleware)));

store.dispatch({type: actions.INITIALIZE_APPLICATION});
store.dispatch(getUserPosition());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);