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
  },

  fetchEvent(id, cb) {
    $.ajax({
      url: `/events/${id}`,
      dataType: "JSON",
      success (resp) {
        cb(resp);
      }
    });
  },

  createEvent(event, cb) {
    $.ajax({
      url: `/events`,
      type: "POST",
      dataType: "JSON",
      data: { event: event},
      success (resp) {
        cb(resp.group_id);
      }
    });
  },

  updateEvent(event, cb) {
    $.ajax({
      url: `/events/${event.id}`,
      type: "PATCH",
      dataType: "JSON",
      data: { event: event},
      success (resp) {
        cb(resp.id);
      }
    });
  }
};
