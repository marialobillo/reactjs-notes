import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Message = React.createClass({
  render: function(){
    return (
      <div className="message">
        {this.props.text}
      </div>
    );
  }
});

var Sender = React.createClass({
  render: function(){
    return (
      <div className="sender">
        {this.props.name}
      </div>
    );
  }
});

var Subject = React.createClass({
  render: function(){
    return (
      <div className="subject">
        {this.props.topic}
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Message text={this.props.info.message}/>
        <Sender name={this.props.info.sender}/>
        <Subject topic={this.props.info.subject}/>
      </div>
    );
  }
});

var MessageInfo = {
  sender: "Maria Lobillo",
  subject: "Next Monday",
  message: "Happiness is not something you postpone for the future; it is something you design for the present."
}



ReactDOM.render(<Inbox info={MessageInfo}/>, document.querySelector('#root'));
