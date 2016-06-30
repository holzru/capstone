const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const GroupStore = new Store(Dispatcher);

let _groups = {};

GroupStore.__onDispatch = function(action) {
  switch (action.actionType) {
    case "ALL":
      resetGroups(action.groups);
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
  return _groups[id];
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


module.exports = GroupStore;
