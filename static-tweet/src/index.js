import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Tweet = React.createClass({
  render: function(){
    return (
      <div className="tweet">
        Tweet
      </div>
    );
  }
});

ReactDOM.render(<Tweet/>, document.querySelector('#root'));
