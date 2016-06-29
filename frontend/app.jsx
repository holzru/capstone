import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./components/nav_bar');
const LoginForm = require('./components/login_form')
const Footer = require('./components/footer')

const App = React.createClass({
  render () {
    return (
      <div class='container fluid'>
        <NavBar/>
        <div>
        { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <Route path="/login" component={ LoginForm } />
    <Route path="/signup" component={ LoginForm } />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});
