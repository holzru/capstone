const React = require('react');
const GroupStore = require('../stores/group_store');
const GroupActions = require('../actions/group_actions');
const GroupForm = require('./group_form');
const SessionStore = require('../stores/session_store');
const GroupMembershipActions = require('../actions/group_membership_actions');
const EventIndexItem = require('./event_index_item');
const EventForm = require('./event_form');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState(){
    return({group: {}, events: [], members: [], creator: {}, loggedIn: false});
  },

  componentDidMount() {
    this.groupStoreListener = GroupStore.addListener(this._groupHandleChange);
    GroupActions.fetchGroup(this.props.params.group_id);
    this.sessionStoreListener = SessionStore.addListener(this._handleLogin);
  },

  _handleLogin() {
    if (SessionStore.isUserLoggedIn()) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  },


  _groupHandleChange() {
    let groupObj = GroupStore.single();
    this.setState({group: groupObj.group, members: groupObj.members, creator: groupObj.creator, events: groupObj.events});
  },

  componentWillUnmount() {
    this.groupStoreListener.remove();
    this.sessionStoreListener.remove();
  },

  editButton(){
    if (SessionStore.currentUser().id === this.state.creator.id) {
      return <button onClick={this._editGroup} className="group-event-button">Edit Group</button>;
    } else {
      return "";
    }
  },

  delete() {
    if (this.state.creator.id === SessionStore.currentUser().id) {
      return <button onClick={this._deleteGroup} className="group-event-button">Delete Group</button>;
    } else {
      return <div></div>;
    }
  },

  _deleteGroup(e) {
    e.preventDefault();
    GroupActions.deleteGroup(this.state.group.id);
    hashHistory.push(`/`);
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
      return <button onClick={this._joinGroup} className="group-event-button">Join Group</button>;
    } else {
      return <button onClick={this._leaveGroup} className="group-event-button">Leave Group</button>;
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
            <div className="creator-box">
              <div>Created By:</div>
              <Link to={`/users/${this.state.creator.id}`} className="creator-pic-container"><li id="creator-pic" event={event} style={{backgroundImage: `url(${this.state.creator.pic_url})`}}></li><br/><span className = "member-pic-username">{this.state.creator.username}</span></Link><br/>
              {this.editButton()}<br/>
              {this.delete()}
          </div>
            <div>
              <h5> Group Description: </h5>
              <p> { group.description } </p><br/><br/>
              <h5> Group Location: </h5>
              <span> { group.location } </span>
            </div>
          </div>
          <div className="detail-main">
            <h3>Welcome, {group.name} Members</h3>
            <h4> {group.name} Events:</h4>
            {this.state.events.map((event) => {
              return(<EventIndexItem event={event} key={`${event.id}event`} group={this.state.group}/>);
            })}
            <span className="group-button-container">
            {this.joinGroupButton()}
            <button onClick={this._createEvent} className="group-event-button">Create Group Event</button>
            </span>
          </div>
          <div className="detail-right">
            <h3>Members</h3>
            {
              this.state.members.map((member) => {
                return (<Link to={`/users/${member.id}`} className="member-pic-container" key={`${member.id}${member.username}`}><img id="member-pic" src={member.pic_url}/><br/><span className="member-pic-username">{member.username}</span></Link>);
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
