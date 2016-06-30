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
    this.groupStoreListener = GroupStore.addListener(this.__groupHandleChange);
    EventActions.fetchGroupEvents(this.props.params.group_id);
    GroupActions.fetchAllGroups();
  },

  _eventhandleChange() {
    this.setState({events: EventStore.all()});
  },

  __groupHandleChange() {
    this.setState({group: GroupStore.find(this.props.params.group_id)});
  },

  componentWillUnmount() {
    this.eventstoreListener.remove();
  },

  render() {
    let group = this.state.group;
    return (
      <div className="group-detail-pane container-fluid">
        <div className="group-header">
          <div className="Group-Banner container-fluid">{group.name}</div>
        </div>
        <div className="column-container">
          <div className="group-details">
            <div className="group-info">
              <img id="group-image" src={group.pic_url}/>
              <div className="group-loc" value={group.location}></div>
            </div>
            <div className="group-stats">
              <span className='group-stat-members'>Members: 10</span><br/>
              <span className='group-stat-events'>Events: {this.state.events.length}</span>
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
      </div>
    );
  }
});
