const GroupUtil = require('../util/group_util');
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');

module.exports = {
  fetchAllGroups () {
    GroupUtil.fetchAllGroups(this.recieveAllGroups);
  },

  recieveAllGroups(groups) {
    Dispatcher.dispatch({
      actionType: "ALL_GROUP",
      groups: groups
    });
  },

  fetchGroup (id) {
    GroupUtil.fetchGroup(id, this.recieveGroup);
  },

  recieveGroup(group) {
    Dispatcher.dispatch({
      actionType: "SINGLE_GROUP",
      group: group
    });
  },

  createGroup(group){
    GroupUtil.createGroup(group, this.fetchAllGroups.bind(this), ErrorActions.setErrors);
  },

  updateGroup(group){
    GroupUtil.updateGroup(group, this.fetchGroup.bind(this), ErrorActions.setErrors);
  },

  deleteGroup(id){
    GroupUtil.deleteGroup(id);
  },
};
