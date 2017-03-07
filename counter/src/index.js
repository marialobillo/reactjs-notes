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
  render: function(){
    return (
      <div>
        <Child onAction={this.handleAction}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
});

var Child = React.createClass({
  alertParent: function(){
    this.props.onAction('button was clicked');
  },
  render: function(){
    return (
      <button onClick={this.alertParent}>Click Me</button>
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
