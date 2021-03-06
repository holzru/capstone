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
    return(
      <div className="event-index-item">
        <div className="event-index-item-left">
        <Link to={`events/${this.props.event.id}`}><span className="event-item-title">{this.props.event.title}</span></Link>
        <br/>
        <div className="event-item-location"><span>{this.props.event.location}</span></div>
        <ul className="event-attendees">
          {this.state.members.map((member) => {
            return (<Link to={`/users/${member.id}`} key={member.id} event={event.id}><img id="user-event-pic" src={member.pic_url}/></Link>);
          })
        }
        </ul>
        </div>
        <div className="event-index-item-middle">
          <label className="event-index-item-title">Description:</label><br/>
          <p className="event-index-description">{this.props.event.description}</p>
        </div>
        <div className="event-index-item-right">
          <li className="event-index-pic" style={{backgroundImage: `url(${this.props.event.pic_url})`}}></li>
        </div>
      </div>
    );
  }
});
