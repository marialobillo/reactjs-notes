import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Parent = React.createClass({
  handleAction: function(action){
    console.log('Child says', action);
  },
  render: function(){
    return (
      <Child onAction={this.handleAction}/>
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

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
