const GroupMembershipUtil = require('../util/group_membership_util');
const GroupActions = require('./group_actions');

module.exports = {
  joinGroup(groupId){
    GroupMembershipUtil.joinGroup(groupId, this._deliverMembership);
  },
  _deliverMembership(membership){
    GroupActions.fetchGroup(membership.group_id);
    // TODO
  },

  leaveGroup(id) {
    GroupMembershipUtil.leaveGroup(id, GroupActions.fetchGroup.bind(GroupActions));
  }
};
