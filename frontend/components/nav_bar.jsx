const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const GroupForm = require('./group_form');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState() {
    return ({current_user: SessionStore.currentUser()});
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.handleUser);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  handleUser() {
    this.setState({current_user: SessionStore.currentUser()});
    $("#user-modal").modal("hide");
  },

  _logIn(e) {
    e.preventDefault();
    $("#login-modal").modal("show");
  },

  _signUp(e) {
    e.preventDefault();
    $("#user-modal").modal("show");
  },

  _signOut(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  userPic() {
    if (this.state.current_user.id) {
      return (<img src={this.state.current_user.pic_url} id="user-profile-pic"/>);
    } else {
      return (<img src="https://res.cloudinary.com/dywbzmakl/image/upload/v1467324936/default_yduuy3.jpg" id="user-profile-pic"/>);
    }
  },

  _createGroup(e){
    e.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      $('#group-modal-new').modal('show');
    } else {
      $("#login-modal").modal("show");
    }
  },

  _userProfile(e) {
    e.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push(`/users/${SessionStore.currentUser().id}`);
    } else {
      $("#login-modal").modal("show");
    }
  },

  _index(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  render (){
    const rightNavItems = SessionStore.isUserLoggedIn() ?
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this._signUp} id="login-signup-link">Edit</a></li>
        <li><a href="#" onClick={this._signOut} id="login-signup-link">Sign Out</a></li>
        <li><a href="#" onClick={this._userProfile} id="user-profile-link">{this.userPic()}</a></li>
      </ul> :
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this._logIn} id="login-signup-link">Login</a></li>
        <li><a href="#" onClick={this._signUp} id="login-signup-link">Sign Up</a></li>
        <li><a href="#" onClick={this._userProfile} id="user-profile-link">{this.userPic()}</a></li>
      </ul>;
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" onClick={this._index} id="logo" href="#">LetsMeet</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#" id="group-create" onClick={this._createGroup}>Create Group <span className="sr-only">(current)</span></a></li>
            </ul>
            {rightNavItems}
          </div>
        </div>
      </nav>
      <LoginForm formType="login"/>
      <SignupForm formType={SessionStore.isUserLoggedIn() ? "edit" : "signup"}/>
      <GroupForm formType="new"/>
    </div>
  );}
});
