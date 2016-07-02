const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const UserStore = new Store(Dispatcher);

let _user = {};

UserStore.__onDispatch = function(action) {
  switch (action.actionType) {
    case "User":
      resetUser(action.user);
      break;
  }
  this.__emitChange();
};

const resetUser = function(user) {
  _user = user;
};

UserStore.current = function() {
  return _user;
};


module.exports = UserStore;
