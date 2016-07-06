const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const UserActions = require('../actions/user_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({
  getInitialState() {
    return (this.props.formType === "signup" ? {
      username: "",
      password: "",
      pic_url: "",
      description: ""
    } : {
      username: SessionStore.currentUser().username,
      password: SessionStore.currentUser().password,
      pic_url: SessionStore.currentUser().pic_url,
      description: SessionStore.currentUser().description
    });
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
    this.setState((this.props.formType === "edit" ? {
      username: "",
      password: "",
      pic_url: "",
      description: ""
    } : {
      username: SessionStore.currentUser().username,
      password: SessionStore.currentUser().password,
      pic_url: SessionStore.currentUser().pic_url,
      description: SessionStore.currentUser().description
    }));
    if (SessionStore.isUserLoggedIn()) {
      $("#userModal").modal("hide");
      hashHistory.push('/');
    }
  },

	handleSubmit(e) {
		e.preventDefault();

    const formData = {
      id: SessionStore.currentUser().id,
      username: this.state.username,
      password: this.state.password,
      pic_url: this.state.pic_url,
      description: this.state.description
    };

    if (this.props.formType === "signup") {
      SessionActions.signUp(formData);
    } else if (this.props.formType === "edit"){
      UserActions.updateUser(formData);
    }
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

  _openUploadWidget (e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      {cloud_name: "dywbzmakl",
       upload_preset: "heldi9zw",
       theme: "minimal",
       sources: ["local"],
       client_allowed_formats: ["png", "jpg", "jpeg"],
       multiple: false},
       function (error, results) {
         if (!error) {
           this.setState({pic_url: results[0].secure_url});
         }
       }.bind(this)
    );
  },

	render() {
		return (
      <div id="user-modal" className="modal fade" tabindex="-1" role="dialog">
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
        						<label> Description:
                      <br/>
        		          <textarea rows="4" cols="30"
        		            value={this.state.description}
        		            onChange={this.update("description")}
        								className="login-input" />
        						</label>
        		        <br/>
                    <div>
                      <img src={this.state.pic_url} width="100" height="100"/>
                    </div>
                    <button className="btn btn-danger" onClick={this._openUploadWidget}>
                      Upload Pic
                    </button>
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
