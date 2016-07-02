const React = require('react');
const Link = require('react-router').Link;
const GroupStore = require('../stores/group_store');
const GroupActions = require('../actions/group_actions');

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
  $(".group-index-item-container[title]").tooltips();
},

componentWillUnmount() {
  this.storeListener.remove();
},

render_rows(rows) {
  return (rows.map((row) => this.render_row(row)));
},

render_row(row) {
  let rowKey = 0;
  let rowContents = row.map((group) => {
    rowKey += group.id;
    return (<Link to={`/groups/${group.id}`} key={group.id} className="group-index-item-container" title={`Name: ${group.name}`}><li className="group-index-item" style={{backgroundImage: `url(${group.pic_url})`}}></li></Link>);
  });

  return (<ul key={rowKey} className="group-rows">{rowContents}</ul>);
},

render() {
  let copy = this.state.groups.slice();
  let rows = [];
  while (copy.length > 0) {
    rows.push(copy.splice(0, 4));
  }

  return (
    <div className="group-index container-fluid">
      {this.render_rows(rows)}
    </div>
    );
  }
});

module.exports = GroupIndex;
