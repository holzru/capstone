module.exports = {
  createComment(data, cb) {
    $.ajax({
      url: "/comments",
      data: {comment: {event_id: data.event_id, body: data.body}},
      datatype: "JSON",
      type: "POST",
      success (resp) {
        cb(resp.event_id);
      }
    });
  },

  deleteComment(id, cb) {
    $.ajax({
      url: `/comments/${id}`,
      data: {id: id},
      datatype: "JSON",
      method: "delete",
      success (resp) {
        cb(resp);
      }
    });
  }
};
