const React = require('react');
const Link = require('react-router').Link;
const GroupActions = require('../actions/group_actions');
const GroupStore = require('../stores/group_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

const GroupForm = React.createClass({
  getInitialState() {
    return (this.props.formType === "new" ? {
      name: "",
      location: "",
      pic_url: "",
      description: ""
    } : {
      name: this.props.group.name,
      location: this.props.group.location,
      pic_url: this.props.group.pic_url,
      description: this.props.group.description
    });
  },


  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.groupListener = GroupStore.addListener(this.closeGroupModal);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.groupListener.remove();
  },

  closeGroupModal() {
    this.setState((this.props.formType === "new" ? {
      name: "",
      location: "",
      pic_url: "",
      description: ""
    } : {
      name: this.props.group.name,
      location: this.props.group.location,
      pic_url: this.props.group.pic_url,
      description: this.props.group.description
    }));
    $(`#group-modal-${this.props.formType}`).modal("hide");
  },

	handleSubmit(e) {
		e.preventDefault();

    const formData = {
      id: (this.props.group ? this.props.group.id : ""),
      name: this.state.name,
      location: this.state.location,
      pic_url: this.state.pic_url,
      description: this.state.description
    };

    if (this.props.formType === "new") {
      GroupActions.createGroup(formData);
    } else if (this.props.formType === "edit"){
      GroupActions.updateGroup(formData);
    }
	},

  fieldErrors() {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors["errors"]) return;

    const messages = errors["errors"].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return (this.props.formType);
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
      <div id={`group-modal-${this.props.formType}`} className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{ this.formType()[0].toUpperCase() + this.props.formType.slice(1) }</h4>
            </div>
            <div className="modal-body">
              <div className="login-form-container container-fluid text-center">
        				<form onSubmit={this.handleSubmit} className="login-form-box">
        					<br/>
        	        { this.fieldErrors() }
        					<div className="login-form">
        		        <br />
        						<label> Name:
        							<input type="text"
        		            value={this.state.name}
        		            onChange={this.update("name")}
        								className="login-input" />
        						</label>

        		        <br/>
        						<label> Location:
        		          <input type="text"
        		            value={this.state.location}
        		            onChange={this.update("location")}
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
        						<button onClick={this.handleSubmit} value={this.formType()} className="btn btn-success">{this.formType()}</button>
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

module.exports = GroupForm;
