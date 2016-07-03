"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {

  signUp(formData){
    SessionApiUtil.signUp(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logIn(formData){
    SessionApiUtil.logIn(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
  },

  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, complete);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: "LOGIN",
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: "LOGOUT"
    });
    hashHistory.push("/");
  }

};

module.exports = SessionActions;
