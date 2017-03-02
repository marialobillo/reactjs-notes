import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var CreditCard = React.createClass({
  render: function(){
    return (
      <div className="creditcard">
        <div className="bankname">
          {this.props.card.BankName}
        </div>
        <div className="numbercard">
          {this.props.card.NumberCard}
        </div>
        <div className="secretnumber">
          {this.props.card.SecretNumber}
        </div>
        <div className="valid">
            VALID <br/> THRU
        </div>
        <div className="validdate">
          {this.props.card.ValidDate}
        </div>
        <div className="cardholder">
          {this.props.card.HolderName}
        </div>
      </div>

    );
  }
});

var CardInfo = {
  BankName: "Big Bank, Inc.",
  NumberCard: "1234 5678 8765 4321",
  SecretNumber: "1234",
  ValidDate: "08/19",
  HolderName: "CARDHOLDER NAME"
};



ReactDOM.render(<CreditCard card={CardInfo}/>, document.querySelector('#root'));
