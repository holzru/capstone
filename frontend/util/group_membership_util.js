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
  }
};
