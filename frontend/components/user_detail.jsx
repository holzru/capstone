const React = require('react');
const Link = require('react-router').Link;
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const ReactTooltip = require("react-tooltip");
const GroupStore = require("../stores/group_store");
const SessionStore = require('../stores/session_store');


module.exports = React.createClass({
  getInitialState() {
    return ({user: {}, user_groups: [], created_groups: [], created_events: [], loggedIn: false});
  },

  componentDidMount() {
    this.userStoreListener = UserStore.addListener(this._handleChange);
    this.groupStoreListener = GroupStore.addListener(this._handleUp);
    UserActions.fetchUser(this.props.params.user_id);
    this.sessionStoreListener = SessionStore.addListener(this._handleLogin);
  },

  componentWillUnmount() {
    this.userStoreListener.remove();
    this.groupStoreListener.remove();
    this.sessionStoreListener.remove();
  },

  _handleLogin() {
    if (SessionStore.isUserLoggedIn()) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  },

  _handleUp () {
    UserActions.fetchUser(this.props.params.user_id);
  },

  _handleChange() {
    let userObj = UserStore.current();
    this.setState({user: userObj.user, user_groups: userObj.user_groups, created_groups: userObj.created_groups, created_events: userObj.created_events});
  },

  _groupTip(group) {
    return (`Group <br/> Name: ${group.name} <br /> Description: ${group.description}`);
  },

  _eventTip(event) {
    return (`Event <br/> Title: ${event.title} <br /> Description: ${event.description}`);
  },

  render_row(row) {
    let rowContents = row.map((group, idx) => {
      return (
      <div key={group.id} group={group} data-tip={this._groupTip(group)} data-for="user-item" className="group-index-item-container">
        <Link to={`/groups/${group.id}`} group={group}>
          <li className="group-index-item" group={group} style={{backgroundImage: `url(${group.pic_url})`}}></li>
        </Link>
        {idx === 0 ? <ReactTooltip multiline={true} place="top" class="tooltip-container" type="dark" effect="float" id="user-item"/> : ""}
      </div>);
    });

    return (<ul key="user" className="group-rows">{rowContents}</ul>);
  },

  render_group_row(row) {
    let rowContents = row.map((group) => {
      return (
      <div key={group.id} group={group} data-tip={this._groupTip(group)} data-for="user-item" className="created-index-item-container">
        <Link to={`/groups/${group.id}`} group={group}>
          <li className="created-index-item" group={group} style={{backgroundImage: `url(${group.pic_url})`}}></li>
        </Link>
      </div>);
    });
    return (rowContents);
  },


  render_event_row(row) {
    let rowContents = row.map((event) => {
      return (
      <div key={event.id} event={event} data-tip={this._eventTip(event)} data-for="user-item" className="created-index-item-container">
        <Link to={`/events/${event.id}`} event={event}>
          <li className="created-index-item" event={event} style={{backgroundImage: `url(${event.pic_url})`}}></li>
        </Link>
      </div>);
    });

    return (rowContents);
  },


  render() {
    let row = [];
    this.state.user_groups.forEach((item) => {
      row.push(item);
    });
    let created_groups = [];
    this.state.created_groups.forEach((item) => {
      created_groups.push(item);
    });
    let created_events = [];
    this.state.created_events.forEach((item) => {
      created_events.push(item);
    });
    let user = this.state.user;
    return (
      <div className="detail-pane container-fluid">
        <div className="detail-header">
          <div className="detail-banner container-fluid">{user.username}</div>
        </div>
        <div className="column-container">
          <div className="detail-left">
            <div className="user-info">
              <span className="user-since">Member Since: {(new Date(Date.parse(user.created_at))).getFullYear()}</span>
          </div>
            <div className="user-interests">
              <h3>Groups & Events Created</h3>
              <ul className="group-rows">
                {this.render_group_row(created_groups)}
                {this.render_event_row(created_events)}
              </ul>
            </div>
          </div>
          <div className="detail-main">
            <h3>{user.username} Groups</h3><br/><br/>
            {this.render_row(row)}
          </div>
          <div className="detail-right">
            <img id="user-detail-pic" src={user.pic_url}/>
            <h3>Description</h3>
            <p className="user-description">{user.description}</p>
          </div>
        </div>
      </div>
    );
  }
});
