import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignIn from './components/auth/signin';
import PasswordReset from './components/auth/forgot_password';
import SignUp from './components/auth/signup';
import Home from './components/home';
import TodosUI from './components/todos_ui';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signin" component={SignIn} />;
    <Route path="/forgotpassword" component={PasswordReset} />
    <Route path="/signup" component={SignUp} />
    <Route path="/todos" component={TodosUI} />
  </Route>
);