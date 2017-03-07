import React, { Component } from 'react';
import './App.css';

class App extends Component {
  renderContent(){
    return (
      <span>Empty</span>
    );
  }

  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li className="App-nav-item"><a>Items</a></li>
            <li className="App-nav-item"><a>Cart</a></li>
          </ul>
        </nav>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
