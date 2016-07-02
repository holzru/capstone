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
  },

  getEvent(id) {
    EventUtil.fetchEvent(id, this.receiveEvent);
  },

  receiveEvent(eventObj) {
    Dispatcher.dispatch({
      actionType: "Single",
      eventObj: eventObj,
    });
  }
};
