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
  },
  updateUser(user, cb) {
    $.ajax({
      url: `/users/${user.id}`,
      method: 'PATCH',
      dataType: "JSON",
      data: {user: user},
      success (resp) {
        cb(resp);
      }
    });
  }
};
