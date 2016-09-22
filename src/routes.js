import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UserLogin from './components/login';
import PasswordReset from './components/forgot_password';
import SignUp from './components/sign_up';
import Home from './components/home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signin" component={UserLogin} />;
    <Route path="/forgotpassword" component={PasswordReset} />
    <Route path="/signup" component={SignUp} />
  </Route>
);