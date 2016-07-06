const CommentUtil = require('../util/comment_util');
const EventActions = require('./event_actions');
const Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  createComment(data) {
    CommentUtil.createComment(data, EventActions.getEvent.bind(EventActions));
  },

  deleteComment(id) {
    CommentUtil.deleteComment(id, EventActions.getEvent.bind(EventActions));
  }
};
