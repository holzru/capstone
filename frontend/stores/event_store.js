const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const EventStore = new Store(Dispatcher);

let _events = {};

EventStore.__onDispatch = function(action) {
  switch(action.actionType) {
    case "Group":
      resetEvents(action.events);
      break;
    case "Single":
      setSingleEvent(action.eventObj);
      break;
    }
  this.__emitChange();
};

const setSingleEvent = function(eventObj){
  _events = eventObj;
};

const resetEvents = function(events){
  events.forEach((event) => {
    _events[event.id] = event;
  });
};

EventStore.all = function() {
  let events = [];
  for (let eventKey in _events) {
    if (_events.hasOwnProperty(eventKey)) {
      events.push(_events[eventKey]);
    }
  }
  return events;
};

EventStore.current = function() {
  return _events;
};


module.exports = EventStore;
