import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Greeting = React.createClass({
  render: function(){
    var username = false;
    return (
      <div>Hello {username}</div>
    );
  }
});

var Book = React.createClass({
  render: function(){
    return (
      <div className="book">
        <div className="title">
          The Title

        </div>
        <div className="author">
          The Author
        </div>
        <ul className="stats">
          <li className="rating">
            5 stars
          </li>
          <li className="isbn">
            12-345678-910
          </li>
        </ul>
        <div className="title">
          <Greeting/>
        </div>
      </div>

    );
  }
});

ReactDOM.render(<Book/>, document.querySelector('#root'));
