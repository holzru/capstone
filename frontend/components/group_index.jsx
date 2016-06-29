const React = require('react');
const GroupStore = require('../stores/group_store');
const GroupUtil = require('../util/group_util');
const GroupIndexItem = require('./group_index_item');

const GroupIndex = React.createClass({
getInitialState() {
  return ({groups: GroupStore.all()});
},

componentDidMount() {
  this.storeListener = GroupStore.addListener(this._handleChange);
  GroupUtil.fetchAllGroups();
},

_handleChange(data) {
  this.setState({groups: GroupStore.all()});
},

componentWillUnmount() {
  this.storeListener.remove();
},

render() {
  let groups = this.state.groups.map((group) => {
    return <GroupIndexItem group={group}/>;
  });

  let rows = [];
  for (let i = 0; i < parseInt(this.state.groups/4); i++) {
    rows.push([this.state.groups.splice(0, 4)]);
  }



  return (
    <div class="group index">
      {rows.map((row) => {
        return <ul className="group-index-row"/>;
      })}
    </div>
  );
}
});

module.exports = GroupIndex;
