const React = require('react');
const GroupIndex = require('./group_index');

const Splash = React.createClass({
  render() {

      $('.tooltip').remove();
    return(
      <div id="splash-page">
        <div className="splash-pic-container">
        </div>
        <GroupIndex/>
      </div>
    );
  }
});

module.exports = Splash;
