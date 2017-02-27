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
        {this.props.text}
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
    var hash = this.props.hash;
    var url = `https://s.gravatar.com/avatar/${hash}`;

    //https://s.gravatar.com/avatar/5ab1672865368e1c44631db6941719c0?s=80
    return (
      <img src={url}
        className="avatar"
        alt="avatar" />
    );
  }
});

var Tweet = React.createClass({
  render: function(){
    return (
      <div className="tweet">
        <Avatar hash={this.props.tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={this.props.tweet.author}/>
          <Time time={this.props.tweet.timestamp}/>
          <Message text={this.props.tweet.message}/>
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

var testTweet = {
  message: "Something about cats.",
  gravatar: "5ab1672865368e1c44631db6941719c0?s=80",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
