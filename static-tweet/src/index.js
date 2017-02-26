import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Avatar = React.createClass({
  render: function(){
    return (
      <img src="http://www.gravatar.com/avatar/nothing"
        className="avatar"
        alt="avatar" />
    );
  }
});

var Tweet = React.createClass({
  render: function(){
    return (
      <div className="tweet">
        <Avatar/>
        Tweet
      </div>
    );
  }
});



ReactDOM.render(<Tweet/>, document.querySelector('#root'));
