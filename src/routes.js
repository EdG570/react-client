import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignIn from './containers/auth/signin';
import PasswordReset from './containers/auth/forgot_password';
import SignUp from './containers/auth/signup';
import Home from './components/home';
import TodosUI from './components/todos';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signin" component={SignIn} />;
    <Route path="/forgotpassword" component={PasswordReset} />
    <Route path="/signup" component={SignUp} />
    <Route path="/todos" component={TodosUI} />
  </Route>
);