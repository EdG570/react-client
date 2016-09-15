import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

let routes = (<Route path="/" component={App}></Route>);

class App extends React.Component {
  render() {
    return (<h1>Hello!</h1>);
  }
}

ReactDOM.render(
  <Router history={browserHistory} routes={routes}></Router>,
  document.getElementById('app'));