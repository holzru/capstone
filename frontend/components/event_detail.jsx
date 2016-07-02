const React = require('react');
const EventStore = require('../stores/event_store');
const EventActions = require('../actions/event_actions');
const EventIndexItem = require('./event_index_item');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const EventTicketActions = require('../actions/event_ticket_actions');

module.exports = React.createClass({
  getInitialState(){
    return({event: {}, attendees: [], group: {}, creator:{}});
  },

  componentDidMount() {
    this.eventStoreListener = EventStore.addListener(this._handleEvent);
    EventActions.getEvent(this.props.params.event_id);
  },

  _handleEvent() {
    let eventObj = EventStore.current();
    this.setState({event: eventObj.event, attendees: eventObj.attendees, group: eventObj.group, creator: eventObj.creator});
  },

  componentWillUnmount(){
    this.eventStoreListener.remove();
  },

  _registerForEvent() {
    EventTicketActions.registerForEvent(this.state.event.id);
  },

  render() {
    let event = this.state.event;
    let group = this.state.group;
    let attendees = this.state.attendees;
    return (
      <div className="detail-pane container-fluid">
        <div className="detail-header">
          <div className="detail-banner container-fluid">{group.name}</div>
        </div>
        <div className="column-container">
          <div className="detail-left">
            <div className="event-info">
              <img id="event-image" src={event.pic_url}/>
              <div className="event-loc" value={event.location}></div>
            </div>
            <div className="event-stats">
              <span className='event-stat-members'>Attendees: {attendees.length}</span><br/>
            </div>
            <div>Creator Stuff</div>
            <Link to={`/users/${this.state.creator.id}`} className="creator-pic-container"><img id="creator-pic" src={this.state.creator.pic_url}/></Link>
          </div>
          <div className="detail-main">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <button className="btn-default" value="Register for Event" onClick={this._registerForEvent}/>
          </div>
          <div className="detail-right">
            <h3>Members</h3>
            {
              attendees.map((attendee) => {
                return (<Link to={`/users/${attendee.id}`} className="member-pic-container" key={`${attendee.id}${attendee.username}`}><img id="member-pic" src={attendee.pic_url}/></Link>);
              })
            }
          </div>
        </div>
      </div>
    );
  }
});
