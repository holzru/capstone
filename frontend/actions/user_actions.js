const UserUtil = require('../util/user_util');
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  fetchUser (id) {
    UserUtil.fetchUser(id ,this.recieveUser);
  },

  recieveUser(user) {
    Dispatcher.dispatch({
      actionType: "User",
      user: user,
    });
  }
};
