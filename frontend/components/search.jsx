const React = require('react');
const GroupIndex = require('./group_index');

const Splash = React.createClass({
  render() {
    return(
      <div id="splash-page">
        <div className="splash-pic-container">
          <img id="splash-pic" src="http://res.cloudinary.com/dywbzmakl/image/upload/v1467236626/slider-1_tgihov.jpg"/>
        </div>
        <GroupIndex/>
      </div>
    );
  }
});

module.exports = Splash;
