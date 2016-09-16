import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import Header from './src/components/header';
import Searchbar from './src/components/search_bar';
import IncompleteTasks from './src/components/incomplete_tasks';
import Api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.getTodos();
  }

  getTodos() {
    const api = new Api();

    api.get('https://localhost:3000/todos?callback=?');

  }

  render() {
    return (
      <div>
        <Header /> 
        <IncompleteTasks />
      </div>
    );
  }
}


let routes = (<Route path="/" component={App}>
    <Route path="/todos" component={App}></Route>
  </Route>);

ReactDOM.render(
  <Router history={browserHistory} routes={routes}></Router>,
  document.getElementById('app'));