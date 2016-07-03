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
      return (<img src="http://res.cloudinary.com/dywbzmakl/image/upload/v1467324936/default_yduuy3.jpg" id="user-profile-pic"/>)
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

  render (){
    const rightNavItems = SessionStore.isUserLoggedIn() ?
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this._signUp} id="log-in-link">Edit</a></li>
        <li><a href="#" onClick={this._signOut} id="sign-up-link">Sign Out</a></li>
        <li><a href="#" onClick={this._userProfile} id="user-profile-link">{this.userPic()}</a></li>
      </ul> :
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this._logIn} id="log-in-link">Login</a></li>
        <li><a href="#" onClick={this._signUp} id="sign-up-link">Sign Up</a></li>
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
            <a className="navbar-brand" id="logo" href="#">MeatUp</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#" onClick={this._createGroup}>Create Group <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
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
