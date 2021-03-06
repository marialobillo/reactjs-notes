import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  selectTab = (index) => {
    this.setState({selectedTab: index});
  }

  renderContent() {
    switch(this.state.selectedTab){
      default:
      case 0: return <ItemPage items={items}/>
      case 1: return <span>Cart</span>;
    }
  }

  render(){
    let {selectedTab} = this.state;
    return (
      <div className="App">
        <Nav selectedTab={selectedTab} onTabChange={this.selectTab}/>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
