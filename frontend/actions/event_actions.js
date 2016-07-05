const EventUtil = require("../util/event_util");
const Dispatcher = require('../dispatcher/dispatcher');
const GroupActions = require('./group_actions');

module.exports = {
  getEvent(id) {
    EventUtil.fetchEvent(id, this.receiveEvent);
  },

  receiveEvent(eventObj) {
    Dispatcher.dispatch({
      actionType: "Single",
      eventObj: eventObj,
    });
  },

  createEvent(formData) {
    EventUtil.createEvent(formData, GroupActions.fetchGroup.bind(GroupActions));
  },

  updateEvent(formData) {
    EventUtil.updateEvent(formData, this.getEvent.bind(this));
  },
};
