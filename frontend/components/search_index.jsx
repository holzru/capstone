const React = require('react');
const Link = require('react-router').Link;
const ReactTooltip = require("react-tooltip");

const SearchIndex = React.createClass({
  _groupTip(group) {
    return (`Name: ${group.name} <br /> Description: ${group.description}`);
  },

  _eventTip(event) {
    return (`Title: ${event.title} <br /> Description: ${event.description}`);
  },

  _userTip(user) {
    return (`Name: ${user.username} <br /> Description: ${user.description}`);
  },

  group_render() {
    let groups = this.props.searchResults.groups.map((group) => {
      return (
      <div key={group.id} group={group} data-tip={this._groupTip(group)} data-for="search-item" className="group-index-item-container">
        <Link to={`/groups/${group.id}`} group={group}>
          <li className="group-index-item" group={group} style={{backgroundImage: `url(${group.pic_url})`}}></li>
        </Link>
      </div>);
    });
    return (<ul key="group" className="group-rows">{groups}<ReactTooltip multiline={true} place="top" type="dark" effect="float" id="search-item"/></ul>);
  },

  event_render() {
    let events = this.props.searchResults.events.map((e) => {
      return (<div key={e.id} event={e} data-tip={this._eventTip(e)} data-for="search-item" className="group-index-item-container">
        <Link to={`/events/${e.id}`} event={e}>
          <li className="group-index-item" event={e} style={{backgroundImage: `url(${e.pic_url})`}}></li>
        </Link>
      </div>);
    });
    return (<ul key="event" className="group-rows">{events}<ReactTooltip multiline={true} place="top" type="dark" effect="float" id="search-item"/></ul>);
  },

  user_render() {
    let users = this.props.searchResults.users.map((user) => {
      return (<div key={user.id} user={user} data-tip={this._userTip(user)} data-for="search-item" className="group-index-item-container">
        <Link to={`/users/${user.id}`} user={user}>
          <li className="group-index-item" user={user} style={{backgroundImage: `url(${user.pic_url})`}}></li>
        </Link>
      </div>);
    });
    return (<ul key="users" className="group-rows">{users}<ReactTooltip multiline={true} place="top" type="dark" effect="float" id="search-item"/></ul>);
  },


  render() {
    if (!this.props.searchResults.groups) {
      return (<div></div>);
    }
    return(
      <div className="search-index">
        <h4 className="search-index-title">Groups</h4>
        {this.group_render()}
        <h4 className="search-index-title">Events</h4>
        {this.event_render()}
        <h4 className="search-index-title">User</h4>
        {this.user_render()}
      </div>);
  }
});

module.exports = SearchIndex;
