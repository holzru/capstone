const React = require('react');
const SessionStore = require('../stores/session_store');

module.exports = React.createClass({
  comment_render() {
    let comments = this.props.comments.map((commentObj) => {
      return(
        <div className="comment-container">
          <img id="user-event-pic" src={commentObj.author.pic_url}/>
          <li className="comment-body">{commentObj.comment.body}</li>
        </div>);
    });
  },

  render() {
    if (this.props.comments.length === 0) {
      return (<div>No comments so far</div>);
    }
    return(
      <h4>Comments<div className="comment-board">
        {this.comment_render()}
      </div></h4>);
  }
});
