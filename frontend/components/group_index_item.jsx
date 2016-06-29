const React = require('react');

module.exports = React.createClass({
  render() {
    let group = this.props.group;
    return (<img className="group-index-item" src={group.pic_url}/>)
  }
});
