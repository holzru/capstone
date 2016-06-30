import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./components/nav_bar');
const LoginForm = require('./components/login_form');
const Footer = require('./components/footer');
const Search = require('./components/search');
const GroupDetail = require('./components/group_detail')


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
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(router, root);
});
