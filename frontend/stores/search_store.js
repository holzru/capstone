const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');

const SearchStore = new Store(Dispatcher);

let searchObj = {};
let loadingState = false;

SearchStore.__onDispatch = function(action) {
  switch(action.actionType) {
    case "ALL":
      resetStore(action.searchObj);
      break;
    case "Animation":
      triggerAnimation();
      break;
  }
};

const resetStore = function(searchObject) {
  searchObj = {};
  searchObj = searchObject;
  loadingState = false;
  SearchStore.__emitChange();
};

const triggerAnimation = function() {
  loadingState = true;
  SearchStore.__emitChange();
};

SearchStore.loading = function () {
  return loadingState;
};


SearchStore.results = function() {
  return (searchObj);
};


module.exports = SearchStore;
