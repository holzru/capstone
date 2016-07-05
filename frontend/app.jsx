import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./components/nav_bar');
const LoginForm = require('./components/login_form');
const Footer = require('./components/footer');
const Search = require('./components/search');
const GroupDetail = require('./components/group_detail');
const UserDetail = require('./components/user_detail');
const EventDetail = require('./components/event_detail');
const EventActions = require('./actions/event_actions');
const SessionActions = require('./actions/session_actions');


const App = React.createClass({
  render () {
    return (
      <div>
        <NavBar/>
        <div id="main-page">
        { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }
});

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="/groups/:group_id" component={GroupDetail}/>
      <Route path="/users/:user_id" component={UserDetail}/>
      <Route path="/events/:event_id" component={EventDetail}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  const root = document.getElementById("root");
  ReactDOM.render(router, root);
});
