"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');

const ErrorActions = {
  setErrors(form, errors) {
    AppDispatcher.dispatch({
      actionType: "SET_ERRORS",
      form: form,
      errors: errors
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: "CLEAR_ERRORS",
    });
  }
};

module.exports = ErrorActions;
