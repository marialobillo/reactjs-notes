var React = require('react');

var InputItem = React.createClass({
  getInitialState: function(){
    return {
      value : ''
    };
  },
  onChange: function(){
    this.setState({
      value: event.target.value
    });
  },
  render: function(){
    return (
      <input type="text" onChange={this.onChange} value={this.state.value} />
    );
  }
});

module.exports = InputItem;
