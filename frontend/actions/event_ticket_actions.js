const EventTicketUtil = require("../util/event_ticket_util");
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  getAttendees(id, cb) {
    EventTicketUtil.fetchEventAttendees(id, cb);
  },
};
