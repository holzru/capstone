"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({


  getInitialState() {
    return {
      username: "",
      password: "",
      current_user: SessionStore.currentUser(),
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.closeModalIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  closeModalIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      $("#login-modal").modal("hide");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    SessionActions.logIn(formData);
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.formType;
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
		return (
      <div id="login-modal" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{ this.formType() }</h4>
            </div>
            <div className="modal-body">
              <div className="login-form-container container-fluid text-center">
        				<form onSubmit={this.handleSubmit} className="login-form-box">
        					<br/>
        	        { this.fieldErrors("base") }
        					<div className="login-form">
        		        <br />
        						<label> Username:
        		          { this.fieldErrors("username") }
        							<input type="text"
        		            value={this.state.username}
        		            onChange={this.update("username")}
        								className="login-input" />
        						</label>

        		        <br/>
        						<label> Password:
        		          { this.fieldErrors("password") }
        		          <input type="password"
        		            value={this.state.password}
        		            onChange={this.update("password")}
        								className="login-input" />
        						</label>
        		        <br/>
        						<button onClick={this.handleSubmit} value={this.formType()} className="btn btn-success"/>
        					</div>
        				</form>
        			</div>
            </div>
          </div>
        </div>
      </div>

		);
	}
});

module.exports = LoginForm;
