import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
	this.isOpen = false;
    this.state = {
      count: 0,
    }
  }
  increament = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decreament = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  render() {
    return (
        <div className="app">
          <label onClick="this.isOpened=true;">Sushi</label>
          <button onClick={this.increament} className="counter">
            +
          </button>
          <button onClick={this.decreament} className="counter">
            -
          </button>
          <h2>{this.state.count}</h2>
        </div>
    )
  }
}

export default App
