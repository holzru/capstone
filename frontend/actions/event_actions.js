const EventUtil = require("../util/event_util");
const Dispatcher = require('../dispatcher/dispatcher');
const GroupActions = require('./group_actions');
const ErrorActions = require('./error_actions');

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
    EventUtil.createEvent(formData, GroupActions.fetchGroup.bind(GroupActions), ErrorActions.setErrors);
  },

  updateEvent(formData) {
    EventUtil.updateEvent(formData, this.getEvent.bind(this), ErrorActions.setErrors);
  },

  deleteEvent(id) {
    EventUtil.deleteEvent(id);
  },
};
