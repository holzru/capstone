module.exports = {
  fetchUser(id, cb) {
    $.ajax({
      url: `/users/${id}`,
      dataType: "JSON",
      data: {user: {id: id}},
      success (resp) {
        cb(resp);
      }
    });
  }
};
