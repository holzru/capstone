module.exports = {
  joinGroup(groupId, cb){
    $.ajax({
      url: `/group_memberships`,
      type: 'POST',
      dataType: "JSON",
      data: { membership: {group_id: groupId }},
      success (resp) {
        cb(resp);
      }
    });
  },

  leaveGroup(groupId, cb){
    $.ajax({
      url: `/group_memberships/${groupId}`,
      method: 'delete',
      dataType: "JSON",
      data: {group_id: groupId },
      success (resp) {
        cb(groupId);
      }
    });
  }
};
