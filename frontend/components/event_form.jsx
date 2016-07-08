const React = require('react');
const Link = require('react-router').Link;
const EventActions = require('../actions/event_actions');
const EventStore = require('../stores/event_store');
const ErrorStore = require('../stores/error_store');
import Calendar from 'react-input-calendar';
const hashHistory = require('react-router').hashHistory;

const EventForm = React.createClass({
  getInitialState() {
    return (this.props.formType === "new" ? {
      title: "",
      group_id: this.props.group.group_id,
      location: "",
      category: "",
      date: new Date(),
      pic_url: "",
      description: ""
    } : {
      title: this.props.event.title,
      group_id: this.props.group.id,
      location: this.props.event.location,
      category: this.props.event.category,
      date: this.props.event.date,
      pic_url: this.props.event.pic_url,
      description: this.props.event.description
    });
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.eventListener = EventStore.addListener(this.closeModal);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.eventListener.remove();
  },

  closeModal() {
    this.setState(this.props.formType === "new" ? {
      title: "",
      group_id: this.props.group.id,
      location: "",
      category: "",
      date: "",
      pic_url: "",
      description: ""
    } : {
      title: this.state.title,
      group_id: this.props.group.id,
      location: this.state.location,
      category: this.state.category,
      date: this.state.date,
      pic_url: this.state.pic_url,
      description: this.state.description
    });
    $(`#event-modal-${this.props.formType}`).modal("hide");
  },

	handleSubmit(e) {
		e.preventDefault();
    const formData = {
      id: this.props.event ? this.props.event.id : "",
      group_id: this.props.group.id,
      title: this.state.title,
      location: this.state.location,
      category: this.state.category,
      date: this.state.date,
      pic_url: this.state.pic_url,
      description: this.state.description
    };

    if (this.props.formType === "new") {
      EventActions.createEvent(formData);
    } else if (this.props.formType === "edit"){
      EventActions.updateEvent(formData);
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

  handleCalenderSelect(date) {
    this.setState({date: date});
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
      <div id={`event-modal-${this.props.formType}`} className="modal fade" tabindex="-1" role="dialog">
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
        						<label> Title:
        							<input type="text"
        		            value={this.state.title}
        		            onChange={this.update("title")}
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
                      <label> Date:
          		          <Calendar onChange={this.handleCalenderSelect} closeOnSelect={true} type="calender" format='DD/MM/YYYY' date={this.state.date} defaultValue='Click Here to Set Date'/>
          						</label>

                      <br/>
                      <label> Category:
          		          <input type="text"
          		            value={this.state.category}
          		            onChange={this.update("category")}
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
                    <button onClick={this.handleSubmit} className="btn btn-success">{this.formType()}</button>
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

module.exports = EventForm;
