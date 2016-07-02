module.exports = {
  fetchEventAttendees(id, cb) {
    $.ajax({
      url: "/event_tickets",
      data: {eventTickets: {id: id}},
      datatype: "JSON",
      success (resp) {
        cb(resp);
      }
    });
  },

  registerForEvent(eventId, cb) {
    $.ajax({
      url: "/event_tickets",
      type: "POST",
      data: {ticket: {event_id: eventId}},
      success (resp) {
        cb(resp);
      }
    });
  }
};
