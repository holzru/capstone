const React = require('react');
const GroupStore = require('../stores/group_store');
const GroupActions = require('../actions/group_actions');
const EventIndexItem = require('./event_index_item');
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
    this.setState({group: groupObj.group, members: groupObj.members, creator: groupObj.creator, events: groupObj.events});
  },

  componentWillUnmount() {
    this.groupStoreListener.remove();
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
              <span className='group-stat-members'>Members: 10</span><br/>
              <span className='group-stat-events'>Events: {this.state.events.length}</span>
            </div>
            <div>Creator Stuff</div>
            <Link to={`/users/${this.state.creator.id}`} className="creator-pic-container"><img id="creator-pic" src={this.state.creator.pic_url}/></Link>
          </div>
          <div className="detail-main">
            <h3>Welcome, {group.name} Members</h3>
            {this.state.events.map((event) => {
              return(<EventIndexItem event={event} key={`${event.id}event`} group={this.state.group}/>);
            })}
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
      </div>
    );
  }
});
