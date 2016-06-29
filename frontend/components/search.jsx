const React = require('react');
const GroupIndex = require('./group_index');

const Splash = React.createClass({
  render() {
    return(
      <div className="splash-page">
        <div className="splash-pic-container">
          <img className="splash-pic" src="file:///Users/Russell/Desktop/slider-1.jpg"/>
        </div>
        <GroupIndex/>
      </div>
    );
  }
});

module.exports = Splash;
