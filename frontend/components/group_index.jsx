const React = require('react');
const Link = require('react-router').Link;
const GroupStore = require('../stores/group_store');
const GroupActions = require('../actions/group_actions');
const ReactTooltip = require("react-tooltip");

const GroupIndex = React.createClass({
getInitialState() {
  return ({groups: GroupStore.all()});
},

componentDidMount() {
  this.storeListener = GroupStore.addListener(this._handleChange);
  GroupActions.fetchAllGroups();
},

_handleChange() {
  this.setState({groups: GroupStore.all()});
},

componentWillUnmount() {
  this.storeListener.remove();
},

_groupTip(group) {
  return (`Name: ${group.name} <br /> Description: ${group.description}`);
},


render_row(row) {
  let rowKey = 0;
  let rowContents = row.map((group) => {
    rowKey += group.id;
    return (<div key={group.id} group={group} data-tip={this._groupTip(group)} data-for="item" className="group-index-item-container"><Link to={`/groups/${group.id}`} group={group}><li className="group-index-item" group={group} style={{backgroundImage: `url(${group.pic_url})`}}></li></Link></div>);
  });

  return (<ul key={rowKey} className="group-rows">{rowContents}<ReactTooltip multiline={true} place="top" type="dark" effect="float" id="item"/></ul>);
},

render() {
  let copy = this.state.groups.slice();
  let row = [];
  copy.forEach((item) => {
    row.push(item);
  });

  return (
    <div className="group-index container-fluid">
      {this.render_row(row)}
    </div>
    );
  }
});

module.exports = GroupIndex;
