module.exports = {
  fetchAllGroups: function(cb) {
    $.ajax({
      url: '/groups',
      type: "GET",
      success (resp) {
        cb(resp);
      }
    });
  },

  fetchGroup: function(id, cb) {
    $.ajax({
      url: `/groups/${id}`,
      type: "GET",
      success (resp) {
        cb(resp);
      }
    });
  },

  createGroup(group, cb){
    $.ajax({
      url: `/groups`,
      type: 'POST',
      dataType: 'JSON',
      data: {group: group},
      success (resp) {
        cb(resp);
      }
    });
  },

  updateGroup(group, cb){
    $.ajax({
      url: `/groups/${group.id}`,
      type: 'PATCH',
      dataType: 'JSON',
      data: {group: group},
      success (resp) {
        cb(resp);
      }
    });
  }
};
