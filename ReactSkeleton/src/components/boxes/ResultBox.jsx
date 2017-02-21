var React = require('react');
var ResultItem = require('../items/ResultItem.jsx');

var ResultBox = React.createClass({
  render: function(){
    return (
      <div className="row">
        <ul>
          {this.props.items.map(function(currentValue, index, array){
            return <ResultItem name={currentValue} key={index}/>;
          })}
      </ul>
      </div>
    );
  }
});

module.exports = ResultBox;
