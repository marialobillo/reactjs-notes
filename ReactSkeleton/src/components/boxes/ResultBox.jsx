var React = require('react');
var ResultItem = require('../items/ResultItem.jsx');

var ResultBox = React.createClass({
  render: function(){
    return (
      <div className="row">
        {this.props.items.map(function(currentValue, index, array){
          return <label>{currentValue}</label>;
        })}
      </div>
    );
  }
});

module.exports = ResultBox;
