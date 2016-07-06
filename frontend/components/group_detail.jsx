const React = require('react');
const GroupStore = require('../stores/group_store');
const GroupActions = require('../actions/group_actions');
const GroupForm = require('./group_form');
const SessionStore = require('../stores/session_store');
const GroupMembershipActions = require('../actions/group_membership_actions');
const EventIndexItem = require('./event_index_item');
const EventForm = require('./event_form');
const Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState(){
    return({group: {}, events: [], members: [], creator: {}});
  },

  componentDidMount() {
    this.groupStoreListener = GroupStore.addListener(this.__groupHandleChange);
    GroupActions.fetchGroup(this.props.params.group_id);
  },

  __groupHandleChange() {
    let groupObj = GroupStore.single();
    debugger;
    this.setState({group: groupObj.group, members: groupObj.members, creator: groupObj.creator, events: groupObj.events});
  },

  componentWillUnmount() {
    this.groupStoreListener.remove();
  },

  editButton(){
    if (SessionStore.currentUser().id === this.state.creator.id) {
      return <button onClick={this._editGroup}>Edit Group</button>;
    } else {
      return "";
    }
  },

  _createEvent(e){
    e.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      $('#event-modal-new').modal('show');
    } else {
      $("#login-modal").modal("show");
    }
  },

  _leaveGroup(e) {
    e.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      GroupMembershipActions.leaveGroup(this.state.group.id);
    } else {
      $('#login-modal').modal('show');
    }
  },

  joinGroupButton() {
    let memberIds = [];
    this.state.members.forEach((member) => {
      memberIds.push(member.id);
    });
    if (memberIds.indexOf(SessionStore.currentUser().id) === -1) {
      return <button onClick={this._joinGroup}>Join Group</button>;
    } else {
      return <button onClick={this._leaveGroup}>Leave Group</button>;
    }
  },

  _joinGroup() {
    if (SessionStore.isUserLoggedIn()){
      GroupMembershipActions.joinGroup(this.state.group.id);
    } else {
      $('#login-modal').modal('show');
    }
  },

  _editGroup() {
    $('#group-modal-edit').modal('show');
  },

  render() {
    let group = this.state.group;
    return (
      <div className="detail-pane container-fluid">
        <div className="detail-header">
          <div className="detail-banner container-fluid">{group.name}</div>
        </div>
        <div className="column-container">
          <div className="detail-left">
            <div className="group-info">
              <img id="group-image" src={group.pic_url}/>
              <div className="group-loc" value={group.location}></div>
            </div>
            <div className="group-stats">
              <span className='group-stat-members'>Members: {this.state.members.length}</span><br/>
              <span className='group-stat-events'>Events: {this.state.events.length}</span>
            </div>
            <div>Creator Stuff</div>
            <Link to={`/users/${this.state.creator.id}`} className="creator-pic-container"><img id="creator-pic" src={this.state.creator.pic_url}/></Link>
            {this.editButton()}
          </div>
          <div className="detail-main">
            <h3>Welcome, {group.name} Members</h3>
            {this.state.events.map((event) => {
              return(<EventIndexItem event={event} key={`${event.id}event`} group={this.state.group}/>);
            })}
            {this.joinGroupButton()}
            <button onClick={this._createEvent}>Create Group Event</button>
          </div>
          <div className="detail-right">
            <h3>Members</h3>
            {
              this.state.members.map((member) => {
                return (<Link to={`/users/${member.id}`} className="member-pic-container" key={`${member.id}${member.username}`}><img id="member-pic" src={member.pic_url}/></Link>);
              })
            }

          </div>
        </div>
        <GroupForm group={group} formType="edit" />
        <EventForm group={group} formType="new"/>
      </div>
    );
  }
});
