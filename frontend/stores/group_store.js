const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const GroupStore = new Store(Dispatcher);

let _groups = {};

GroupStore.__onDispatch = function(action) {
  switch (action.actionType) {
    case "ALL_GROUP":
      resetGroups(action.groups);
      break;
    case "SINGLE_GROUP":
      _groups = action.group;
      GroupStore.__emitChange();
      break;
    case "APPEND_GROUP":
      _groups[action.group.id] = action.group;
      GroupStore.__emitChange();
      break;
  }
};

const resetGroups = function(groups) {
  _groups = {};
  groups.forEach((group) => {
    _groups[group.id] = group;
  });

  GroupStore.__emitChange();
};

GroupStore.find = function(id) {
  return (_groups[id] ? _groups[id] : {});
};

GroupStore.all = function() {
  let groups = [];
  for (let groupKey in _groups) {
    if (_groups.hasOwnProperty(groupKey)) {
      groups.push(_groups[groupKey]);
    }
  }
  return groups;
};

GroupStore.single = function() {
  return _groups;
};

module.exports = GroupStore;
