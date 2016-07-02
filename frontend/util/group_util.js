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
  }
};
