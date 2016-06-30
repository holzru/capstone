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
  }
};
