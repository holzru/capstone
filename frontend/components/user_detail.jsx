const React = require('react');
const Link = require('react-router').Link;
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const ReactTooltip = require("react-tooltip");


module.exports = React.createClass({
  getInitialState() {
    return ({user: {}, user_groups: []});
  },

  componentDidMount() {
    this.userStoreListener = UserStore.addListener(this._handleChange);
    UserActions.fetchUser(this.props.params.user_id);
  },

  componentWillUnmount() {
    this.userStoreListener.remove();
  },

  _handleChange() {
    let userObj = UserStore.current();
    this.setState({user: userObj.user, user_groups: userObj.user_groups});
  },

  render_rows(rows) {
    return (rows.map((row) => this.render_row(row)));
  },

  _groupTip(group) {
    return (`Name: ${group.name} <br /> Description: ${group.description}`);
  },

  render_row(row) {
    let rowContents = row.map((group) => {
      return (
      <div key={group.id} group={group} data-tip={this._groupTip(group)} data-for="item" className="group-index-item-container">
        <Link to={`/groups/${group.id}`} group={group}>
          <li className="group-index-item" group={group} style={{backgroundImage: `url(${group.pic_url})`}}></li>
        </Link>
      </div>);
    });

    return (<ul className="group-rows">{rowContents}<ReactTooltip multiline={true} place="top" type="dark" effect="float" id="item"/></ul>);
  },


  render() {
    let rows = [];
    let group_copy = this.state.user_groups.slice();
    while (group_copy.length > 0) {
      rows.push(group_copy.splice(0, 4));
    }
    let user = this.state.user;
    return (
      <div className="detail-pane container-fluid">
        <div className="detail-header">
          <div className="detail-banner container-fluid">{user.username}</div>
        </div>
        <div className="column-container">
          <div className="detail-left">
            <div className="user-info">
              <div>
              <div className="user-loc">Location Fill In</div>
            </div>
          </div>
            <div className="user-interests">
              <h3>Interests</h3>
            </div>
          </div>
          <div className="detail-main">
            <h3>{user.username} Groups</h3><br/><br/>
            {this.render_rows(rows)}
          </div>
          <div className="detail-right">
            <img id="user-detail-pic" src={user.pic_url}/>
            <h3>Description</h3>
            <p className="user-description">{user.description}</p>
          </div>
        </div>
      </div>
    );
  }
});
