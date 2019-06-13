import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css'

class App extends Component {
  state = {
    robots: robots,
    searchField: ''
  }
  searchChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render(){
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox 
          search={this.searchChange}
        />
        <CardList 
          robots={filterRobots}
        />
      </div>
    );
  }
  
}

export default App;
