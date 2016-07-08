const React = require('react');
const EventStore = require('../stores/event_store');
const EventActions = require('../actions/event_actions');
const EventIndexItem = require('./event_index_item');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const EventTicketActions = require('../actions/event_ticket_actions');
const EventForm = require('./event_form');
const CommentIndex = require('./comment_index');

module.exports = React.createClass({
  getInitialState(){
    return({event: {}, attendees: [], group: {}, creator:{}, comments: []});
  },

  componentDidMount() {
    this.eventStoreListener = EventStore.addListener(this._handleEvent);
    EventActions.getEvent(this.props.params.event_id);
  },

  _handleEvent() {
    let eventObj = EventStore.current();
    this.setState({event: eventObj.event, attendees: eventObj.attendees, group: eventObj.group, creator: eventObj.creator, comments: eventObj.comments});
  },

  componentWillUnmount(){
    this.eventStoreListener.remove();
  },

  _unregisterForEvent(e) {
    e.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      EventTicketActions.unregisterForEvent(this.state.event.id);
    } else {
      $('#login-modal').modal('show');
    }
  },

  _registerForEvent() {
    if (SessionStore.isUserLoggedIn()) {
      EventTicketActions.registerForEvent(this.state.event.id);
      alert(`Congrats ${SessionStore.currentUser().username} you registered for ${this.state.event.title}`);
    } else {
      $('#login-modal').modal('show');
    }
  },

  edit() {
    if (this.state.creator.id === SessionStore.currentUser().id) {
      return <button onClick={this._editEvent} className="group-event-button">Edit Event</button>;
    } else {
      return <div></div>;
    }
  },

  _editEvent(e) {
    e.preventDefault();
    $('#event-modal-edit').modal('show');
  },

  register() {
    let attendee_ids = [];
    this.state.attendees.forEach((attendee) => {
      attendee_ids.push(attendee.id);
    });
    if (attendee_ids.indexOf(SessionStore.currentUser().id) === -1) {
      return (<button className="btn-default" id="register-button" onClick={this._registerForEvent}>
        Register for Event
      </button>);
    } else {
      return (<button className="btn-default" id="register-button" onClick={this._unregisterForEvent}>
        Unregister for Event
      </button>);
    }
  },


  render() {
    let event = this.state.event;
    let group = this.state.group;
    let attendees = this.state.attendees;
    return (
      <div className="detail-pane container-fluid">
        <div className="detail-header">
          <div className="detail-banner container-fluid"><Link to={`groups/${group.id}`}><span id="detial-banner-words">{group.name}</span></Link></div>
        </div>
        <div className="column-container">
          <div className="detail-left">
            <div className="event-info">
              <img id="event-image" src={event.pic_url}/>
              <div className="event-loc" value={event.location}></div>
            </div>
            <div className="event-stats">
              <span className='event-stat-members'>Attendees: {attendees.length}</span><br/>
            </div><br/>
            <div className="creator-box">
              <div>Created By:</div>
              <Link to={`/users/${this.state.creator.id}`} className="creator-pic-container"><li id="creator-pic" event={event} style={{backgroundImage: `url(${this.state.creator.pic_url})`}}></li><br/><span className = "member-pic-username">{this.state.creator.username}</span></Link><br/>
            { this.edit() }
          </div>
          </div>
          <div className="detail-main">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            { this.register() }<br/><br/>
            <CommentIndex comments={this.state.comments} event_id={event.id}/>
          </div>
          <div className="detail-right">
            <h3>Members</h3>
            {
              attendees.map((attendee) => {
                return (<Link to={`/users/${attendee.id}`} className="member-pic-container" key={`${attendee.id}${attendee.username}`}><img id="member-pic" src={attendee.pic_url}/><br/><span className="member-pic-username">{attendee.username}</span></Link>);
              })
            }
          </div>
        </div>
        <EventForm event={event} group={group} formType='edit'/>
      </div>
    );
  }
});
