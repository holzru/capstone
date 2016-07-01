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
  }
};
