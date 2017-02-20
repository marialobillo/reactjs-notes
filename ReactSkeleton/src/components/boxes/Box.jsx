var React = require('react');
var InputBox = require('../boxes/InputBox.jsx');
var ResultBox = require('../boxes/ResultBox.jsx');

var Box = React.createClass({
  render: function(){
    return (
      <div className="container">
          <InputBox />
          <ResultBox />
      </div>
    );
  }
});

module.exports = Box;
