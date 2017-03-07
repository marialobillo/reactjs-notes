import React, {Component} from 'react';

class Nav extends Component {
  render(){
    return (
      <nav className="App-nav">
        <ul>
          <li className={`App-nav-item ${selectedTab === 0 && 'selected'}`}>
            <a onClick={this.selectTab.bind(this, 0)}>Items</a>
          </li>
          <li className={`App-nav-item ${selectedTab === 1 && 'selected'}`}>
            <a onClick={this.selectTab.bind(this, 1)}>Cart</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
