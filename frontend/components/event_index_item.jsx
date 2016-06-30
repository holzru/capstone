const React = require('react');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <h1>{this.props.event.name}</h1>
        <p> {this.props.event.description}</p>
      </div>
    );
  }
});
