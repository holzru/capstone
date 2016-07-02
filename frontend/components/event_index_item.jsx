const React = require('react');
const EventTicketActions = require('../actions/event_ticket_actions');
const Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState() {
    return ({members: []});
  },

  componentDidMount() {
    EventTicketActions.getAttendees(this.props.event.id, this._handleMembers);
  },

  _handleMembers(members) {
    this.setState({members: members});
  },

  componentWillUnmount(){
    this.setState({members: []});
  },

  render() {
    debugger;
    return(
      <div className="event-index-item">
        <Link to={`events/${this.props.event.id}`}><span className="event-item-title">{this.props.event.title}</span></Link>
        <br/>
        <span className="event-item-location">{this.props.event.location}</span>
        <ul className="event-attendees">
          {this.state.members.map((member) => {
            return (<Link to={`/users/${member.id}`} key={member.id} event={event.id}><img id="user-event-pic" src={member.pic_url}/></Link>);
          })
        }
        </ul>
      </div>
    );
  }
});
