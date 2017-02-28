import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Address = React.createClass({
  render: function(){
    return (
      <div className="envelop">
        <div className="address">
          <div className="name">
            FirstName LastName
          </div>
          <div className="street">
            The Street
          </div>

          <div className="city">
            The city
          </div>
        </div>
      </div>

    );
  }
});

ReactDOM.render(<Address/>, document.querySelector('#root'));
