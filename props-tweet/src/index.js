import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Time = React.createClass({
  render: function(){
    return(
      <span className="time">3h ago</span>
    );
  }
});

var ReplyButton = React.createClass({
  render: function(){
    return (
      <i className="fa fa-reply reply-button"/>
    );
  }
});

var RetweetButton = React.createClass({
  render: function(){
    return (
      <i className="fa fa-retweet"/>
    );
  }
});

var LikeButton = React.createClass({
  render: function(){
    return (
      <i className="fa fa-heart like-button"/>
    );
  }
});

var MoreOptionsButton = React.createClass({
  render: function(){
    return (
      <i className="fa fa-ellipsis-h more-options-button"/>
    );
  }
});


var Message = React.createClass({
  render: function(){
    return(
      <div className="message">
        This is less than 140 characters.
      </div>
    );
  }
});

var NameWithHandle =React.createClass({
  render: function(){
    return (
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
      </span>
    );
  }
});

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
        <div className="content">
          <NameWithHandle/><Time/>
          <Message/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
    );
  }
});



ReactDOM.render(<Tweet/>, document.querySelector('#root'));
