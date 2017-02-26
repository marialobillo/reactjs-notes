import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>Hello World! xoxoxoxo</div>
    );
  }
});

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
