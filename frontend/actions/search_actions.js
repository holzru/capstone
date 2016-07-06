const SearchUtil = require('../util/search_util');
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  fetchSearch(query) {
    SearchUtil.fetchSearch(query, this.receiveSearch);
  },

  receiveSearch(searchObj) {
    Dispatcher.dispatch({
      actionType: "ALL",
      searchObj: searchObj
    });
  }
};
