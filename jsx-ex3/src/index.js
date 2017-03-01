import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var ReturnAddress = React.createClass({
  render: function(){
    return (
      <div className="returnaddress">
        <div className="name">FirstName FullName</div>
        <div className="street">Street and Address</div>
        <div className="city">City</div>
      </div>
    );
  }
});

var Stamp = React.createClass({
  render: function(){
    var url = "http://www.sellosmundo.com/sellos/sello_83864.jpg";
    return (
      <img src={url} className="stamp"/>
    );
  }
});

var Address = React.createClass({
  render: function(){
    return (
      <div className="envelope">
        <ReturnAddress/>
        <Stamp/>
        <div className="address">
          <div className="name">
            {this.props.address.fullname}
          </div>
          <div className="street">
            {this.props.address.address}
          </div>

          <div className="city">
            {this.props.address.city}
          </div>
        </div>
      </div>

    );
  }
});

var DeliveryAddress = {
  fullname: "John Doe",
  address: "Main Street, 42",
  city: "New York"
};



ReactDOM.render(<Address address={DeliveryAddress}/>, document.querySelector('#root'));
