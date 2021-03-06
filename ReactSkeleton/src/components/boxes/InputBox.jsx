var React = require('react');
var InputItem = require('../items/InputItem.jsx');
var ResultBox = require('./ResultBox.jsx');

var InputBox = React.createClass({
  getInitialState: function(){
    return {
      button_title: "Add",
      output: '',
      items: []
    };
  },
  onClick: function(event){

    if(this.refs.input_task.getValue() == ""){
      this.setState({output: "Please write a task."})
    } else{
      this.setState({
        output: "OK! Great!",
        items: this.state.items.concat(this.refs.input_task.getValue())
      });
    }
  },
  render: function(){
    return (
      <div className="row">
        <InputItem ref="input_task"/>
        <button id="myId"
          type="button"
          onClick={this.onClick}>{this.state.button_title}</button>
          <br/>
          <label>{this.state.output}</label>
          <ResultBox name={this.state.items} />
      </div>
    );
  }
});

module.exports = InputBox;
