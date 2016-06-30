const React = require('react');
const GroupStore = require('../stores/group_store');
const EventStore = require('../stores/event_store');
const GroupActions = require('../actions/group_actions');
const EventActions = require('../actions/event_actions');
const EventIndexItem = require('./event_index_item');

module.exports = React.createClass({
  getInitialState(){
    return({group: GroupStore.find(this.props.params.group_id), events: []});
  },

  componentDidMount() {
    this.eventstoreListener = EventStore.addListener(this._eventhandleChange);
    EventActions.fetchGroupEvents(this.props.params.group_id);
  },

  _eventhandleChange() {
    this.setState({events: EventStore.all()});
  },

  componentWillUnmount() {
    this.eventstoreListener.remove();
  },

  render() {
    debugger;
    let group = this.state.group;
    return (
      <div class="group-detail-pane">
        <div className="group-header">
          <div className="Group-Banner container-fluid">{group.name}</div>
        </div>
        <div className="group-deatils">
          <div className="group-info">
            <img className="group-image" src={group.pic_url}/></div>
            <div className="group-loc" value={group.location}></div>
            <div className="group-stats">
              <span className='group-stat-members' value="10"/>
              <span className='group-stat-events' value={this.state.events.length}/>
          </div>
          <div>Creator Stuff</div>
        </div>
        <div className="group-events">
          {this.state.events.map((event) => {
            return(<EventIndexItem event={event}/>);
          })}
        </div>
        <div className="group-new">
          <h2>What's New</h2>
        </div>
      </div>
    );
  }
});
