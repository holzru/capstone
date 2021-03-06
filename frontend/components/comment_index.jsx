const React = require('react');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');
const Link = require('react-router').Link;

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
        <div className="comment-container" key={commentObj.comment.id}>
          <li className="comment-item">
          <Link to={`users/${commentObj.author.id}`}><img id="user-event-pic" src={commentObj.author.pic_url}/></Link>
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
    return(
      <div>
        <h4 className="comment-board-title">Comments</h4>
        <div className="comment-board">
          {this.comment_render()}
          <form className="new-comment-form">
            <input type="text" placeholder="Comment" className="comment-input" onChange={this.handleInput} value={this.state.body}/>
            <button onClick={this._submitComment} className="btn-success">Create Comment</button>
          </form>
      </div>
    </div>);
  }
});
