var React = require('react');
var InputItem = require('../items/InputItem.jsx');

var InputBox = React.createClass({
  render: function(){
    return (
      <div className="row">
        <InputItem />
      </div>
    );
  }
});

module.exports = InputBox;
