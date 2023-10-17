import React, { Component } from "react";

import Cardlist from './cardlist';
import { robots } from './robot';
import Searchbox from "./Searchbox";


class App extends Component {
 
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
    console.log('constructor');
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => {this.setState({robots: users})})
    console.log('did mount');
  }

  schange = (e) => {

    this.setState({searchfield: e.target.value})

  }
  
  render() {
    const filter_search = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      
    })
    console.log('render');

  return (
      <div className="container">
        <h1 className="text-center text-uppercase">Robot App</h1>
        <Searchbox schange = {this.schange}/>
        <Cardlist robots={filter_search} />
      </div>
    )
}
}

export default App;