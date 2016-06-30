const EventUtil = require("../util/event_util");
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  fetchGroupEvents(id) {
    EventUtil.fetchGroupEvents(id, this.receiveGroupEvents);
  },

  receiveGroupEvents(events) {
    Dispatcher.dispatch({
      actionType: "Group",
      events: events,
    });
  }
};
