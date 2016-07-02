const GroupUtil = require('../util/group_util');
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  fetchAllGroups () {
    GroupUtil.fetchAllGroups(this.recieveAllGroups);
  },

  recieveAllGroups(groups) {
    Dispatcher.dispatch({
      actionType: "ALL",
      groups: groups
    });
  },

  fetchGroup (id) {
    GroupUtil.fetchGroup(id, this.recieveGroup);
  },

  recieveGroup(group) {
    Dispatcher.dispatch({
      actionType: "SINGLE",
      group: group
    });
  },
};
