import React from 'react';
import moment from 'moment';

var Time = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired
  },
  computeTimeString: function(){
    return moment(this.props.time).fromNow();
  },
  render: function(){
    return (
      <span className="time">{this.computeTimeString()}</span>
    );
  }
});

export default Time;
