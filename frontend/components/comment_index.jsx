const React = require('react');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');

module.exports = React.createClass({
  getInitialState() {
    return ({body: ""});
  },

  deleteButton(comment_id, authorId) {
    if (SessionStore.currentUser().id === authorId) {
      return (<button onClick={this.deleteComment.bind(this, comment_id)} className="btn-default success">Delete</button>);
    }
  },

  deleteComment(comment_id, e) {
    e.preventDefault();
    CommentActions.deleteComment(comment_id);
  },

  comment_render() {
    let comments = this.props.comments.map((commentObj) => {
      return(
        <div className="comment-container">
          <li className="comment-item">
          <img id="user-event-pic" src={commentObj.author.pic_url}/>
          <span className="comment-body">{commentObj.comment.body}</span>
          { this.deleteButton(commentObj.comment.id, commentObj.author.id) }
          </li>
        </div>);
    });
    return (comments);
  },

  handleInput(e) {
    this.setState({body: e.currentTarget.value});
  },

  _submitComment() {
    if (SessionStore.isUserLoggedIn()) {
      let data = {body: this.state.body, event_id: this.props.event_id};
      CommentActions.createComment(data);
      this.setState({body: ""});
    } else {
      $("#login-modal").modal("show");
    }
  },

  render() {
    if (this.props.comments.length === 0) {
      return (<div>No comments so far</div>);
    }
    return(
      <h4>Comments<div className="comment-board">
        {this.comment_render()}
        <form className="new-comment-form">
          <input type="text" placeholder="Comment" className="comment-input" onChange={this.handleInput} value={this.state.body}/>
          <button onClick={this._submitComment} className="btn-success">Create Comment</button>
        </form>
      </div></h4>);
  }
});
