var React = require('react');
var InputItem = require('../items/InputItem.jsx');

var InputBox = React.createClass({
  getInitialState: function(){
    return {
      button_title: "Add"
    };
  },
  onClick: function(event){
    console.log("Hi I'm the event");
  },
  render: function(){
    return (
      <div className="row">
        <InputItem />
        <button id="myId" type="button" onClick={this.onClick}>{this.state.button_title}</button>
      </div>
    );
  }
});

module.exports = InputBox;
