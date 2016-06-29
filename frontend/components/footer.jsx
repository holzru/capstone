const React = require('react');

module.exports = React.createClass({
  render (){
    return (<nav className="navbar navbar-default navbar-fixed-bottom" id="footer">
              <div className="container-fluid">
                <div className="navbar-footer" id="footer-links">
                  <ul className="nav navbar-nav">
                    <li><a href="#" id="footer_link">Action</a></li>
                    <li><a href="#" id="footer_link">Another action</a></li>
                    <li><a href="#" id="footer_link">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" id="footer_link">Separated link</a></li>
                  </ul>
              </div>
            </div>
          </nav>);
          }
});
