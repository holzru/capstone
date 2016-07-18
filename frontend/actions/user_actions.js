const UserUtil = require('../util/user_util');
const SessionActions = require('./session_actions');
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
  },

  updateUser(user) {
    UserUtil.updateUser(user, function (newUser) {
      debugger;
      this.recieveUser(newUser);
      SessionActions.receiveCurrentUser(newUser.user);
    }.bind(this));
  }
};
