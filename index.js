import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import $ from 'jquery';
import Header from './src/components/header';
import Searchbar from './src/components/search_bar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this.getTodos();
  }

  getTodos() {
    $.getJSON(`http://localhost:3000/todos/callback=?`, function(data) {

      this.setState({
        todos: data
      });
    });

    console.log(this.state.todos);
  }

  render() {
    return (
      <div>
        <Header /> 
        {this.state.todos}
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