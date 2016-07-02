const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const GroupStore = new Store(Dispatcher);

let _groups = {};

GroupStore.__onDispatch = function(action) {
  switch (action.actionType) {
    case "ALL":
      resetGroups(action.groups);
      break;
    case "SINGLE":
      _groups = action.group;
      break;
  }
  this.__emitChange();
};

const resetGroups = function(groups) {
  groups.forEach((group) => {
    _groups[group.id] = group;
  });
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
