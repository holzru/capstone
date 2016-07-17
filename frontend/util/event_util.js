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

  createEvent(event, cb, error) {
    $.ajax({
      url: `/events`,
      type: "POST",
      dataType: "JSON",
      data: { event: event},
      success (resp) {
        cb(resp.group_id);
      },
      error(xhr) {
				const errors = xhr.responseJSON;

				error("new", errors);
      }
    });
  },

  updateEvent(event, cb, error) {
    $.ajax({
      url: `/events/${event.id}`,
      type: "PATCH",
      dataType: "JSON",
      data: { event: event},
      success (resp) {
        cb(resp.id);
      },
      error(xhr) {
				const errors = xhr.responseJSON;

				error("edit", errors);
      }
    });
  },

  deleteEvent(id) { 
    $.ajax({
      url: `/events/${id}`,
      method: "delete",
      dataType: "JSON",
      data: { event: {id: id}},
      success() {
        return;
      }
    });
  }
};
