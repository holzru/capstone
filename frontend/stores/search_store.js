const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const SearchStore = new Store(Dispatcher);

let searchObj = {};

SearchStore.__onDispatch = function(action) {
  switch(action.actionType) {
    case "ALL":
      resetStore(action.searchObj);
      break;
  }
};

const resetStore = function(searchObject) {
  searchObj = {};
  searchObj = searchObject;
  SearchStore.__emitChange();
};

SearchStore.results = function() {
  return (searchObj);
};


module.exports = SearchStore;
