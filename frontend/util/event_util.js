module.exports = {
  fetchGroupEvents(id, cb) {
    $.ajax({
      url: '/events',
      data: {group: {id: id}},
      dataType: "JSON",
      success (resp) {
        cb(resp);
      }
    });
  }
};
