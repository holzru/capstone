const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  _creatorLink(e) {
    e.preventDefault();
    hashHistory.push("/users/1");
  },

  render (){
    return (<nav className="navbar navbar-default navbar-fixed-bottom" id="footer">
              <div className="container-fluid">
                <div className="navbar-footer" id="footer-links">
                  <ul className="nav navbar-nav">
                    <li><a href="#" onClick={this._creatorLink} id="footer_link">Creator</a></li>
                    <li><a href="https://www.linkedin.com/in/russellholz" id="footer_link">Creator LinkedIn</a></li>
                    <li><a href="https://github.com/holzru" id="footer_link">Creator GitHub</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="http://www.meetup.com/" id="footer_link">MeetUp</a></li>
                  </ul>
              </div>
            </div>
          </nav>);
          }
});
