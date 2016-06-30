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
},

componentWillUnmount() {
  this.storeListener.remove();
},

render_rows(rows) {
  return (rows.map((row) => this.render_row(row)));
},

render_row(row) {

  let rowContents = row.map((group) => {
    console.log(group.pic_url);
    return (<Link to={`/groups/${group.id}`} className="group-index-item-container"><li key={group.id} className="group-index-item" style={{backgroundImage: `url(${group.pic_url})`}}></li></Link>);
  });

  return (<ul className="group-rows">{rowContents}</ul>);
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
