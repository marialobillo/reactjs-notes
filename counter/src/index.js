import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var CountingParent = React.createClass({
  getInitialState: function(){
    return {
      actionCount: 0
    };
  },
  handleAction: function(action){
    console.log('Child says', action);
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  },
  resetAction: function(action){
    console.log('Child says zero!!', action);
    this.setState({
      actionCount: 0
    });
  },
  render: function(){
    return (
      <div>
        <Child onAction={this.handleAction} onReset={this.resetAction}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
});

var Child = React.createClass({
  alertParent: function(){
    this.props.onAction('button was clicked');
  },
  resetParent: function(){
    this.props.onReset('resert the counter');
  },
  render: function(){
    return (
      <div>
      <button onClick={this.alertParent}>Click Me</button>
      <button onClick={this.resetParent}>Reset!</button>
    </div>
    );
  }
});

var Page = React.createClass({
  render: function(){
    return (
      <div>
        <CountingParent />
        <CountingParent />
        <CountingParent />
      </div>
    );
  }
});

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
