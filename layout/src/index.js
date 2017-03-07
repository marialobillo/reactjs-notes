import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var Layout = React.createClass({
  getInitialState: function(){
    return {
      isSidebarHidden: false
    };
  },
  toggleSidebar: function(){
    this.setState({
      isSidebarHidden: !this.state.isSidebarHidden
    });
  },
  render: function(){
    return (
      <div>
        <Sidebar
          hidden={this.state.isSidebarHidden}
          onToggleHide={this.toggleSidebar} />
        <Content />
      </div>
    );
  }
});
ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
