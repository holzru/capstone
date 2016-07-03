const EventTicketUtil = require("../util/event_ticket_util");
const EventActions = require('./event_actions');
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  getAttendees(id, cb) {
    EventTicketUtil.fetchEventAttendees(id, cb);
  },

  registerForEvent(eventId) {
    EventTicketUtil.registerForEvent(eventId, this._deliverTicket);
  },

  _deliverTicket(ticket) {
    EventActions.getEvent(ticket.event_id);
    //TODO: graphic
  }
};
