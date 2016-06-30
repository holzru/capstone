module.exports = {
  fetchAllGroups: function(cb) {
    $.ajax({
      url: '/groups',
      type: "GET",
      success (resp) {
        cb(resp);
      }
    });
  }
};
